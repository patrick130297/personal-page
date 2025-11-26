import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experiencia" className="bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Experiência Profissional
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-2 border-zinc-300 pl-8 dark:border-zinc-700"
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-emerald-500"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {exp.position}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>

              <ul className="mb-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

