# Chip Design Initiative Website

Static multi-page website for the Chip Design Initiative club.

## Tailwind Workflow

This site uses Tailwind CSS through the CDN in each HTML page:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

That means the pages are still plain static HTML and can be served directly by GitHub Pages. No Tailwind CLI or PostCSS setup is required for the current design.

## Pages

- `index.html` - Home, about, TinyTapeout focus, projects
- `events.html` - Calendar placeholder, announcements, photo archive
- `github.html` - GitHub organization and repo workflow
- `resources.html` - Learning resources and slides
- `join.html` - Registration and meeting info

## Images

Put real club images in `public/images/`.

Suggested filenames are listed in `public/images/README.md`. When adding images to the HTML, use relative paths like:

```html
<img src="images/project-vga-controller.jpg" alt="VGA controller demo" />
```

Relative paths keep the site working when deployed as a GitHub Pages project site under `/repo-name/`.

The club logo is stored as:

- `public/images/cdi-logo-original.png` - preserved source copy
- `public/images/cdi-logo-transparent.png` - transparent page/logo asset
- `public/favicon.png` - browser tab icon
- `public/apple-touch-icon.png` - mobile home-screen icon

## Local Build

This project can build through Vite:

```bash
npm install
npm run build
```

In this workspace, `deno task build` has also been verified.

## GitHub Pages Deployment

The included workflow at `.github/workflows/deploy-pages.yml` builds the site and deploys the `dist` folder to GitHub Pages.

To enable it:

1. Push this repo to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main`.

The Vite config uses `base: './'`, so generated links/assets work under both custom domains and project-page URLs.
