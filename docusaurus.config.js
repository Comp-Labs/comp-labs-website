const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Tech Fiddle",
    tagline:
      "All About Technology...",
    url: "https://complabs.in",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "Comp-Labs",
    projectName: "comp-labs-website",
    deploymentBranch: "main",
    trailingSlash: "false",

    themes: [
      "@docusaurus/theme-live-codeblock",

      // [
      //   require.resolve("@easyops-cn/docusaurus-search-local"),
      //   {
      //     indexPages: true,
      //     removeDefaultStemmer: false, // will change to true later
      //     highlightSearchTermsOnTargetPage: true,
      //     searchBarShortcutHint: true,
      //     // `hashed` is recommended as long-term-cache of index file is possible.
      //     hashed: true,
      //     // For Docs using Chinese, The `language` is recommended to set to:
      //     // language: ["en", "zh"],
      //   },
      // ],
    ],

    scripts: [
      "https://kit.fontawesome.com/307bcbc229.js",
      // "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/js/scrolltotop.js",
      // "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/html/sharebtn/script.js",
      // "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/js/wikipedia.js",
      // "https://unpkg.com/wikipedia-preview@latest/dist/wikipedia-preview.production.js",
      "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-629de96c243ef6ee",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js",
      // "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/js/loader.js",
      // 'https://complabs.in/herojs.js',
      // Google AdSense:
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230468888789445',
        async: true,
        crossorigin: 'anonymous',
      },
      // TrustedSite:
      {
        src: 'https://cdn.ywxi.net/js/1.js',
        async: true,
      },
    ],

    stylesheets: [
      // String format.
      'https://docusaurus.io/style.css',
      // Object format.
      {
        href: '/apple-touch-icon-180x180.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
      },
      {
        href: '/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
      },
      {
        href: '/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
      },
      {
        href: '/site.webmanifest',
        rel: 'manifest',
      },
      {
        href: '/safari-pinned-tab.svg',
        rel: 'mask-icon',
        color: '#5bbad5',
      },
    ],

    plugins: [
      // [
      //   "./plugins/blog-plugin",
      //   {
      //     id: "blog",
      //     routeBasePath: "blog",
      //     path: "./blog",
  
      //   },
      // ],
      'plugin-image-zoom',
      [
        "@docusaurus/plugin-pwa",
        {
          debug: true,
          offlineModeActivationStrategies: [
            "appInstalled",
            "standalone",
            "queryString",
          ],
          pwaHead: [
            {
              tagName: "link",
              rel: "icon",
              href: "/img/complabs.jpg",
            },
            {
              tagName: "link",
              rel: "manifest",
              href: "/manifest.json",
            },
            {
              tagName: "meta",
              name: "theme-color",
              content: "#076af7",
            },
          ],
        },
      ],
      [
        'ideal-image',
        /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
        ({
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        }),
      ],
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          // blog: false,
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/Comp-Labs/comp-labs-website/edit/main/",
          },
          blog: {
            blogTitle: "Guides",
            blogSidebarTitle: "All Guides",
            blogSidebarCount: 0, // Change to 'ALL' if required later.
            sortPosts: "ascending",
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Tech Fiddle. All Rights Reserved.`,
            },
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          sitemap: {
            changefreq: "always",
            priority: 1.0,
          },
          gtag: {
            trackingID: "G-7PSBRGTFP5",
            anonymizeIP: true,
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        zoom: {
          selector: '.markdown img',
          background: {
            light: '#076af7',
            dark: '#076af7'
          },
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          config: {
            background: '#076af7',
          }
        },
        liveCodeBlock: {
          playgroundPosition: "bottom",
        },
        // Remove Comments When Tech Fiddle App is Publicly Available on the App Store
        // metadata: [
        //   {name: 'apple-itunes-app', content: 'app-id=myAppStoreID'}
        // ],
        metadata: [{ name: "msapplication-TileColor", content: "#076af7" }],
        metadata: [{ name: "theme-color", content: "#076af7" }],
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        prism: {
          additionalLanguages: ["java", "markdown"],
        },
        image: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",
        // metadata: [{name: 'twitter:card', content: 'summary'}],
        // announcementBar: {
        //   id: 'announcement',
        //   content:
        //     '<p>Some Announcement...</p>',
        //   backgroundColor: '#fff',
        //   textColor: '#fff',
        //   isCloseable: false,
        // },
        // announcementBar: {
        //   id: 'christmas-lights',
        //   content: '<iframe src="/html/lights.html" title="Lighting"></iframe>',
        //   backgroundColor: '#fff',
        //   textColor: '#fff',
        //   isCloseable: false,
        // },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 6,
        },
        algolia: {
          // Old
          // appId: '5BME7GVXKF',
          // indexName: 'comp-labs',
          // apiKey: 'dad01739ec6bb5d5b902dfc48bb20a50',
          appId: "7LEIQ4QK6M",
          indexName: "complabs",
          apiKey: "d0a38351663330eccb11548d292f41bd",
          placeholder: "Search Tech Fiddle...",
        },
        navbar: {
          hideOnScroll: false,
          // title: "Tech Fiddle",
          logo: {
            alt: "Tech Fiddle Logo",
            src: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",
            srcDark: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",
          },
          items: [
            { to: "/docs", label: "🚧 Docs", position: "left" },
            { to: "blog", label: "Guides", position: "left" },
            { to: "/apps", label: "Apps", position: "left" },
            {
              type: "dropdown",
              label: "Solutions",
              position: "left",
              items: [
                {
                  label: "🚧 App Publishing Solution",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "🚧 Enterprise Mail Solution",
                  to: "/solutions/enterprise-mail-solution",
                },
                {
                  label: "🚧 Enterprise Meeting Solution",
                  to: "/solutions/enterprise-meeting-solution",
                },
                {
                  label: "🚧 Anonymous VPN",
                  to: "/solutions/vpn",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Tools",
              position: "left",
              items: [
                {
                  label: "DNS Lookup",
                  href: "https://digwebinterface.com",
                },
                {
                  label: "MicroURL",
                  href: "https://microurl.complabs.in/",
                },
                {
                  label: "SpeedTest",
                  to: "/tools/speedtest",
                },
                {
                  label: "Web Tools",
                  href: "https://www.webtoolhub.com/",
                },
              ],
            },
            { to: "/contact", label: "Contact Us", position: "left" },
            // { to: "/donate-us", label: "Donate Us", position: "left" },
            { to: "/webdev-crafts", label: "WebDev's Crafts", position: "left" },
            {
              type: "dropdown",
              label: "Legal",
              position: "left",
              items: [
                {
                  label: "Terms of Service",
                  to: "/legal/terms-of-service",
                },
                {
                  label: "Privacy Policy",
                  to: "/legal/privacy-policy",
                },
                {
                  label: "Cookie Policy",
                  to: "/legal/cookie-policy",
                },
              ],
            },
            // Right
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://github.com/Comp-Labs",
              position: "right",
              className: "github",
              "aria-label": "GitHub",
            },
            {
              href: "https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA",
              position: "right",
              className: "youtube",
              "aria-label": "YouTube",
            },
            // {
            //   href: "https://discord.gg/GAbzAGKccW",
            //   position: "right",
            //   className: "discord",
            //   "aria-label": "Discord",
            // },
            {
              href: "https://linktr.ee/complabs",
              position: "right",
              className: "linktree",
              "aria-label": "LinkTree",
            },
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Tech Fiddle",
              items: [
                {
                  label: "Home",
                  to: "/",
                },
                {
                  label: "🚧 Docs",
                  to: "/docs/",
                },
                {
                  label: "Guides",
                  to: "/blog",
                },
                {
                  label: "Apps",
                  to: "/apps",
                },
                {
                  label: "Contact Us!",
                  href: "https://forms.gle/dQmrNAZZ1KK81rAP7",
                },
                {
                  label: "WebDev's Crafts",
                  href: "/webdev-crafts",
                },
                {
                  label: "Donate Us!",
                  to: "/donate-us",
                },
              ],
            },
            {
              title: "Solutions",
              items: [
                {
                  label: "🚧 App Publishing Solution",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "🚧 Enterprise Meeting Service",
                  to: "/solutions/enterprise-meeting-solution",
                },
                {
                  label: "🚧 Enterprise Mail Service",
                  to: "/solutions/enterprise-mail-solution",
                },
                {
                  label: "🚧 Anonymous VPN",
                  to: "/solutions/enterprise-mail-solution",
                },
              ],
            },
            {
              title: "Tools",
              items: [
                {
                  label: "DNS Lookup",
                  href: "https://digwebinterface.com",
                },
                {
                  label: "MicroURL",
                  href: "https://microurl.complabs.in/",
                },
                {
                  label: "SpeedTest",
                  to: "/tools/speedtest",
                },
                {
                  label: "Web Tools",
                  href: "https://www.webtoolhub.com/",
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Service",
                  to: "/legal/terms-of-service",
                },
                {
                  label: "Privacy Policy",
                  to: "/legal/privacy-policy",
                },
                {
                  label: "Cookie Policy",
                  to: "/legal/cookie-policy",
                },
              ],
            },
            // {
            //   title: 'Our Sites',
            //   items: [
            //     {
            //       label: 'Tech Fiddle (This Site)',
            //       href: '/',
            //     },
            //     {
            //       label: 'Doraemon Originals',
            //       href: 'https://complabs28.wixsite.com/doraemon-originals',
            //     },
            //   ],
            // },
            {
              title: "Social",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/Comp-Labs",
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA",
                },
                // {
                //   label: "Discord",
                //   href: "https://discord.gg/GAbzAGKccW",
                // },
                {
                  label: "LinkTree",
                  href: "https://linktr.ee/complabs",
                },
                {
                  html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" title="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
                },
              ],
            },
            {
              title: "🚧 In Development",
              items: [
                {
                  label: "🚧 Docs",
                  to: "/docs/",
                },
                {
                  label: "🚧 App Publishing Solution",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "🚧 Business Meeting Service",
                  to: "/solutions/enterprise-meeting-solution",
                },
                {
                  label: "🚧 Business Mail Service",
                  to: "/solutions/enterprise-mail-solution",
                },
                {
                  label: "🚧 Anonymous VPN",
                  to: "/solutions/vpn",
                },
              ],
            },
          ],
          logo: {
            alt: "Tech Fiddle Footer Logo",
            src: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",
            href: "/",
          },
          copyright: `Copyright © ${new Date().getFullYear()} Tech Fiddle. All Rights Reserved. Built using Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
