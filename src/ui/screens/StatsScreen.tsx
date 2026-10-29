/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Stats & Cognitive Insights Screen
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Award, 
  Brain, 
  Flame, 
  TrendingUp, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';
import { Achievement, PuzzleCategory, UserStats } from '../../domain/models';
import { translations, Language, categoryLabels } from '../../core/i18n';

interface StatsScreenProps {
  stats: UserStats;
  achievements: Achievement[];
  lang: Language;
  onBack: () => void;
  onOpenShareCard: () => void;
}

export const StatsScreen: React.FC<StatsScreenProps> = ({
  stats,
  achievements,
  lang,
  onBack,
  onOpenShareCard,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements'>('overview');
  const t = translations[lang];

  const categories: PuzzleCategory[] = ['logic', 'memory', 'pattern', 'number', 'visual', 'word'];

  // Calculate best category
  let bestCat: PuzzleCategory = 'logic';
  let maxStars = -1;
  categories.forEach((cat) => {
    if (stats.categoryStats[cat].totalStars > maxStars) {
      maxStars = stats.categoryStats[cat].totalStars;
      bestCat = cat;
    }
  });

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 pb-20 select-none">
      {/* Top Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0B1D36]/90 backdrop-blur-md border-b border-cyan-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-95"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-white">{t.stats}</h1>
        </div>

        <button
          onClick={onOpenShareCard}
          className="min-h-[40px] px-3 py-1.5 rounded-xl bg-cyan-600/80 hover:bg-cyan-500 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t.shareScore}</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-4 space-y-5">
        {/* Top Summary Banner */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0F284D] to-[#0A1A33] border border-cyan-500/40 shadow-xl grid grid-cols-3 gap-2 text-center">
          <div>
            <span className="text-[11px] text-slate-400 block mb-0.5">{t.totalSolves}</span>
            <span className="text-2xl font-bold font-mono text-cyan-300">{stats.totalSolved}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block mb-0.5">{t.streakCount}</span>
            <span className="text-2xl font-bold font-mono text-amber-400">{stats.currentStreak} 🔥</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block mb-0.5">{t.playerLevel}</span>
            <span className="text-2xl font-bold font-mono text-teal-300">Lv. {stats.level}</span>
          </div>
        </div>

        {/* Tab Selection: Overview vs Achievements */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.cognitiveOverview}
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'achievements'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.achievementsTitle} ({unlockedCount}/{achievements.length})
          </button>
        </div>

        {activeTab === 'overview' ? (
          <>
            {/* Weekly Goal Progress */}
            <div className="p-4 rounded-2xl bg-[#0D223F] border border-cyan-800/40 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>{t.weeklyGoal}</span>
                </span>
                <span className="font-mono text-amber-300 font-bold">
                  {stats.weeklyGoalProgress.currentSolves} / {stats.weeklyGoalProgress.targetSolves}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (stats.weeklyGoalProgress.currentSolves / stats.weeklyGoalProgress.targetSolves) * 100
                    )}%`,
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-400">{t.weeklyGoalDesc}</p>
            </div>

            {/* Best Category Highlight */}
            <div className="p-4 rounded-2xl bg-[#0B1E38] border border-cyan-700/40 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-cyan-300 uppercase tracking-wide font-bold block mb-1">
                  {t.bestCategory}
                </span>
                <h3 className="text-base font-bold text-white">
                  {categoryLabels[bestCat][lang]}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-amber-300 font-bold block">
                  {stats.categoryStats[bestCat].totalStars} ★
                </span>
                <span className="text-[10px] text-slate-400">
                  {stats.categoryStats[bestCat].solved} {lang === 'ur' ? 'حل شدہ' : 'solved'}
                </span>
              </div>
            </div>

            {/* Cognitive Domains Bars */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                {t.cognitiveOverview}
              </h2>

              <div className="space-y-2.5">
                {categories.map((cat) => {
                  const item = stats.categoryStats[cat];
                  const percentage = Math.min(100, (item.solved / 12) * 100);

                  return (
                    <div
                      key={cat}
                      className="p-3.5 rounded-2xl bg-[#0D223F]/80 border border-slate-700/60 space-y-1.5"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-200">
                          {categoryLabels[cat][lang]}
                        </span>
                        <span className="font-mono text-cyan-300 font-bold">
                          {item.solved}/12 ({item.totalStars} ★)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          /* Achievements List */
          <div className="space-y-2.5">
            {achievements.map((item) => {
              const progressPct = Math.min(100, (item.progress / item.maxProgress) * 100);

              return (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                    item.unlocked
                      ? 'bg-[#0D223F] border-amber-500/50 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        item.unlocked
                          ? 'bg-amber-950/60 border-amber-500/40 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {item.title[lang]}
                        </h3>
                        {item.unlocked && (
                          <span className="text-[10px] text-amber-400 font-bold">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300">
                        {item.description[lang]}
                      </p>

                      {/* Mini progress bar if not unlocked */}
                      {!item.unlocked && (
                        <div className="w-full h-1.5 rounded-full bg-slate-800 mt-2 overflow-hidden">
                          <div
                            className="h-full bg-cyan-500 rounded-full"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-400 shrink-0">
                    {item.progress}/{item.maxProgress}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
