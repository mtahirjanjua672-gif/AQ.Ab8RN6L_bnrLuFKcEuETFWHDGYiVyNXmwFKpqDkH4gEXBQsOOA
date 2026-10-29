/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Level Select Screen
 */

import React, { useState } from 'react';
import { ArrowLeft, Star, Lock, Play, Award, Sparkles } from 'lucide-react';
import { Difficulty, Puzzle, PuzzleCategory, UserStats } from '../../domain/models';
import { translations, Language, categoryLabels } from '../../core/i18n';
import { BUNDLED_PUZZLES } from '../../data/puzzles';

interface LevelSelectScreenProps {
  category: PuzzleCategory;
  stats: UserStats;
  lang: Language;
  onBack: () => void;
  onSelectPuzzle: (puzzle: Puzzle) => void;
}

export const LevelSelectScreen: React.FC<LevelSelectScreenProps> = ({
  category,
  stats,
  lang,
  onBack,
  onSelectPuzzle,
}) => {
  const t = translations[lang];
  const [filterDiff, setFilterDiff] = useState<Difficulty | 'ALL'>('ALL');

  // Filter 12 puzzles for this category
  const categoryPuzzles = BUNDLED_PUZZLES.filter((p) => p.category === category);
  const filtered = filterDiff === 'ALL'
    ? categoryPuzzles
    : categoryPuzzles.filter((p) => p.difficulty === filterDiff);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-slate-100 pb-20 select-none">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0B1D36]/90 backdrop-blur-md border-b border-cyan-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-95"
            aria-label="Back to categories"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-bold text-white">
              {categoryLabels[category][lang]}
            </h1>
            <p className="text-[11px] text-cyan-400">
              {categoryPuzzles.length} {t.allPuzzles} · {stats.categoryStats[category].solved} {lang === 'ur' ? 'مکمل' : 'Solved'}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-4 space-y-4">
        {/* Filter Tabs (Functional segmented controls) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-2xl border border-slate-800">
          {(['ALL', 'EASY', 'MEDIUM', 'HARD'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDiff(diff)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterDiff === diff
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {diff === 'ALL' ? (lang === 'ur' ? 'تمام' : 'All') : t[`diff_${diff}`]}
            </button>
          ))}
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((puzzle, index) => {
            const completed = stats.completedPuzzleIds[puzzle.id];
            const stars = completed?.stars || 0;
            const isSolved = Boolean(completed);

            return (
              <button
                key={puzzle.id}
                onClick={() => onSelectPuzzle(puzzle)}
                className={`min-h-[74px] p-4 rounded-2xl border text-left flex items-center justify-between transition-all active:scale-[0.98] ${
                  isSolved
                    ? 'bg-[#0D223F] border-cyan-700/60 shadow-sm'
                    : 'bg-[#08172B] border-slate-800 hover:border-cyan-500/40'
                }`}
                aria-label={`Select level ${index + 1}: ${puzzle.id}`}
              >
                <div className="flex-1 pr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-300">
                      {lang === 'ur' ? `مرحلہ ${index + 1}` : `Level ${index + 1}`}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {t[`diff_${puzzle.difficulty}`]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-1">
                    {puzzle.question[lang]}
                  </p>

                  {/* Star Rating indicators */}
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= stars ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                        }`}
                      />
                    ))}
                    {completed?.bestScore && (
                      <span className="text-[10px] font-mono text-slate-400 ml-2">
                        {completed.bestScore} pts
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                  <Play className="w-4 h-4 fill-cyan-400" />
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};
