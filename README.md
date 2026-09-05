# Single Page Portfolio

This is a minimal single-page portfolio scaffold adapted to match the style from the `jwarre-syscall/Personal-Website` repo: centered layout, dark theme, and purple accent.

Files added/updated:
- `index.html` — main single-page site with centered nav and theme toggle
- `styles.css` — dark + light theme variables and responsive layout
- `script.js` — theme toggle persistence and resume upload-preview
- `assets/` — SVG icons for GitHub and LinkedIn
- `resume.pdf`

Theme:
- The site defaults to the dark theme resembling my existing repo. Use the theme toggle in the header to switch to light mode;

Light mode uses an orange accent to match the colors in the resume.

Deployment (GitHub Pages)
-------------------------

This repo includes a GitHub Actions workflow that publishes the site to the `gh-pages` branch when you push to `main` (or `master`). To publish:

1. Create a GitHub repository and set the remote:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://jwarre-syscall.github.io/Portfolio-Page/
git push -u origin main
```

2. The workflow will run and deploy the site to the `gh-pages` branch:

```
https://jwarre-syscall.github.io/Portfolio-Page/
```

