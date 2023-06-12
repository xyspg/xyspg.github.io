// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "xyspg",
  tagline: "美味しいは嬉しいです！",
  url: "https://xyspg.moe",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/pf.jpeg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xyspg", // Usually your GitHub org/username.
  projectName: "xyspg", // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["zh-cn"],
  },
  scripts: [],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-73TGEVP49X",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "announcementBar",
        content:
          '文档信息，一键搜 —— 欢迎试用 <a target="_blank" rel="noopener" href="https://bdfz.app">BDFZ AI</a> (o^^o)',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      algolia: {
        appId: "QKST3Q4MRA",
        apiKey: "c2bb4a37c21688617fb3e52e31d710b5",
        indexName: "xyspg",
        debug: false,
        contextualSearch: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "xyspg 的小窝",
        logo: {
          alt: "",
          src: "img/pf.jpeg",
        },
        items: [
          { to: "/blog", label: "博客", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "备忘录",
          },
          {
            type: "dropdown",
            label: "小工具",
            position: "left",
            items: [
              {
                label: "BDFZ AI",
                href: "https://bdfz.app",
              },
              {
                label: "特殊字符转换器",
                href: "/tools/converter",
              },
            ],
          },
          {
            href: "https://github.com/xyspg",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "备忘录",
            items: [
              {
                label: "视频相关",
                to: "/docs/category/视频相关",
              },
              {
                label: "Mac",
                to: "/docs/Mac/macOS",
              },
              {
                label: "Miscellaneous",
                to: "/docs/乱七八糟/shell",
              },
            ],
          },
          {
            title: "小工具",
            items: [
              {
                label: "BDFZ AI",
                href: "https://bdfz.app",
              },
              {
                label: "特殊字符转换器",
                href: "/tools/converter",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Email",
                to: "https://mailhide.io/e/gKKI4Das",
              },
              {
                label: "Steam",
                href: "https://steamcommunity.com/id/xyspg/",
              },
              {
                label: "GitHub",
                href: "https://github.com/xyspg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xyspg. Built with Docusaurus. <br>`,
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
