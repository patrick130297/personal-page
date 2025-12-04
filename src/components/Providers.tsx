'use client';

import { I18nProvider } from './I18nProvider';
import { HtmlLangSync } from './HtmlLangSync';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <HtmlLangSync />
      {children}
    </I18nProvider>
  );
}

