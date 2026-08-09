# Handoff: Sara López Ibáñez — Portfolio Site

## Overview
A personal portfolio site for Sara López Ibáñez, a designer, researcher and facilitator. Four finished pages (Home, Work, Services, About) plus a case-study page template ("Work templates.dc.html"). Warm-editorial aesthetic: serif headlines, monospace labels, unframed photography, generous whitespace. Case-study pages are not yet written — every case-study link currently points at the template.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (or, since this is a new site, pick the most appropriate stack — a static-site generator like Astro/Eleventy or plain HTML/CSS is ideal; GitHub Pages is the intended host). The `.dc.html` files depend on a proprietary runtime (`support.js`, `image-slot.js`) that should NOT be shipped — replace `<image-slot>` elements with plain `<img>` tags and template holes (`{{ … }}`, `<sc-if>`, `<sc-for>`, `<x-dc>`, `<helmet>`) with static markup or the framework's own templating.

**Images**: photos the designer dropped onto the pages are stored as data-URLs in `.image-slots.state.json`, keyed by slot id (e.g. `d-work2`, `d-cs1`, `d-selfinit`, 24 logo slots `d-logo*`). Extract each entry to a real image file (webp/png) and reference it from the recreated pages. Slot ids appear in the HTML exactly where each image belongs. Empty slots (`d-cs1`–`d-cs5`, `d-serv-mind`) are awaiting content — render a neutral placeholder.

## Fidelity
**High-fidelity.** Colors, typography, spacing and copy are final. Recreate pixel-perfectly. All copy is client-approved — do not rewrite.

## Pages

### Home (`Home.dc.html`)
- Sticky top nav: signature logo image left (links Home), mono lowercase links right (work / services / about), warm-white backing, 28px 64px padding.
- Hero: `/` label-free; 74px Newsreader Light headline, max-width 1140px: "A decade *untangling* complexity through UX, research and service design." — "untangling" in sage `#5A7554` with a 3px underline that animates in (draws left→right at ~0.75s). Whole headline rises in once (0.6s, cubic-bezier(0.2,0,0,1)); three glyph images (research/design/strategy, 72px tall, 140px gaps, centred) stagger in after.
- Three numbered work sections (01 In-house / 02 Consulting / 03 Freelance): section header row = mono sage number + 34px Newsreader title + "/work" link right, 1px black bottom rule. In-house: one full-width image (aspect 1036/583). Consulting + Freelance: 2-col grids (36px gap), 300px-tall images. Captions: mono 12.5px, project name links (with →) left, years grey right. FutureGov image is `fit: contain` on a `#FDFDFD` panel.
- Mindnosis banner inside Freelance: grid 1fr/1.4fr — sage `#E9EDE3` text panel (mono `/mindnosis` label, description, "Explore Mindnosis →" CTA: mono 13px, black text, 1px sage bottom border) + 400px photo.
- About teaser: 1px black top rule; 220px circular portrait + 24px Newsreader intro + two body paragraphs + black "let's talk →" button (mono 14px, `#1A1917` bg, `#FAF9F5` text, 16px 34px padding).
- Logo wall: mono sage label "who i've worked with", 6-col grid ×3 rows (40px tall cells, 32px gap, max-width 1072px) + a second 6-col row. Logos are greyscale-treated images (see state file); most at ~40% black, knockout-style logos at greyscale 60–70%.
- Footer: hairline `#E6E2D8`, centered links "LinkedIn · Email · GitHub" (GitHub → https://github.com/saralopezib), then grey `#8b8880` copyright "© 2026 Sara López Ibáñez".

### Work (`Work.dc.html`)
- Same nav ("work" underlined sage as current page).
- Intro: mono `/work` label + 40px Newsreader statement.
- Cover-list index: 2-col grid (1.1fr list / 1fr sticky image panel, 56px gap).
  - 5 rows (kaluza, futuregov, uscreates, real insight, bidean): mono sage number, 34px serif name, years mono grey right; 1px black rule top of list and bottom of last row, `#E6E2D8` hairlines between.
  - Hovering a row swaps the sticky panel image (420px tall, sticky top 110px) and its one-line summary caption (mono grey). Summaries live in the logic class (see file). Panel + rows all link to the case-study page.
  - Under 900px: sticky panel hides; each row reveals its own 220px image below the text (`.row-thumb`).
- Mindnosis banner (same as Home) and same footer.

### Services (`Services.dc.html`)
- Intro statement (40px Newsreader).
- 01 What I do: three colour cards (28px gap, 44px 40px padding): `#EDE9DD` / `#E9EDE3` / `#EAE4DC`, each opening with a glyph image (56px), 24px serif title, body. Titles: "User experience and product design", "Service design and research", "Design leadership and facilitation".
- 02 How we could work together: four rows, grid 280px/1fr, 22px serif model name + body description, hairline separators.
- Centered CTA: 26px serif "Have a problem worth untangling?" + black "let's talk →" button.
- Mindnosis panel: full-width sage `#E9EDE3`, 64px 56px padding: mono label, 32px serif heading "Design sessions, workshops and artefacts", intro, three rule-topped columns (Single session / Series / Train-the-trainer), small-print tailoring note, "Explore Mindnosis →" CTA, then a full-width 380px photo placeholder.
- Footer as Home.

### About (`About.dc.html`)
- Intro: grid 280px/1fr (64px gap) — 280×560px portrait photo + `/about` label, 38px serif intro line, four body paragraphs, "Explore Mindnosis →" CTA.
- 01 Timeline: rows grid 170px/1fr — mono sage years, 22px serif role heading, body description. Three entries (Kaluza / Torchbox, TPX Impact / Freelance).
- 02 Elsewhere: 2-col grid of four groups, each with a mono sage group label:
  - talks & guest lectures (3 entries), workshops & exhibitions (3), features (1 + expandable), awards (1).
  - Entry format: 19px serif title, mono grey meta line beneath. Some meta lines end with a sage underlined "photos" link that opens a **lightbox**: fixed overlay `rgba(26,25,23,.82)`, images max-height 82vh side by side, "close ✕" top right, click anywhere closes. Galleries: AA talk (AA.jpg + AA-2.jpg), Gdynia (Exhbition 1.jpg + Exhbition 2.jpg), Menier (Beyond Anxiety.JPG + LBP-2.JPG).
  - Features: "Mental health / Computer Arts issue 286 · 2018" links to the bundled PDF; below it a native `<details>` with mono sage summary "+ more press" expands 8 external press links (titles 19px serif with a small 12px ↗, outlet + year beneath).
- CTA + footer as Services.

### Case-study template (`Work templates.dc.html`)
Photo-essay flow: full-bleed opening image, meta row, numbered chapter rules, asymmetric image pairs, outcomes band, footer prev/next links ("← all work" / "next: … →"). Use as the pattern for the six future case-study pages.

## Interactions & Behaviour
- Sticky nav on every page (`position:sticky; top:0; z-index:20; background:#FAF9F5`).
- Global link rule: `a { color: inherit }`, `a:hover { color: #5A7554 }`.
- Home hero entrance animation (see Home section; keyframes in the file head).
- Work page hover-to-swap cover panel (state: active row index; default 0).
- About lightbox (state: which gallery or null).
- `<details>` expansion for extra press links.
- Current-page nav item: 1px sage bottom border.

## Design Tokens
- Background: `#FAF9F5` (warm white)
- Ink: `#1A1917`; body grey `#3d3a33`; muted `#6E6A5F`; faint `#8b8880`
- Accent (sage): `#5A7554`; sage panel `#E9EDE3`; sand card `#EDE9DD`; clay card `#EAE4DC`
- Hairlines: `#E6E2D8`; strong rules: 1px `#1A1917`
- Fonts (Google Fonts): Newsreader (300/400/500, headlines & serif accents), Karla (400/500/600, body 16.5px/1.65), IBM Plex Mono (400/500, labels/captions/CTAs, 12.5–14px)
- Page container: max-width 1280px, centred; side padding 64px; section spacing 72–96px
- Motion: cubic-bezier(0.2,0,0,1), 0.5–0.8s entrances only

## Assets (bundled)
- `images/signature.png` (logo), `images/sara-lopez.jpg` (portrait)
- `uploads/research.png`, `design.png`, `strategy.png` (hero/services glyphs)
- Event photos: `AA.jpg`, `AA-2.jpg`, `Beyond Anxiety.JPG`, `Exhbition 1.jpg`, `Exhbition 2.jpg`, `LBP-2.JPG`
- `uploads/ART286.feat2_mental.pdf` (press PDF)
- `.image-slots.state.json` — all dropped photos/logos as data-URLs keyed by slot id (extract to files)

## Files
- `Home.dc.html`, `Work.dc.html`, `Services.dc.html`, `About.dc.html` — the four pages
- `Work templates.dc.html` — case-study page template
- `support.js`, `image-slot.js` — prototype runtime (reference only, do not ship)

## Publishing note
Target: GitHub Pages at github.com/saralopezib. Recreate as static pages with clean URLs (`/`, `/work`, `/services`, `/about`), wire all case-study links to a temporary placeholder or hide them until case studies are written.

## Recent additions (post-first-handoff)
- Footer redesigned on all four pages: hairline, 3-col grid (signature + descriptor + `Bristol, UK · GMT` + sage availability line / `/view` page links / `/contact` links), copyright bottom-left. Link columns have 52px top padding to align with the descriptor text.
- Sticky nav un-sticks while the footer is in view (IntersectionObserver on `#site-footer` toggles the nav between sticky and static) — reproduce this behaviour.
- All case-study links point at `Work templates.dc.html`.
- About section 02 is titled "In public"; group heads: talks &amp; guest lectures / exhibitions, collaborations &amp; workshops / features / awards.
