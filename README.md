# kitepics

A static website to show off awesome kite pictures.

Deployed automatically to GitHub Pages from `main`:

https://andpoulsen.github.io/kitepics/

## Repository layout

* `index.html` is the static page entry point.
* `assets/images/` contains the photo assets used by the page.
* `assets/site.css` contains the shared site styles and design tokens.
* `assets/site.js` contains the image-link behavior.
* `DESIGN_SYSTEM.md`, `README.md`, and `AGENTS.md` contain project and maintenance documentation.
* `.github/workflows/pages.yml` deploys the repository to GitHub Pages from `main`.

## Development workflow

All code changes must follow the project workflow in [AGENTS.md](AGENTS.md): use an issue-specific feature branch, verify the site locally, open a pull request to `main`, merge only after the checks pass, and verify the deployed GitHub Pages site afterward.

Install the local browser test dependency and run the desktop/mobile site checks with:

```sh
npm install
npx playwright install chromium
npm run test:site
```

The test runner starts the static site locally and saves viewport screenshots in its test output.
