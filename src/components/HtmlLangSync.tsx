'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function HtmlLangSync() {
  const { i18n, ready } = useTranslation();

  useEffect(() => {
    if (ready && i18n && i18n.language && typeof document !== 'undefined') {
      const lang = i18n.language === 'pt' ? 'pt-BR' : 'en';
      document.documentElement.lang = lang;
    }
  }, [i18n, ready, i18n?.language]);

  return null;
}

