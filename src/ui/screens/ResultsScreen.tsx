/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Results Screen
 */

import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  XCircle, 
  Share2, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Sparkles,
  Zap
} from 'lucide-react';
import { Puzzle, PuzzleResult } from '../../domain/models';
import { translations, Language } from '../../core/i18n';
import { JdhMonogram } from '../components/JdhMonogram';

interface ResultsScreenProps {
  result: PuzzleResult;
  puzzle: Puzzle;
  lang: Language;
  onNext: () => void;
  onRetry: () => void;
  onOpenShareModal: () => void;
  onExit: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  result,
  puzzle,
  lang,
  onNext,
  onRetry,
  onOpenShareModal,
  onExit,
}) => {
  const t = translations[lang];

  // Pick an encouraging quote deterministically
  const quote = t.quotes[result.score % t.quotes.length];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 select-none pb-safe">
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8 flex flex-col justify-between items-center text-center">
        {/* Top Header & Result Status */}
        <div className="w-full space-y-4">
          <div className="flex justify-center">
            {result.isCorrect ? (
              <div className="p-4 rounded-3xl bg-emerald-950/70 border border-emerald-500/40 shadow-xl flex items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
              </div>
            ) : (
              <div className="p-4 rounded-3xl bg-rose-950/70 border border-rose-500/40 shadow-xl flex items-center justify-center">
                <XCircle className="w-16 h-16 text-rose-400" />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              {result.isCorrect ? t.correctTitle : t.wrongTitle}
            </h1>
            <p className="text-xs text-cyan-300 font-mono mt-1">
              {puzzle.id.toUpperCase()} · {t[`diff_${puzzle.difficulty}`]}
            </p>
          </div>

          {/* Star Rating Display */}
          {result.isCorrect && (
            <div className="flex justify-center items-center gap-3 py-2">
              {[1, 2, 3].map((starIndex) => (
                <div
                  key={starIndex}
                  className={`p-2 rounded-2xl border transition-all ${
                    starIndex <= result.stars
                      ? 'bg-amber-950/60 border-amber-400/60 text-amber-400 scale-110 shadow-lg shadow-amber-900/30'
                      : 'bg-slate-800/40 border-slate-700/40 text-slate-600'
                  }`}
                  aria-label={`Star ${starIndex} of 3 ${starIndex <= result.stars ? 'earned' : 'not earned'}`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      starIndex <= result.stars ? 'fill-amber-400 text-amber-400' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Score & XP Cards Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto pt-2">
            <div className="p-3.5 rounded-2xl bg-[#0D223F] border border-cyan-800/40 text-center">
              <span className="text-xs text-slate-400 block mb-1">{t.scoreEarned}</span>
              <span className="text-2xl font-mono font-bold text-cyan-300">{result.score}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#0D223F] border border-cyan-800/40 text-center">
              <span className="text-xs text-slate-400 block mb-1">{t.xpGained}</span>
              <span className="text-2xl font-mono font-bold text-amber-400">+{result.xpEarned} XP</span>
            </div>
          </div>

          {/* Deductions / Details Breakdown */}
          <div className="w-full max-w-sm mx-auto p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1.5 text-left">
            <div className="flex justify-between">
              <span>{t.timeTaken}:</span>
              <span className="font-mono text-white">{result.timeSpent}s</span>
            </div>
            <div className="flex justify-between">
              <span>{t.hintsLeft} Used:</span>
              <span className="font-mono text-white">{result.hintsUsed} / 2</span>
            </div>
            <div className="flex justify-between">
              <span>Retries:</span>
              <span className="font-mono text-white">{result.retries}</span>
            </div>
          </div>

          {/* Full Logical Explanation Card */}
          <div className="w-full max-w-sm mx-auto p-4 rounded-2xl bg-[#0B1E38] border border-cyan-700/40 text-left space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>{t.explanationTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {puzzle.explanation[lang]}
            </p>
          </div>

          {/* Encouraging Quote (Never shaming or guilt-based) */}
          <div className="w-full max-w-sm mx-auto py-2">
            <p className="text-xs text-slate-400 italic">
              “{quote}”
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="w-full max-w-sm space-y-2.5 pt-6">
          {result.isCorrect ? (
            <button
              onClick={onNext}
              className="w-full min-h-[52px] py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-cyan-950/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>{t.nextPuzzle}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onRetry}
              className="w-full min-h-[52px] py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-base shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{t.tryAgain}</span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenShareModal}
              className="min-h-[48px] py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>{t.shareScore}</span>
            </button>

            <button
              onClick={onExit}
              className="min-h-[48px] py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>{t.backToCategories}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
