import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language } from '../types/learning';

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
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
          xp: state.xp + xpReward,
          dailyXP: Math.min(state.dailyXP + xpReward, 20),
        })),
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
