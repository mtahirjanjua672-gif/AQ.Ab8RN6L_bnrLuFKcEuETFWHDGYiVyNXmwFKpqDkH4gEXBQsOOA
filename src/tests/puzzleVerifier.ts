/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Automated Verification & Test Suite
 * Validates all 72 puzzles, category algorithms, hints, and schemas
 */

import { BUNDLED_PUZZLES } from '../data/puzzles';
import { 
  PuzzleValidator, 
  AnswerValidator, 
  ScoreCalculator, 
  AdaptiveDifficulty, 
  CategoryVerifiers 
} from '../domain/engine';
import { PuzzleCategory } from '../domain/models';

export function runComprehensiveTestSuite(): { passed: boolean; report: string[] } {
  const logs: string[] = [];
  let allPassed = true;

  logs.push(`=== JDH Mind Puzzles AI - Test Suite ===`);
  logs.push(`Total Bundled Puzzles: ${BUNDLED_PUZZLES.length}`);

  // Test 1: Count requirements (72 total, 12 per category, 4 Easy / 4 Medium / 4 Hard)
  const categories: PuzzleCategory[] = ['logic', 'memory', 'pattern', 'number', 'visual', 'word'];
  for (const cat of categories) {
    const list = BUNDLED_PUZZLES.filter((p) => p.category === cat);
    const easy = list.filter((p) => p.difficulty === 'EASY').length;
    const med = list.filter((p) => p.difficulty === 'MEDIUM').length;
    const hard = list.filter((p) => p.difficulty === 'HARD').length;

    logs.push(`Category '${cat}': Total=${list.length} (Easy=${easy}, Med=${med}, Hard=${hard})`);
    if (list.length !== 12 || easy !== 4 || med !== 4 || hard !== 4) {
      allPassed = false;
      logs.push(`FAILED: Category '${cat}' does not have exactly 4 Easy, 4 Medium, 4 Hard!`);
    }
  }

  // Test 2: Validate each puzzle schema and answer match
  let validPuzzles = 0;
  for (const p of BUNDLED_PUZZLES) {
    const check = PuzzleValidator.validatePuzzle(p);
    if (!check.isValid) {
      allPassed = false;
      logs.push(`FAIL on Puzzle ${p.id}: ${check.error}`);
    } else {
      validPuzzles++;
    }

    // Verify answer validator accepts correct answer
    if (!AnswerValidator.validate(p, p.correctAnswer)) {
      allPassed = false;
      logs.push(`FAIL on Puzzle ${p.id}: AnswerValidator rejected correct answer`);
    }
  }
  logs.push(`Schema Validation: ${validPuzzles}/${BUNDLED_PUZZLES.length} puzzles 100% valid.`);

  // Test 3: Programmatic Category Verifiers
  // Mini Sudoku verifier
  const validSudoku = [
    [1, 2, 3, 4],
    [3, 4, 1, 2],
    [2, 1, 4, 3],
    [4, 3, 2, 1],
  ];
  if (CategoryVerifiers.verifyMiniSudoku(validSudoku)) {
    logs.push(`Mini Sudoku Verifier: PASSED`);
  } else {
    allPassed = false;
    logs.push(`Mini Sudoku Verifier: FAILED`);
  }

  // Number sequence verifier
  if (CategoryVerifiers.verifyNumberSequence([5, 10, 15, 20, 25, 30], 'arithmetic')) {
    logs.push(`Arithmetic Sequence Verifier: PASSED`);
  } else {
    allPassed = false;
    logs.push(`Arithmetic Sequence Verifier: FAILED`);
  }

  // Test 4: Adaptive Difficulty transitions
  const stepUp = AdaptiveDifficulty.evaluate('EASY', 3, 0);
  if (stepUp.nextDifficulty === 'MEDIUM' && stepUp.changed) {
    logs.push(`Adaptive Promotion (Easy -> Medium): PASSED`);
  } else {
    allPassed = false;
    logs.push(`Adaptive Promotion: FAILED`);
  }

  const stepDown = AdaptiveDifficulty.evaluate('HARD', 0, 2);
  if (stepDown.nextDifficulty === 'MEDIUM' && stepDown.changed) {
    logs.push(`Adaptive Demotion (Hard -> Medium): PASSED`);
  } else {
    allPassed = false;
    logs.push(`Adaptive Demotion: FAILED`);
  }

  // Test 5: Score Calculator
  const samplePuzzle = BUNDLED_PUZZLES[0];
  const perfectResult = ScoreCalculator.calculate(samplePuzzle, true, 10, 0, 0, 'classic');
  if (perfectResult.stars === 3 && perfectResult.score > samplePuzzle.basePoints) {
    logs.push(`Score Calculator (3 Stars + Speed Bonus): PASSED`);
  } else {
    allPassed = false;
    logs.push(`Score Calculator: FAILED`);
  }

  logs.push(`=== Summary: ${allPassed ? 'ALL TESTS PASSED ✓' : 'TESTS FAILED ✗'} ===`);
  return { passed: allPassed, report: logs };
}

// Self-executing runner when executed via tsx
if (typeof process !== 'undefined' && process.argv && process.argv[1]?.includes('puzzleVerifier')) {
  const result = runComprehensiveTestSuite();
  console.log(result.report.join('\n'));
  if (!result.passed) {
    process.exit(1);
  }
}
