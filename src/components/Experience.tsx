'use client';

import { experiences } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';
import { TechBadgesList } from './TechBadges';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:mb-6 md:text-3xl lg:mb-10">
          {t('section.experience')}
        </h2>
        <div className="space-y-4 md:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {experiences.map((exp, index) => {
            const expKeys = ['supergasbras', 'taking', 'btg', 'netquant'];
            const expKey = expKeys[index];
            
            return (
              <div
                key={index}
                className="relative rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 md:p-5 lg:p-6"
              >
                <div className="mb-2 md:mb-3">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 md:text-lg lg:text-xl" suppressHydrationWarning>
                    {t(`experiences.${expKey}.position`)}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px] text-zinc-600 dark:text-zinc-400 md:text-xs lg:text-sm">
                    <span className="font-semibold" suppressHydrationWarning>
                      {t(`experiences.${expKey}.company`)}
                    </span>
                    <span>•</span>
                    <span suppressHydrationWarning>
                      {t(`experiences.${expKey}.location`)}
                    </span>
                    <span>•</span>
                    <span suppressHydrationWarning>
                      {t(`experiences.${expKey}.period`)}
                    </span>
                  </div>
                </div>

                <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400 md:mb-3 md:text-sm lg:text-base" suppressHydrationWarning>
                  {t(`experiences.${expKey}.description`)}
                </p>

                <ul className="mb-2 space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400 md:mb-3 md:space-y-1.5 md:text-xs lg:mb-4 lg:space-y-2 lg:text-sm">
                  {exp.highlights.map((_, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500"></span>
                      <span suppressHydrationWarning>
                        {t(`experiences.${expKey}.highlights.${idx}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <TechBadgesList technologies={exp.technologies} size="sm" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

