import { Experience, Education, ContactInfo } from '@/types';

export const personalInfo = {
  name: 'Patrick Anderson Lima Batista',
  title: 'Desenvolvedor de Software Senior',
  location: 'Rio de Janeiro, Brasil',
  about: [
    'Desenvolvedor de Software Sênior com mais de 6 anos de experiência desenvolvendo aplicações web e mobile de alta performance. Especializado em React, Next.js, TypeScript e Node.js, com forte expertise em infraestrutura cloud.',
    'Ao longo da minha carreira, trabalhei em empresas de diferentes setores (fintech, logística, energia), sempre focado em criar soluções escaláveis e com excelente experiência do usuário. Tenho experiência sólida em todas as etapas do desenvolvimento, desde o design de arquitetura até deploy e monitoramento em produção.',
    'Sou apaixonado por resolver problemas complexos, otimizar performance de aplicações e garantir sistemas confiáveis. Busco constantemente aprender novas tecnologias e compartilhar conhecimento com a comunidade.'
  ]
};

export const experiences: Experience[] = [
  {
    company: 'Supergasbras',
    position: 'Desenvolvedor Front End',
    location: 'Rio de Janeiro',
    period: 'Out 2024 - Atual',
    description: 'Desenvolvimento e manutenção de aplicações web e mobile para uso interno e clientes finais.',
    technologies: ['TypeScript', 'React', 'React Native', 'Vite', 'Material UI', 'Figma', 'Azure DevOps'],
    highlights: [
      'Desenvolvimento de aplicações web responsivas com React e TypeScript',
      'Criação de componentes seguindo Design System da empresa',
      'Desenvolvimento de aplicações mobile com React Native',
      'Integração com Azure DevOps para CI/CD'
    ]
  },
  {
    company: 'Taking',
    position: 'Desenvolvedor Front End',
    location: 'São Paulo',
    period: 'Jan 2022 - Jun 2024',
    description: 'Desenvolvimento de plataforma completa para gestão de pedidos, cardápios e logística para restaurantes.',
    technologies: ['TypeScript', 'React', 'React Native', 'Next.js', 'Material UI', 'Storybook', 'Jest', 'Testing Library', 'Cypress', 'Circle CI', 'WebSockets', 'Firebase'],
    highlights: [
      'Criação de Design System documentado com Storybook',
      'Implementação de testes unitários, integração e E2E (cobertura >80%)',
      'Configuração de pipelines CI/CD com Circle CI',
      'Comunicação em tempo real com WebSockets',
      'Colaboração próxima com PM, Backend, UX e QA'
    ]
  },
  {
    company: 'BTG Pactual',
    position: 'Desenvolvedor Front End',
    location: 'São Paulo',
    period: 'Ago 2021 - Jan 2022',
    description: 'Desenvolvimento de plataforma de onboarding e gestão de empréstimos para clientes institucionais.',
    technologies: ['TypeScript', 'React', 'Styled Components', 'Jest', 'Testing Library', 'Figma', 'Azure DevOps'],
    highlights: [
      'Criação de fluxos de onboarding complexos e intuitivos',
      'Desenvolvimento de dashboard para gestão de empréstimos',
      'Implementação de componentes reutilizáveis com Styled Components',
      'Integração com APIs RESTful seguras'
    ]
  },
  {
    company: 'NetQuant',
    position: 'Desenvolvedor Full Stack',
    location: 'Rio de Janeiro',
    period: 'Jul 2019 - Out 2021',
    description: 'Desenvolvimento de aplicações web para o setor financeiro e criação de APIs RESTful.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Styled Components'],
    highlights: [
      'Desenvolvimento full-stack de aplicações financeiras',
      'Criação de APIs RESTful escaláveis com Node.js',
      'Scripts de automação com Python',
      'Deploy e gerenciamento de containers com Docker e Kubernetes',
      'Infraestrutura em AWS (EC2, RDS, S3)'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Universidade Veiga de Almeida (UVA)',
    period: '2018 - 2022',
    status: 'Concluído'
  },
  {
    degree: 'Técnico em Automação Industrial',
    institution: 'SENAI',
    period: '2013 - 2015',
    status: 'Concluído'
  }
];

export const contact: ContactInfo = {
  email: 'patricklima.1302@gmail.com',
  phone: '+55 (21) 97485-4887',
  whatsapp: '+5521974854887',
  linkedin: 'https://www.linkedin.com/in/patrick-batista',
  github: 'https://github.com/patrick130297',
  location: 'Rio de Janeiro, Brasil'
};

export const languages = [
  { language: 'Português', level: 'Nativo' },
  { language: 'Inglês', level: 'Fluente' },
  { language: 'Espanhol', level: 'Básico' }
];


