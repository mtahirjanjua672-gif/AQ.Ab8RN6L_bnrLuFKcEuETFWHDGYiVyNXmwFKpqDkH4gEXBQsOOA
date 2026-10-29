/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Native Android Project Source Code Viewer
 * Displays the complete Kotlin, Jetpack Compose, Room, and Gradle architecture
 */

import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Smartphone, Terminal } from 'lucide-react';
import { Language } from '../../core/i18n';

interface AndroidProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AndroidProjectModal: React.FC<AndroidProjectModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'manifest' | 'engine' | 'compose' | 'room' | 'gradle'>('engine');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets: Record<string, { title: string; filename: string; code: string }> = {
    engine: {
      title: 'Pure Kotlin Puzzle Engine (Zero Android Imports)',
      filename: 'com/janjuadigitalhub/mindpuzzles/domain/PuzzleEngine.kt',
      code: `package com.janjuadigitalhub.mindpuzzles.domain

enum class Difficulty { EASY, MEDIUM, HARD }
enum class PuzzleCategory { LOGIC, MEMORY, PATTERN, NUMBER, VISUAL, WORD }

data class LocalizedText(val en: String, val ur: String)

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

data class PuzzleOption(val id: String, val text: LocalizedText)

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
}`,
    },
    compose: {
      title: 'Jetpack Compose Material 3 UI Screen',
      filename: 'com/janjuadigitalhub/mindpuzzles/ui/screens/GameplayScreen.kt',
      code: `package com.janjuadigitalhub.mindpuzzles.ui.screens

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.janjuadigitalhub.mindpuzzles.domain.Puzzle

@Composable
fun GameplayScreen(
    puzzle: Puzzle,
    onAnswerSelected: (String) -> Unit,
    onHintRequested: () -> Unit,
    onUndoRequested: () -> Unit
) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = Color(0xFF0A192F)
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = puzzle.instructions.en,
                style = MaterialTheme.typography.titleMedium,
                color = Color(0xFF38BDF8)
            )
            Spacer(modifier = Modifier.height(12.dp))
            Card(
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF0D1B2A)),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = puzzle.question.en,
                    style = MaterialTheme.typography.bodyLarge,
                    color = Color.White,
                    modifier = Modifier.padding(20.dp)
                )
            }
            Spacer(modifier = Modifier.height(16.dp))
            puzzle.options.forEach { option ->
                Button(
                    onClick = { onAnswerSelected(option.id) },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(56.dp)
                        .padding(vertical = 4.dp),
                    shape = RoundedCornerShape(16.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF1E3A8A))
                ) {
                    Text(option.text.en, color = Color.White)
                }
            }
        }
    }
}`,
    },
    room: {
      title: 'Room Database & Progress Entities',
      filename: 'com/janjuadigitalhub/mindpuzzles/data/PuzzleDatabase.kt',
      code: `package com.janjuadigitalhub.mindpuzzles.data

import androidx.room.*
import kotlinx.coroutines.flow.Flow

@Entity(tableName = "puzzle_progress")
data class PuzzleProgressEntity(
    @PrimaryKey val puzzleId: String,
    val category: String,
    val difficulty: String,
    val starsEarned: Int,
    val bestScore: Int,
    val isCompleted: Boolean,
    val completedAt: Long = System.currentTimeMillis()
)

@Dao
interface PuzzleDao {
    @Query("SELECT * FROM puzzle_progress")
    fun getAllProgress(): Flow<List<PuzzleProgressEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun saveProgress(progress: PuzzleProgressEntity)

    @Query("DELETE FROM puzzle_progress")
    suspend fun clearAll()
}

@Database(entities = [PuzzleProgressEntity::class], version = 1, exportSchema = false)
abstract class PuzzleDatabase : RoomDatabase() {
    abstract fun puzzleDao(): PuzzleDao
}`,
    },
    manifest: {
      title: 'Android Manifest & Permissions',
      filename: 'AndroidManifest.xml',
      code: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.janjuadigitalhub.mindpuzzles">

    <!-- Permissions: INTERNET, VIBRATE, and POST_NOTIFICATIONS (for opt-in reminders) -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="JDH Mind Puzzles AI"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.JdhMindPuzzles">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait"
            android:theme="@style/Theme.JdhMindPuzzles">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`,
    },
    gradle: {
      title: 'Gradle Version Catalog & Build Configuration',
      filename: 'build.gradle.kts (App)',
      code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.ksp)
}

android {
    namespace = "com.janjuadigitalhub.mindpuzzles"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.janjuadigitalhub.mindpuzzles"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildFeatures {
        compose = true
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.room.runtime)
    implementation(libs.androidx.room.ktx)
    ksp(libs.androidx.room.compiler)
    testImplementation(libs.junit)
}`,
    },
  };

  const current = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0A192F] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-950 rounded-xl border border-cyan-800/40">
              <Smartphone className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'ur' ? 'اینڈرائیڈ پروجیکٹ سورس کوڈ' : 'Android Kotlin Native Architecture'}
              </h3>
              <p className="text-xs text-slate-400">
                Application ID: <span className="font-mono text-cyan-300">com.janjuadigitalhub.mindpuzzles</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60"
            aria-label="Close Android Code Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 py-3 overflow-x-auto border-b border-slate-800/80">
          {(['engine', 'compose', 'room', 'manifest', 'gradle'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Subtitle & Filename */}
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <FileCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>{current.filename}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-md transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Code Block */}
        <div className="flex-1 overflow-y-auto bg-[#050D1A] p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed">
          <pre>{current.code}</pre>
        </div>

        {/* Footer info note */}
        <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Target SDK 35 · Min SDK 24 · Room 2.6 · Jetpack Compose M3</span>
          <span className="text-emerald-400 font-medium">✓ Clean Architecture Ready</span>
        </div>
      </div>
    </div>
  );
};
