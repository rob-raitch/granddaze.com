# Grand Daze

Grand Daze is a Bahamas destination website built with Astro. It is a sister
site to Creekside Daze and shares its restrained editorial structure while
keeping Grand Daze's own visual identity.

## Routes

| Route | Purpose |
| :--- | :--- |
| `/` | Landing page |
| `/explore` | Destination overview |
| `/gallery` | Orbiting photo gallery |
| `/guide` | Guest resources and local links |
| `/credits` | Site and creative credits |
| `/styleguide` | Brand, typography, color, and asset reference |

## Brand system

The site uses two local display fonts registered through Astro:

- **Alcemo** for display headings and primary typography
- **GrandHarbor** for accent text and expressive details

Shared color and layout tokens are defined in
[`src/styles/global.css`](src/styles/global.css). Logo variants and font files
are kept in `src/assets/`.

The 67 optimized property photos are stored in
`src/assets/images/property-photos/` and indexed in
`src/data/property-photos.ts`. Edit the `photoLabels` entry for a numbered
photo there to set its title and descriptive alt text; the number matches the
photo filename (for example, entry `1` labels `property-photo-01.webp`). The
original, full-resolution JPEGs in
`src/assets/images/new-jpeg-images/` are kept locally and excluded from Git.
The home hero starts with five randomly selected photos and replaces one card
every four seconds, cycling through all photos before reshuffling.
The photo lists in `src/pages/explore.astro` can be rearranged as the images
are categorized. The Gallery shows six cards at a time on a perspective arc,
with the center pair facing forward and the outer cards angled around the
carousel. It advances every eight seconds.

## Development

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

Build the static site for production:

```sh
npm run build
```

The generated site is written to `dist/`. Use `npm run preview` to preview the
production build locally.

## Project structure

```text
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Fonts and logo assets
│   ├── layouts/         # Shared navigation and footer shell
│   ├── pages/           # Astro routes
│   └── styles/          # Global design tokens and styles
├── astro.config.mjs
└── package.json
```
