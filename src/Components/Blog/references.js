import { postsObj } from './Posts/postObj';

// Para guardar otra referencia, agregá su título, descripción breve y enlace.
export const references = [
  {
    title: 'Documentación de Next.js',
    description: 'Guías y ejemplos oficiales para construir aplicaciones con Next.js.',
    href: 'https://nextjs.org/docs',
    category: 'Documentación',
    source: 'nextjs.org',
    external: true,
  },
  {
    title: 'W3Schools',
    description: 'Tutoriales y ejemplos prácticos para consultar conceptos de desarrollo web.',
    href: 'https://www.w3schools.com/',
    category: 'Aprendizaje',
    source: 'w3schools.com',
    external: true,
  },
  {
    title: 'OpenAI y cuatro nuevos incidentes con agentes de IA',
    description: 'Una nota sobre agentes de IA y el acceso no autorizado a datos sensibles.',
    href: 'https://fortune.com/2026/10/16/openai-discloses-four-more-rogue-incidents-involving-financial-medical-and-government-data/',
    category: 'Noticias',
    source: 'Fortune · 16 oct. 2026',
    external: true,
  },
  ...postsObj.map(post => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    category: 'Escrito personal',
    source: 'En este sitio',
    external: false,
  })),
];
