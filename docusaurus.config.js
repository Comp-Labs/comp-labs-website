const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Comp Labs',
  tagline: 'Our website provides Technical Guides, Apps, and Google Play Developer Console Service. This is a non-profit website so please donate to us to keep our resources running. You can write your feedback and comments about anything on our Contact Us page. See details of our services below.',
  url: 'https://www.complabs.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Comp-Labs', // Usually your GitHub org/user name.
  projectName: 'comp-labs-website', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Comp-Labs/comp-labs-website/edit/main/',
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
        title: 'Comp Labs',
        logo: {
          alt: 'Comp Labs Logo',
          src: 'img/logo.svg',
        },
        items: [
        //  {
           // type: 'doc',
           // docId: 'intro',
           // position: 'left',
           // label: 'Tutorial',
          //},
          {to: '/', label: 'Home', position: 'left'},
          {to: '/docs/intro', label: 'Guides', position: 'left'},
          {to: '/services', label: 'Services', position: 'left'},
          {href: 'https://forms.gle/dQmrNAZZ1KK81rAP7', label: 'Contact Us', position: 'left'},
          {to: '/donate-us', label: 'Donate Us', position: 'left'},
          {to: '/policies', label: 'Policies', position: 'left'},
          {
            href: 'https://github.com/Comp-Labs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sitemap',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Contact Us!',
                href: 'https://forms.gle/dQmrNAZZ1KK81rAP7',
              },
              {
                label: 'Donate Us!',
                to: '/donate-us',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'Apps',
                to: '/services/apps',
              },
              {
                label: 'Guides',
                to: '/docs/intro',
              },
              {
                label: 'Google Play Developers',
                to: '/services/google-play-developers',
              },
              {
                label: 'Business Meeting Service',
                to: '/services/business-meeting-service',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                to: '/legal/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                to: '/legal/privacy-policy',
              },
              {
                label: 'Cookie Policy',
                to: '/legal/cookie-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Comp Labs. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      //algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        //appId: 'YOUR_APP_ID',
  
        // Public API key: it is safe to commit it
        //apiKey: 'YOUR_SEARCH_API_KEY',
  
        //indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        //contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        //searchParameters: {},
  
        //... other Algolia params
      //},
    }),
});
