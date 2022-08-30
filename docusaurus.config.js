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
    ["@docusaurus/theme-live-codeblock"],
    // enable-local-search
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     indexPages: true,
    //     removeDefaultStemmer: false, // will change to true later
    //     highlightSearchTermsOnTargetPage: true,
    //     searchBarShortcutHint: false,
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     // For Docs using Chinese, The `language` is recommended to set to:
    //     // language: ["en", "zh"],
    //   },
    // ],
  ],

    scripts: [
      "https://kit.fontawesome.com/307bcbc229.js",
      "https://clfiles.herokuapp.com/js/scrolltotop.js",
      "https://clfiles.herokuapp.com/js/sharebtn.js",
      // 'https://complabs.in/herojs.js',
      // Object format.
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230468888789445',
        async: true,
      },
    ],

    plugins: [
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
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/Comp-Labs/comp-labs-website/edit/main/",
          },
          blog: {
            blogTitle: "Guides",
            blogSidebarTitle: "All Guides",
            blogSidebarCount: "ALL",
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
            light: 'rgb(7, 106, 247)',
            dark: 'rgb(7, 106, 247)'
          },
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          config: {}
        },
        liveCodeBlock: {
          playgroundPosition: "bottom",
        },
        // Remove Comments When Comp Labs App is Publicly Available on the App Store
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
        image: "https://complabs.in/img/comp-labs-logo.jpg",
        // metadata: [{name: 'twitter:card', content: 'summary'}],
        // announcementBar: {
        //   id: 'announcement',
        //   content:
        //     '<p>Some Announcement...</p>',
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
          title: "Tech Fiddle",
          logo: {
            alt: "Tech Fiddle Logo",
            src: "img/logo.svg",
            srcDark: "img/logo.svg",
          },
          items: [
            // { to: "/docs", label: "Docs 🚧", position: "left" },
            { to: "blog", label: "Guides", position: "left" },
            { to: "/apps", label: "Apps", position: "left" },
            {
              type: "dropdown",
              label: "Solutions",
              position: "left",
              items: [
                {
                  label: "App Publishing Solution",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "Enterprise Mail Solution 🚧",
                  to: "/solutions/enterprise-mail-solution",
                },
                {
                  label: "Anonymous VPN 🚧",
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
                  label: "SpeedTest",
                  to: "/tools/speedtest",
                },
                {
                  label: "Web Tools",
                  href: "https://www.webtoolhub.com/",
                },
              ],
            },
            { to: "https://forms.gle/dQmrNAZZ1KK81rAP7", label: "Contact Us", position: "left" },
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
            // {
            //   type: "localeDropdown",
            //   position: "right",
            // },
            {
              href: "https://github.com/Comp-Labs",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub",
            },
            {
              type: 'html',
              position: 'right',
              value: '<a style="color:#f70000" href="https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA"><i class="fa-brands fa-youtube fa-xl color:#f70000"></i></a>',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Sitemap",
              items: [
                {
                  label: "Home",
                  to: "/",
                },
                // {
                //   label: "Docs 🚧",
                //   to: "/docs/",
                // },
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
                // {
                //   label: "Donate Us!",
                //   to: "/donate-us",
                // },
              ],
            },
            {
              title: "Solutions",
              items: [
                {
                  label: "App Publisher for Google Play",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "Business Meeting Service 🚧",
                  to: "/solutions/enterprise-meeting-solution",
                },
                // {
                //   label: "Business Mail Service 🚧",
                //   to: "/solutions/enterprise-mail-solution",
                // },
                {
                  label: "Anonymous VPN 🚧",
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
            //       label: 'Comp Labs (This Site)',
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
                {
                  label: "LinkTree",
                  href: "https://linktr.ee/complabs",
                },
                {
                  html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
                },
              ],
            },
            {
              title: "In Development 🚧",
              items: [
                {
                  label: "Docs 🚧",
                  to: "/docs/",
                },
                {
                  label: "Business Meeting Service 🚧",
                  to: "/solutions/enterprise-meeting-solution",
                },
                // {
                //   label: "Business Mail Service 🚧",
                //   to: "/solutions/enterprise-mail-solution",
                // },
                {
                  label: "Anonymous VPN 🚧",
                  to: "/solutions/vpn",
                },
              ],
            },
          ],
          logo: {
            alt: "Tech Fiddle Footer Logo",
            src: "img/comp-labs-logo.jpg",
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
