# Sara Lopez · site (v4)

Plain HTML/CSS/JS, no build tools, no frameworks, no dependencies. Hosted on GitHub Pages at saralopezib.com.

- `index.html` — homepage: hero, work highlights (in-house / consulting / freelance), Mindnosis banner, short intro, logo wall, footer.
- `work.html` — case-study index (kaluza, futuregov, uscreates, bidean). Hovering a row swaps the sticky cover image, summary, and link destination; under 900px each row shows its own thumbnail instead.
- `kaluza.html` — the Kaluza case study. Password-gated (see below). Currently holds placeholder/template content.
- `futuregov.html` — the Bradford advice-system case study for Futuregov. Real content, not gated.
- `uscreates.html`, `bidean.html` — simple "coming soon" stubs (not gated) — each will be rebuilt using the same chapter/hero/outcomes template as `kaluza.html`/`futuregov.html` once real content exists for it.
- `services.html` — what I do, ways of working, and the Mindnosis workshop offer (`#mindnosis`).
- `about.html` — full bio, career timeline, and "in public" (talks, exhibitions, features, awards). Some entries open a photo lightbox; press has a `+ more press` expander.
- `practice.html` — thin redirect to `services.html#mindnosis`, kept only so the existing mindnosis.com domain redirect (pointed at `/practice.html`) keeps working. Safe to delete once that DNS redirect is repointed.
- `styles.css` — all shared styling. Design tokens (colors, fonts) are set once at the top under `:root`.
- `script.js` — sticky-nav/footer toggle, the work-page hover-swap, and the about-page lightbox.
- `images/` — every photo, logo, and glyph, descriptively named and referenced directly in the HTML.
- `files/` — bundled PDFs (press features).
- `gate.js` — password-gate logic for `kaluza.html` (see below).

Each standalone page's nav links to the other pages. Nav is sticky, and un-sticks while the footer is in view.

## Design system

- Fonts: Newsreader (serif, headlines), Karla (body), IBM Plex Mono (nav, labels, captions) — loaded from Google Fonts.
- Palette: warm-white background (`--bg: #FAF9F5`), ink text (`--ink: #1A1917`), sage accent (`--sage: #5A7554`), plus sand/clay card colors — all in `styles.css` under `:root`.
- Photos are unframed, captions are mono/lowercase, numbered sections (`01`, `02`) with a hairline or ink rule under the heading.
- Signature image (`images/signature.png`) is the wordmark, used in the header on every page.

## Known outstanding items

1. **Real case-study content is still coming for two of four.** Kaluza's page (`kaluza.html`) holds example/template copy behind the password gate — swap in the real write-up via `../case-study-content.html` (see above) whenever it's ready. `futuregov.html` (Bradford) is real, finished content. `uscreates.html` and `bidean.html` are bare "coming soon" stubs — rebuild each using `kaluza.html`/`futuregov.html`'s layout (hero, numbered chapters, image pairs, outcomes band) once there's real content; neither needs a password gate.
2. **Work-page case-study cover images**: Kaluza and FutureGov now show their real case-study hero image on `work.html` (sticky panel + mobile thumbnail). Uscreates and Bidean still show neutral placeholders until their case studies exist.
3. **"let's talk" is still a placeholder** (`href="#"`) — no destination was supplied yet. LinkedIn and Email in the footer are wired up (linkedin.com/saralopezib, saralopezib@gmail.com).
4. **mindnosis.com redirect**: currently needs pointing at `saralopezib.com/services.html#mindnosis` at the registrar. `practice.html` is a stopgap redirect in the meantime.
5. **Possible duplicate logo**: the NSUN logo appears twice in the "who I've worked with" wall (once in each grid) — reproduced faithfully from the design handoff, but flag to the client in case it was accidental.

## Working style / preferences

- Sara prefers hyphens (-) over em dashes (—) in copy and titles.
- Copy is client-approved — don't rephrase without being asked.
- Personal portfolio/consulting site for an independent UX designer and researcher (formerly Lead Designer at Kaluza), also offering Mindnosis creative-wellbeing workshops. Tone is quiet, editorial, non-corporate.
