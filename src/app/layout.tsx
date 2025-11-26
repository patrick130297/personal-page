import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Anderson Lima Batista | Engenheiro de Software Full-Stack",
  description: "Engenheiro de Software Full-Stack com experiência em React, Next.js, Node.js, NestJS, e observability. Desenvolvedor especializado em criar aplicações web e mobile escaláveis.",
  keywords: ["Patrick Batista", "Engenheiro de Software", "Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "OpenTelemetry", "Grafana"],
  authors: [{ name: "Patrick Anderson Lima Batista" }],
  openGraph: {
    type: "website",
    title: "Patrick Anderson Lima Batista | Engenheiro de Software Full-Stack",
    description: "Portfólio profissional de Patrick Batista - Engenheiro de Software Full-Stack",
    siteName: "Patrick Batista Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
