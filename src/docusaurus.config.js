// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IC Naming Docs",
  tagline: "Dinosaurs are cool",
  url: "https://docs.icnaming.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "IC Naming", // Usually your GitHub org/user name.
  projectName: "icnaming-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/IC-Naming/icnaming-docs/blob/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "IC Naming",
        logo: {
          alt: "IC Naming",
          src: "img/logo.png",
        },
        items: [
          {
            href:
              "https://github.com/IC-Naming",
            label: "Github",
            position: "right",
          },
          {
            href:
              "https://chrome.google.com/webstore/detail/ic-naming-extensions/oepbpdamkigabminkagecahfgdgbbodc",
            label: "Chrome Store",
            position: "right",
          },
          {
            href:
              "https://app-testnet.icnaming.com/",
            label: "Test Net",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} IC Naming.`,
      },
      prism: {
        additionalLanguages: ["rust"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
