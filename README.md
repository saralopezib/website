# Sara Lopez — site

A plain HTML/CSS site, no build tools, no frameworks. Four pages:

- `index.html` — homepage, two pillars
- `work.html` — UX/product design portfolio
- `wellbeing.html` — Mindnosis + workshop offer
- `about.html` — bio and timeline
- `styles.css` — all shared styling

## Preview it right now

Double-click `index.html` — it opens directly in your browser, no server needed.

## What to swap in before publishing

- Replace the "Photo" and "Thumb" placeholder boxes with real images. Simplest approach: put image files in an `images/` folder and swap the placeholder `<div class="thumb">...</div>` for `<img src="images/yourfile.jpg" alt="...">`.
- Update the LinkedIn URL in the footer (currently a placeholder link) and confirm the email address on every page.
- Double-check the "About" timeline dates and wording feel right — this is your story, edit freely.

## How to edit later, without any paid tools

- **Text changes**: open any `.html` file in a plain text editor (even Notepad/TextEdit works, though a free editor like VS Code — vscode.com — is much nicer) and edit the text between tags directly.
- **Bigger changes**: paste the file content into a Claude.ai chat and ask for the specific edit — it can hand you back the updated file.
- **Colors/fonts**: all defined once at the top of `styles.css` under `:root` — change a value there and it updates everywhere.

## How to publish it for free

**Easiest option — GitHub Pages:**
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository, upload these files (drag-and-drop works in the browser, no command line needed).
3. In the repo's Settings → Pages, set the source to your main branch.
4. Your site is live at `yourusername.github.io/reponame` within a few minutes.
5. To use your own domain (e.g. saralopezib.com), add it in the same Pages settings and update your domain's DNS records as GitHub instructs — domain registration itself is the only ongoing cost (typically ~£10–15/year), hosting stays free.

**Alternative — Netlify or Cloudflare Pages:** both let you drag-and-drop this whole folder into their dashboard for an instant free deploy, no GitHub account required. Slightly faster to get started, GitHub Pages is a slightly more standard long-term home.
