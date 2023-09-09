import nextjs from '@/public/images/logo/nextjs.svg';
import tailwindcss from '@/public/images/logo/tailwind-css.svg';
import react from '@/public/images/logo/react.svg';
import django from '@/public/images/logo/djangoproject.svg';
import wordpress from '@/public/images/logo/wordpress.svg';
import bootstrap from '@/public/images/logo/bootstrap.svg';
import javascript from '@/public/images/logo/javascript-js.svg';
import sass from '@/public/images/logo/sass.svg';
import css from '@/public/images/logo/file-type-css.svg';
import html from '@/public/images/logo/file-type-html.svg';
import php from '@/public/images/logo/php.svg';
import docker from '@/public/images/logo/docker.svg';
import jekyll from '@/public/images/logo/jekyll.svg';
import figma from '@/public/images/logo/figma.svg';
import ayanna from '@/public/images/works/ayanna-thumb.png';
import avantro from '@/public/images/works/avantro-thumb.png';
import ffCny2022 from '@/public/images/works/ff-cny-2022-thumb.png';
import theReflection from '@/public/images/works/the-reflection-thumb.png';
import pmkISP from '@/public/images/works/pmk-isp-thumb.png';

export const skill = [
  {
    logo: nextjs,
    title: 'NextJS',
  },
  {
    logo: tailwindcss,
    title: 'TailwindCSS',
  },
  {
    logo: react,
    title: 'ReactJS',
  },
  {
    logo: django,
    title: 'Django',
  },
  {
    logo: wordpress,
    title: 'WordPress',
  },
  {
    logo: bootstrap,
    title: 'Bootstrap 4/5',
  },
  {
    logo: sass,
    title: 'Sass/Scss',
  },
  {
    logo: javascript,
    title: 'ES6 JavaScript',
  },
  {
    logo: css,
    title: 'CSS',
  },
  {
    logo: html,
    title: 'HTML',
  },
  {
    logo: php,
    title: 'Php',
  },
  {
    logo: docker,
    title: 'Docker',
  },
  {
    logo: jekyll,
    title: 'Jekyll',
  },
  {
    logo: figma,
    title: 'Figma',
  },
];

export const works = [
  {
    thumbnail: pmkISP,
    title: 'Pavilion ISP',
    skills: ['NextJS', 'TypeScript', 'TailwindCSS', 'Sass/Scss', 'next-intl'],
    link: 'https://pavilionmontkiara.com/PMKISP/',
  },
  {
    thumbnail: theReflection,
    title: 'The Reflection Westlake',
    skills: [
      'WordPress',
      'Polylang',
      'ACF',
      'Bootstrap 5',
      'PHP',
      'ES6',
      'Sass/Scss',
      'GSAP',
    ],
    link: 'https://thereflectionwestlake.vn/',
  },
  {
    thumbnail: ayanna,
    title: 'Ayanna',
    skills: [
      'WordPress',
      'ACF',
      'Sass/Scss',
      'Bootstrap 5',
      'ReactJS',
      'PHP',
      'ES6',
      'GSAP',
    ],
    link: 'https://ayanna.com.my/',
  },
  {
    thumbnail: avantro,
    title: 'Avantro',
    skills: ['GSAP', 'Bootstrap 5', 'Sass/Scss', 'ES6'],
    link: 'https://avantro.com.my/',
  },
  {
    thumbnail: ffCny2022,
    title: 'Forefront International CNY 2022',
    skills: ['Jekyll', 'GSAP', 'Sass/Scss', 'ES6'],
    link: 'https://forefront-cny2022.preview.forefront.international/',
  },
];
