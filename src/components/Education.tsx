'use client';

import { education, languages } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

export function Education() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null;
  }

  return (
    <section id="educacao" className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:mb-8 md:text-3xl lg:mb-10" suppressHydrationWarning>
        {t('section.education')}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:mb-6 md:text-xl" suppressHydrationWarning>
            {t('education.academic')}
          </h3>
          <div className="space-y-4 md:space-y-6">
            {education.map((edu, index) => {
              const eduKeys = ['bachelor', 'technical'];
              const eduKey = eduKeys[index];
              
              return (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900 md:p-4"
                >
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 md:text-base" suppressHydrationWarning>
                    {t(`education.${eduKey}.degree`)}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm" suppressHydrationWarning>
                    {t(`education.${eduKey}.institution`)}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 text-[10px] text-zinc-500 dark:text-zinc-500 md:mt-2 md:text-xs">
                    <span suppressHydrationWarning>
                      {t(`education.${eduKey}.period`)}
                    </span>
                    {edu.status && (
                      <>
                        <span>•</span>
                        <span className="font-medium text-emerald-600 dark:text-emerald-400" suppressHydrationWarning>
                          {t(`education.${eduKey}.status`)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:mb-6 md:text-xl" suppressHydrationWarning>
            {t('education.languagesTitle')}
          </h3>
          <div className="space-y-3 md:space-y-4">
            {languages.map((lang, index) => {
              const langKeys = ['portuguese', 'english', 'spanish'];
              const levelKeys = ['native', 'fluent', 'basic'];
              const langKey = langKeys[index];
              const levelKey = levelKeys[index];
              
              return (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900 md:p-4"
                >
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50 md:text-base" suppressHydrationWarning>
                    {t(`education.languages.${langKey}`)}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 md:px-3 md:py-1 md:text-sm" suppressHydrationWarning>
                    {t(`education.languageLevels.${levelKey}`)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

