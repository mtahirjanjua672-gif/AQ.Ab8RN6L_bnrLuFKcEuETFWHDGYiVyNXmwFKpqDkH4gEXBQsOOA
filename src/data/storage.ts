/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Local Storage & Persistence Service
 * 100% offline-first, private, zero telemetry
 */

import { AppSettings, Achievement, PuzzleSessionState, UserStats, PuzzleCategory, Puzzle } from '../domain/models';
import { BUNDLED_PUZZLES } from './puzzles';

const SETTINGS_KEY = 'jdh_mind_puzzles_settings';
const STATS_KEY = 'jdh_mind_puzzles_stats';
const SESSION_KEY = 'jdh_mind_puzzles_saved_session';
const ACHIEVEMENTS_KEY = 'jdh_mind_puzzles_achievements';

export const INITIAL_SETTINGS: AppSettings = {
  theme: 'dark',
  language: 'en',
  soundEnabled: true,
  vibrationEnabled: true,
  reducedMotion: false,
  adaptiveDifficulty: 'auto',
  remindersEnabled: false,
  reminderHour: 20, // 8 PM
};

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_solve',
    title: { en: 'First Spark', ur: 'پہلی کرن' },
    description: { en: 'Solve your first cognitive puzzle', ur: 'اپنا پہلا ذہنی معمہ حل کریں' },
    icon: 'Sparkles',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
  },
  {
    id: 'streak_3',
    title: { en: 'Streak Starter', ur: 'مسلسل کاوش' },
    description: { en: 'Achieve a 3-day training streak', ur: '3 دن کا مسلسل سلسلہ مکمل کریں' },
    icon: 'Flame',
    progress: 0,
    maxProgress: 3,
    unlocked: false,
  },
  {
    id: 'streak_7',
    title: { en: 'Week of Brilliance', ur: 'ہفتہ کی چمک' },
    description: { en: 'Achieve a 7-day training streak', ur: '7 دن کی متواتر مشق مکمل کریں' },
    icon: 'Trophy',
    progress: 0,
    maxProgress: 7,
    unlocked: false,
  },
  {
    id: 'speed_demon',
    title: { en: 'Swift Mind', ur: 'تیز نگاہ' },
    description: { en: 'Solve any puzzle in under 15 seconds with 3 stars', ur: '15 سیکنڈ کے اندر 3 ستاروں کے ساتھ حل کریں' },
    icon: 'Zap',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
  },
  {
    id: 'no_hints_5',
    title: { en: 'Pure Intuition', ur: 'خالص وجدان' },
    description: { en: 'Solve 5 puzzles without using any hints', ur: 'بغیر کسی اشارے کے 5 پہیلیاں حل کریں' },
    icon: 'Eye',
    progress: 0,
    maxProgress: 5,
    unlocked: false,
  },
  {
    id: 'master_logic',
    title: { en: 'Logician', ur: 'منطق کا ماہر' },
    description: { en: 'Solve 6 Logic puzzles', ur: 'منطق کے 6 معمے حل کریں' },
    icon: 'Brain',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'master_memory',
    title: { en: 'Elephant Memory', ur: 'قوی یادداشت' },
    description: { en: 'Solve 6 Memory puzzles', ur: 'یادداشت کے 6 معمے حل کریں' },
    icon: 'Layers',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'master_pattern',
    title: { en: 'Pattern Weaver', ur: 'پیٹرن کا استاد' },
    description: { en: 'Solve 6 Pattern Recognition puzzles', ur: 'پیٹرن کی شناخت کی 6 پہیلیاں حل کریں' },
    icon: 'Compass',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'master_number',
    title: { en: 'Mathemagician', ur: 'ریاضی دان' },
    description: { en: 'Solve 6 Number & Math puzzles', ur: 'اعداد اور ریاضی کے 6 معمے حل کریں' },
    icon: 'Hash',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'master_visual',
    title: { en: 'Spatial Architect', ur: 'بصری ماہر' },
    description: { en: 'Solve 6 Visual Brain Teasers', ur: 'بصری فہم کے 6 معمے حل کریں' },
    icon: 'EyeOff',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'master_word',
    title: { en: 'Linguistic Virtuoso', ur: 'فصاحت و بلاغت' },
    description: { en: 'Solve 6 Word & Reasoning puzzles', ur: 'الفاظ اور استنباط کے 6 معمے حل کریں' },
    icon: 'BookOpen',
    progress: 0,
    maxProgress: 6,
    unlocked: false,
  },
  {
    id: 'puzzle_grandmaster',
    title: { en: 'JDH Grandmaster', ur: 'جے ڈی ایچ گرینڈ ماسٹر' },
    description: { en: 'Reach Player Rank Level 5 and solve 25 puzzles', ur: 'لیول 5 حاصل کریں اور 25 پہیلیاں حل کریں' },
    icon: 'Crown',
    progress: 0,
    maxProgress: 25,
    unlocked: false,
  },
];

export const INITIAL_STATS: UserStats = {
  totalSolved: 0,
  categoryStats: {
    logic: { solved: 0, totalStars: 0, accuracy: 100 },
    memory: { solved: 0, totalStars: 0, accuracy: 100 },
    pattern: { solved: 0, totalStars: 0, accuracy: 100 },
    number: { solved: 0, totalStars: 0, accuracy: 100 },
    visual: { solved: 0, totalStars: 0, accuracy: 100 },
    word: { solved: 0, totalStars: 0, accuracy: 100 },
  },
  currentStreak: 1,
  bestStreak: 1,
  streakFreezesAvailable: 1, // 1 free freeze earned per week
  lastPlayedDate: null,
  totalXp: 0,
  level: 1,
  completedPuzzleIds: {},
  dailyChallengesCompleted: [],
  weeklyGoalProgress: {
    targetSolves: 15,
    currentSolves: 0,
    weekStartDate: new Date().toISOString().slice(0, 10),
  },
};

export class StorageService {
  public static getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        return { ...INITIAL_SETTINGS, ...JSON.parse(data) };
      }
    } catch {}
    return INITIAL_SETTINGS;
  }

  public static saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {}
  }

  public static getStats(): UserStats {
    try {
      const data = localStorage.getItem(STATS_KEY);
      if (data) {
        return { ...INITIAL_STATS, ...JSON.parse(data) };
      }
    } catch {}
    return INITIAL_STATS;
  }

  public static saveStats(stats: UserStats): void {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch {}
  }

  public static getAchievements(): Achievement[] {
    try {
      const data = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (data) {
        const stored: Achievement[] = JSON.parse(data);
        return INITIAL_ACHIEVEMENTS.map((item) => {
          const match = stored.find((s) => s.id === item.id);
          return match ? { ...item, ...match } : item;
        });
      }
    } catch {}
    return INITIAL_ACHIEVEMENTS;
  }

  public static saveAchievements(achievements: Achievement[]): void {
    try {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    } catch {}
  }

  public static getSavedSession(): PuzzleSessionState | null {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      if (data) return JSON.parse(data);
    } catch {}
    return null;
  }

  public static saveSession(session: PuzzleSessionState | null): void {
    try {
      if (session === null) {
        localStorage.removeItem(SESSION_KEY);
      } else {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      }
    } catch {}
  }

  public static resetAllProgress(): void {
    try {
      localStorage.removeItem(STATS_KEY);
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ACHIEVEMENTS_KEY);
    } catch {}
  }

  /**
   * Deterministic Daily Challenge selector using date string (e.g. 2026-10-28)
   */
  public static getDailyPuzzleForDate(dateStr: string = new Date().toISOString().slice(0, 10)): Puzzle {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash) % BUNDLED_PUZZLES.length;
    return BUNDLED_PUZZLES[index];
  }

  /**
   * Updates streak and handles streak freeze logic
   */
  public static updateDailyStreak(stats: UserStats): UserStats {
    const today = new Date().toISOString().slice(0, 10);
    if (!stats.lastPlayedDate) {
      stats.lastPlayedDate = today;
      stats.currentStreak = 1;
      stats.bestStreak = Math.max(stats.bestStreak, 1);
      return stats;
    }

    if (stats.lastPlayedDate === today) {
      return stats; // Already played today
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (stats.lastPlayedDate === yesterday) {
      stats.currentStreak += 1;
      stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
    } else {
      // Missed more than 1 day: check if streak freeze can be used
      if (stats.streakFreezesAvailable > 0) {
        stats.streakFreezesAvailable -= 1; // Used streak freeze to preserve streak!
      } else {
        stats.currentStreak = 1;
      }
    }

    stats.lastPlayedDate = today;
    return stats;
  }
}
