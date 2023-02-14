// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'xyspg 的小窝',
  tagline: '美味しいは嬉しいです！',
  url: 'https://xyspg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pf.jpeg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xyspg', // Usually your GitHub org/username.
  projectName: 'xyspg', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh']
  },
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/xyspg/xyspg/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-73TGEVP49X',
          anonymizeIP: true,
        },
      }),
    ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
/*
      announcementBar: {
        id: 'support_us',
        content:
            '美咕噜是我老婆 <a target="_blank" rel="noopener noreferrer" href="/blog/2023/01/29/Megulu">美咕噜为什么是神？</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },

 */
      navbar: {
        hideOnScroll: true,
        title: 'xyspg 的小窝',
        logo: {
          alt: '',
          src: 'img/pf.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '备忘录',

          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'dropdown',
            label: '小工具',
            position: 'left',
            items: [
              {
                label: '随机事件生成器',
                href: '/tools/random',
              },
              {
                label: 'AI搜题（GPT-3）',
                href: 'https://gpt.xyspg.live'
              },
              {
                label: 'ELA Annotator',
                href: 'https://annotator.xyspg.live'
              }
            ],
          },
          {
            href: 'https://github.com/xyspg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '备忘录',
            items: [
              {
                label: '视频相关',
                to: '/docs/category/视频相关',
              },
              {
                label: 'Mac',
                to: '/docs/Mac/macOS',
              },
              {
                label: 'Miscellaneous',
                to: '/docs/乱七八糟/shell'
              }
            ],
          },
          {
            title: '小工具',
            items: [
              {
                label: '随机事件生成器',
                to: '/tools/random',
              },
              {
                label: 'AI搜题（GPT-3）',
                href: 'https://gpt.xyspg.live'
              },
              {
                label: 'ELA Annotator',
                href: 'https://annotator.xyspg.live'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/xyspg/'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xyspg. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_RGieT3cTBWJTjoTymGsdgvRv8lJNYl35wTpw0qhgLBb",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
      },
    ],
  ],
};

module.exports = config;
