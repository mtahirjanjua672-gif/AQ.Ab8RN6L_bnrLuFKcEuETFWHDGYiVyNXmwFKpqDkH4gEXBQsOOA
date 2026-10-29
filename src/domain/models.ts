/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Core Domain Models
 * Owner: Janjua Digital Hub (JDH)
 */

export type PuzzleCategory = 
  | 'logic' 
  | 'memory' 
  | 'pattern' 
  | 'number' 
  | 'visual' 
  | 'word';

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export type GameMode = 'classic' | 'timed' | 'endless' | 'zen';

export interface LocalizedString {
  en: string;
  ur: string;
}

export type VisualType = 
  | 'sequence_shapes'
  | 'matrix_grid'
  | 'memory_cards'
  | 'sudoku_grid'
  | 'arithmetic_pyramid'
  | 'spatial_symmetry'
  | 'odd_shape_out'
  | 'cube_nets';

export interface VisualSpec {
  type: VisualType;
  data: Record<string, any>;
}

export interface PuzzleOption {
  id: string;
  text?: LocalizedString;
  visual?: VisualSpec;
}

export interface Puzzle {
  id: string;
  category: PuzzleCategory;
  difficulty: Difficulty;
  instructions: LocalizedString;
  question: LocalizedString;
  visualSpec?: VisualSpec;
  options: PuzzleOption[];
  correctAnswer: string; // matches option id or raw answer
  explanation: LocalizedString;
  hints: [LocalizedString, LocalizedString]; // Exactly 2 levels, neither reveals answer
  timeLimit?: number; // seconds (default 60)
  basePoints: number;
}

export interface PuzzleSessionState {
  puzzleId: string;
  category: PuzzleCategory;
  difficulty: Difficulty;
  selectedOptionId: string | null;
  history: string[]; // For undo
  hintsRevealed: number; // 0, 1, or 2
  timeRemaining: number;
  timeSpent: number;
  mode: GameMode;
  isPaused: boolean;
  isAnswered: boolean;
  isCorrect: boolean | null;
  retries: number;
}

export interface PuzzleResult {
  puzzleId: string;
  category: PuzzleCategory;
  difficulty: Difficulty;
  isCorrect: boolean;
  stars: number; // 1, 2, or 3
  score: number;
  timeSpent: number;
  hintsUsed: number;
  retries: number;
  xpEarned: number;
}

export interface Achievement {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserStats {
  totalSolved: number;
  categoryStats: Record<PuzzleCategory, { solved: number; totalStars: number; accuracy: number }>;
  currentStreak: number;
  bestStreak: number;
  streakFreezesAvailable: number;
  lastPlayedDate: string | null;
  totalXp: number;
  level: number;
  completedPuzzleIds: Record<string, { stars: number; bestScore: number }>;
  dailyChallengesCompleted: string[]; // ISO date strings
  weeklyGoalProgress: {
    targetSolves: number;
    currentSolves: number;
    weekStartDate: string;
  };
}

export interface AppSettings {
  theme: 'dark' | 'light' | 'system';
  language: 'en' | 'ur';
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  reducedMotion: boolean;
  adaptiveDifficulty: 'auto' | 'manual';
  remindersEnabled: boolean;
  reminderHour: number; // 0-23 (e.g. 20 for 8 PM)
}
