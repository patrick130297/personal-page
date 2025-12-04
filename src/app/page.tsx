import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <section className="container mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:py-20 xl:py-24">
            <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
              <Hero />
              <About />
            </div>
          </section>
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
