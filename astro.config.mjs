import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Alcemo',
      cssVariable: '--font-alcemo',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/Alcemo.otf'],
          },
        ],
      },
    },
    {
      name: 'GrandHarbor',
      cssVariable: '--font-grandharbor',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/GrandHarbor.otf'],
          },
        ],
      },
    },
  ],
  site: 'https://granddaze.com',
  base: process.env.GITHUB_ACTIONS ? '/granddaze.com/' : '/',
  // Forces Astro to match how GitHub Pages resolves route paths
  trailingSlash: 'always',
});
