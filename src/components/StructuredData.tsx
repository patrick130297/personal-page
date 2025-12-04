'use client';

import { personalInfo, contact, experiences, education } from '@/data/portfolio';
import { useTranslation } from 'react-i18next';

export function StructuredData() {
  const { i18n } = useTranslation();
  const isPt = i18n.language === 'pt' || i18n.language?.startsWith('pt');

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: isPt ? 'Desenvolvedor de Software Senior' : 'Senior Software Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://patrick-batista.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.location,
      addressCountry: 'BR',
    },
    sameAs: [
      contact.linkedin,
      contact.github,
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'React Native',
      'Software Development',
    ],
    alumniOf: education.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
    })),
    worksFor: experiences.map(exp => ({
      '@type': 'Organization',
      name: exp.company,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

