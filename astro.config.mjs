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
  site: 'https://rob-raitch.github.io',
  base: '/granddaze.com',
  build: {
    format: 'file' // This changes output from /styleguide/index.html to /styleguide.html
  },
  trailingSlash: 'always',
});
