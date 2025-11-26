import { skills } from '@/data/portfolio';
import { SkillItem } from '@/types';

const levelColors: Record<SkillItem['level'], string> = {
  'Expert': 'bg-emerald-500 text-white',
  'Avançado': 'bg-cyan-500 text-white',
  'Intermediário': 'bg-zinc-400 text-white'
};

export function Skills() {
  return (
    <section id="habilidades" className="container mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Habilidades Técnicas
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((category, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    {skill.name}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      levelColors[skill.level]
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

