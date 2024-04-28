// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tech Fiddle",
  tagline: "All About Technology...",
  url: "https://techfiddle.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "Comp-Labs",
  projectName: "comp-labs-website",
  deploymentBranch: "main",
  trailingSlash: false,

  plugins: [
    // [
    //   "./plugins/blog-plugin",
    //   {
    //     id: "blog",
    //     routeBasePath: "blog",
    //     path: "./blog",

    //   },
    // ],
    // [
    //   "blog-index",
    //   {
    //     blogSidebarCount: "ALL",
    //     blogSidebarTitle: "All my posts",
    //     postsPerPage: "ALL",
    //     remarkPlugins: [remarkMath],
    //     rehypePlugins: [[rehypeKatex, { strict: false }]],
    //   },
    // ],

    // 'docusaurus-tailwindcss',

    'plugin-image-zoom',

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
        // blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Comp-Labs/comp-labs-website/edit/main/",
        },

        blog: {
          blogTitle: "Guides",
          blogSidebarTitle: "All Guides",
          blogSidebarCount: 0, // Change to 'ALL' if required later
          sortPosts: "descending",
          editUrl: "https://github.com/Comp-Labs/comp-labs-website/edit/main/",
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

  themes: [
    "@docusaurus/theme-live-codeblock",
  ],

  markdown: {
    mdx1Compat: {
      // Allow html comments in MDX files like blog `{/* truncate */}` markers
      comments: false,
      // Allow former admonition title syntax :::note Title instead of new syntax :::note[Title]
      admonitions: false,
      // Allow usage of unescaped {#headingId} syntax instead of \{#headingId}
      headingIds: false
    },
  },

  scripts: [
    "https://kit.fontawesome.com/307bcbc229.js",

    "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-629de96c243ef6ee",

    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js",

    // Google AdSense:
    // {
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230468888789445',
    //   async: true,
    //   crossorigin: 'anonymous',
    // },

    // TrustedSite:
    {
      src: 'https://cdn.ywxi.net/js/1.js',
      async: true,
    },

    // Headway
    {
      src: 'https://cdn.headwayapp.co/widget.js',
      async: true,
    },
  ],

  headTags: [
    // {
    //   tagName: 'script',
    //   attributes: {
    //     async: 'true',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6230468888789445',
    //     crossorigin: 'anonymous',
    //   },
    // },

    {
      tagName: 'script',
      attributes: {
        content: '!function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}}(window,document,"canny-jssdk","script");'
      }
    },

    {
      tagName: 'script',
      attributes: {
        content: "Canny('initChangelog', {appID: '62777bd9b9aa4552a064cab2',position: 'bottom',align: 'left',theme: 'auto',});"
      }
    },
  ],

  stylesheets: [
    // String format.
    // 'https://docusaurus.io/style.css',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Remove Comments When Tech Fiddle App is Publicly Available on the App Store
      // metadata: [
      //   {name: 'apple-itunes-app', content: 'app-id=myAppStoreID'}
      // ],
      // metadata: [{name: 'twitter:card', content: 'summary'}],
      metadata: [{ name: "msapplication-TileColor", content: "#076af7" }, { name: "theme-color", content: "#076af7" }],

      image: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",

      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

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
      //   content: '<iframe src="/html/lights.html" title="Lighting" />',
      //   backgroundColor: '#fff',
      //   textColor: '#fff',
      //   isCloseable: false,
      // },

      algolia: {
        // Old (Self-Hosted)
        // appId: '5BME7GVXKF',
        // indexName: 'comp-labs',
        // apiKey: 'dad01739ec6bb5d5b902dfc48bb20a50',
        appId: "7LEIQ4QK6M",
        indexName: "complabs",
        apiKey: "d0a38351663330eccb11548d292f41bd",
        contextualSearch: true,
        searchPagePath: 'search',
        placeholder: "Search...",
      },

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },

      liveCodeBlock: {
        playgroundPosition: "bottom",
      },

      prism: {
        additionalLanguages: ["java", "markdown"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

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
          // { to: "/apps", label: "Apps", position: "left" },
          { to: "/showcase", label: "Showcase", position: "left" },
          // { to: "/products", label: "Products", position: "left" },
          // { to: "/tools", label: "Tools", position: "left" },
          { to: "/contact", label: "Contact Us", position: "left" },
          // { to: "/donate", label: "Donate Us", position: "left" },
          // { to: "/webdev-crafts", label: "WebDev's Crafts", position: "left" },
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
            type: 'search',
            position: "right",
          },
          // {
          //   href: "https://github.com/Comp-Labs",
          //   position: "right",
          //   className: "github",
          //   "aria-label": "GitHub",
          //   width: "24px",
          //   height: "24px",
          // },
          // {
          //   type: 'custom-Buttons',
          //   position: "right",
          //   itemProp: 44,
          //   anotherProp: "xyz",
          // },
        ],
      },

      footer: {
        style: "light",
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
              // {
              //   label: "Apps",
              //   to: "/apps",
              // },
              {
                label: "Showcase",
                to: "/showcase"
              },
              // {
              //   label: "Products",
              //   to: "/products",
              // },
              // {
              //   label: "Tools",
              //   to: "/tools",
              // },
              {
                label: "Contact Us!",
                href: "https://forms.gle/dQmrNAZZ1KK81rAP7",
              },
              // {
              //   label: "WebDev's Crafts",
              //   href: "/webdev-crafts",
              // },
              {
                label: "Legal",
                href: "/legal/terms-of-service",
              },
              {
                label: "Donate Us!",
                to: "/donate",
              },
            ],
          },

          // {
          //   title: "Products",
          //   items: [
          //     {
          //       label: "🚧 App Publishing Solution",
          //       to: "/products/google-play-developers",
          //     },
          //     {
          //       label: "🚧 Enterprise Meeting Solution",
          //       to: "/products/enterprise-meeting-solution",
          //     },
          //     {
          //       label: "🚧 Enterprise Mail Solution",
          //       to: "/products/enterprise-mail-solution",
          //     },
          //     {
          //       label: "🚧 Anonymous VPN",
          //       to: "/products/vpn",
          //     },
          //   ],
          // },

          // {
          //   title: "Tools",
          //   items: [
          //     {
          //       label: "DNS Lookup",
          //       href: "https://digwebinterface.com",
          //     },
          //     {
          //       label: "MicroURL",
          //       href: "https://microurl.techfiddle.io/",
          //     },
          //     {
          //       label: "SpeedTest",
          //       to: "/tools/speedtest",
          //     },
          //     {
          //       label: "Web Tools",
          //       href: "https://www.webtoolhub.com/",
          //     },
          //   ],
          // },

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

          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Comp-Labs",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@techfiddle",
              },
              {
                label: "Discord",
                href: "https://discord.gg/GAbzAGKccW",
              },
              {
                label: "Bento",
                href: "https://bento.me/techfiddle",
              },
              {
                label: "Get $200 in Cloud Credits from DigitalOcean",
                href: "https://m.do.co/c/4d2203436de1",
              },
              //   {
              //     html: `
              //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" title="Deploys by Netlify" width="114" height="51" />
              //   </a>
              // `,
              //   },
            ],
          },
          // {
          //   title: "🚧 In Development",
          //   items: [
          //     {
          //       label: "Docs",
          //       to: "/docs/",
          //     },
          //     {
          //       label: "App Publishing Solution",
          //       to: "/products/google-play-developers",
          //     },
          //     {
          //       label: "Enterprise Meeting Solution",
          //       to: "/products/enterprise-meeting-solution",
          //     },
          //     {
          //       label: "Enterprise Mail Solution",
          //       to: "/products/enterprise-mail-solution",
          //     },
          //     {
          //       label: "Anonymous VPN",
          //       to: "/products/vpn",
          //     },
          //   ],
          // },
        ],

        logo: {
          alt: "Tech Fiddle Footer Logo",
          src: "https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg",
        },

        copyright: `Copyright © ${new Date().getFullYear()} Tech Fiddle. All Rights Reserved. Built using Docusaurus.`,
      },
    }),
}

module.exports = config;
