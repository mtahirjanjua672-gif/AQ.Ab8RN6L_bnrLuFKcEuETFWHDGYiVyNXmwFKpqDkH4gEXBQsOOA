/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Splash Screen
 */

import React, { useEffect } from 'react';
import { JdhMonogram } from '../components/JdhMonogram';
import { translations, Language } from '../../core/i18n';

interface SplashScreenProps {
  onFinish: () => void;
  lang: Language;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, lang }) => {
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A192F] text-white p-6 select-none">
      <div className="flex flex-col items-center text-center max-w-sm animate-fade-in">
        <JdhMonogram size={100} animate={true} className="mb-6 drop-shadow-[0_10px_25px_rgba(6,182,212,0.3)]" />

        <h1 className="text-2xl font-extrabold tracking-tight text-white mb-2">
          {t.appName}
        </h1>

        <p className="text-sm text-cyan-300 font-medium tracking-wide mb-6">
          {t.ownerBranding}
        </p>

        <p className="text-xs text-slate-400 italic">
          "{t.appTagline}"
        </p>

        {/* Minimal loading indicator */}
        <div className="mt-8 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] text-slate-400 font-mono tracking-wider">
            {t.offlineBadge}
          </span>
        </div>
      </div>
    </div>
  );
};
