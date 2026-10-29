/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - Primary Application Root
 * Owner: Janjua Digital Hub (JDH)
 */

import React, { useState, useEffect } from 'react';
import { 
  Achievement, 
  AppSettings, 
  Difficulty, 
  GameMode, 
  Puzzle, 
  PuzzleCategory, 
  PuzzleResult, 
  PuzzleSessionState, 
  UserStats 
} from './domain/models';
import { AdaptiveDifficulty, ScoreCalculator } from './domain/engine';
import { StorageService, INITIAL_SETTINGS, INITIAL_STATS } from './data/storage';
import { BUNDLED_PUZZLES } from './data/puzzles';
import { sounds } from './audio/SoundEffects';
import { translations, Language } from './core/i18n';

// Screens
import { SplashScreen } from './ui/screens/SplashScreen';
import { HomeScreen } from './ui/screens/HomeScreen';
import { LevelSelectScreen } from './ui/screens/LevelSelectScreen';
import { GameplayScreen } from './ui/screens/GameplayScreen';
import { ResultsScreen } from './ui/screens/ResultsScreen';
import { DailyChallengeScreen } from './ui/screens/DailyChallengeScreen';
import { StatsScreen } from './ui/screens/StatsScreen';
import { SettingsScreen } from './ui/screens/SettingsScreen';

// Modals & Navigation
import { BottomNavBar, NavTab } from './ui/components/BottomNavBar';
import { ShareCardModal } from './ui/components/ShareCardModal';
import { TutorialModal } from './ui/components/TutorialModal';
import { AndroidProjectModal } from './ui/components/AndroidProjectModal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  // App settings & persistence
  const [settings, setSettings] = useState<AppSettings>(() => StorageService.getSettings());
  const [stats, setStats] = useState<UserStats>(() => StorageService.getStats());
  const [achievements, setAchievements] = useState<Achievement[]>(() => StorageService.getAchievements());
  const [savedSession, setSavedSession] = useState<PuzzleSessionState | null>(() => StorageService.getSavedSession());

  // Navigation flow
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<PuzzleCategory>('logic');
  const [activeScreen, setActiveScreen] = useState<'main' | 'levelSelect' | 'gameplay' | 'results'>('main');

  // Gameplay session variables
  const [activePuzzle, setActivePuzzle] = useState<Puzzle | null>(null);
  const [activeMode, setActiveMode] = useState<GameMode>('classic');
  const [lastResult, setLastResult] = useState<PuzzleResult | null>(null);

  // Adaptive difficulty tracking
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);

  // Quick Play queue
  const [quickPlayQueue, setQuickPlayQueue] = useState<Puzzle[]>([]);

  // Apply language direction to document
  useEffect(() => {
    document.documentElement.dir = settings.language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = settings.language;
    sounds.soundEnabled = settings.soundEnabled;
    sounds.vibrationEnabled = settings.vibrationEnabled;
  }, [settings]);

  // First time onboarding check
  useEffect(() => {
    if (stats.totalSolved === 0 && typeof window !== 'undefined' && !localStorage.getItem('jdh_tutorial_seen')) {
      localStorage.setItem('jdh_tutorial_seen', 'true');
      const timer = setTimeout(() => {
        setShowTutorial(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [stats.totalSolved]);

  const handleSplashFinish = React.useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleExitGameplay = React.useCallback(() => {
    setSavedSession(StorageService.getSavedSession());
    setActiveScreen('main');
    setQuickPlayQueue([]);
  }, []);

  const handleUpdateSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    StorageService.saveSettings(newSettings);
  };

  const handleResetProgress = () => {
    StorageService.resetAllProgress();
    setStats(INITIAL_STATS);
    setSavedSession(null);
    setAchievements(StorageService.getAchievements());
    sounds.playWrong();
  };

  // Launch a puzzle
  const startPuzzle = (puzzle: Puzzle, mode: GameMode = 'classic', sessionToResume?: PuzzleSessionState | null) => {
    setActivePuzzle(puzzle);
    setActiveMode(mode);
    setSavedSession(sessionToResume || null);
    setActiveScreen('gameplay');
  };

  // Continue last unfinished puzzle
  const handleContinueSession = () => {
    if (!savedSession) return;
    const puzzle = BUNDLED_PUZZLES.find((p) => p.id === savedSession.puzzleId);
    if (puzzle) {
      startPuzzle(puzzle, savedSession.mode, savedSession);
    }
  };

  // Quick Play (5 random puzzles)
  const handleQuickPlay = () => {
    const shuffled = [...BUNDLED_PUZZLES].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuickPlayQueue(shuffled.slice(1));
    startPuzzle(shuffled[0], 'classic');
  };

  // Daily Challenge
  const handleDailyChallenge = () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    const puzzle = StorageService.getDailyPuzzleForDate(todayStr);
    startPuzzle(puzzle, 'classic');
  };

  // Handle puzzle completion
  const handleFinishPuzzle = (result: PuzzleResult) => {
    StorageService.saveSession(null);
    setSavedSession(null);
    setLastResult(result);
    setActiveScreen('results');

    // Update Adaptive Difficulty counts
    if (result.isCorrect) {
      setConsecutiveCorrect((prev) => prev + 1);
      setConsecutiveWrong(0);
    } else {
      setConsecutiveWrong((prev) => prev + 1);
      setConsecutiveCorrect(0);
    }

    // Update Stats
    const updatedStats = { ...stats };
    updatedStats.totalSolved += result.isCorrect ? 1 : 0;
    updatedStats.totalXp += result.xpEarned;

    // Level progression: 100 XP per level
    updatedStats.level = Math.floor(updatedStats.totalXp / 150) + 1;

    // Update Category Stats
    const cat = result.category;
    const catStat = updatedStats.categoryStats[cat];
    if (result.isCorrect) {
      catStat.solved = Math.min(12, catStat.solved + 1);
      catStat.totalStars += result.stars;
    }

    // Save completed puzzle entry
    const existing = updatedStats.completedPuzzleIds[result.puzzleId];
    if (result.isCorrect) {
      updatedStats.completedPuzzleIds[result.puzzleId] = {
        stars: Math.max(existing?.stars || 0, result.stars),
        bestScore: Math.max(existing?.bestScore || 0, result.score),
      };
    }

    // Daily streak check
    StorageService.updateDailyStreak(updatedStats);

    // If this was today's daily puzzle
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayDaily = StorageService.getDailyPuzzleForDate(todayStr);
    if (result.puzzleId === todayDaily.id && result.isCorrect) {
      if (!updatedStats.dailyChallengesCompleted.includes(todayStr)) {
        updatedStats.dailyChallengesCompleted.push(todayStr);
        sounds.playStreak();
      }
    }

    // Weekly goal progression
    if (result.isCorrect) {
      updatedStats.weeklyGoalProgress.currentSolves += 1;
    }

    setStats(updatedStats);
    StorageService.saveStats(updatedStats);

    // Check & update achievements
    checkAchievements(result, updatedStats);
  };

  const checkAchievements = (result: PuzzleResult, currentStats: UserStats) => {
    const updatedAchievements = [...achievements];
    let changed = false;

    updatedAchievements.forEach((ach) => {
      if (ach.unlocked) return;

      if (ach.id === 'first_solve' && currentStats.totalSolved >= 1) {
        ach.unlocked = true;
        ach.progress = 1;
        changed = true;
      } else if (ach.id === 'streak_3' && currentStats.currentStreak >= 3) {
        ach.unlocked = true;
        ach.progress = 3;
        changed = true;
      } else if (ach.id === 'streak_7' && currentStats.currentStreak >= 7) {
        ach.unlocked = true;
        ach.progress = 7;
        changed = true;
      } else if (ach.id === 'speed_demon' && result.isCorrect && result.timeSpent <= 15 && result.stars === 3) {
        ach.unlocked = true;
        ach.progress = 1;
        changed = true;
      } else if (ach.id === 'no_hints_5' && result.isCorrect && result.hintsUsed === 0) {
        ach.progress = Math.min(ach.maxProgress, ach.progress + 1);
        if (ach.progress >= ach.maxProgress) ach.unlocked = true;
        changed = true;
      } else if (ach.id.startsWith('master_')) {
        const targetCat = ach.id.replace('master_', '') as PuzzleCategory;
        const count = currentStats.categoryStats[targetCat]?.solved || 0;
        ach.progress = Math.min(ach.maxProgress, count);
        if (ach.progress >= 6) ach.unlocked = true;
        changed = true;
      } else if (ach.id === 'puzzle_grandmaster' && currentStats.level >= 5 && currentStats.totalSolved >= 25) {
        ach.unlocked = true;
        ach.progress = 25;
        changed = true;
      }
    });

    if (changed) {
      setAchievements(updatedAchievements);
      StorageService.saveAchievements(updatedAchievements);
      sounds.playVictory();
    }
  };

  // Next puzzle action
  const handleNextPuzzle = () => {
    // If in Quick Play queue
    if (quickPlayQueue.length > 0) {
      const nextOne = quickPlayQueue[0];
      setQuickPlayQueue(quickPlayQueue.slice(1));
      startPuzzle(nextOne, activeMode);
      return;
    }

    // Default next puzzle in same category
    if (activePuzzle) {
      const sameCategory = BUNDLED_PUZZLES.filter((p) => p.category === activePuzzle.category);
      const currentIndex = sameCategory.findIndex((p) => p.id === activePuzzle.id);
      if (currentIndex !== -1 && currentIndex < sameCategory.length - 1) {
        startPuzzle(sameCategory[currentIndex + 1], activeMode);
        return;
      }
    }

    // Fallback: return to levels
    setActiveScreen('levelSelect');
  };

  // Retry action
  const handleRetry = () => {
    if (activePuzzle) {
      startPuzzle(activePuzzle, activeMode);
    }
  };

  // Skip puzzle (without breaking streak)
  const handleSkipPuzzle = () => {
    StorageService.saveSession(null);
    setSavedSession(null);
    sounds.playTap();

    if (quickPlayQueue.length > 0) {
      const nextOne = quickPlayQueue[0];
      setQuickPlayQueue(quickPlayQueue.slice(1));
      startPuzzle(nextOne, activeMode);
    } else {
      handleNextPuzzle();
    }
  };

  // Render splash
  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} lang={settings.language} />;
  }

  return (
    <div className="relative min-h-screen bg-[#0A192F] text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Active Screen Rendering */}
      {activeScreen === 'gameplay' && activePuzzle ? (
        <GameplayScreen
          puzzle={activePuzzle}
          mode={activeMode}
          lang={settings.language}
          onFinishPuzzle={handleFinishPuzzle}
          onExit={handleExitGameplay}
          onSkip={handleSkipPuzzle}
          currentStreak={stats.currentStreak}
          initialSession={savedSession}
        />
      ) : activeScreen === 'results' && lastResult && activePuzzle ? (
        <ResultsScreen
          result={lastResult}
          puzzle={activePuzzle}
          lang={settings.language}
          onNext={handleNextPuzzle}
          onRetry={handleRetry}
          onOpenShareModal={() => setShowShareModal(true)}
          onExit={() => {
            setActiveScreen('main');
            setQuickPlayQueue([]);
          }}
        />
      ) : activeScreen === 'levelSelect' ? (
        <LevelSelectScreen
          category={selectedCategory}
          stats={stats}
          lang={settings.language}
          onBack={() => setActiveScreen('main')}
          onSelectPuzzle={(p) => startPuzzle(p, 'classic')}
        />
      ) : (
        /* Tab Views */
        <div>
          {currentTab === 'home' && (
            <HomeScreen
              stats={stats}
              savedSession={savedSession}
              lang={settings.language}
              onContinueSession={handleContinueSession}
              onQuickPlay={handleQuickPlay}
              onDailyChallenge={() => {
                setCurrentTab('daily');
              }}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveScreen('levelSelect');
              }}
              onOpenTutorial={() => setShowTutorial(true)}
            />
          )}

          {currentTab === 'categories' && (
            <HomeScreen
              stats={stats}
              savedSession={savedSession}
              lang={settings.language}
              onContinueSession={handleContinueSession}
              onQuickPlay={handleQuickPlay}
              onDailyChallenge={() => setCurrentTab('daily')}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveScreen('levelSelect');
              }}
              onOpenTutorial={() => setShowTutorial(true)}
            />
          )}

          {currentTab === 'daily' && (
            <DailyChallengeScreen
              stats={stats}
              lang={settings.language}
              onBack={() => setCurrentTab('home')}
              onPlayDaily={handleDailyChallenge}
            />
          )}

          {currentTab === 'stats' && (
            <StatsScreen
              stats={stats}
              achievements={achievements}
              lang={settings.language}
              onBack={() => setCurrentTab('home')}
              onOpenShareCard={() => setShowShareModal(true)}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsScreen
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
              onResetProgress={handleResetProgress}
              onOpenAndroidModal={() => setShowAndroidModal(true)}
              onBack={() => setCurrentTab('home')}
            />
          )}

          {/* Bottom Navigation Bar */}
          <BottomNavBar
            currentTab={currentTab}
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              setActiveScreen('main');
            }}
            lang={settings.language}
          />
        </div>
      )}

      {/* Global Modals */}
      <TutorialModal
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        lang={settings.language}
      />

      <ShareCardModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        stats={stats}
        lang={settings.language}
      />

      <AndroidProjectModal
        isOpen={showAndroidModal}
        onClose={() => setShowAndroidModal(false)}
        lang={settings.language}
      />
    </div>
  );
}
