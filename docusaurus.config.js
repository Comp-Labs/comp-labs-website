const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Comp Labs",
    tagline:
      "Guides, Apps, Solutions, and Tools for Personal, Business, or Enterprise Use.",
    url: "https://complabs.in",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Comp-Labs", // Usually your GitHub org/user name.
    projectName: "comp-labs-website", // Usually your repo name.
    deploymentBranch: "main",
    trailingSlash: "false",
    themes: ["@docusaurus/theme-live-codeblock"],
    titleDelimiter: "•",

    scripts: [
      // String format.
      "https://kit.fontawesome.com/307bcbc229.js",
      "/static/scrolltotop.js",
      // 'https://complabs.in/herojs.js',
      // Object format.
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      //   async: true,
      // },
    ],

    plugins: [
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
              href: "/img/complabs.png",
            },
            {
              tagName: "link",
              rel: "manifest",
              href: "/manifest.json", // your PWA manifest
            },
            {
              tagName: "meta",
              name: "theme-color",
              content: "#1877F2",
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
            blogTitle: "Comp Labs Blog",
            blogSidebarTitle: "All Posts",
            blogSidebarCount: "ALL",
            sortPosts: "ascending",
            feedOptions: {
              copyright: "Copyright © 2022 Comp Labs. All Rights Reserved.",
              type: null,
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
            trackingID: "UA-203163469-1",
            anonymizeIP: true,
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        liveCodeBlock: {
          playgroundPosition: "bottom",
        },
        // Remove Comments When Comp Labs App is Publicly Available on the App Store
        // metadata: [
        //   {name: 'apple-itunes-app', content: 'app-id=myAppStoreID'}
        // ],
        metadata: [{ name: "msapplication-TileColor", content: "#1877F2" }],
        metadata: [{ name: "theme-color", content: "#1877F2" }],
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
          // We need to load markdown again so that YAML is loaded before MD
          // and the YAML front matter is highlighted correctly.
          // TODO after we have forked prism-react-renderer, we should tweak the
          // import order and fix it there
          additionalLanguages: ["java", "markdown"],
        },
        image: "img/comp-labs-logo.png",
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
          placeholder: "Search Comp Labs...",
        },
        navbar: {
          hideOnScroll: true,
          title: "Comp Labs",
          logo: {
            alt: "Comp Labs Logo",
            src: "img/logo.svg",
            srcDark: "img/logo.svg",
          },
          items: [
            { to: "/docs/", label: "Docs 🚧", position: "left" },
            { to: "blog", label: "Guides", position: "left" },
            { to: "/apps/", label: "Apps", position: "left" },
            {
              type: "dropdown",
              label: "Solutions",
              position: "left",
              items: [
                {
                  label: "App Publisher for Google Play",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "Business Meeting Service 🚧",
                  to: "/solutions/enterprise-meeting-solution",
                },
                {
                  label: "Business Mail Service 🚧",
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
            {
              type: "dropdown",
              label: "Special",
              position: "left",
              items: [
                {
                  label: "WeatherBox ⛅",
                  href: "https://weatherbox.complabs.in",
                },
                {
                  label: "Beautiful Christmas Lights",
                  to: "/special/christmas-lights",
                },
                {
                  label: "Happy Sailor Animation",
                  to: "/special/happy-sailor-animation",
                },
                {
                  label: "Sewing Machine Animation",
                  to: "/special/sewing-machine",
                },
              ],
            },
            {
              href: "https://forms.gle/dQmrNAZZ1KK81rAP7",
              label: "Contact Us",
              position: "left",
            },
            { to: "/donate-us", label: "Donate Us", position: "left" },
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
              type: "dropdown",
              label: "Website v2 (Current)",
              position: "right",
              items: [
                {
                  label: "Website v2 (Current)",
                  to: "/",
                },
                {
                  label: "Website v1 (Legacy)",
                  to: "https://complabs28.wixsite.com/complabs",
                },
              ],
            },
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://github.com/Comp-Labs",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub Repository",
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
                {
                  label: "Docs 🚧",
                  to: "/docs/",
                },
                {
                  label: "Guides",
                  to: "/blog",
                },
                {
                  label: "Apps",
                  to: "/apps/",
                },
                {
                  label: "Contact Us!",
                  href: "https://forms.gle/dQmrNAZZ1KK81rAP7",
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
                  label: "App Publisher for Google Play",
                  to: "/solutions/google-play-developers",
                },
                {
                  label: "Business Meeting Service 🚧",
                  to: "/solutions/enterprise-meeting-solution",
                },
                {
                  label: "Business Mail Service 🚧",
                  to: "/solutions/enterprise-mail-solution",
                },
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
              title: "Special",
              items: [
                {
                  label: "WeatherBox ⛅",
                  href: "https://weatherbox.complabs.in",
                },
                {
                  label: "Beautiful Christmas Lights",
                  to: "/special/christmas-lights",
                },
                {
                  label: "Happy Sailor Animation",
                  to: "/special/happy-sailor-animation",
                },
                {
                  label: "Sewing Machine Animation",
                  to: "/special/sewing-machine",
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
                {
                  label: "Business Mail Service 🚧",
                  to: "/solutions/enterprise-mail-solution",
                },
                {
                  label: "Anonymous VPN 🚧",
                  to: "/solutions/vpn",
                },
              ],
            },
          ],
          logo: {
            alt: "Comp Labs Footer Logo",
            src: "img/comp-labs-logo.png",
            href: "/",
          },
          copyright: `Copyright © ${new Date().getFullYear()} Comp Labs. All Rights Reserved. Built using Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
