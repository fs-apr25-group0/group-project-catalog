import { useTranslationStore } from '../stateManagers/languageState/languageState';

export const useTranslation = () => {
  const language = useTranslationStore((state) => state.language);
  const translate = useTranslationStore((state) => state.translate);
  const setLanguage = useTranslationStore((state) => state.setLanguage);

  return { language, translate, setLanguage };
};
