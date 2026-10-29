/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Comprehensive Bilingual Localization (EN & UR)
 * Complete Right-to-Left (RTL) support for Urdu
 */

import { PuzzleCategory } from '../domain/models';

export type Language = 'en' | 'ur';

export const translations = {
  en: {
    appName: 'JDH Mind Puzzles AI',
    appTagline: 'Sharpen Your Mind, One Puzzle at a Time',
    ownerBranding: 'Janjua Digital Hub',
    offlineBadge: '100% Offline & Private',

    // Nav
    home: 'Home',
    categories: 'Categories',
    daily: 'Daily',
    stats: 'Stats',
    settings: 'Settings',

    // Home screen
    continuePuzzle: 'Continue Last Puzzle',
    quickPlay: 'Quick Play',
    quickPlaySubtitle: '5 varied puzzles · ~2 mins',
    dailyChallenge: 'Daily Challenge',
    dailyChallengeSubtitle: 'Unique deterministic puzzle for today',
    streakCount: 'Day Streak',
    streakFreeze: 'Streak Freeze',
    streakFreezeDesc: 'Protect your streak if you miss a day. Earn 1 free per week!',
    startPlaying: 'Start Training',
    chooseCategory: 'Cognitive Domains',
    allPuzzles: 'All Levels',
    todayCompleted: 'Completed Today!',

    // Modes
    modeClassic: 'Classic',
    modeClassicDesc: 'Standard timer with speed bonuses',
    modeTimed: 'Timed (60s)',
    modeTimedDesc: 'Intense 60-second cognitive rush',
    modeEndless: 'Endless',
    modeEndlessDesc: 'Continuous flow of adaptive puzzles',
    modeZen: 'Zen Mode',
    modeZenDesc: 'No timer pressure, pure contemplation',

    // In-game controls
    undo: 'Undo',
    hint: 'Hint',
    hintsLeft: 'Hints',
    skip: 'Skip',
    skipNote: 'Skipping preserves your daily streak',
    pause: 'Pause',
    resume: 'Resume',
    restart: 'Restart',
    quitToHome: 'Exit Puzzle',
    timeRemaining: 'Time Left',
    basePoints: 'Base XP',
    submitAnswer: 'Confirm Choice',
    selectAnOption: 'Select an answer to proceed',

    // Hints
    hintLevel1: 'Hint 1: Directional Clue',
    hintLevel2: 'Hint 2: Structural Clue',
    hintWarning: 'Using hints provides guidance without spoiling the solution.',
    hintUsedTag: 'Hint Active',

    // Results & Feedback
    correctTitle: 'Brilliant Solve!',
    wrongTitle: 'Not Quite Right',
    starsEarned: 'Stars Earned',
    scoreEarned: 'Score',
    xpGained: 'XP Gained',
    speedBonus: 'Speed Bonus',
    hintsPenalty: 'Hints Deduction',
    retriesPenalty: 'Retries Deduction',
    timeTaken: 'Time Taken',
    explanationTitle: 'Logical Breakdown & Explanation',
    nextPuzzle: 'Next Puzzle',
    tryAgain: 'Try Again',
    shareScore: 'Share Card',
    backToCategories: 'Categories',

    // Categories
    cat_logic: 'Logic & Deduction',
    cat_logic_desc: 'Deductive reasoning, missing numbers, and balance equations',
    cat_memory: 'Memory & Recall',
    cat_memory_desc: 'Card pairs, visual sequences, and spatial memory recall',
    cat_pattern: 'Pattern Recognition',
    cat_pattern_desc: 'Geometric sequences, tile rotation, and symmetry matrices',
    cat_number: 'Number & Math',
    cat_number_desc: 'Mini Sudoku grids, arithmetic equations, and numeric pyramids',
    cat_visual: 'Visual Teasers',
    cat_visual_desc: 'Odd-shape-out, 3D folded nets, and spatial rotation',
    cat_word: 'Word & Reasoning',
    cat_word_desc: 'Associations, linguistic riddles, and conceptual classification',

    // Difficulty
    diff_EASY: 'Easy',
    diff_MEDIUM: 'Medium',
    diff_HARD: 'Hard',

    // Levels
    level: 'Level',
    locked: 'Locked',
    unlocked: 'Unlocked',

    // Stats & Achievements
    cognitiveOverview: 'Cognitive Mastery Radar',
    weeklyGoal: 'Weekly Goal',
    weeklyGoalDesc: 'Solve 15 puzzles this week to earn +250 XP bonus',
    accuracyTrend: 'Accuracy Trend',
    bestCategory: 'Best Domain',
    totalSolves: 'Total Puzzles Solved',
    playerLevel: 'Cognitive Rank',
    achievementsTitle: 'Achievements & Milestones',
    achievementsCount: 'Unlocked',

    // Settings
    settingsTitle: 'Settings & Preferences',
    appearance: 'Appearance',
    themeDark: 'Deep Navy (Dark)',
    themeLight: 'Crisp Slate (Light)',
    themeSystem: 'System Default',
    language: 'Language / زبان',
    soundEffects: 'Sound Effects',
    soundEffectsDesc: 'Chimes and acoustic feedback',
    vibration: 'Haptic Feedback',
    vibrationDesc: 'Vibrate on selection and completion',
    reducedMotion: 'Reduced Motion',
    reducedMotionDesc: 'Minimize animated transitions',
    adaptiveDiffTitle: 'Adaptive Difficulty',
    adaptiveDiffAuto: 'Auto (Dynamic)',
    adaptiveDiffManual: 'Manual Selection',
    dailyReminder: 'Daily Training Reminder',
    dailyReminderDesc: 'Notify once per day at your chosen time',
    reminderTime: 'Reminder Time',
    resetProgress: 'Reset Game Progress',
    resetProgressWarning: 'Are you sure? This will reset all stars, streaks, and XP permanently.',
    confirmReset: 'Confirm Reset',
    cancel: 'Cancel',
    exportAndroidCode: 'Android Project Source',
    exportAndroidDesc: 'Inspect Kotlin / Jetpack Compose code for native compilation',

    // About & Privacy
    aboutJDH: 'About Janjua Digital Hub',
    aboutText: 'JDH Mind Puzzles AI is crafted with passion by Janjua Digital Hub (JDH). Our mission is to engineer high-utility, privacy-respecting cognitive software that enhances mental acuity without addictive gambling loops or data collection.',
    privacyTitle: 'Privacy & Ethics Policy',
    privacyPoints: [
      '100% Offline-First: All puzzle progress, scores, and settings reside on your device.',
      'Zero Personal Data: No telemetry, no tracker scripts, and no user profiling.',
      'No Gambling or Ads: No loot boxes, no paid random rewards, and zero advertising interruptions.',
      'Ethical Cognitive Design: Encouraging non-guilt-based daily streaks and healthy brain exercise.',
    ],
    version: 'Version 1.0.0 (Build 2026.10)',

    // Encouraging messages
    quotes: [
      'Every puzzle solved builds sharper neural pathways.',
      'Progress comes from deliberate thought, not rush.',
      'Curiosity and patience unlock the toughest riddles.',
      'Great minds grow through challenges, one step at a time.',
      'Your mental agility is steadily expanding today.',
      'Mistakes are simply stepping stones to insight.',
      'Focus is like a muscle: the more you train, the stronger it gets.',
      'Dedication is the true engine of cognitive mastery.',
    ],

    // Tutorial
    tutorialWelcome: 'Welcome to JDH Mind Puzzles AI!',
    tutorialStep1: 'Explore 6 cognitive domains tailored to strengthen logic, memory, patterns, numbers, visual teasers, and reasoning.',
    tutorialStep2: 'Use Undo if you reconsider an option, or tap Hint for progressive clues without spoiling the answer.',
    tutorialStep3: 'Complete the Daily Challenge each morning to keep your streak glowing!',
    gotIt: 'Got It, Let’s Play!',
    skipTutorial: 'Skip Tutorial',
  },

  ur: {
    appName: 'جے ڈی ایچ مائنڈ پزلز',
    appTagline: 'ذہانت کو نکھاریں، ایک وقت میں ایک معمہ',
    ownerBranding: 'جنجوعہ ڈیجیٹل ہب (JDH)',
    offlineBadge: '100% آف لائن اور محفوظ',

    // Nav
    home: 'ہوم',
    categories: 'اقسام',
    daily: 'روزانہ چیلنج',
    stats: 'کارکردگی',
    settings: 'ترتیبات',

    // Home screen
    continuePuzzle: 'آخری نامکمل معمہ جاری رکھیں',
    quickPlay: 'فوری کھیل',
    quickPlaySubtitle: '5 منتخب پہیلیاں · صرف 2 منٹ',
    dailyChallenge: 'روزانہ چیلنج',
    dailyChallengeSubtitle: 'آج کی تاریخ کے لیے مخصوص ذہنی معمہ',
    streakCount: 'مسلسل دن',
    streakFreeze: 'اسٹریک فریز',
    streakFreezeDesc: 'ایک دن چھوڑنے پر اپنی اسٹریک محفوظ رکھیں۔ ہفتے میں 1 مفت حاصل کریں!',
    startPlaying: 'کھیل شروع کریں',
    chooseCategory: 'ذہنی شعبہ جات',
    allPuzzles: 'تمام مراحل',
    todayCompleted: 'آج کا چیلنج مکمل!',

    // Modes
    modeClassic: 'کلاسک',
    modeClassicDesc: 'وقت کے ساتھ رفتار کا بونس',
    modeTimed: 'وقتی (60 سیکنڈ)',
    modeTimedDesc: '60 سیکنڈ کا تیز رفتار امتحان',
    modeEndless: 'لامتناہی',
    modeEndlessDesc: 'مسلسل پہیلیوں کا سلسلہ',
    modeZen: 'پرسکون (Zen)',
    modeZenDesc: 'بغیر وقت کے دباؤ کے اطمینان سے کھیلیں',

    // In-game controls
    undo: 'واپسی (Undo)',
    hint: 'اشارہ (Hint)',
    hintsLeft: 'اشارے',
    skip: 'آگے بڑھیں',
    skipNote: 'چھوڑنے سے آپ کا روزانہ سلسلہ نہیں ٹوٹے گا',
    pause: 'وقفہ',
    resume: 'دوبارہ شروع',
    restart: 'نئے سرے سے',
    quitToHome: 'باہر نکلیں',
    timeRemaining: 'باقی وقت',
    basePoints: 'بنیادی اسکور',
    submitAnswer: 'جواب منتخب کریں',
    selectAnOption: 'آگے بڑھنے کے لیے ایک آپشن منتخب کریں',

    // Hints
    hintLevel1: 'اشارہ 1: سمت کا اشارہ',
    hintLevel2: 'اشارہ 2: ساختی رہنمائی',
    hintWarning: 'اشارے حل ظاہر کیے بغیر آپ کی مدد کرتے ہیں۔',
    hintUsedTag: 'اشارہ استعمال شدہ',

    // Results & Feedback
    correctTitle: 'شاندار! بالکل درست جواب',
    wrongTitle: 'تھوڑی سی چوک ہو گئی',
    starsEarned: 'ستارے',
    scoreEarned: 'حاصل کردہ اسکور',
    xpGained: 'ایکس پی (XP)',
    speedBonus: 'رفتار کا بونس',
    hintsPenalty: 'اشارے کی کٹوتی',
    retriesPenalty: 'کوششوں کی کٹوتی',
    timeTaken: 'صرف شدہ وقت',
    explanationTitle: 'منطقی تجزیہ اور تفصیلی وضاحت',
    nextPuzzle: 'اگلا معمہ',
    tryAgain: 'دوبارہ کوشش کریں',
    shareScore: 'کارڈ شیئر کریں',
    backToCategories: 'اقسام کی فہرست',

    // Categories
    cat_logic: 'منطق و استدلال',
    cat_logic_desc: 'منطقی نتائج، پوشیدہ اعداد اور میزان کی پہیلیاں',
    cat_memory: 'یادداشت اور دہرائی',
    cat_memory_desc: 'تصویری جوڑے، بصری ترتیب اور یادداشت کی مشق',
    cat_pattern: 'پیٹرن کی شناخت',
    cat_pattern_desc: 'ہندسی ترتیب، گھماؤ اور سڈول اشکال',
    cat_number: 'اعداد اور ریاضی',
    cat_number_desc: 'منی سوڈوکو، حسابی مساوات اور اعدادی ہرم',
    cat_visual: 'بصری فکری پہیلیاں',
    cat_visual_desc: 'مختلف شکل کی تلاش، سڈول اور مکعب کے رخ',
    cat_word: 'الفاظ اور استنباط',
    cat_word_desc: 'باہمی روابط، اصل پہیلیاں اور فکری درجہ بندی',

    // Difficulty
    diff_EASY: 'آسان',
    diff_MEDIUM: 'درمیانہ',
    diff_HARD: 'مشکل',

    // Levels
    level: 'مرحلہ',
    locked: 'مقفل',
    unlocked: 'کھلا ہوا',

    // Stats & Achievements
    cognitiveOverview: 'ذہنی مہارت کا نقشہ',
    weeklyGoal: 'ہفتہ وار ہدف',
    weeklyGoalDesc: 'اس ہفتے 15 پہیلیاں حل کر کے +250 بونس حاصل کریں',
    accuracyTrend: 'درستگی کا تناسب',
    bestCategory: 'بہترین شعبہ',
    totalSolves: 'کل حل شدہ پہیلیاں',
    playerLevel: 'ذہنی درجہ',
    achievementsTitle: 'کامیابیاں اور اعزازات',
    achievementsCount: 'مکمل شدہ',

    // Settings
    settingsTitle: 'ترتیبات و ترجیحات',
    appearance: 'ظاہری وضع',
    themeDark: 'گہرا نیلا (Dark)',
    themeLight: 'روشن سلیٹ (Light)',
    themeSystem: 'ڈیوائس کے مطابق',
    language: 'زبان / Language',
    soundEffects: 'صوتی اثرات',
    soundEffectsDesc: 'کھیل کی خوشگوار آوازیں',
    vibration: 'تھرتھراہٹ (Haptics)',
    vibrationDesc: 'چھونے اور کامیابی پر ہلکی تھرتھراہٹ',
    reducedMotion: 'کم حرکت (Reduced Motion)',
    reducedMotionDesc: 'حرکت پذیر اثرات کو محدود رکھیں',
    adaptiveDiffTitle: 'خودکار مشکل کی سطح',
    adaptiveDiffAuto: 'خودکار (آپ کی مہارت کے مطابق)',
    adaptiveDiffManual: 'دستی انتخاب',
    dailyReminder: 'روزانہ کی یاد دہانی',
    dailyReminderDesc: 'دن میں ایک بار مقررہ وقت پر یاد دہانی',
    reminderTime: 'یاد دہانی کا وقت',
    resetProgress: 'پیش رفت کو دوبارہ شروع کریں',
    resetProgressWarning: 'کیا آپ واقعی تمام ستارے اور اسکور حذف کرنا چاہتے ہیں؟',
    confirmReset: 'تصدیق کریں',
    cancel: 'منسوخ',
    exportAndroidCode: 'اینڈرائیڈ پروجیکٹ کوڈ',
    exportAndroidDesc: 'کوٹلن اور جیٹ پیک کمپوز سورس کوڈ کا معائنہ کریں',

    // About & Privacy
    aboutJDH: 'جنجوعہ ڈیجیٹل ہب کے بارے میں',
    aboutText: 'جے ڈی ایچ مائنڈ پزلز کو جنجوعہ ڈیجیٹل ہب (JDH) نے خصوصی لگن سے تیار کیا ہے۔ ہمارا مقصد آپ کی ذہنی صلاحیتوں کو نکھارنے والے معیاری اور محفوظ ٹولز فراہم کرنا ہے، جس میں کوئی لت ڈالنے والی چیز یا اشتہارات شامل نہیں۔',
    privacyTitle: 'رازداری اور اخلاقی پالیسی',
    privacyPoints: [
      '100% آف لائن: آپ کا تمام ڈیٹا اور پیش رفت مکمل طور پر آپ کی ڈیوائس پر محفوظ ہے۔',
      'کوئی ذاتی ڈیٹا جمع نہیں: کوئی ٹریکنگ یا صارف کی معلومات جمع نہیں کی جاتیں۔',
      'بغیر اشتہارات اور جوئے کے: کوئی اشتہار یا فریب پر مبنی مالی وعدے نہیں۔',
      'مثبت ترغیب: بغیر کسی منفی احساس دلائے آپ کی روزانہ مشق کی حوصلہ افزائی۔',
    ],
    version: 'ورژن 1.0.0 (بنائٹ 2026.10)',

    // Encouraging messages
    quotes: [
      'ہر حل شدہ معمہ آپ کے دماغ کو مزید توانا بناتا ہے۔',
      'حقیقی پیش رفت غور و فکر سے حاصل ہوتی ہے، جلدی سے نہیں۔',
      'صبر اور لگن مشکل ترین سوال کو بھی آسان بنا دیتے ہیں۔',
      'چیلنجز کا سامنا کرنے سے ہی ذہانت نکھرتی ہے۔',
      'آج آپ کی ذہنی چستی میں خوشگوار اضافہ ہو رہا ہے۔',
      'غلطیاں دراصل نئی بصیرت کا پہلا زینہ ہوتی ہیں۔',
      'توجہ ایک پٹھے کی طرح ہے، جتنی مشق اتنی قوت۔',
      'مستقل مزاجی ذہنی عروج کی سب سے بڑی چابی ہے۔',
    ],

    // Tutorial
    tutorialWelcome: 'جے ڈی ایچ مائنڈ پزلز میں خوش آمدید!',
    tutorialStep1: 'اپنی منطق، یادداشت، پیٹرن، ریاضی اور بصری فہم کو 6 مختلف شعبوں میں آزمائیں۔',
    tutorialStep2: 'اگر رائے بدل جائے تو واپسی (Undo) کا بٹن دبائیں یا اشارے (Hint) سے مدد لیں۔',
    tutorialStep3: 'اپنے روزانہ سلسلے (Streak) کو قائم رکھنے کے لیے روزانہ چیلنج مکمل کریں!',
    gotIt: 'سمجھ گیا، آئیے کھیلیں!',
    skipTutorial: 'رہنمائی چھوڑیں',
  },
};

export const categoryLabels: Record<PuzzleCategory, { en: string; ur: string }> = {
  logic: { en: 'Logic & Deduction', ur: 'منطق و استدلال' },
  memory: { en: 'Memory & Recall', ur: 'یادداشت اور دہرائی' },
  pattern: { en: 'Pattern Recognition', ur: 'پیٹرن کی شناخت' },
  number: { en: 'Number & Math', ur: 'اعداد اور ریاضی' },
  visual: { en: 'Visual Teasers', ur: 'بصری فکری پہیلیاں' },
  word: { en: 'Word & Reasoning', ur: 'الفاظ اور استنباط' },
};
