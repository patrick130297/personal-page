'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n, ready } = useTranslation();
  const [mounted] = useState(() => typeof window !== 'undefined');

  const changeLanguage = (lng: string) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lng);
    }
  };

  // Durante SSR e antes da montagem, sempre renderizar com EN ativo
  const currentLang = mounted && ready && i18n?.language ? i18n.language : 'en';
  const isPt = currentLang === 'pt' || currentLang.startsWith('pt');
  const isEn = currentLang === 'en' || currentLang.startsWith('en');

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-300 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900" suppressHydrationWarning>
      <button
        onClick={() => changeLanguage('pt')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          isPt
            ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
            : 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50'
        }`}
        suppressHydrationWarning
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          isEn
            ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
            : 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50'
        }`}
        suppressHydrationWarning
      >
        EN
      </button>
    </div>
  );
}

