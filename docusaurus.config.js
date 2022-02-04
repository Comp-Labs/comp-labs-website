const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Comp Labs',
  tagline: 'Our website provides Technical Guides, Apps, and Google Play Developer Console Service. This is a non-profit website so please donate to us to keep our resources running. You can write your feedback and comments about anything on our Contact Us page. See details of our services below.',
  url: 'https://complabs.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Comp-Labs', // Usually your GitHub org/user name.
  projectName: 'comp-labs-website', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: 'false',
  themes: ['@docusaurus/theme-live-codeblock'],

  clientModules: [
    require.resolve('./src/css/roboto.css'),
    require.resolve('./src/css/material-icons.css'),
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'daily',
        priority: 0.5,
      },
    ],
  ],

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
        blog: {
          blogTitle: 'Comp Labs Blog',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          sortPosts: 'ascending',
          feedOptions: {
            copyright: 'Copyright © 2022 Comp Labs. All Rights Reserved.',
            type: null,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
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
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        // We need to load markdown again so that YAML is loaded before MD
        // and the YAML front matter is highlighted correctly.
        // TODO after we have forked prism-react-renderer, we should tweak the
        // import order and fix it there
        additionalLanguages: ['java', 'markdown'],
      },
      image: 'img/Comp Labs Logo_Text.png',
      // metadata: [{name: 'twitter:card', content: 'summary'}],
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
        maxHeadingLevel: 6,
      },
      algolia: {
        // container: '#docsearch',
        // appId: '7LEIQ4QK6M',
        // indexName: 'complabs',
        // apiKey: 'd0a38351663330eccb11548d292f41bd',
        appId: '5BME7GVXKF',
        indexName: 'comp-labs',
        apiKey: 'dad01739ec6bb5d5b902dfc48bb20a50',
        placeholder: 'Search Comp Labs...',
      },
      navbar: {
        hideOnScroll: true,
        title: 'Comp Labs',
        logo: {
          alt: 'Comp Labs Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {to: '/docs/', label: 'Docs 🚧', position: 'left'},
          {href: 'https://docs.complabs.in', label: 'Guides', position: 'left'},
          {to: 'blog', label: 'Guides 🚧', position: 'left'},
          {to: '/apps/', label: 'Apps', position: 'left'},
          {
            type: 'dropdown',
            label: 'Solutions',
            position: 'left',
            items: [
              {
                label: 'Google Play Developers',
                to: '/solutions/google-play-developers',
              },
              {
                label: 'Business Meeting Service',
                to: '/solutions/business-meeting-service',
              },
              // ... more items
            ],
          },
          {href: 'https://forms.gle/dQmrNAZZ1KK81rAP7', label: 'Contact Us', position: 'left'},
          {to: '/donate-us', label: 'Donate Us', position: 'left'},
          {
            type: 'dropdown',
            label: 'Legal',
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
          // right
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       href: 'https://github.com/facebook/docusaurus/issues/3526',
          //       label: 'Help Us Translate',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/Comp-Labs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
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
                label: 'Docs 🚧',
                to: '/docs/',
              },
              {
                label: 'Guides',
                href: 'https://docs.complabs.in',
              },
              {
                label: 'Guides 🚧',
                to: '/blog',
              },
              {
                label: 'Apps 🚧',
                to: '/apps/',
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
            title: 'Solutions',
            items: [
              {
                label: 'Google Play Developers',
                to: '/solutions/google-play-developers',
              },
              {
                label: 'Business Meeting Service',
                to: '/solutions/business-meeting-service',
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
                label: 'Comp Labs (This Site)',
                href: '/',
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
                label: 'YouTube Channel',
                href: 'https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA',
              },
            ],
          },
          {
            title: 'In Development 🚧',
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
                to: '/apps/',
              },
              {
                label: 'Business Meeting Service 🚧',
                to: '/solutions/business-meeting-service',
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
