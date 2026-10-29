/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Daily Challenge Screen
 */

import React from 'react';
import { ArrowLeft, Flame, Shield, CheckCircle2, Play, Calendar, Sparkles } from 'lucide-react';
import { UserStats } from '../../domain/models';
import { translations, Language, categoryLabels } from '../../core/i18n';
import { StorageService } from '../../data/storage';

interface DailyChallengeScreenProps {
  stats: UserStats;
  lang: Language;
  onBack: () => void;
  onPlayDaily: () => void;
}

export const DailyChallengeScreen: React.FC<DailyChallengeScreenProps> = ({
  stats,
  lang,
  onBack,
  onPlayDaily,
}) => {
  const t = translations[lang];
  const todayStr = new Date().toISOString().slice(0, 10);
  const dailyPuzzle = StorageService.getDailyPuzzleForDate(todayStr);
  const isDoneToday = stats.dailyChallengesCompleted.includes(todayStr);

  // Generate 7-day activity strip
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(Date.now() - (6 - i) * 86400000);
    const dStr = d.toISOString().slice(0, 10);
    const isCompleted = stats.dailyChallengesCompleted.includes(dStr);
    const dayName = d.toLocaleDateString(lang === 'ur' ? 'ur-PK' : 'en-US', { weekday: 'narrow' });
    const isToday = dStr === todayStr;
    return { dStr, dayName, isCompleted, isToday };
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 pb-20 select-none">
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0B1D36]/90 backdrop-blur-md border-b border-cyan-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-95"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white">
            {t.dailyChallenge}
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-5 space-y-6">
        {/* Streak Hero Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0F284D] to-[#0A1A33] border border-cyan-500/40 shadow-xl text-center relative overflow-hidden">
          <div className="inline-flex p-3 rounded-2xl bg-amber-950/60 border border-amber-500/40 mb-3">
            <Flame className="w-10 h-10 text-orange-400 fill-orange-400 animate-pulse" />
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-1 font-mono">
            {stats.currentStreak} {lang === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}
          </h2>

          <p className="text-xs text-cyan-300">
            {stats.streakFreezesAvailable > 0
              ? `${stats.streakFreezesAvailable} ${t.streakFreeze} ${lang === 'ur' ? 'محفوظ ہے' : 'Equipped'}`
              : t.streakFreezeDesc}
          </p>

          {/* 7-day mini calendar tracker */}
          <div className="flex justify-between items-center gap-2 mt-6 pt-4 border-t border-slate-700/60">
            {days.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-400">
                  {item.dayName}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border text-xs font-bold ${
                    item.isCompleted
                      ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-md'
                      : item.isToday
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40'
                      : 'border-slate-800 bg-slate-900/60 text-slate-500'
                  }`}
                >
                  {item.isCompleted ? '✓' : item.isToday ? '•' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Deterministic Puzzle Overview */}
        <div className="p-5 rounded-3xl bg-[#0D223F] border border-cyan-800/40 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{new Date().toLocaleDateString(lang === 'ur' ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300">
              {categoryLabels[dailyPuzzle.category][lang]}
            </span>
          </div>

          <h3 className="text-base font-bold text-white">
            {dailyPuzzle.instructions[lang]}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {dailyPuzzle.question[lang]}
          </p>

          <div className="pt-3">
            <button
              onClick={onPlayDaily}
              className={`w-full min-h-[52px] py-3.5 px-4 rounded-2xl font-bold text-sm shadow flex items-center justify-center gap-2 active:scale-[0.98] transition-all ${
                isDoneToday
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-orange-950/40'
              }`}
            >
              {isDoneToday ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>{t.todayCompleted}</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-white" />
                  <span>{lang === 'ur' ? 'آج کا چیلنج کھیلیں' : 'Play Today\'s Challenge'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
