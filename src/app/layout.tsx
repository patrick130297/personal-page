import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://patrick-batista.dev'),
  title: {
    default: "Patrick Anderson Lima Batista | Senior Software Developer",
    template: "%s | Patrick Batista"
  },
  description: "Senior Software Developer with 6+ years of experience in React, Next.js, TypeScript, and Node.js. Specialized in building scalable web and mobile applications.",
  keywords: ["Patrick Batista", "Senior Software Developer", "Desenvolvedor de Software Senior", "React", "Next.js", "Node.js", "TypeScript", "React Native", "Portfolio"],
  authors: [{ name: "Patrick Anderson Lima Batista" }],
  creator: "Patrick Anderson Lima Batista",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    title: "Patrick Anderson Lima Batista | Senior Software Developer",
    description: "Senior Software Developer with 6+ years of experience. Portfolio showcasing professional experience in React, Next.js, TypeScript, and Node.js.",
    siteName: "Patrick Batista Portfolio",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Anderson Lima Batista | Senior Software Developer",
    description: "Senior Software Developer with 6+ years of experience in React, Next.js, TypeScript, and Node.js.",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': '/',
      'pt': '/',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: #ffffff;
                --foreground: #171717;
                --color-background: var(--background);
                --color-foreground: var(--foreground);
                --font-sans: var(--font-geist-sans);
                --font-mono: var(--font-geist-mono);
              }
              @media (prefers-color-scheme: dark) {
                :root {
                  --background: #0a0a0a;
                  --foreground: #ededed;
                  --color-background: var(--background);
                  --color-foreground: var(--foreground);
                }
              }
              body {
                background: var(--background);
                color: var(--foreground);
                margin: 0;
                font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
              }
              * {
                box-sizing: border-box;
              }
              .container {
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                padding-left: 1rem;
                padding-right: 1rem;
              }
              @media (min-width: 768px) {
                .container {
                  padding-left: 1.5rem;
                  padding-right: 1.5rem;
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="lang-sync"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const lang = localStorage.getItem('i18nextLng') || 'en';
                  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
                } catch (e) {}
              })();
            `,
          }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
