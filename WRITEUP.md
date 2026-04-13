# Design Rationale & Process Write-Up

**Project:** Mall of America — Interactive Sales Deck
**Candidate:** Siddardha Shayini
**Submitted to:** Liat.ai

---

## The Problem I Was Solving

The assignment brief described a real pain: a sales rep on a live call juggling a YouTube video, a static PDF, a spreadsheet of demographics, and verbal narration — all at once. That's not a presentation, that's damage control.

The tool I built is designed to eliminate every one of those context switches. One URL. One experience. Non-linear navigation so the rep can jump to whatever the prospect is asking about. Self-contained enough that the prospect can explore it alone, hours after the call, and still feel the energy of the property.

---

## How I Approached the Design

The brief gave clear creative direction: "The structure of a Digideck, the polish of luxury fashion brands, the energy of Disney/Universal, the scale of a global destination."

I took that seriously as four distinct design constraints — not just one vague instruction to "make it look nice."

**Structure (Digideck model):** Non-linear navigation, every section as a self-contained story beat, each one ending with a push toward a specific business action. I mapped the full sales narrative before writing a single line of code: Why this property → Retail opportunity → Luxury tier → Dining draw → Entertainment moat → Events platform → Leasing paths → Contact. That sequence mirrors how a good sales conversation actually flows.

**Polish (luxury fashion brands):** I studied what makes Hermès.com feel different from a typical retail site. It's almost entirely typography and restraint. The typeface is doing the work. I chose Cormorant Garamond for exactly this reason — it's a high-contrast editorial serif in the same family as what Hermès, Saint Laurent, and Bottega Veneta actually use. Gold as the only accent color, never used decoratively, always purposeful. The near-black background isn't pure black — it's `hsl(210, 18%, 4%)`, slightly blue-shifted, which makes the warm gold read even warmer.

**Energy (Disney/Universal):** This is where the video hero earns its place. A static image cannot convey the energy of 40 million people in a single building. The cinematic entrance animation — staggered, timed at the element level — creates a reveal feeling. The grain texture overlay adds warmth and prevents the video from feeling clinical. The parallax scroll keeps the hero alive even as you move past it.

**Scale (global destination):** The demographics bar, the 7× Yankee Stadiums callout, the events grid with 400+ annual numbers — scale needs to be shown with data, not just described. Every number in the build is a display headline, not a table cell.

---

## How I Used AI

I used AI as a collaborator at every stage, not just as a code generator.

**For imagery:** I prompted Midjourney with references to the actual Mall of America aesthetic, then refined outputs to match the dark luxury tone of the UI. The brief specifically cited AI-generated assets as a plus — I treated this as an opportunity to make imagery that felt custom to the project rather than stock.

**For copy:** I used Claude to draft section narratives, then edited them down. The brief was right that this is a sales tool — every sentence needs to be doing commercial work. Claude was useful for generating first drafts quickly, but the editing pass (cutting anything that described rather than persuaded) was manual.

**For design decisions:** I used ChatGPT as a sounding board for typography pairings and color system options before committing. Running a few alternatives in parallel and comparing them is faster than deciding in isolation.

The honest version: AI accelerated everything by roughly 3×. But the decisions — what to cut, what to emphasize, what the experience should feel like — were judgment calls that required understanding what the tool was actually for.

---

## What I Would Do With More Time

The three things I think would move the needle most:

**1. Scroll-triggered video per section.** The hero video works. But the Entertainment section would be 10× more impactful with a 15-second Nickelodeon Universe clip playing behind the content as you scroll into it. The architecture supports this — adding it is a matter of sourcing the clips and adding the IntersectionObserver triggers.

**2. A real sponsorship tier module.** The assignment specifically mentioned sponsorship as a business objective. Right now I have a card in the partner grid. What it should be is an interactive tier builder: select your package (Presenting / Gold / Silver), see the estimated impressions, activation options, and audience data change in real time. This is a Phase 2 module I would build next.

**3. Performance audit.** The build is fast because it has no dependencies, but the images need compression and the hero needs preload hints. A `<link rel="preload">` on the hero poster and WebP conversion across all assets would push it to a 90+ Lighthouse score. That matters for the screen-share use case — you don't want the deck loading slowly on a live call.

---

## One Thing I'd Push Back On

The brief says "video is the primary storytelling medium." I agree — but only if the video is right. A bad autoplay background video is worse than a strong static image. I made the call to use a high-quality Unsplash poster as the video fallback and to treat the video as an enhancement, not a dependency. The experience works without video. That's intentional.

---

*Total build time: approximately 6 hours across design, code, and copy.*
*Stack: HTML, CSS, JavaScript — zero dependencies.*
