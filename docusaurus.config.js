// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'akkhayar',
  tagline: 'A leap forward.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.akkhayar.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Akkhayar', // Usually your GitHub org/user name.
  projectName: 'akkhayar', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mm'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      mm: {
        label: 'မြန်မာဘာသာ',
        direction: 'ltr',
        htmlLang: 'mm-MM',
        calendar: 'gregory',
        path: 'mm',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/akkhayar/docs.akkhayar.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/akkhayar/docs.akkhayar.com/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'အက္ခရာ | akkhayar',
        logo: {
          alt: 'Akkhayar Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   to: '/about',
          //   position: 'right',
          //   label: 'About',
          // },
          // {
          //   to: '/',
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'right',
          //   label: 'Docs',
          // },
          // {
          //   to: '/about',
          //   position: 'right',
          //   label: 'Operations',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/akkhayar/docs.akkhayar.com',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pPuFFNskcg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/akkhayar',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Akkhayar, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
