# Single Page Portfolio

This single-page portfolio was created by combining content from a parsed resume and the `jwarre-syscall/Personal-Website` layout and styles. It uses a lightweight static stack (HTML/CSS/JS) and a persistent theme toggle.

What changed (summary):
- Populated `index.html` sections (About, Experience, Education, Projects, Skills) with extracted resume content and adapted copy from the Personal-Website pages.
- Added and standardized boxed section styling via `.section-box` so headers and paragraphs share the same visual container.
- Implemented light/dark themes using CSS custom properties; added a prominent `#themeToggle` that persists selection in `localStorage`.
- Harmonized experience entries into `.job` cards matching section paragraph styling.
- Included `assets/` with GitHub and LinkedIn icons and an embedded `resume.pdf` (preview/iframe).
- Added a GitHub Actions workflow to publish to `gh-pages`

Files of note:
- `index.html` — single page with boxed sections and social links
- `styles.css` — theme tokens, `.section-box`, and layout rules
- `script.js` — theme toggle persistence and small helpers
- `assets/` — icons and other static assets
- `resume.pdf` — canonical resume file used as source content

Theme notes:
- Default: dark theme inspired by the Personal-Website design (centered headings, purple accent).
- Light mode: cream background with orange accent; toggle persists via `localStorage`.

Deployment note:
- A GitHub Actions workflow is included and configured to deploy the site to `gh-pages`.
