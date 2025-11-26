# Portfólio Pessoal - Patrick Anderson Lima Batista

Site de portfólio profissional desenvolvido com Next.js, React 19 e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16.0.4** - Framework React com App Router
- **React 19.2.0** - Biblioteca para interfaces
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **pnpm** - Gerenciador de pacotes

## 📋 Pré-requisitos

- Node.js 20+
- pnpm (ou npm/yarn)

## 🔧 Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar no diretório
cd personal-page

# Instalar dependências
pnpm install
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start

# Lint
pnpm lint
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout raiz com metadados
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais
├── components/
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Hero.tsx         # Seção hero com apresentação
│   ├── About.tsx        # Sobre mim
│   ├── Experience.tsx   # Experiência profissional
│   ├── Skills.tsx       # Habilidades técnicas
│   ├── Projects.tsx     # Projetos em destaque
│   ├── Education.tsx    # Educação e idiomas
│   ├── Contact.tsx      # Informações de contato
│   └── Footer.tsx       # Rodapé
├── data/
│   └── portfolio.ts     # Dados do portfólio
└── types/
    └── index.ts         # Definições TypeScript
```

## ✨ Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Tema escuro automático (baseado em preferência do sistema)
- ✅ Navegação smooth scroll
- ✅ Componentes modulares e reutilizáveis
- ✅ Tipagem completa com TypeScript
- ✅ SEO otimizado com metadados
- ✅ Performance otimizada com Next.js 16

## 🎨 Seções

1. **Header** - Navegação fixa com links para seções
2. **Hero** - Apresentação com nome, título e localização
3. **Sobre Mim** - Resumo profissional e objetivos
4. **Experiência** - Timeline com histórico profissional
5. **Habilidades** - Categorias de habilidades técnicas com níveis
6. **Projetos** - Projetos em destaque com tecnologias
7. **Educação** - Formação acadêmica e idiomas
8. **Contato** - Links para redes sociais e contato
9. **Footer** - Copyright e download do CV

## 🌐 Deploy

O projeto está pronto para deploy em plataformas como:

- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Qualquer plataforma que suporte Next.js

### Deploy na Vercel

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

## 📝 Customização

Para customizar o portfólio com suas informações:

1. Edite `/src/data/portfolio.ts` com seus dados pessoais, experiências, habilidades e projetos
2. Adicione seu CV em PDF na pasta `/public/` como `cv_dev_pt.pdf`
3. Ajuste as cores e estilos em `/src/app/globals.css` se necessário

## 📄 Licença

© 2025 Patrick Anderson Lima Batista. Todos os direitos reservados.
