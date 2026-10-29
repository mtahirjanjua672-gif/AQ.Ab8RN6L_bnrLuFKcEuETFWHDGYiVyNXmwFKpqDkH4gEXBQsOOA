package com.janjuadigitalhub.mindpuzzles

import com.janjuadigitalhub.mindpuzzles.domain.*
import org.junit.Assert.*
import org.junit.Test

class PuzzleEngineUnitTest {

    @Test
    fun testAnswerValidation() {
        val puzzle = Puzzle(
            id = "test-1",
            category = PuzzleCategory.LOGIC,
            difficulty = Difficulty.EASY,
            instructions = LocalizedText("Find answer", "جواب ڈھونڈیں"),
            question = LocalizedText("2 + 2 = ?", "2 + 2 = ؟"),
            options = listOf(
                PuzzleOption("opt-4", LocalizedText("4", "4")),
                PuzzleOption("opt-5", LocalizedText("5", "5"))
            ),
            correctAnswer = "opt-4",
            explanation = LocalizedText("2 + 2 = 4", "2 + 2 = 4"),
            hints = Pair(
                LocalizedText("Think of counting", "گنتی سوچیں"),
                LocalizedText("Between 3 and 5", "3 اور 5 کے درمیان")
            )
        )

        assertTrue(AnswerValidator.validate(puzzle, "opt-4"))
        assertFalse(AnswerValidator.validate(puzzle, "opt-5"))
    }

    @Test
    fun testAdaptiveDifficultyPromotion() {
        val next = AdaptiveDifficulty.evaluate(Difficulty.EASY, 3, 0)
        assertEquals(Difficulty.MEDIUM, next)
    }

    @Test
    fun testMiniSudokuVerifier() {
        val validSudoku = arrayOf(
            intArrayOf(1, 2, 3, 4),
            intArrayOf(3, 4, 1, 2),
            intArrayOf(2, 1, 4, 3),
            intArrayOf(4, 3, 2, 1)
        )
        assertTrue(CategoryVerifiers.verifyMiniSudoku(validSudoku))
    }
}
