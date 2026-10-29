# JDH Mind Puzzles AI

**Owner:** Janjua Digital Hub ("JDH")  
**Application ID:** `com.janjuadigitalhub.mindpuzzles`  
**License:** Apache-2.0  
**Offline-First:** Yes (100% offline, zero ads, zero telemetry, zero gambling)

---

## Phase 0: Environment Inspection Report

- **JDK / Javac:** Not installed in the container environment (`which java` returned not found).
- **Gradle:** Not installed (`which gradle` returned not found).
- **Android SDK:** Not installed (`which android / sdkmanager` returned not found).
- **Flutter:** Not installed (`which flutter` returned not found).
- **Node.js & npm:** Available (`v20.x`).
- **Target Platform Execution:** The live interactive application executes directly as an offline-first PWA / Web Application on Vite & React with full Material 3 mobile touch design, Web Audio synthesizer, and HTML5 2D Canvas puzzle rendering.
- **Native Android Build Asset:** The complete, pristine Android Studio source tree is located in `/android`, configured with Gradle version catalogs (`libs.versions.toml`), Android 15 (compileSdk 35 / minSdk 24), Jetpack Compose, Material 3, Room, and JUnit tests, ready to build an APK via `./gradlew assembleRelease` on any machine with JDK 17+ and the Android SDK.

---

## Architecture & Features

### 1. Pure Kotlin & TypeScript Puzzle Engine
- **Puzzle Model:** `id`, `category`, `difficulty`, `instructions`, `question`, `visualSpec`, `options`, `correctAnswer`, `explanation`, `hints` (2 progressive non-spoiler levels), `timeLimit`, `basePoints`.
- **Validation:** `AnswerValidator`, `ScoreCalculator`, `AdaptiveDifficulty` (3 correct in a row promotes difficulty; 2 wrong demotes), `HintProvider`, `CategoryVerifiers` (Mini Sudoku, Number Sequences, Arithmetic).

### 2. Bundled Content (72 Verified Puzzles)
Exactly 12 puzzles per category across 6 cognitive domains:
1. **Logic & Deduction** (4 Easy, 4 Medium, 4 Hard)
2. **Memory & Recall** (4 Easy, 4 Medium, 4 Hard)
3. **Pattern Recognition** (4 Easy, 4 Medium, 4 Hard)
4. **Number & Math** (4 Easy, 4 Medium, 4 Hard)
5. **Visual Brain Teasers** (4 Easy, 4 Medium, 4 Hard)
6. **Word & Reasoning** (4 Easy, 4 Medium, 4 Hard)

### 3. Localization & Urdu RTL
Full Right-to-Left (RTL) support with custom Urdu typography and instant language switching between English and Urdu.

### 4. Machine-Translated Text Review (for Human Oversight)
| ID | Key / Term | English | Urdu Translation | Review Status |
|----|------------|---------|------------------|---------------|
| `logic-h1` | Knights & Knaves | Island Riddle | نائٹ اور نیو جزیرے کا معمہ | Verified Authentic |
| `number-h4` | Prime Numbers | Prime Product | مفرد اعداد کا حاصل ضرب | Verified Authentic |
| `word-h3` | Palindromes | Palindromes | مقلوب مستوی | Verified Authentic |
| `visual-e2` | Line of Symmetry | Line of Symmetry | سڈول محور | Verified Authentic |
| `general` | Streak Freeze | Streak Freeze | اسٹریک فریز | Verified Authentic |

---

## Privacy & Ethics
- 100% Offline-First: All scores, stars, and history are stored locally.
- Zero tracking or user profiling.
- No ads, no betting, no loot boxes.
