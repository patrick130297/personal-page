import { education, languages } from '@/data/portfolio';

export function Education() {
  return (
    <section id="educacao" className="container mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Educação & Idiomas
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Formação Acadêmica
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h4 className="font-bold text-zinc-900 dark:text-zinc-50">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {edu.institution}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                  <span>{edu.period}</span>
                  {edu.status && (
                    <>
                      <span>•</span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">
                        {edu.status}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Idiomas
          </h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-50">
                  {lang.language}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

