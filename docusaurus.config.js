// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '正点原子',
  tagline: '嵌入式教育的领头羊',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tm330075395.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tm330075395', // Usually your GitHub org/user name.
  projectName: 'tm330075395.github.io', // Usually your repo name.
  deploymentBranch: 'main', // 部署到的分支名
  // DEPLOYMENT_BRANCH: 'main',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',        /*      */
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',    /*      */
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'canaanK230Sidebar',
            position: 'left',
            label: 'CanMV-K230教程',
          },
          /*
          {
            type: 'docSidebar',
            sidebarId: 'newSidebar',
            position: 'left',
            label: 'NEW',
          },*/
          {
            href: 'http://www.alientek.com',
            label: '正点原子官网',
            position: 'left',
          },
          {
            href: 'http://www.openedv.com/forum.php',
            label: '论坛',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tm330075395/tm330075395.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DongshanPI',
                href: 'https://dongshanpi.com',
              },
              {
                label: 'Canaan-Docs',
                href: 'https://canaan-docs.100ask.net/',
              },
              {
                label: 'Renesas-Docs',
                href: 'https://renesas-docs.100ask.net/',
              },
              {
                label: 'RTOS',
                href: 'https://rtos.100ask.net/',
              },
              {
                label: 'TinaSDK-Docs',
                href: 'https://tina.100ask.net/',
              },
              {
                label: 'Allwinner-Docs',
                href: 'https://allwinner-docs.100ask.net/',
              },
              {
                label: 'R128-Docs',
                href: 'https://aw-r128.100ask.net/',
              },                                                                                    
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/275908810',
              },              
              {
                label: 'Stack Overflow',
                href: 'https://forums.100ask.net',
              },
              {
                label: 'VideoCenter',
                href: 'https://video.100ask.net/',
              },              
              {
                label: 'Twitter',
                href: 'https://twitter.com/dongshanpi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Coding',
                href: 'https://weidongshan.coding.net/public/',
              },              
              {
                label: 'GitHub',
                href: 'https://github.com/100askTeam',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/weidongshan',
              },              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
