/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Interactive Onboarding Tutorial
 */

import React, { useState } from 'react';
import { Compass, Lightbulb, RotateCcw, Flame, Check } from 'lucide-react';
import { translations, Language } from '../../core/i18n';
import { JdhMonogram } from './JdhMonogram';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose, lang }) => {
  const [step, setStep] = useState(0);
  const t = translations[lang];

  if (!isOpen) return null;

  const steps = [
    {
      title: lang === 'ur' ? '6 ذہنی شعبہ جات' : '6 Cognitive Domains',
      desc: t.tutorialStep1,
      icon: <Compass className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: lang === 'ur' ? 'اشارے اور واپسی کی سہولت' : 'Hints & Undo Safety',
      desc: t.tutorialStep2,
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
    },
    {
      title: lang === 'ur' ? 'روزانہ چیلنج اور اسٹریک فریز' : 'Daily Challenge & Streaks',
      desc: t.tutorialStep3,
      icon: <Flame className="w-8 h-8 text-rose-400" />,
    },
  ];

  const current = steps[step];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#0D1B2A] border border-cyan-500/40 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
        <JdhMonogram size={56} className="mb-4" />

        <div className="p-3 bg-cyan-950/60 rounded-2xl border border-cyan-800/40 mb-3">
          {current.icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{current.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">{current.desc}</p>

        {/* Step dots */}
        <div className="flex items-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === step ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Next / Finished */}
        <div className="w-full flex gap-3">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-3 bg-slate-800 text-slate-300 rounded-xl font-medium text-sm hover:bg-slate-700"
            >
              {lang === 'ur' ? 'پچھلا' : 'Previous'}
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold text-sm hover:from-cyan-500 hover:to-blue-500 shadow-md"
            >
              {lang === 'ur' ? 'اگلا' : 'Next'}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-sm hover:from-emerald-500 hover:to-teal-500 shadow-md flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{t.gotIt}</span>
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-3 text-xs text-slate-400 hover:text-slate-200"
        >
          {t.skipTutorial}
        </button>
      </div>
    </div>
  );
};
