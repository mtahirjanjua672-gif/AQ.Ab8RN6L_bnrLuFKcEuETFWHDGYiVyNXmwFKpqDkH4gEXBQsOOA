/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Home Screen
 */

import React from 'react';
import { 
  Play, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Brain, 
  Layers, 
  Compass, 
  Hash, 
  Eye, 
  BookOpen, 
  ChevronRight, 
  Award,
  HelpCircle
} from 'lucide-react';
import { PuzzleCategory, PuzzleSessionState, UserStats } from '../../domain/models';
import { translations, Language, categoryLabels } from '../../core/i18n';
import { JdhMonogram } from '../components/JdhMonogram';

interface HomeScreenProps {
  stats: UserStats;
  savedSession: PuzzleSessionState | null;
  lang: Language;
  onContinueSession: () => void;
  onQuickPlay: () => void;
  onDailyChallenge: () => void;
  onSelectCategory: (category: PuzzleCategory) => void;
  onOpenTutorial: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  savedSession,
  lang,
  onContinueSession,
  onQuickPlay,
  onDailyChallenge,
  onSelectCategory,
  onOpenTutorial,
}) => {
  const t = translations[lang];

  const categoryIcons: Record<PuzzleCategory, React.ReactNode> = {
    logic: <Brain className="w-5 h-5 text-cyan-400" />,
    memory: <Layers className="w-5 h-5 text-blue-400" />,
    pattern: <Compass className="w-5 h-5 text-teal-400" />,
    number: <Hash className="w-5 h-5 text-amber-400" />,
    visual: <Eye className="w-5 h-5 text-indigo-400" />,
    word: <BookOpen className="w-5 h-5 text-emerald-400" />,
  };

  const categories: PuzzleCategory[] = ['logic', 'memory', 'pattern', 'number', 'visual', 'word'];

  // Check if today's daily challenge was solved
  const todayStr = new Date().toISOString().slice(0, 10);
  const isDailyDone = stats.dailyChallengesCompleted.includes(todayStr);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 pb-20 select-none">
      {/* Top Header Brand Banner */}
      <header className="px-5 pt-6 pb-4 flex items-center justify-between border-b border-cyan-950/60 bg-[#0A192F]">
        <div className="flex items-center gap-3">
          <JdhMonogram size={44} />
          <div>
            <h1 className="text-base font-extrabold text-white tracking-tight">
              {t.appName}
            </h1>
            <p className="text-[11px] text-cyan-400 font-medium">
              {t.ownerBranding}
            </p>
          </div>
        </div>

        {/* Tutorial button & Streak */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTutorial}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300"
            aria-label="Open game tutorial"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-bold text-amber-400">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="font-mono">{stats.currentStreak}d</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-5 space-y-5">
        {/* Streak & Freeze Status Banner */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0D223F] border border-cyan-800/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-950/60 rounded-xl border border-amber-500/30">
              <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-100 block">
                {stats.currentStreak} {t.streakCount}
              </span>
              <span className="text-[11px] text-slate-400">
                {stats.streakFreezesAvailable > 0
                  ? `${stats.streakFreezesAvailable} ${t.streakFreeze} active`
                  : 'Play weekly to earn freeze'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Lv. {stats.level}</span>
          </div>
        </div>

        {/* Continue Last Unfinished Puzzle (Prominent Top Card) */}
        {savedSession && (
          <div className="p-4 rounded-3xl bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border-2 border-cyan-400/80 shadow-xl shadow-cyan-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>In Progress</span>
              </span>
              <span className="text-[11px] font-mono text-slate-300">
                {categoryLabels[savedSession.category][lang]} · {savedSession.difficulty}
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-3">
              {t.continuePuzzle}
            </h3>

            <button
              onClick={onContinueSession}
              className="w-full min-h-[48px] py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{lang === 'ur' ? 'جاری رکھیں' : 'Resume Now'}</span>
            </button>
          </div>
        )}

        {/* Quick Play & Daily Challenge Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Daily Challenge */}
          <button
            onClick={onDailyChallenge}
            className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all active:scale-[0.98] ${
              isDailyDone
                ? 'bg-slate-900/60 border-slate-700/60'
                : 'bg-gradient-to-br from-[#0F284D] to-[#0A1A33] border-cyan-500/40 shadow-lg'
            }`}
            aria-label="Play daily challenge puzzle"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{t.dailyChallenge}</span>
                </span>
                {isDailyDone && (
                  <span className="text-[10px] bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">
                    ✓ Done
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300">
                {t.dailyChallengeSubtitle}
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-cyan-300">
              <span>{isDailyDone ? (lang === 'ur' ? 'دیکھیں' : 'Review') : (lang === 'ur' ? 'کھیلیں' : 'Play Today')}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          {/* Quick Play */}
          <button
            onClick={onQuickPlay}
            className="p-4 rounded-2xl bg-gradient-to-br from-[#0D223F] to-[#09172B] border border-cyan-800/40 shadow-lg text-left flex flex-col justify-between transition-all active:scale-[0.98]"
            aria-label="Quick play 5 puzzles"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{t.quickPlay}</span>
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {t.quickPlaySubtitle}
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-cyan-300">
              <span>{t.startPlaying}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Cognitive Categories Browser */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.chooseCategory}
            </h2>
            <span className="text-xs text-slate-400">
              72 {t.allPuzzles}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {categories.map((cat) => {
              const catStat = stats.categoryStats[cat];
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className="min-h-[58px] p-3.5 rounded-2xl bg-[#0D223F]/80 hover:bg-[#0D223F] border border-slate-700/60 hover:border-cyan-500/50 text-left flex items-center justify-between transition-all active:scale-[0.99]"
                  aria-label={`Open ${categoryLabels[cat][lang]} category`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/50">
                      {categoryIcons[cat]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {categoryLabels[cat][lang]}
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {catStat.solved} / 12 {lang === 'ur' ? 'مکمل' : 'solved'}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
