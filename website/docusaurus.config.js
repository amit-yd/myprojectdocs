import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind/tailwind.config.cjs';
import { variableInjectorPlugin } from './plugins/remark/variableInjector.js';
import versions from './versions.json';

/** Dynamic definitions */

// eslint-disable-next-line no-unused-vars
const lastVersion = versions[0];
const copyright = `Copyright © ${new Date().getFullYear()} - DIGITAL.AI, ALL RIGHTS RESERVED`;
const productName = "TeamForge";

// eslint-disable-next-line no-unused-vars
const commonDocsOptions = {
  breadcrumbs: true,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
};


/** Config */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: `Digital.ai ${productName}`,
  tagline:
    'Ensure governance, compliance, and code security standards are maintained in development.',
  organizationName: 'digital.ai',
  projectName: `docs-${productName.toLowerCase()}`,
  url: 'https://staging.docs.digital.ai',
  baseUrl: '/', // Updated baseUrl here
  trailingSlash: false, // because trailing slashes can break some existing relative links

  favicon: 'brand/digitalai/Favicon-FC-.svg',
  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: './sidebars.json',
          // remark plugins option
          beforeDefaultRemarkPlugins: [variableInjectorPlugin],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
    ['./plugins/sync-constants', { path: './versioned_constants' }],
    tailwindPlugin,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_ukraine',
      //   content:
      //     '<a target="_blank" href="https://devopsai-my.sharepoint.com/:p:/g/personal/rjanarthanan_digital_ai/EZCAc8-0hCtCiVXAE9ZIiF8BgNF1foc76rbOOmME_DCMYQ?e=9ev1lb">Project Phoenix</a>',
      //   backgroundColor: '#20232a',
      //   textColor: '#fff',
      //   isCloseable: true,
      // },
      prism: {
        defaultLanguage: 'jsx',
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
      navbar: {
        logo: {
          src: '/',
          srcDark: '/',
          alt: 'My Sample Doc',
          href: '/',
          target: '_self',
        },
        items: [
          {
            label: 'Product',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Sample Doc',
                to: '../appmanagement/',
                target: '_self',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            label: 'version',
          },
          {
            href: 'https://digitalai.us.digital.ai/signin/docs?redirect=https%3A%2F%2Fdocs.digital.ai%2F',
            label: 'Login',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Participate',
            items: [
              {
                label: 'Community',
                href: 'https://community.digital.ai/',
              },
              {
                label: 'Blog',
                href: 'https://digital.ai/catalyst-blog/',
              },
              {
                label: 'Send Feedback',
                href: 'mailto:docfeedback@digital.ai',
              },
            ],
          },
          {
            title: 'Find us',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/digitaldotai',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/digitalaisw',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/digitaldotai/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6k61LnvJGuBpHqC0uuUQ-g',
              },
            ],
          },
          {
            title: 'Explore More',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://digital.ai/privacy-policy/',
              },
              {
                label: 'Terms and Conditions',
                href: 'https://digital.ai/digital-ai-terms-and-policies/',
              },
            ],
          },
        ],
        logo: {
          alt: '/',
          src: '/',
          href: 'https://digital.ai/',
          width: 240,
        },
        copyright,
      },
      algolia: {
        appId: 'FO8TEHAYUG',
        apiKey: '5b8ae3daa6f22d10e818929d2618e422',
        indexName: 'dev_DocsCrawler',
        contextualSearch: true,
      },
      metadata: [
        {
          name: "docsearch:product",
          content: productName.toLowerCase()
        },
        {
          property: 'og:image',
          content:
            'https://digital.ai/wp-content/uploads/2022/09/HP-BN-GEN-2022-12-platform-image-2048x367.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:image',
          content:
            'https://digital.ai/wp-content/uploads/2022/09/HP-BN-GEN-2022-12-platform-image-2048x367.png',
        },
        { name: 'twitter:site', content: '@digitaldotai' },
      ],
      docs: {
        sidebar: {
          hideable: true
        }
      }
    }),
};

export default config;
