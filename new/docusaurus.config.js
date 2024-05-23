// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const REPO_URL = 'https://github.com/BotW-Minecraft-Server';
const DISCORD_URL = 'https://discord.zelda64.dev';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Persists Realms',
  tagline: 'We are open-source and free Minecraft Server group.',
  url: 'https://botw.link',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner: false,

  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Persists Realms',
        logo: {
          alt: 'Persists Realms',
          src: 'img/logo.png',
          height: 32,
          width: 32,
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            label: '关于我们',
            docId: 'about',
          },
          {
            type: 'doc',
            position: 'left',
            label: '服务器维基百科',
            docId: 'botwmcs/index',
          },
          {
            type: 'doc',
            position: 'left',
            label: '模组文档',
            docId: 'modwiki/index',
          },
          {
            href: REPO_URL,
            label: 'GitHub',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '源码和链接',
            items: [
              { label: 'GitHub', href: REPO_URL },
              { label: 'RealmsHost', href: 'https://github.com/BotW-Minecraft-Server/RealmsHost' },
              { label: '网站源码', href: 'https://github.com/BotW-Minecraft-Server/botw-wiki/' },
              { label: 'Sam Chai 个人主页', href: 'https://sam-chai.com'}
            ],
          },
          {
            title: '社区',
            items: [
              { label: '加入我们', href: 'joinus' },
              { label: 'Contribute', href: 'contribute' },

            
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: darkCodeTheme,
        defaultLanguage: 'cpp',
      },
    }),
};

module.exports = config;
