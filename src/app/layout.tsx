import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // i18next-browser-languagedetector usa 'i18nextLng' como chave padrão
                  const lang = localStorage.getItem('i18nextLng') || 'en';
                  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
