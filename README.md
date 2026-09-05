# Single Page Portfolio

This is a minimal single-page portfolio scaffold adapted to match the style from the `jwarre-syscall/Personal-Website` repo: centered layout, dark theme, and purple accent.

Files added/updated:
- `index.html` — main single-page site with centered nav and theme toggle
- `styles.css` — dark + light theme variables and responsive layout
- `script.js` — theme toggle persistence and resume upload-preview
- `assets/` — SVG icons for GitHub and LinkedIn
- `resume.pdf` — placeholder file (replace with your real resume)

Usage:

Open `index.html` in your browser.

To show your resume on the page either:
1. Replace `resume.pdf` with your actual PDF file (same filename).
2. Or use the "Upload Resume" button to preview a local PDF.

Theme:
- The site defaults to the dark theme resembling your existing repo. Use the theme toggle in the header to switch to light mode; the choice is saved in `localStorage`.

Customization suggestions:
- Replace the placeholder text (About, Experience, Projects) with your real content.
- Add project links and screenshots under the `Projects` section.
- Replace the LinkedIn URL in `index.html` with your actual profile.

If you want, I can now:
- Replace placeholder content with your `Personal-Website` pages' text, or
- Further match typographic choices and spacing from your repo.

Deployment (GitHub Pages)
-------------------------

This repo includes a GitHub Actions workflow that publishes the site to the `gh-pages` branch when you push to `main` (or `master`). To publish:

1. Create a GitHub repository and set the remote (replace `<URL>`):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL>
git push -u origin main
```

2. The workflow will run and deploy the site to the `gh-pages` branch. Your site will be available at:

```
https://<your-github-username>.github.io/<repo-name>/
```

Notes:
- If you prefer to serve from the `docs/` folder or the `main` branch directly, I can update the workflow or structure accordingly.
- If your repository uses a different default branch name, adjust the workflow trigger.
