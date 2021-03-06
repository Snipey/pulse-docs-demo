module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['what-is-pulse'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/concepts',
        'getting-started/setup-with-react',
        'getting-started/setup-with-vue',
        'getting-started/setup-with-next'
      ],
    },
    {
      type: 'category',
      label: 'Documentation',
      collapsed: true,
      items: [
        'main/actions',
        'main/api',
        'main/collections',
        'main/computed',
        'main/controllers',
        'main/core',
        'main/events',
        'main/persisting-data',
        'main/pulse-instance',
        'main/state'
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'resources/ideas',
        'resources/snippets',
      ],
    },
  ],
};
