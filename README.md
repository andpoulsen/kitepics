# kitepics

A static website to show off awesome kite pictures.

Deployed automatically to GitHub Pages from `main`:

https://andpoulsen.github.io/kitepics/

## Repository layout

- `index.html` is the Vite HTML entry point.
- `src/App.svelte` composes the page and its semantic structure.
- `src/components/` contains the reusable Svelte components.
- `src/data/picks.js` contains the editable photo content data.
- `src/site.css` contains the shared site styles and design tokens.
- `public/assets/images/` contains the original photo assets copied to the static build.
- `public/assets/images/optimized/` contains 640px and 1200px WebP/JPEG variants used by responsive `picture` sources; the original 2400px JPEGs remain available for full-size viewing.
- `public/favicon.svg` is the site's lightweight nautical favicon.
- `DESIGN_SYSTEM.md`, `README.md`, and `AGENTS.md` contain project and maintenance documentation.
- `.github/workflows/pages.yml` builds and deploys the repository to GitHub Pages from `main`.

## Development workflow

All code changes must follow the project workflow in [AGENTS.md](AGENTS.md): use an issue-specific feature branch, verify the site locally, open a pull request to `main`, merge only after the checks pass, and verify the deployed GitHub Pages site afterward.

Install the local browser test dependency and run the desktop/mobile site checks with:

```sh
npm install
npx playwright install chromium
npm run test:site
```

The test runner starts the Vite development server locally and saves viewport screenshots in its test output. To build and preview the production files manually, run `npm run build` followed by `npm run preview`.

## Quality checks

Run the lightweight all-in-one check before opening a pull request:

```sh
npm run check
```

This runs Prettier in check mode across the HTML, Svelte, CSS, JavaScript, Markdown, JSON, and workflow files; validates `index.html` with `html-validate`; builds the static site; and runs the desktop/mobile Playwright checks. Use `npm run format` to apply the repository's formatting. GitHub Actions runs the same `npm run check` command for pull requests and pushes to `main`.

### Image and font loading

The first photo is eager-loaded with high fetch priority because it is the first visible editorial image. The remaining photos use native lazy-loading and asynchronous decoding. Every image declares its intrinsic 2400x1600 dimensions and a 3:2 aspect ratio so its layout space is reserved before the file arrives. Responsive 640px and 1200px variants let browsers avoid downloading the original 2400px file when the rendered size is smaller, with WebP preferred and JPEG retained as a fallback.

The site uses the three Google Fonts declared in `index.html` with `preconnect` hints and `display=swap`. This keeps the font-loading choice explicit while allowing the system fallback stack to render immediately.

### Metadata and sharing

The public metadata lives in `index.html` so crawlers and link unfurlers can read it without waiting for Svelte to run. The canonical URL is `https://andpoulsen.github.io/kitepics/`, and the Open Graph/Twitter preview uses `DSC_0300.jpg`, the image that combines the kite, rider, and Farøbroen. The SVG favicon is included; no separate Apple touch icon is published because this is an editorial site rather than an installed web app.
