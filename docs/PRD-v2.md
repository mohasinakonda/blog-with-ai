# Product Requirements Document (PRD) & Engineering Specification

## 1. Executive Summary & Vision

* **Product Name:** Hazrat Akonda — Senior Frontend Engineer Portfolio
* **Target Audience:** Engineering Directors, Technical Founders, and Senior Recruiters looking for top-tier frontend engineering craftsmanship.
* **Core Design Tenet:** Brutalist-leaning Technical Minimalism. Completely flat monochrome palette, high contrast, geometric structural grids, zero soft color gradients, zero frosted glassmorphism, bold display typography, and intentional scroll-driven micro-interactions.
* **Core Technical Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.

---

## 2. Global Design Tokens & Style Guide

### 2.1 Monochromatic Color Palette

Every surface relies strictly on flat hex tokens with 1px border lines to convey depth and separation.

```css
:root {
  /* Surfaces */
  --bg-main: #080808;           /* Canvas background */
  --bg-surface: #101010;        /* Bento tiles and project cards */
  --bg-elevated: #171717;       /* Interactive button hover & inputs */
  --bg-mockup-light: #F5F5F5;   /* Inverted light surface for UI screens */

  /* Borders & Grid Rules */
  --border-subtle: #222222;     /* Default 1px grid divider lines */
  --border-strong: #333333;     /* Active borders and hover dividers */
  --border-mockup: #E5E5E5;     /* Structural borders inside light UI */

  /* Typography Colors */
  --text-white: #EDEDED;        /* Headings and primary copy */
  --text-muted: #8E8E8E;        /* Body narrative and secondary copy */
  --text-dim: #555555;          /* Indices, meta-labels, code comments */
  --text-dark: #0D0D0D;         /* High-contrast text on light surfaces */

  /* Functional Accents */
  --accent-online: #22C55E;     /* Flat solid green dot for availability */
}

```

### 2.2 Typography Hierarchy

* **Display Font (Headlines):** `Bebas Neue`, `Anton`, or `Oswald` (Condensed, uppercase, geometric, letter-spacing: `-0.02em`).
* **Body Font (General Prose):** `Geist Sans` or `Inter` (Precise, modern grotesque, neutral).
* **Code / Technical Font (Labels & Steppers):** `Geist Mono` or `JetBrains Mono` (Monospace, uppercase, tracking-wider).

```css
/* Typography Scale Tokens */
--text-hero: clamp(4.5rem, 12vw, 10rem);
--text-section-title: clamp(2rem, 5vw, 3.5rem);
--text-card-title: 1.5rem;
--text-body: 0.9375rem;
--text-meta: 0.8125rem;
--text-mono-tag: 0.75rem;

```

### 2.3 Structural Grid Standards

* **Max Viewport Width:** `1280px` (`max-w-7xl mx-auto`).
* **Outer Margins:** Horizontal padding `px-6` (mobile) to `px-12` (desktop).
* **Corner Radius Policy:** Strict `rounded-none` or subtle `rounded-sm` (max `2px`).
* **Shadows:** No box-shadows. Elevation is communicated solely through 1px border contrast (`border border-[#222222]`).

---

## 3. Section-by-Section Functional Specifications

### 3.1 Global Navigation (`<header>`)

* **Positioning:** Sticky top bar (`sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-none border-b border-[#222222]`).
* **Left:** Monospace initials mark `[HA]` + Bold name `HAZRAT AKONDA`.
* **Center (Desktop Only):** Anchor navigation links: `WORK`, `EXPERIENCE`, `WRITING`, `ABOUT`. Monospace, tracking-widest, hover transition to `#EDEDED`.
* **Right:** Direct CTA: `LET'S TALK ↗` paired with an active status badge featuring an inline solid green indicator (`--accent-online`).

---

### 3.2 Hero Section (`<section id="hero">`)

* **Layout:** Asymmetric 2-column grid (`border-b border-[#222222] pb-16 pt-12`).
* **Left Column (Primary Identity):**
* Top Tagline: Monospace string `Hi, I'm Hazrat Akonda`.
* Display Headline: Condensed, multi-line uppercase typography:
```
FRONTEND
ENGINEER

```


* Divider: 1px horizontal rule (`border-[#222222]`).
* Narrative: Clean sans-serif statement: *"I build fast, scalable and accessible web applications with React / Next.js / TypeScript"*.
* Action: Monospace inline link: `EXPLORE MY WORK ↗`.


* **Right Column (Context & Metadata):**
* Value Statement: Short narrative on shipping maintainable systems and clean developer experiences.
* Structured Attribute Grid (Mono key, Sans value):
* `BASED IN:` Bangladesh
* `AVAILABLE FOR:` Frontend Opportunities
* `CURRENTLY:` Building products and writing about frontend engineering.


* Social Anchor Row: Flat monochrome SVGs (GitHub, LinkedIn, Mail).
* Peripheral Anchor: Absolute-pinned vertical text `SCROLL ↓` on the right desktop edge.



---

### 3.3 Scroll-Driven Sticky Stacking Project Showcase (`<section id="work">`)

* **Container Mechanics:**
* Track Height: Dynamic height calculated via `height: 400vh` to accommodate 4 projects.
* Pinned Viewport: Outer viewport container uses `sticky top-0 h-screen flex flex-col justify-center overflow-hidden`.
* Section Header: Monospace indicator `01 / SELECTED WORK` on the left, with an anchor `VIEW ALL PROJECTS →` on the right.


* **Left Sticky Stepper Rail:**
* Position: Fixed vertical track alongside the project cards.
* Elements: Stepper indicators `01`, `02`, `03`, and `04` connected by a vertical 1px border rule (`#222222`).
* Dynamic Behavior: The active index displays a bold solid white bullet `• [01]` with `#EDEDED` text; inactive indices remain muted `#444444`. Clicking an index scrolls the viewport directly to that card's trigger threshold.


* **Stacking Card Architecture:**
* Each card takes `min-h-[580px]` with a 12-column grid layout inside a solid `#0A0A0A` background bordered with `1px solid #222222`.
* Stacking Behavior: As the user scrolls down, card `02` enters the viewport and smoothly slides on top of card `01`. As card `01` is covered, it scales down to `0.96` with an active top offset, creating a physical deck-of-cards stacking aesthetic.
* Left Panel (5 Columns):
* Badge: Box-bordered mono badge `FEATURED PROJECT`.
* Title: Uppercase display font (`text-3xl`).
* Description: Two-sentence problem statement highlighting state density, caching, and UX workflows.
* Tech Stack List: Monospace bulleted list:
```
→ Next.js 14 / TypeScript
→ React Query / Zustand
→ PostgreSQL / Supabase
→ Tailwind CSS

```


* CTA: Flat button `VIEW CASE STUDY ↗` with a white hover state.


* Right Panel (7 Columns - Interactive UI Canvas):
* Surface: Inverted light canvas (`#F5F5F5` or pure `#FFFFFF`).
* Content: High-density interactive application mockups (e.g., dynamic chart components, filterable inventory data tables, and metrics dashboards).
* Styling: Internal UI borders use `1px solid #E5E5E5` without drop shadows.




* **The 4 Flagship Project Slots:**
1. `01 — Inventory Management System`: High-density dashboard, server-state sync, and real-time order streams.
2. `02 — Wanderlust AI Trip Planner`: Interactive multi-day trip itineraries, caching layers, and custom map viewports.
3. `03 — WordVault`: Dark-mode word claiming application utilizing edge caching and auth flows.
4. `04 — Map-Based Property Rental Platform`: Location-based visualization, real-time map filters, and dynamic dashboard.



---

### 3.4 Engineering Capabilities / "What I Build" (`<section id="approach">`)

* **Header:** Section label `WHAT I BUILD` with directional link `APPROACH →`.
* **Grid:** 4-column desktop grid with `border-y border-[#222222]` and internal vertical 1px dividers.
* **Columns:**
1. `01 / PRODUCT INTERFACES`: Fluid component architecture, design system engineering, and micro-interactions.
2. `02 / DATA & WORKFLOWS`: Server-state caching, optimistic mutations, and real-time streaming pipelines.
3. `03 / PERFORMANCE`: Core Web Vitals optimization, bundle tree-shaking, and SSR/SSG caching strategies (Metric callout: `98`).
4. `04 / ACCESSIBILITY`: Full keyboard navigation ergonomics, ARIA roles, and WCAG AA compliance (Accessibility icon).



---

### 3.5 Metrics & Experience Timeline (`<section id="experience">`)

* **Grid:** 4-column layout split into quantitative metrics (Left 3 columns) and a chronological timeline (Right 1 column).
* **Left Columns (Proof of Execution):**
* `3+` / `YEARS OF EXPERIENCE` / *Building production-grade web applications.*
* `10+` / `PROJECTS DELIVERED` / *From data dashboards to full-scale web platforms.*
* `100%` / `FOCUS` / *On maintainable code, Core Web Vitals, and responsive UX.*


* **Right Column (Timeline):**
* Header: `EXPERIENCE →`
* Stacked Entries:
* `2024 — Present`: **Cronix LLC** (`Frontend Engineer`)
* `2022 — 2024`: **Technopers** (`Frontend Developer`)
* `2021 — 2022`: **Freelance** (`Frontend Developer`)





---

### 3.6 Engineering Notes & Writing (`<section id="writing">`)

* **Header:** Monospace index `RECENT WRITING` with right-aligned link `VIEW ALL ARTICLES →`.
* **Grid:** 4-column card grid separated by 1px border boundaries.
* **Article Cards:**
* Top: Monospace index (`01`, `02`, `03`, `04`).
* Title: Bold technical headlines (e.g., *"Why React Preserves State"*, *"Microtasks vs Macrotasks in JavaScript"*, *"Data Fetching in Next.js: When to Use What"*, *"Building Accessible Components in React"*).
* Footer: Category pill (`REACT`, `JAVASCRIPT`, `NEXT.JS`, `ACCESSIBILITY`) + Read duration (`06 MIN READ`) + Arrow trigger (`↗`).



---

### 3.7 Contact Footer (`<footer id="contact">`)

* **Top Grid (Call to Action):**
* Column 1: Massive display headline:
```
HAVE A PROBLEM
WORTH SOLVING?

```


* Column 2: Narrative copy: *"I'm currently available for freelance and full-time opportunities."* followed by a primary button `LET'S TALK ↗`.
* Column 3: Direct contact list with one-click copy functionality:
* `hazrat.akonda@example.com`
* `[github.com/hazratakonda](https://github.com/hazratakonda)`
* `[linkedin.com/in/hazratakonda](https://linkedin.com/in/hazratakonda)`
* `Download Resume`




* **Sub-Footer Bar:**
* Left: `© 2026 Hazrat Akonda. All rights reserved.`
* Center: `Built with Next.js & Tailwind CSS`
* Right: `Designed & Developed by Hazrat Akonda`



---

## 4. Animation, Motion, and Interaction Specifications

### 4.1 Transition Tokens

* **Standard Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy, mechanical ease-out).
* **Hover Duration:** Fast `150ms` (no sluggish or bouncy springs).
* **Hover State for Arrow Icons (`↗`):** `transform: translate(2px, -2px)`.

### 4.2 Sticky Stacking Implementation Recipe (Framer Motion)

```tsx
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ProjectStack({ projects }: { projects: ProjectType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#080808]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl px-8">
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0.04;
            return (
              <motion.div
                key={project.id}
                style={{
                  top: `calc(10% + ${index * 24}px)`,
                  scale: useTransform(scrollYProgress, [index * 0.25, 1], [1, targetScale]),
                }}
                className="sticky w-full grid grid-cols-12 border border-[#222222] bg-[#101010]"
              >
                {/* Left Meta: col-span-5 */}
                <div className="col-span-12 lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r border-[#222222]">
                  {/* Meta Details */}
                </div>
                {/* Right UI Canvas: col-span-7 */}
                <div className="col-span-12 lg:col-span-7 bg-[#F5F5F5] p-6">
                  {/* UI Mockup Canvas */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

```

### 4.3 Copy to Clipboard Micro-Interaction

Clicking the email or metadata trigger executes `navigator.clipboard.writeText(...)` and instantly updates the button label to `COPIED!` in monospace type for `1800ms` without displaying layout-shifting toast banners.