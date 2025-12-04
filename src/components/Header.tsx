'use client';

import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex" aria-label="Main navigation">
          <a
            href="#sobre"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            suppressHydrationWarning
            aria-label={t('nav.about')}
          >
            {t('nav.about')}
          </a>
          <a
            href="#experiencia"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            suppressHydrationWarning
            aria-label={t('nav.experience')}
          >
            {t('nav.experience')}
          </a>
          <a
            href="#contato"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            suppressHydrationWarning
            aria-label={t('nav.contact')}
          >
            {t('nav.contact')}
          </a>
          <LanguageToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

