'use client';

import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="w-full">
      <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50 md:mb-6 md:text-2xl lg:mb-10 lg:text-3xl">
        {t('section.about')}
      </h2>
      <div className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:space-y-3 md:text-base lg:space-y-6 lg:text-lg">
        {[0, 1, 2].map((index) => (
          <p key={index} suppressHydrationWarning>
            {t(`personalInfo.about.${index}`)}
          </p>
        ))}
      </div>
    </section>
  );
}

