/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Bottom Navigation Bar (Material 3 Touch Design)
 */

import React from 'react';
import { Home, Compass, Flame, BarChart3, Settings } from 'lucide-react';
import { translations, Language } from '../../core/i18n';
import { sounds } from '../../audio/SoundEffects';

export type NavTab = 'home' | 'categories' | 'daily' | 'stats' | 'settings';

interface BottomNavBarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  lang: Language;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentTab,
  onSelectTab,
  lang,
}) => {
  const t = translations[lang];

  const tabs: Array<{ id: NavTab; label: string; icon: React.ReactNode }> = [
    { id: 'home', label: t.home, icon: <Home className="w-5 h-5" /> },
    { id: 'categories', label: t.categories, icon: <Compass className="w-5 h-5" /> },
    { id: 'daily', label: t.daily, icon: <Flame className="w-5 h-5" /> },
    { id: 'stats', label: t.stats, icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: t.settings, icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1D36]/95 backdrop-blur-md border-t border-cyan-900/40 select-none pb-safe"
      role="navigation"
      aria-label="Main Navigation Bar"
    >
      <div className="max-w-xl mx-auto grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playTap();
                sounds.triggerHaptic(15);
                onSelectTab(tab.id);
              }}
              className={`min-h-[48px] flex flex-col items-center justify-center transition-all ${
                isActive ? 'text-cyan-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-selected={isActive}
              aria-label={tab.label}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  isActive ? 'bg-cyan-950/80 border border-cyan-500/40 shadow-sm' : ''
                }`}
              >
                {tab.icon}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-[64px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
