// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  site: 'https://adventofopensource.com',
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: 'Advent of Open Source',
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-96x96.png',
            size: '96x96',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'shortcut icon',
            href: '/favicon.ico',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            size: '180x180',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#4a01fe',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'msapplication-TileColor',
            content: '#4a01fe',
          },
        },
      ],
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/Open-reSource/adventofopensource.com',
        discord: 'https://discord.gg/fpUDwEMGwE',
        blueSky: 'https://bsky.app/profile/openresource.dev',
        linkedin: 'https://linkedin.com/company/open-re-source/',
        mastodon: 'https://fosstodon.org/@openresource',
        threads: 'https://www.threads.net/@openresource',
        'x.com': 'https://x.com/open_resource',
      },
      components: {
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
        Header: './src/components/Header.astro'
      },
      sidebar: [
        {
          label: 'Advent',
          items: [
            {
              label: 'About',
              slug: 'advent'
            },
            {
              label: 'Week 1: The Snowglobe Foundations',
              items: [
                {
                  label: 'Day 1: The Winter Open Source Village',
                  slug: 'advent/week-1/day-1'
                },
                {
                  label: 'Day 2: Guarding the Gift of Code',
                  slug: 'advent/week-1/day-2'
                },
              ]
            },
          ],
        },
      ],
    }),
  ],
});
