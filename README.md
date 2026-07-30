# Sara Lopez — site (v3, hybrid)

Plain HTML/CSS, no build tools, no frameworks. `index.html` is a one-page overview with the highlights; `work.html`, `practice.html`, and `about.html` are full standalone pages with the complete detail on each.

- `index.html` — homepage: hero, work highlights, practice highlights, short bio, logos, footer. Nav (`work` / `practice` / `about`) scrolls to sections on this same page.
- `work.html` — every case study, in full.
- `practice.html` — Mindnosis and the practice work, in full, plus the workshop offer. **Note: point mindnosis.com's domain redirect straight at this page** (`saralopezib.com/practice.html`) — the old `wellbeing.html` file has been removed.
- `about.html` — full bio plus the chronological career timeline.
- `styles.css` — all shared styling.
- `images/` — every photo, logo, and glyph used across the site.

Each standalone page's nav links to the *other* standalone pages (not back to homepage anchors), and each homepage section has a "See more →" link out to its matching standalone page.

## Preview it

Double-click `index.html` — opens directly in your browser, no server needed. Click through the nav and the "see more" links to check the standalone pages too.

## Editing later

- **Text**: open any `.html` file in a text editor and edit the copy directly.
- **Images**: swap files in `images/` (keep filenames the same, or update the `src=` in the relevant HTML file).
- **Colors/fonts**: all defined once at the top of `styles.css` under `:root`.
- **Bigger changes**: paste a file into a Claude.ai chat and describe what you want changed.

## Publishing for free

Same as before — GitHub Pages, Netlify, or Cloudflare Pages all host this for free. Upload every file in this folder (including `images/`) to your repository, replacing what's there now. If you're using GitHub: delete the old files in the repo and upload these in their place, rather than deleting the whole repo — that keeps your GitHub Pages and custom domain settings intact.

