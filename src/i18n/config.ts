import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslations from './locales/pt.json';
import enTranslations from './locales/en.json';

const initI18n = () => {
  if (i18n.isInitialized) {
    return i18n;
  }

  const config = {
    resources: {
      pt: {
        translation: ptTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'en',
    lng: 'en',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  };

  if (typeof window !== 'undefined') {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        ...config,
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
      });
  } else {
    i18n
      .use(initReactI18next)
      .init(config);
  }

  return i18n;
};

initI18n();

export default i18n;

