'use client';

interface TechBadgeProps {
  tech: string;
  size?: 'sm' | 'md' | 'lg';
}

const techIcons: Record<string, string> = {
  'React': '⚛️',
  'Next.js': '▲',
  'TypeScript': '📘',
  'Node.js': '🟢',
  'NestJS': '🪺',
  'Grafana': '📊',
  'OpenTelemetry': '📡',
  'Prometheus': '🔥',
  'Docker': '🐳',
  'Kubernetes': '☸️',
  'AWS': '☁️',
  'PostgreSQL': '🐘',
  'MongoDB': '🍃',
  'React Native': '📱',
  'Tailwind CSS': '💨',
  'Material UI': '🎨',
  'Jest': '🧪',
  'Cypress': '🌲',
  'Git': '🔀',
  'Python': '🐍',
  'Firebase': '🔥',
  'WebSockets': '🔌',
  'Circle CI': '⭕',
  'Azure DevOps': '🔷',
  'Figma': '🎨',
  'Storybook': '📚',
  'Vite': '⚡',
  'Redis': '🔴',
  'Styled Components': '💅'
};

export function TechBadge({ tech, size = 'md' }: TechBadgeProps) {
  const icon = techIcons[tech] || '💻';
  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-[10px] md:px-2 md:py-1 md:text-xs',
    md: 'px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm',
    lg: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base'
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-zinc-100 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 md:gap-1.5 ${sizeClasses[size]}`}
    >
      <span>{icon}</span>
      <span>{tech}</span>
    </span>
  );
}

interface TechBadgesListProps {
  technologies: string[];
  size?: 'sm' | 'md' | 'lg';
}

export function TechBadgesList({ technologies, size = 'md' }: TechBadgesListProps) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {technologies.map((tech, index) => (
        <TechBadge key={index} tech={tech} size={size} />
      ))}
    </div>
  );
}

