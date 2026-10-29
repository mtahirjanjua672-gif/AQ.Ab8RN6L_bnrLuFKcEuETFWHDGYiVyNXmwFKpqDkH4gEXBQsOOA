/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Puzzle Engine
 * Pure logic components (platform independent)
 */

import { Difficulty, GameMode, Puzzle, PuzzleOption, PuzzleResult, PuzzleSessionState } from './models';

export class AnswerValidator {
  public static validate(puzzle: Puzzle, selectedAnswer: string): boolean {
    if (!selectedAnswer) return false;
    const cleanAnswer = selectedAnswer.trim().toLowerCase();
    const cleanCorrect = puzzle.correctAnswer.trim().toLowerCase();
    return cleanAnswer === cleanCorrect;
  }
}

export class ScoreCalculator {
  public static calculate(
    puzzle: Puzzle,
    isCorrect: boolean,
    timeSpentSeconds: number,
    hintsUsed: number,
    retries: number,
    mode: GameMode
  ): PuzzleResult {
    if (!isCorrect) {
      return {
        puzzleId: puzzle.id,
        category: puzzle.category,
        difficulty: puzzle.difficulty,
        isCorrect: false,
        stars: 0,
        score: 0,
        timeSpent: timeSpentSeconds,
        hintsUsed,
        retries,
        xpEarned: 10, // Small consolation XP for effort
      };
    }

    // Difficulty multiplier
    const diffMultiplier =
      puzzle.difficulty === 'HARD' ? 2.0 : puzzle.difficulty === 'MEDIUM' ? 1.5 : 1.0;

    let baseScore = puzzle.basePoints * diffMultiplier;

    // Speed bonus: If solved under half the time limit, up to 25% bonus
    const maxTime = puzzle.timeLimit || 60;
    let speedBonus = 0;
    if (mode !== 'zen' && timeSpentSeconds < maxTime) {
      const timeRatio = Math.max(0, (maxTime - timeSpentSeconds) / maxTime);
      speedBonus = Math.round(baseScore * 0.25 * timeRatio);
    }

    // Hint deductions: 1st hint -10%, 2nd hint -25%
    let hintDeduction = 0;
    if (hintsUsed === 1) {
      hintDeduction = Math.round(baseScore * 0.1);
    } else if (hintsUsed >= 2) {
      hintDeduction = Math.round(baseScore * 0.25);
    }

    // Retry penalty: 10% per retry (max 30%)
    const retryDeduction = Math.min(Math.round(baseScore * 0.1 * retries), Math.round(baseScore * 0.3));

    const finalScore = Math.max(20, Math.round(baseScore + speedBonus - hintDeduction - retryDeduction));

    // Star calculation:
    // 3 Stars: No hints used, under 70% of time limit, retries <= 0
    // 2 Stars: At most 1 hint used or minor retry
    // 1 Star: Solved with 2 hints or multiple retries
    let stars = 1;
    if (hintsUsed === 0 && retries === 0 && (mode === 'zen' || timeSpentSeconds <= maxTime * 0.75)) {
      stars = 3;
    } else if (hintsUsed <= 1 && retries <= 1) {
      stars = 2;
    } else {
      stars = 1;
    }

    const xpEarned = Math.round(finalScore * 0.5) + stars * 25;

    return {
      puzzleId: puzzle.id,
      category: puzzle.category,
      difficulty: puzzle.difficulty,
      isCorrect: true,
      stars,
      score: finalScore,
      timeSpent: timeSpentSeconds,
      hintsUsed,
      retries,
      xpEarned,
    };
  }
}

export class HintProvider {
  public static getHint(puzzle: Puzzle, level: 1 | 2): { en: string; ur: string } | null {
    if (!puzzle.hints || puzzle.hints.length < 2) return null;
    return puzzle.hints[level - 1] || null;
  }
}

export class AdaptiveDifficulty {
  /**
   * Adaptive logic:
   * 3 consecutive correct answers -> bump difficulty higher
   * 2 consecutive wrong answers -> drop difficulty lower
   */
  public static evaluate(
    currentDifficulty: Difficulty,
    consecutiveCorrect: number,
    consecutiveWrong: number
  ): { nextDifficulty: Difficulty; changed: boolean; reason?: 'promotion' | 'demotion' } {
    if (consecutiveCorrect >= 3) {
      if (currentDifficulty === 'EASY') {
        return { nextDifficulty: 'MEDIUM', changed: true, reason: 'promotion' };
      }
      if (currentDifficulty === 'MEDIUM') {
        return { nextDifficulty: 'HARD', changed: true, reason: 'promotion' };
      }
    }

    if (consecutiveWrong >= 2) {
      if (currentDifficulty === 'HARD') {
        return { nextDifficulty: 'MEDIUM', changed: true, reason: 'demotion' };
      }
      if (currentDifficulty === 'MEDIUM') {
        return { nextDifficulty: 'EASY', changed: true, reason: 'demotion' };
      }
    }

    return { nextDifficulty: currentDifficulty, changed: false };
  }
}

export class CategoryVerifiers {
  /**
   * Verifies number series mathematically
   * e.g., geometric, arithmetic, fibonacci, squares
   */
  public static verifyNumberSequence(sequence: number[], formula: 'arithmetic' | 'geometric' | 'fibonacci' | 'squares'): boolean {
    if (sequence.length < 3) return false;
    if (formula === 'arithmetic') {
      const diff = sequence[1] - sequence[0];
      for (let i = 2; i < sequence.length; i++) {
        if (sequence[i] - sequence[i - 1] !== diff) return false;
      }
      return true;
    }
    if (formula === 'geometric') {
      const ratio = sequence[1] / sequence[0];
      for (let i = 2; i < sequence.length; i++) {
        if (Math.abs(sequence[i] / sequence[i - 1] - ratio) > 0.001) return false;
      }
      return true;
    }
    if (formula === 'fibonacci') {
      for (let i = 2; i < sequence.length; i++) {
        if (sequence[i] !== sequence[i - 1] + sequence[i - 2]) return false;
      }
      return true;
    }
    if (formula === 'squares') {
      const startRoot = Math.round(Math.sqrt(sequence[0]));
      for (let i = 0; i < sequence.length; i++) {
        const expected = (startRoot + i) * (startRoot + i);
        if (sequence[i] !== expected) return false;
      }
      return true;
    }
    return true;
  }

  /**
   * Verifies 4x4 Mini Sudoku grid
   */
  public static verifyMiniSudoku(grid: number[][]): boolean {
    if (grid.length !== 4 || grid.some((r) => r.length !== 4)) return false;

    // Check rows
    for (let r = 0; r < 4; r++) {
      const set = new Set(grid[r]);
      if (set.size !== 4 || set.has(0)) return false;
    }

    // Check cols
    for (let c = 0; c < 4; c++) {
      const col = [grid[0][c], grid[1][c], grid[2][c], grid[3][c]];
      const set = new Set(col);
      if (set.size !== 4 || set.has(0)) return false;
    }

    // Check 2x2 boxes
    for (let boxRow = 0; boxRow < 2; boxRow++) {
      for (let boxCol = 0; boxCol < 2; boxCol++) {
        const box = [
          grid[boxRow * 2][boxCol * 2],
          grid[boxRow * 2][boxCol * 2 + 1],
          grid[boxRow * 2 + 1][boxCol * 2],
          grid[boxRow * 2 + 1][boxCol * 2 + 1],
        ];
        const set = new Set(box);
        if (set.size !== 4 || set.has(0)) return false;
      }
    }

    return true;
  }

  /**
   * Evaluates arithmetic equation correctness
   */
  public static verifyEquation(equationStr: string, expectedVal: number): boolean {
    try {
      // Safe sanitizer: only digits, spaces, and + - * / ( )
      if (!/^[0-9+\-*/()\s]+$/.test(equationStr)) return false;
      // eslint-disable-next-line no-new-func
      const result = new Function(`return (${equationStr});`)();
      return Math.abs(result - expectedVal) < 0.001;
    } catch {
      return false;
    }
  }
}

export class PuzzleValidator {
  public static validatePuzzle(puzzle: Puzzle): { isValid: boolean; error?: string } {
    if (!puzzle.id) return { isValid: false, error: 'Puzzle ID is required' };
    if (!puzzle.instructions?.en || !puzzle.instructions?.ur) {
      return { isValid: false, error: `Puzzle ${puzzle.id} missing instructions in EN or UR` };
    }
    if (!puzzle.question?.en || !puzzle.question?.ur) {
      return { isValid: false, error: `Puzzle ${puzzle.id} missing question in EN or UR` };
    }
    if (!puzzle.options || puzzle.options.length < 2) {
      return { isValid: false, error: `Puzzle ${puzzle.id} must have at least 2 options` };
    }
    if (!puzzle.correctAnswer) {
      return { isValid: false, error: `Puzzle ${puzzle.id} has no correctAnswer` };
    }

    // Confirm that the correct answer matches an option id or value
    const match = puzzle.options.some((opt) => opt.id === puzzle.correctAnswer);
    if (!match) {
      return {
        isValid: false,
        error: `Puzzle ${puzzle.id} correct answer '${puzzle.correctAnswer}' does not match any option ID`,
      };
    }

    if (!puzzle.hints || puzzle.hints.length !== 2) {
      return { isValid: false, error: `Puzzle ${puzzle.id} must have exactly 2 progressive hints` };
    }

    // Ensure neither hint gives away the exact answer explicitly
    for (const hint of puzzle.hints) {
      if (!hint.en || !hint.ur) {
        return { isValid: false, error: `Puzzle ${puzzle.id} has empty hint translations` };
      }
    }

    return { isValid: true };
  }
}
