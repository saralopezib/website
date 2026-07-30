# Sara Lopez — personal site

Plain HTML/CSS/JS, no build tools, no frameworks, no dependencies. Hosted on GitHub Pages at saralopezib.com.

## Structure

- `index.html` — one-page homepage: hero, work highlights, practice highlights, short bio, logo strip, footer. The nav (`work` / `practice` / `about`) scrolls to sections within this same page via anchor links.
- `work.html` — full standalone page, every case study in detail (currently 6: Kaluza, FutureGov/Uscreates, the Kaluza refunds workstream, Bradford/Essex research, freelance consultancy 2016-18, Paul Smith).
- `practice.html` — full standalone page: Mindnosis, co-design workshops, critical design, plus a workshop offer table (single session / series / train-the-trainer). **Important: mindnosis.com's DNS is being redirected to point at this exact page** (`saralopezib.com/practice.html`) — don't rename or remove this file without updating that external redirect too.
- `about.html` — full bio plus a reverse-chronological career timeline (most recent first).
- `styles.css` — all shared styling. Design tokens (colors, fonts) are set once at the top under `:root`.
- `images/` — every photo, logo, and glyph. Filenames are descriptive (`hero.jpg`, `work-kaluza.jpg`, `logo-nsun.png`, etc.) and referenced directly in the HTML — case-sensitive, so keep names exact.

Each standalone page's nav links across to the *other* standalone pages (not back to homepage anchors). Each homepage section ends with a "See more →" link out to its matching standalone page.

## Design system

- Fonts: Newsreader (serif, headings/lede), Karla (body), IBM Plex Mono (nav, labels, captions) — loaded from Google Fonts.
- Palette: cream background (`--bg: #FAF9F5`), ink text (`--ink: #1A1917`), sage green accent (`--sage: #5A7554`).
- Photos are unframed (no border/shadow), captions are mono/lowercase, numbered sections (`01`, `02`) with a hairline rule under the heading.
- Signature image (`images/signature.png`) is the wordmark, used in place of text in the header on every page.
- Header is sticky on all pages.

## Known outstanding items

1. **mindnosis.com redirect**: currently needs updating at the registrar (Namecheap) to point straight at `saralopezib.com/practice.html`, rather than an old `wellbeing.html` path that no longer exists in this repo.
2. **Old unused image**: an earlier `sara-lopez.jpg` (different from the current `portrait.jpg`) may still be sitting in the repo's `images/` folder from a previous version — safe to delete, nothing links to it.
3. **A recent upload mistake**: an `images.zip` was accidentally committed to the repo root instead of being unzipped into an `images/` folder — if that's still present, delete it; the real images should be individual files inside `images/`, not a zip.
4. Logos currently rendered in grayscale via CSS filter (`filter: grayscale(1) brightness(0) opacity(.55)` on `.logos-row img`) — intentional, but flag if the client wants full-color logos instead.

## Working style / preferences

- Sara prefers hyphens (-) over em dashes (—) in body copy.
- Keep copy changes minimal and precise — she's been iterating carefully on exact wording, especially on the About page bio; don't rephrase things she didn't ask you to touch.
- This is a personal portfolio/consulting site for an independent UX designer and researcher (formerly Lead Designer at Kaluza) also offering creative wellbeing workshops (Mindnosis). Tone throughout is quiet, editorial, non-corporate.
