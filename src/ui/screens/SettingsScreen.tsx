/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Settings & About Screen
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  Vibrate, 
  Globe, 
  Moon, 
  Sun, 
  Bell, 
  RotateCcw, 
  Shield, 
  Code, 
  Info,
  Check,
  AlertTriangle
} from 'lucide-react';
import { AppSettings } from '../../domain/models';
import { translations, Language } from '../../core/i18n';
import { sounds } from '../../audio/SoundEffects';
import { JdhMonogram } from '../components/JdhMonogram';

interface SettingsScreenProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onResetProgress: () => void;
  onOpenAndroidModal: () => void;
  onBack: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  settings,
  onUpdateSettings,
  onResetProgress,
  onOpenAndroidModal,
  onBack,
}) => {
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const lang = settings.language;
  const t = translations[lang];

  const handleToggleSound = () => {
    const updated = !settings.soundEnabled;
    sounds.soundEnabled = updated;
    onUpdateSettings({ ...settings, soundEnabled: updated });
    if (updated) sounds.playTap();
  };

  const handleToggleVibration = () => {
    const updated = !settings.vibrationEnabled;
    sounds.vibrationEnabled = updated;
    onUpdateSettings({ ...settings, vibrationEnabled: updated });
    if (updated) sounds.triggerHaptic(30);
  };

  const handleLanguageChange = (newLang: Language) => {
    sounds.playTap();
    onUpdateSettings({ ...settings, language: newLang });
    document.documentElement.dir = newLang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const handleToggleReminders = async () => {
    sounds.playTap();
    if (!settings.remindersEnabled) {
      if (typeof window !== 'undefined' && 'Notification' in window) {
        try {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            onUpdateSettings({ ...settings, remindersEnabled: true });
          }
        } catch {
          onUpdateSettings({ ...settings, remindersEnabled: true });
        }
      } else {
        onUpdateSettings({ ...settings, remindersEnabled: true });
      }
    } else {
      onUpdateSettings({ ...settings, remindersEnabled: false });
    }
  };

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
          <h1 className="text-base font-bold text-white">{t.settingsTitle}</h1>
        </div>
      </header>

      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-5 space-y-6">
        {/* Language Selector */}
        <section className="p-4 rounded-2xl bg-[#0D223F] border border-cyan-800/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>{t.language}</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`min-h-[48px] py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                settings.language === 'en'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('ur')}
              className={`min-h-[48px] py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                settings.language === 'ur'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              اردو (Urdu)
            </button>
          </div>
        </section>

        {/* Audio & Haptics Toggles */}
        <section className="p-4 rounded-2xl bg-[#0D223F] border border-cyan-800/40 space-y-4">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide block">
            {lang === 'ur' ? 'آواز اور تھرتھراہٹ' : 'Sensory Feedback'}
          </span>

          {/* Sound toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-200">{t.soundEffects}</h3>
              <p className="text-xs text-slate-400">{t.soundEffectsDesc}</p>
            </div>
            <button
              onClick={handleToggleSound}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.soundEnabled ? 'bg-cyan-500' : 'bg-slate-700'
              }`}
              aria-label="Toggle sound effects"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Haptics toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
            <div>
              <h3 className="text-sm font-bold text-slate-200">{t.vibration}</h3>
              <p className="text-xs text-slate-400">{t.vibrationDesc}</p>
            </div>
            <button
              onClick={handleToggleVibration}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.vibrationEnabled ? 'bg-cyan-500' : 'bg-slate-700'
              }`}
              aria-label="Toggle vibration"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.vibrationEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </section>

        {/* Cognitive & Adaptive Settings */}
        <section className="p-4 rounded-2xl bg-[#0D223F] border border-cyan-800/40 space-y-4">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide block">
            {t.adaptiveDiffTitle}
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                sounds.playTap();
                onUpdateSettings({ ...settings, adaptiveDifficulty: 'auto' });
              }}
              className={`min-h-[48px] py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                settings.adaptiveDifficulty === 'auto'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300'
              }`}
            >
              {t.adaptiveDiffAuto}
            </button>
            <button
              onClick={() => {
                sounds.playTap();
                onUpdateSettings({ ...settings, adaptiveDifficulty: 'manual' });
              }}
              className={`min-h-[48px] py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                settings.adaptiveDifficulty === 'manual'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300'
              }`}
            >
              {t.adaptiveDiffManual}
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            {lang === 'ur'
              ? 'خودکار موڈ میں مسلسل 3 درست جوابات پر مشکل کی سطح بڑھتی ہے اور 2 غلط پر آسان ہوتی ہے۔'
              : 'Auto mode raises difficulty after 3 consecutive correct solves, and lowers it after 2 misses.'}
          </p>

          {/* Daily Reminder */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-700/60">
            <div>
              <h3 className="text-sm font-bold text-slate-200">{t.dailyReminder}</h3>
              <p className="text-xs text-slate-400">{t.dailyReminderDesc}</p>
            </div>
            <button
              onClick={handleToggleReminders}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                settings.remindersEnabled ? 'bg-cyan-500' : 'bg-slate-700'
              }`}
              aria-label="Toggle daily reminders"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.remindersEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </section>

        {/* Android Native Architecture Export */}
        <section className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-[#0A192F] border border-cyan-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>{t.exportAndroidCode}</span>
              </h3>
              <p className="text-xs text-slate-300">{t.exportAndroidDesc}</p>
            </div>
            <button
              onClick={onOpenAndroidModal}
              className="py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shrink-0"
            >
              {lang === 'ur' ? 'معائنہ کریں' : 'Inspect Code'}
            </button>
          </div>
        </section>

        {/* About JDH & Privacy */}
        <section className="p-5 rounded-2xl bg-[#0B1E38] border border-cyan-800/40 space-y-3">
          <div className="flex items-center gap-3">
            <JdhMonogram size={36} />
            <div>
              <h3 className="text-sm font-bold text-white">{t.aboutJDH}</h3>
              <p className="text-[11px] text-cyan-400 font-mono">{t.version}</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {t.aboutText}
          </p>

          <div className="pt-2 border-t border-slate-700/60 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
              {t.privacyTitle}
            </h4>
            <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
              {t.privacyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Danger Zone: Reset Progress */}
        <div className="pt-2">
          <button
            onClick={() => setResetModalOpen(true)}
            className="w-full min-h-[48px] py-3 rounded-2xl border border-rose-900/60 bg-rose-950/30 text-rose-300 font-semibold text-xs hover:bg-rose-950/50 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.resetProgress}</span>
          </button>
        </div>
      </main>

      {/* Reset Confirmation Modal */}
      {resetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-sm bg-[#0A192F] border border-rose-500/40 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
            <div className="p-3 bg-rose-950/60 border border-rose-500/40 rounded-2xl text-rose-400 mb-3">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{t.resetProgress}</h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              {t.resetProgressWarning}
            </p>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  onResetProgress();
                  setResetModalOpen(false);
                }}
                className="w-full min-h-[48px] py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md"
              >
                {t.confirmReset}
              </button>

              <button
                onClick={() => setResetModalOpen(false)}
                className="w-full min-h-[48px] py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm"
              >
                {t.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
