# kitepics

A static website to show off awesome kite pictures.

Deployed automatically to GitHub Pages from `main`:

https://andpoulsen.github.io/kitepics/

## Repository layout

* `index.html` is the Vite HTML entry point.
* `src/App.svelte` composes the page and its semantic structure.
* `src/components/` contains the reusable Svelte components.
* `src/data/picks.js` contains the editable photo content data.
* `src/site.css` contains the shared site styles and design tokens.
* `public/assets/images/` contains the photo assets copied to the static build.
* `DESIGN_SYSTEM.md`, `README.md`, and `AGENTS.md` contain project and maintenance documentation.
* `.github/workflows/pages.yml` builds and deploys the repository to GitHub Pages from `main`.

## Development workflow

All code changes must follow the project workflow in [AGENTS.md](AGENTS.md): use an issue-specific feature branch, verify the site locally, open a pull request to `main`, merge only after the checks pass, and verify the deployed GitHub Pages site afterward.

Install the local browser test dependency and run the desktop/mobile site checks with:

```sh
npm install
npx playwright install chromium
npm run test:site
```

The test runner starts the Vite development server locally and saves viewport screenshots in its test output. To build and preview the production files manually, run `npm run build` followed by `npm run preview`.
