package com.janjuadigitalhub.mindpuzzles.domain

enum class Difficulty { EASY, MEDIUM, HARD }

enum class PuzzleCategory { LOGIC, MEMORY, PATTERN, NUMBER, VISUAL, WORD }

data class LocalizedText(val en: String, val ur: String)

data class PuzzleOption(val id: String, val text: LocalizedText)

data class Puzzle(
    val id: String,
    val category: PuzzleCategory,
    val difficulty: Difficulty,
    val instructions: LocalizedText,
    val question: LocalizedText,
    val options: List<PuzzleOption>,
    val correctAnswer: String,
    val explanation: LocalizedText,
    val hints: Pair<LocalizedText, LocalizedText>,
    val timeLimitSeconds: Int = 60,
    val basePoints: Int = 100
)

object AnswerValidator {
    fun validate(puzzle: Puzzle, selectedAnswer: String): Boolean {
        return puzzle.correctAnswer.trim().equals(selectedAnswer.trim(), ignoreCase = true)
    }
}

object ScoreCalculator {
    fun calculate(
        puzzle: Puzzle,
        isCorrect: Boolean,
        timeSpentSeconds: Int,
        hintsUsed: Int,
        retries: Int
    ): Int {
        if (!isCorrect) return 10
        val multiplier = when (puzzle.difficulty) {
            Difficulty.EASY -> 1.0
            Difficulty.MEDIUM -> 1.5
            Difficulty.HARD -> 2.0
        }
        var score = (puzzle.basePoints * multiplier).toInt()
        if (timeSpentSeconds < puzzle.timeLimitSeconds / 2) {
            score += (score * 0.25).toInt()
        }
        if (hintsUsed == 1) score -= (score * 0.10).toInt()
        else if (hintsUsed >= 2) score -= (score * 0.25).toInt()
        return maxOf(20, score - (retries * 15))
    }
}

object AdaptiveDifficulty {
    fun evaluate(current: Difficulty, consecutiveCorrect: Int, consecutiveWrong: Int): Difficulty {
        if (consecutiveCorrect >= 3) {
            return when (current) {
                Difficulty.EASY -> Difficulty.MEDIUM
                Difficulty.MEDIUM -> Difficulty.HARD
                Difficulty.HARD -> Difficulty.HARD
            }
        }
        if (consecutiveWrong >= 2) {
            return when (current) {
                Difficulty.HARD -> Difficulty.MEDIUM
                Difficulty.MEDIUM -> Difficulty.EASY
                Difficulty.EASY -> Difficulty.EASY
            }
        }
        return current
    }
}

object CategoryVerifiers {
    fun verifyMiniSudoku(grid: Array<IntArray>): Boolean {
        if (grid.size != 4) return false
        for (row in grid) {
            if (row.toSet().size != 4 || row.contains(0)) return false
        }
        for (c in 0 until 4) {
            val col = setOf(grid[0][c], grid[1][c], grid[2][c], grid[3][c])
            if (col.size != 4 || col.contains(0)) return false
        }
        return true
    }
}
