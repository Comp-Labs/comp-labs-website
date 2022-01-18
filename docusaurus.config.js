const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Comp Labs',
  tagline: 'Our website provides Technical Guides, Apps, and Google Play Developer Console Service. This is a non-profit website so please donate to us to keep our resources running. You can write your feedback and comments about anything on our Contact Us page. See details of our services below.',
  url: 'https://v2.complabs.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Comp-Labs', // Usually your GitHub org/user name.
  projectName: 'comp-labs-website', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: 'false',
  themes: ['@docusaurus/theme-live-codeblock'],

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
        gtag: {
          trackingID: 'UA-203163469-1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'K1QUTN73LL',
        apiKey: '00b3485d53f7bfdeb9cc5fdd5a37cff2',
        indexName: 'docsearch',
      },
      image: 'img/Comp Labs Logo_Text.png',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Example Banner',
      //   backgroundColor: '#147EFB',
      //   textColor: '#FFFFFF',
      //   isCloseable: false,
      // },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
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
          // {to: '/docs/welcome', label: 'Docs', position: 'left'},
          {href: 'https://docs.complabs.in', label: 'Guides', position: 'left'},
          //{to: 'blog', label: 'Guides', position: 'left'},
          {
            type: 'dropdown',
            label: 'Services',
            position: 'left',
            items: [
              {
                label: 'Apps',
                href: 'https://complabs28.wixsite.com/comp-labs-app-store',
              },
              {
                label: 'Google Play Developers',
                to: '/services/google-play-developers',
              },
              // {
              //   label: 'Business Meeting Service',
              //   to: '/services/business-meeting-service',
              // },
              // ... more items
            ],
          },
          {href: 'https://forms.gle/dQmrNAZZ1KK81rAP7', label: 'Contact Us', position: 'left'},
          {to: '/donate-us', label: 'Donate Us', position: 'left'},
          {
            type: 'dropdown',
            label: 'Policies',
            position: 'left',
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
              // ... more items
            ],
          },
          {
            href: 'https://github.com/Comp-Labs/',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/search', label: '🔍 Search', position: 'right'},
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
            title: 'Sitemap',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Guides',
                href: 'https://docs.complabs.in',
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
          {
            title: 'Our Sites',
            items: [
              {
                label: 'Comp Labs',
                href: 'https://www.complabs.in/',
              },
              {
                label: 'Doraemon Originals',
                href: 'https://complabs28.wixsite.com/doraemon-originals',
              },
              {
                label: 'Comp Labs App Store',
                href: 'https://complabs28.wixsite.com/comp-labs-app-store',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Comp-Labs',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA',
              },
            ],
          },
          {
            title: 'Experimental Pages 🚧',
            items: [
              {
                label: 'Docs 🚧',
                to: '/docs/',
              },
              {
                label: 'Guides 🚧',
                to: 'blog',
              },
              {
                label: 'Apps 🚧',
                to: '/services/apps',
              },
              {
                label: 'Business Meeting Service 🚧',
                to: '/services/business-meeting-service',
              },
            ],
          },
        ],
        logo: {
          alt: 'Comp Labs Footer Logo',
          src: 'img/Comp Labs Logo_Text.png',
          href: '/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Comp Labs. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
