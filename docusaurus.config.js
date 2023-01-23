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
  organizationName: 'xyspg', // Usually your GitHub org/user name.
  projectName: 'xyspg', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh']
  },

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
      navbar: {
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
                to: '/tools/random/random',
              },
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
};

module.exports = config;
