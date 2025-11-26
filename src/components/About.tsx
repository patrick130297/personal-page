import { personalInfo } from '@/data/portfolio';

export function About() {
  return (
    <section id="sobre" className="container mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Sobre Mim
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {personalInfo.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

