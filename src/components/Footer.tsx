'use client';

import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = 2025;
  
  // Determina qual PDF baixar baseado no idioma atual
  const isPt = i18n.language === 'pt' || i18n.language?.startsWith('pt');
  const cvPath = isPt ? '/cv_dev_pt.pdf' : '/cv_dev_en.pdf';
  const cvFileName = isPt ? 'cv_dev_pt.pdf' : 'cv_dev_en.pdf';

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400 md:flex-row md:gap-4 md:text-sm">
          <p suppressHydrationWarning>© {currentYear} Patrick Anderson Lima Batista. {t('footer.copyright')}</p>
          <a
            href={cvPath}
            download={cvFileName}
            className="flex items-center gap-2 font-medium text-zinc-900 transition-colors hover:text-emerald-600 dark:text-zinc-50 dark:hover:text-emerald-400"
            suppressHydrationWarning
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('footer.downloadCV')}
          </a>
        </div>
      </div>
    </footer>
  );
}

