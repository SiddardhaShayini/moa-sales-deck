# Mall of America — Interactive Sales Deck

> A fully browser-based, cinematic sales tool for prospective retail tenants, corporate sponsors, and event partners. Built to replace fragmented pitch materials with a single immersive experience — shareable as a link or screen-shared live.

**🔗 Live Demo → [SiddardhaShayini.github.io/moa-sales-deck](https://SiddardhaShayini.github.io/moa-sales-deck)**

---

## What This Is

A purpose-built interactive sales experience for **Mall of America** — the largest mall in North America (5.6M sq ft, 520+ stores, 40M+ annual visitors). It functions as a cross between a luxury brand website, a high-end pitch deck, and an immersive destination experience.

**Primary audience:** Decision-makers at retail brands, agencies, and production companies evaluating a commercial presence at Mall of America.

**Business objectives served:**
- Drive retail leasing (flagship, luxury, pop-up, F&B)
- Drive sponsorship and brand partnership deals
- Drive event bookings (concerts, activations, corporate events)
- Promote dedicated venue capabilities

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Vanilla HTML5 |
| Styling | Vanilla CSS3 (custom properties + Grid/Flexbox) |
| Scripting | Vanilla JavaScript (ES6+, no frameworks) |
| Fonts | Google Fonts — Cormorant Garamond + DM Sans |
| Images | Unsplash (CDN) + AI-generated (Midjourney) |
| Video | HTML5 `<video>` with Unsplash poster fallback |
| Deployment | GitHub Pages |

**Zero dependencies. Zero build tools. No npm. No bundler.**
The entire project is three files: `index.html`, `styles.css`, `script.js`.

---

## Project Structure

```
moa-sales-deck/
├── index.html          # Full single-page application
├── styles.css          # Complete design system
├── script.js           # Interactions, animations, leasing filter
├── assets/             # Local image assets (AI-generated)
│   ├── hero-mall.jpg
│   ├── retail-luxury.jpg
│   ├── dining.jpg
│   ├── entertainment.jpg
│   └── events.jpg
└── README.md
```

---

## Sections & Story Flow

| Section | Story Beat | Business Action |
|---|---|---|
| **Hero** | Cinematic video opener — scale, energy, differentiation | "Become a Partner" CTA |
| **Why MOA** | Data-driven property overview + demographics bar | Builds commercial conviction |
| **Retail** | 520+ stores across every tier | Retail leasing inquiry |
| **Luxury** | Elevated luxury corridor + brand adjacencies | Premium leasing inquiry |
| **Dining** | 50+ restaurants, 3.4hr dwell time | F&B leasing inquiry |
| **Entertainment** | Nickelodeon Universe, SEA LIFE, FlyOver | Sponsorship and event hook |
| **Events** | 400+ events/yr — positioned as a platform | Event booking CTA |
| **Leasing Explorer** | Filterable Phase 2 module with 6 opportunity cards | Direct inquire CTA per card |
| **Partner With Us** | Leasing, sponsorship, events, venues | Contact / email CTA |

---

## Setup & Local Development

No build step. No install.

```bash
# Clone
git clone https://github.com/SiddardhaShayini/moa-sales-deck.git
cd moa-sales-deck

# Open locally — any of these work:
open index.html                   # macOS
start index.html                  # Windows
python3 -m http.server 8000       # Serve at localhost:8000
npx serve .                       # If you have Node
```

### GitHub Pages Deployment

1. Push repo to GitHub (set to **public**)
2. Go to **Settings → Pages**
3. Source: `main` branch, `/ (root)` folder
4. Save — live in ~60 seconds at `https://SiddardhaShayini.github.io/moa-sales-deck`

---

## Design Decisions

### Typography: Cormorant Garamond + DM Sans

Cormorant Garamond is a high-contrast editorial serif — the same category of typeface used by Hermès, Saint Laurent, and Bottega Veneta. At large display sizes it reads as genuinely luxurious. DM Sans pairs cleanly as the body face without competing. I deliberately avoided Playfair Display (overused in templated work) and Inter (generic default). The assignment asked for Apple/Hermès/Tesla-level polish — those brands don't use system fonts.

### Color System: Near-Black + Warm Gold

`hsl(210, 18%, 4%)` is a cooler near-black (slightly blue-shifted) rather than pure black, which makes the gold accent feel warmer by contrast. The gold (`hsl(42, 72%, 58%)`) runs as a CSS variable throughout — every stat, every `<em>`, every CTA border uses the same value. Consistent and never decorative.

### Video-First Hero

The assignment explicitly calls out "Video is the primary storytelling medium." The hero uses native HTML5 `<video>` with autoplay/muted/loop, a grain overlay for cinematic warmth, and a parallax scroll effect. If video fails (blocked autoplay, slow connection), it falls back gracefully to an Unsplash poster — no broken layout.

### Staggered Entrance Animation

Each hero element has a `data-delay` attribute. JS staggers opacity + translateY transitions: eyebrow (0ms) → headline (150ms) → subtitle (350ms) → buttons (500ms) → stats bar (700ms). Creates a cinematic reveal without any animation library.

### Leasing Explorer (Phase 2 Module)

The assignment asked for at least one working sub-module. The Leasing Explorer has 6 cards across 4 categories with a live JavaScript filter. Adding a new card requires one new `<div class="lease-card">` block with `data-category` — no JS changes needed.

### No Framework Dependency

Deliberate. GitHub Pages serves static files. No Node, no build step, no deployment complexity. Works offline in a browser. Three files total.

---

## AI Tools Used

| Tool | Usage |
|---|---|
| **Midjourney v6** | Hero image, retail interior, dining hall, entertainment, events — photorealistic architectural aesthetic |
| **DALL·E 3** | Supplementary imagery where Midjourney outputs needed adjustment |
| **Claude (Anthropic)** | Section copywriting, narrative structure, README drafting |
| **ChatGPT** | Brainstorming color palette and typography pairing options |

---

## Evaluation Criteria — How This Addresses Each

| Criteria | Weight | Approach |
|---|---|---|
| **Visual & UX Design** | 30% | Cormorant Garamond serif, warm gold system, cinematic video hero, grain texture, staggered reveals |
| **Technical Execution** | 25% | Zero-dependency vanilla stack, 3-file architecture, responsive, GitHub Pages deployed |
| **AI Integration** | 15% | Midjourney + DALL·E for imagery, Claude for all copy, AI used to accelerate and elevate |
| **Storytelling & Strategy** | 15% | Narrative arc: why this property → your opportunity → take action. Every section maps to a business action. |
| **Expandability** | 10% | CSS variable system, modular sections, Leasing Explorer as working Phase 2 module |
| **Attention to Detail** | 5% | Scroll thumb animation, active nav state, image hover zoom, video parallax, graceful fallback, custom scrollbar |

---

## What I'd Improve With More Time

1. **Scroll-triggered video sections** — section-level background videos playing only when in viewport
2. **Sponsorship tier module** — interactive Presenting / Gold / Silver tier cards with audience data
3. **Animated counter numbers** — stats counting up from 0 on scroll-in
4. **Lighthouse audit** — image compression, critical CSS inlining, preload hints for 90+ score
5. **Custom cursor** — subtle gold dot trail for luxury feel, desktop only
6. **Live leasing feed** — mock JSON feed so available spaces update dynamically

---

*Built as a screening assignment for Liat.ai. Subject: Mall of America, Bloomington, Minnesota. Not an official MOA asset.*
