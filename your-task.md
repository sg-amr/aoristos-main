# User Manual Tasks

Please complete the following tasks after the setup is completed:

## 1. Images and Assets
- **Aoristos Icons**: Provide abstract geometric symbol icons for the placeholder images. Put them into the `public/` directory (e.g. `public/icons/member-onigiri.svg`, `public/icons/symbol-achievement.svg`).
- Replace the placeholder paths defined in `src/consts.ts` with the actual file paths.

## 2. External Links
- **Zenn / note Links**: Replace the dummy URLs in `src/consts.ts` (e.g., `https://zenn.dev/...`) with the actual URLs for the achievement articles.

## 3. Style Adjustments
- The primary accent color (`#84CC16`) is defined using CSS variables in `src/styles/global.css`. You can adjust it there if needed.
- Global styles and typography can be tweaked in `src/styles/global.css` or the Tailwind configuration (`tailwind.config.mjs` / Vite config).

## 4. Activities Page Content
- The index for the detailed activities page (`src/pages/activities/index.astro`) has been scaffolded. You can expand this directory by adding separate files for each field or event (e.g. `src/pages/activities/physics.astro`).
