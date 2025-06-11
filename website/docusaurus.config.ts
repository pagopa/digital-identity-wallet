import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Digital Identity Wallet",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://pagopa.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/digital-identity-wallet",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pagopa", // Usually your GitHub org/user name.
  projectName: "digital-identity-wallet", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          path: "./docs",
          routeBasePath: "home",
          include: ["*.md"],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/pagopa-logo.png",
    navbar: {
      title: "Digital Identity Wallet",
      logo: {
        alt: "Logo",
        src: "img/pagopa-logo.png",
      },
      items: [
        {
          href: "https://github.com/pagopa/digital-identity-wallet",
          label: "GitHub",
          position: "right",
        },
      ],
    } /*
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start here",
              to: "/",
            },
          ],
        },
      ],
    },*/,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
