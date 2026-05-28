import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language } from '../types/learning';

interface LearningState {
  selectedLanguage: Language | null;
  _hasHydrated: boolean;
  setSelectedLanguage: (language: Language | null) => void;
  setHasHydrated: (value: boolean) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      _hasHydrated: false,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      setHasHydrated: (value) => set({ _hasHydrated: value }),
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
