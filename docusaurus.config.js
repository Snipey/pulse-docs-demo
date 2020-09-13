module.exports = {
  title: 'PulseJS',
  tagline: 'A global state and logic framework for reactive Javascript applications.',
  url: 'https://pulsejs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'pulsejs', // Usually your GitHub org/user name.
  projectName: 'pulse-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PulseJS',
      logo: {
        alt: 'Pulse LOGO',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Changelog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WYUDQq',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pulseframework',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pulse-framework/pulse',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PulseJS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pulse-framework/pulse-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pulse-framework/pulse-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
