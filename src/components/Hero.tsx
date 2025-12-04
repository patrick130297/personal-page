'use client';

import { personalInfo, contact } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-4 text-center md:gap-6 lg:items-start lg:text-left lg:gap-8 lg:sticky lg:top-20">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 md:text-xl lg:text-2xl" suppressHydrationWarning>
            {t('personalInfo.title')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 md:gap-4 md:text-sm lg:justify-start">
            <span className="flex items-center gap-2" suppressHydrationWarning>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('personalInfo.location')}
            </span>
            <span className="flex items-center gap-2" suppressHydrationWarning>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('hero.languages.fluent')}
            </span>
            <span className="flex items-center gap-2" suppressHydrationWarning>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('hero.available')}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4 lg:justify-start">
          <a
            href={i18n.language === 'pt' || i18n.language?.startsWith('pt') ? '/cv_dev_pt.pdf' : '/cv_dev_en.pdf'}
            download={i18n.language === 'pt' || i18n.language?.startsWith('pt') ? 'cv_dev_pt.pdf' : 'cv_dev_en.pdf'}
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 md:px-6 md:py-3 md:text-sm"
            suppressHydrationWarning
            aria-label={t('hero.cta.downloadCV')}
          >
            {t('hero.cta.downloadCV')}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 md:px-6 md:py-3 md:text-sm"
            suppressHydrationWarning
            aria-label={`${t('contact.labels.linkedin')} - ${personalInfo.name}`}
          >
            {t('contact.labels.linkedin')}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 md:px-6 md:py-3 md:text-sm"
            suppressHydrationWarning
            aria-label={`${t('contact.labels.github')} - ${personalInfo.name}`}
          >
            {t('contact.labels.github')}
          </a>
        </div>
      </div>
    </section>
  );
}

