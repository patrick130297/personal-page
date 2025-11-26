import { personalInfo } from '@/data/portfolio';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-50">
            {personalInfo.name.split(' ')[0]}
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="#sobre"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Sobre
          </a>
          <a
            href="#experiencia"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Experiência
          </a>
          <a
            href="#habilidades"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

