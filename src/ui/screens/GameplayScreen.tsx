/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Gameplay Screen
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ArrowLeft, 
  Lightbulb, 
  RotateCcw, 
  FastForward, 
  Pause, 
  Play, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  HelpCircle,
  Flame,
  Award
} from 'lucide-react';
import { GameMode, Puzzle, PuzzleOption, PuzzleResult, PuzzleSessionState } from '../../domain/models';
import { AnswerValidator, HintProvider, ScoreCalculator } from '../../domain/engine';
import { sounds } from '../../audio/SoundEffects';
import { translations, Language, categoryLabels } from '../../core/i18n';
import { PuzzleCanvas } from '../components/PuzzleCanvas';

import { StorageService } from '../../data/storage';

interface GameplayScreenProps {
  puzzle: Puzzle;
  mode: GameMode;
  lang: Language;
  onFinishPuzzle: (result: PuzzleResult) => void;
  onExit: () => void;
  onSkip: () => void;
  currentStreak: number;
  initialSession?: PuzzleSessionState | null;
}

export const GameplayScreen: React.FC<GameplayScreenProps> = ({
  puzzle,
  mode,
  lang,
  onFinishPuzzle,
  onExit,
  onSkip,
  currentStreak,
  initialSession,
}) => {
  const t = translations[lang];

  // In-progress state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
    initialSession?.puzzleId === puzzle.id ? initialSession.selectedOptionId : null
  );
  const [history, setHistory] = useState<string[]>(
    initialSession?.puzzleId === puzzle.id ? initialSession.history : []
  );
  const [hintsRevealed, setHintsRevealed] = useState<number>(
    initialSession?.puzzleId === puzzle.id ? initialSession.hintsRevealed : 0
  );
  const [hintModalOpen, setHintModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [retries, setRetries] = useState(
    initialSession?.puzzleId === puzzle.id ? initialSession.retries : 0
  );

  const initialTime = mode === 'timed' ? 60 : (puzzle.timeLimit || 60);
  const [timeRemaining, setTimeRemaining] = useState<number>(() => {
    if (initialSession?.puzzleId === puzzle.id && typeof initialSession.timeRemaining === 'number') {
      return Math.max(5, initialSession.timeRemaining);
    }
    return initialTime;
  });
  const [timeSpent, setTimeSpent] = useState<number>(
    initialSession?.puzzleId === puzzle.id ? initialSession.timeSpent : 0
  );

  // Immediate selection feedback
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const submittedRef = useRef(false);

  // Keep a stable ref of current session data to avoid render-loop triggers
  const sessionRef = useRef<PuzzleSessionState>({
    puzzleId: puzzle.id,
    category: puzzle.category,
    difficulty: puzzle.difficulty,
    selectedOptionId,
    history,
    hintsRevealed,
    timeRemaining,
    timeSpent,
    mode,
    isPaused,
    isAnswered: false,
    isCorrect: null,
    retries,
  });

  useEffect(() => {
    submittedRef.current = submitted;
  }, [submitted]);

  // Synchronize ref on value changes
  useEffect(() => {
    sessionRef.current = {
      puzzleId: puzzle.id,
      category: puzzle.category,
      difficulty: puzzle.difficulty,
      selectedOptionId,
      history,
      hintsRevealed,
      timeRemaining,
      timeSpent,
      mode,
      isPaused,
      isAnswered: submitted,
      isCorrect,
      retries,
    };
  }, [
    puzzle.id,
    puzzle.category,
    puzzle.difficulty,
    selectedOptionId,
    history,
    hintsRevealed,
    timeRemaining,
    timeSpent,
    mode,
    isPaused,
    submitted,
    isCorrect,
    retries,
  ]);

  // Persist session only to localStorage on unmount if puzzle is unfinished
  useEffect(() => {
    return () => {
      if (!submittedRef.current) {
        StorageService.saveSession(sessionRef.current);
      }
    };
  }, []);

  const handleTimeExpired = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitted(true);
    sounds.playWrong();
    sounds.triggerHaptic([50, 100, 50]);
    StorageService.saveSession(null);
    const result = ScoreCalculator.calculate(puzzle, false, timeSpent, hintsRevealed, retries, mode);
    onFinishPuzzle(result);
  }, [puzzle, timeSpent, hintsRevealed, retries, mode, onFinishPuzzle]);

  // Game timer loop
  useEffect(() => {
    if (mode === 'zen' || isPaused || submitted) return;

    if (timeRemaining <= 0) {
      handleTimeExpired();
      return;
    }

    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isPaused, submitted, timeRemaining, handleTimeExpired]);

  const handleSelectOption = (optionId: string) => {
    if (submitted) return;
    sounds.playTap();
    sounds.triggerHaptic(20);
    setHistory((prev) => [...prev, optionId]);
    setSelectedOptionId(optionId);
  };

  const handleUndo = () => {
    if (history.length <= 1) {
      setHistory([]);
      setSelectedOptionId(null);
      return;
    }
    sounds.playTap();
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    setSelectedOptionId(newHistory[newHistory.length - 1]);
  };

  const handleRevealNextHint = () => {
    if (hintsRevealed < 2) {
      sounds.playHint();
      sounds.triggerHaptic(30);
      setHintsRevealed((prev) => prev + 1);
    }
    setHintModalOpen(true);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId || submitted) return;

    const correct = AnswerValidator.validate(puzzle, selectedOptionId);
    submittedRef.current = true;
    setSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      sounds.playCorrect();
      sounds.triggerHaptic([30, 60, 30]);
    } else {
      sounds.playWrong();
      sounds.triggerHaptic(60);
      setRetries((prev) => prev + 1);
    }

    // Brief transition delay before showing full result screen
    setTimeout(() => {
      StorageService.saveSession(null);
      const result = ScoreCalculator.calculate(
        puzzle,
        correct,
        timeSpent,
        hintsRevealed,
        retries,
        mode
      );
      onFinishPuzzle(result);
    }, 1100);
  };

  const hint1 = HintProvider.getHint(puzzle, 1);
  const hint2 = HintProvider.getHint(puzzle, 2);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 select-none pb-safe">
      {/* Top App Bar (Material 3 style) */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0B1D36]/90 backdrop-blur-md border-b border-cyan-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-95 transition-all"
            aria-label="Exit current puzzle to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-sm font-bold text-white truncate max-w-[150px] sm:max-w-xs">
              {categoryLabels[puzzle.category][lang]}
            </h2>
            <div className="flex items-center gap-2 text-[11px] text-cyan-400">
              <span>{t[`diff_${puzzle.difficulty}`]}</span>
              <span>·</span>
              <span className="font-mono">{puzzle.id.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Center / Right Meters */}
        <div className="flex items-center gap-3">
          {/* Daily streak indicator */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-amber-400">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span className="font-mono">{currentStreak}</span>
          </div>

          {/* Timer Display */}
          {mode !== 'zen' ? (
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${
                timeRemaining <= 10
                  ? 'bg-rose-950/60 border-rose-500 text-rose-400 animate-pulse'
                  : 'bg-slate-800/80 border-slate-700/60 text-cyan-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{timeRemaining}s</span>
            </div>
          ) : (
            <div className="px-2.5 py-1 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-medium">
              Zen
            </div>
          )}

          {/* Pause Button */}
          <button
            onClick={() => setIsPaused(true)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-95"
            aria-label="Pause game"
          >
            <Pause className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Gameplay Canvas & Content */}
      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-4 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Instructions Kicker */}
          <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
            {puzzle.instructions[lang]}
          </div>

          {/* Question Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0D223F] border border-cyan-800/40 shadow-lg">
            <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
              {puzzle.question[lang]}
            </p>
          </div>

          {/* 2D Canvas Graphics */}
          <div className="my-2 flex justify-center">
            <PuzzleCanvas spec={puzzle.visualSpec} width={340} height={170} theme="dark" />
          </div>

          {/* Multiple Choice Options Grid (Min 48dp touch targets) */}
          <div className="space-y-2.5 pt-2" role="radiogroup" aria-label="Puzzle answer options">
            {puzzle.options.map((opt: PuzzleOption) => {
              const isSelected = selectedOptionId === opt.id;
              let optionStyles = 'bg-[#0D223F]/80 border-slate-700/80 text-slate-200 hover:border-cyan-500/50';

              if (isSelected) {
                optionStyles = 'bg-cyan-950/90 border-cyan-400 text-white ring-2 ring-cyan-500/40';
              }

              if (submitted && isSelected) {
                if (isCorrect) {
                  optionStyles = 'bg-emerald-950 border-emerald-400 text-emerald-100 ring-2 ring-emerald-500';
                } else {
                  optionStyles = 'bg-rose-950 border-rose-400 text-rose-100 ring-2 ring-rose-500';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={submitted}
                  className={`w-full min-h-[52px] px-4 py-3 rounded-2xl border text-left flex items-center justify-between font-medium text-sm sm:text-base transition-all active:scale-[0.99] ${optionStyles}`}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={opt.text ? opt.text[lang] : opt.id}
                >
                  <span className="flex-1 pr-2">
                    {opt.text ? opt.text[lang] : opt.id}
                  </span>

                  {/* Icon + text feedback (never color alone) */}
                  {submitted && isSelected && (
                    <span className="flex items-center gap-1.5 font-bold text-xs shrink-0">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span className="text-emerald-300">{lang === 'ur' ? 'درست' : 'Correct'}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-400" />
                          <span className="text-rose-300">{lang === 'ur' ? 'غلط' : 'Incorrect'}</span>
                        </>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Toolbar & Primary CTA Bar */}
        <div className="pt-6 space-y-3">
          {/* Auxiliary Action Row: Undo, Hint, Skip */}
          <div className="grid grid-cols-3 gap-2">
            {/* Undo */}
            <button
              onClick={handleUndo}
              disabled={history.length === 0 || submitted}
              className="min-h-[48px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 disabled:opacity-40 text-slate-300 text-xs font-semibold transition-all"
              aria-label="Undo previous selection"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>{t.undo}</span>
            </button>

            {/* Hint Drawer Trigger */}
            <button
              onClick={handleRevealNextHint}
              disabled={submitted}
              className={`min-h-[48px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                hintsRevealed > 0
                  ? 'bg-amber-950/60 border border-amber-500/40 text-amber-300'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300'
              }`}
              aria-label={`View progressive hints. ${hintsRevealed} of 2 hints used.`}
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>
                {t.hint} {hintsRevealed > 0 ? `(${hintsRevealed}/2)` : ''}
              </span>
            </button>

            {/* Skip (Explicitly non-punitive, does NOT break streak) */}
            <button
              onClick={() => {
                sounds.playTap();
                onSkip();
              }}
              disabled={submitted}
              className="min-h-[48px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 disabled:opacity-40 text-slate-300 text-xs font-semibold transition-all"
              aria-label="Skip to next puzzle without breaking streak"
            >
              <FastForward className="w-4 h-4 text-slate-400" />
              <span>{t.skip}</span>
            </button>
          </div>

          {/* Primary CTA: Confirm Answer */}
          <button
            onClick={handleConfirmAnswer}
            disabled={!selectedOptionId || submitted}
            className="w-full min-h-[52px] rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:pointer-events-none text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/30 active:scale-[0.98] transition-all"
            aria-label="Submit and confirm selected answer"
          >
            <span>{t.submitAnswer}</span>
          </button>
        </div>
      </main>

      {/* Hint Modal Drawer (2-level progressive hint) */}
      {hintModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#0D223F] border border-cyan-500/40 rounded-3xl p-6 shadow-2xl flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-amber-400">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">
                {lang === 'ur' ? 'رہنمائی اور اشارے' : 'Progressive Clues'}
              </h3>
            </div>

            <p className="text-xs text-slate-300 mb-4">{t.hintWarning}</p>

            <div className="space-y-3 mb-6">
              {/* Hint 1 */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <span className="text-xs font-bold text-cyan-300 block mb-1">
                  {t.hintLevel1}
                </span>
                <p className="text-sm text-slate-200">
                  {hint1 ? hint1[lang] : 'Consider analyzing the structural relationship between terms.'}
                </p>
              </div>

              {/* Hint 2 */}
              {hintsRevealed >= 2 ? (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/40 animate-fade-in">
                  <span className="text-xs font-bold text-amber-400 block mb-1">
                    {t.hintLevel2}
                  </span>
                  <p className="text-sm text-slate-200">
                    {hint2 ? hint2[lang] : 'Look closely at the parity or elimination rule.'}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => {
                    sounds.playHint();
                    setHintsRevealed(2);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl border border-dashed border-slate-600 hover:border-amber-400 text-xs font-semibold text-slate-400 hover:text-amber-300 transition-colors"
                >
                  {lang === 'ur' ? 'دوسرا اشارہ دیکھیں (-25% اسکور)' : 'Unlock 2nd Hint (-25% Score Penalty)'}
                </button>
              )}
            </div>

            <button
              onClick={() => setHintModalOpen(false)}
              className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all"
            >
              {lang === 'ur' ? 'کھیل پر واپس جائیں' : 'Return to Puzzle'}
            </button>
          </div>
        </div>
      )}

      {/* Pause Menu Modal */}
      {isPaused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-sm bg-[#0A192F] border border-cyan-500/40 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-white mb-2">{t.pause}</h3>
            <p className="text-xs text-slate-400 mb-6">{puzzle.instructions[lang]}</p>

            <div className="w-full space-y-3">
              <button
                onClick={() => setIsPaused(false)}
                className="w-full min-h-[48px] py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{t.resume}</span>
              </button>

              <button
                onClick={() => {
                  setIsPaused(false);
                  setTimeRemaining(initialTime);
                  setSelectedOptionId(null);
                  setHistory([]);
                  setHintsRevealed(0);
                }}
                className="w-full min-h-[48px] py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.restart}</span>
              </button>

              <button
                onClick={onExit}
                className="w-full min-h-[48px] py-3 rounded-xl bg-rose-950/40 border border-rose-900/60 text-rose-300 font-semibold text-sm hover:bg-rose-900/40 transition-colors"
              >
                <span>{t.quitToHome}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
