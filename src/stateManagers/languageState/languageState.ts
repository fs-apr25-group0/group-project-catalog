import { create } from 'zustand';
import type { Language } from '../../types/language';
import { dictionaries } from '../../dictionaries';
import type { TranslationSection } from '../../types/translationSections';

interface TranslationState {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (section: TranslationSection, value: string) => string;
}

export const useTranslationStore = create<TranslationState>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  translate: (section, value) => {
    const lang = get().language;
    return dictionaries[lang][section][value] || value;
  },
}));
