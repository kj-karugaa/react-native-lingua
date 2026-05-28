import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language } from '../types/learning';
import { posthog } from '../lib/posthog';

interface LearningState {
  selectedLanguage: Language | null;
  completedLessons: string[];
  xp: number;
  dailyXP: number;
  streak: number;
  _hasHydrated: boolean;
  setSelectedLanguage: (language: Language | null) => void;
  setHasHydrated: (value: boolean) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      completedLessons: [],
      xp: 0,
      dailyXP: 0,
      streak: 0,
      _hasHydrated: false,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      setHasHydrated: (value) => set({ _hasHydrated: value }),
      completeLesson: (lessonId, xpReward) =>
        set((state) => {
          if (state.completedLessons.includes(lessonId)) return state;
          const newDailyXP = Math.min(state.dailyXP + xpReward, 20);
          const newTotalXP = state.xp + xpReward;
          posthog.capture('lesson_completed', {
            lesson_id: lessonId,
            xp_earned: xpReward,
            total_xp: newTotalXP,
            daily_xp: newDailyXP,
          });
          if (state.dailyXP < 20 && newDailyXP >= 20) {
            posthog.capture('daily_goal_reached', { total_xp: newTotalXP });
          }
          return {
            completedLessons: [...state.completedLessons, lessonId],
            xp: newTotalXP,
            dailyXP: newDailyXP,
          };
        }),
    }),
    {
      name: 'learning-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
