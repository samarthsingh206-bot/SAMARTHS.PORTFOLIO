# Samarth Singh &mdash; Portfolio & CV

Personal portfolio and curriculum vitae of Samarth Singh: first-year undergraduate at IIM Bangalore (BBA DBE), aspiring Chartered Accountant (ICAI) and Cost & Management Accountant (ICMAI).

Live demo reference inspired by [anshgoel.vercel.app](https://anshgoel.vercel.app/).

## Tech Stack

- **HTML5:** Semantic markup, JSON-LD Schema.org structured data, Open Graph meta tags.
- **CSS3:** Custom properties (design tokens), 12-column grid system, responsive layout, print-ready stylesheet (`@media print`), dark/light theme switching.
- **Vanilla JavaScript:** Zero runtime dependencies. IntersectionObserver scroll spy, clipboard API toast notification, theme persistence via `localStorage`.
- **Typography:** Instrument Serif (editorial headings), Inter (sans body), IBM Plex Mono (data/code).

## File Structure

```
├── index.html        # Main portfolio and curriculum vitae page
├── styles.css        # Core stylesheet (typography, tokens, responsive grid)
├── script.js         # Vanilla JS (theme switch, scroll spy, copy toast)
├── resume.pdf        # (Optional) Place your updated PDF resume here
├── .gitignore        # Standard ignore rules
└── README.md         # Documentation and setup guide
```

## Local Development

You can run this project locally without any package managers or build tools:

### Option 1: VS Code Live Server
1. Open the project folder in VS Code.
2. Click **Go Live** on the status bar (via the Live Server extension).

### Option 2: Python Static Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

## Deploying

### Deploy to GitHub Pages (Free)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Samarth Singh portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Deploy to Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
2. Select your GitHub repository.
3. Keep default settings (no build command needed) and click **Deploy**.
