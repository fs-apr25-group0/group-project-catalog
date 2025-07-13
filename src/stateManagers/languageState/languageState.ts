import { create } from 'zustand';
import type { Language } from '../../types/language';
import { dictionaries } from '../../dictionaries';

interface TranslationState {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (value: string) => string;
}

export const useTranslationState = create<TranslationState>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  translate: (value) => {
    const lang = get().language;
    return dictionaries[lang][value] || value;
  },
}));
