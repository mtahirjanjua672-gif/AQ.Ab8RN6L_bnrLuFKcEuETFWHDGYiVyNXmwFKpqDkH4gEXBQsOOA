/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Share Card Generator
 * Creates an exportable canvas certificate image with player stats, JDH monogram, and encouraging quote
 */

import React, { useRef, useEffect } from 'react';
import { Download, Share2, X, Check } from 'lucide-react';
import { UserStats } from '../../domain/models';
import { translations, Language } from '../../core/i18n';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  lang: Language;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  stats,
  lang,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = React.useState(false);
  const t = translations[lang];

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 600;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Background gradient: Deep navy to dark royal
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0A192F');
    grad.addColorStop(0.5, '#0B2240');
    grad.addColorStop(1, '#061325');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Decorative geometric cyan frame
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(16, 16, width - 32, height - 32);

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(24, 24, width - 48, height - 48);

    // Monogram / Brand Icon
    ctx.fillStyle = '#06B6D4';
    ctx.beginPath();
    ctx.arc(65, 65, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = 'bold 14px system-ui';
    ctx.fillStyle = '#0A192F';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('JDH', 65, 65);

    // Brand Name & Subtitle
    ctx.textAlign = 'left';
    ctx.font = 'bold 22px system-ui';
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText('JDH Mind Puzzles AI', 105, 58);

    ctx.font = '13px system-ui';
    ctx.fillStyle = '#38BDF8';
    ctx.fillText('Janjua Digital Hub · Cognitive Training Certificate', 105, 78);

    // Divider
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(35, 105);
    ctx.lineTo(width - 35, 105);
    ctx.stroke();

    // Stats Grid
    const statBoxes = [
      { label: lang === 'ur' ? 'کل حل شدہ' : 'Puzzles Solved', val: String(stats.totalSolved) },
      { label: lang === 'ur' ? 'مسلسل دن' : 'Day Streak', val: `${stats.currentStreak} 🔥` },
      { label: lang === 'ur' ? 'کل ایکس پی' : 'Total XP', val: String(stats.totalXp) },
      { label: lang === 'ur' ? 'ذہنی درجہ' : 'Rank Level', val: `Lv. ${stats.level}` },
    ];

    const boxW = 120;
    const boxStartX = 45;
    statBoxes.forEach((item, idx) => {
      const bx = boxStartX + idx * 130;
      const by = 130;

      ctx.fillStyle = 'rgba(15, 33, 64, 0.7)';
      ctx.fillRect(bx, by, boxW, 80);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.strokeRect(bx, by, boxW, 80);

      ctx.font = 'bold 24px system-ui';
      ctx.fillStyle = '#F59E0B';
      ctx.textAlign = 'center';
      ctx.fillText(item.val, bx + boxW / 2, by + 35);

      ctx.font = '11px system-ui';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText(item.label, bx + boxW / 2, by + 62);
    });

    // Encouraging quote
    const quote = t.quotes[stats.totalSolved % t.quotes.length];
    ctx.font = 'italic 14px system-ui';
    ctx.fillStyle = '#E2E8F0';
    ctx.textAlign = 'center';
    ctx.fillText(`“${quote}”`, width / 2, 260);

    // Verified Stamp
    ctx.font = 'bold 12px system-ui';
    ctx.fillStyle = '#10B981';
    ctx.fillText('✓ 100% Verified Cognitive Performance · Privacy Protected', width / 2, 330);

    ctx.font = '11px system-ui';
    ctx.fillStyle = '#64748B';
    ctx.fillText(`Issued: ${new Date().toLocaleDateString()} · com.janjuadigitalhub.mindpuzzles`, width / 2, 355);
  }, [isOpen, stats, lang, t]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `JDH_Mind_Puzzles_Score_${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleNativeShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], 'jdh_mind_puzzles_score.png', { type: 'image/png' });
        try {
          await navigator.share({
            title: 'JDH Mind Puzzles AI Achievement',
            text: `I have solved ${stats.totalSolved} cognitive puzzles on JDH Mind Puzzles AI!`,
            files: [file],
          });
        } catch {
          handleDownload();
        }
      });
    } else {
      handleDownload();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0A192F] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60"
          aria-label="Close Share Card"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-1">
          {lang === 'ur' ? 'کارکردگی کارڈ شیئر کریں' : 'Cognitive Share Card'}
        </h3>
        <p className="text-xs text-cyan-300/80 mb-4">
          {lang === 'ur' ? 'جنجوعہ ڈیجیٹل ہب تصدیق شدہ بیج' : 'Verified Janjua Digital Hub Milestone'}
        </p>

        {/* Canvas preview */}
        <div className="w-full flex justify-center overflow-hidden rounded-xl border border-slate-700/60 shadow-lg mb-5">
          <canvas
            ref={canvasRef}
            className="max-w-full h-auto rounded-lg shadow-inner"
            style={{ maxHeight: '240px' }}
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl font-medium text-sm transition-all active:scale-95"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'ur' ? 'تصویر ڈاؤن لوڈ' : 'Download PNG'}</span>
          </button>

          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? (lang === 'ur' ? 'محفوظ ہو گیا!' : 'Saved!') : (lang === 'ur' ? 'شیئر کریں' : 'Share Card')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
