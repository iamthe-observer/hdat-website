# Official Website Creative Direction & Technical Architecture
## Hon. Dorcas Affo-Toffey | Personal Brand & Governance Platform

**Project Code:** HDAT-WEB-2026  
**Document Classification:** Design System, Scrollytelling Narrative & Technical Architecture  
**Target URL:** `dorcasaffotoffey.com` / `dorcastoffey.gh`  

---

## 1. Creative Direction & Aesthetic Philosophy

### 1.1 The Anti-Tacky, Anti-AI Manifesto
Most political and public sector websites suffer from one of two extremes:
1. **The Stale Bureaucratic Template:** Boxy grids, low-contrast text, pixelated party logos, and dense walls of unformatted text.
2. **The "Tacky AI / Tech Bro" Gimmick:** Floating neon particles, spinning geometric 3D shapes, generic AI-generated stock illustrations, jarring bounce effects, and uncalibrated animations that feel chaotic and cheap.

**Our Aesthetic Doctrine: "The Editorial Stateswoman / Modern Ghanaian Renaissance"**
The website for Hon. Dorcas Affo-Toffey must evoke the weight, dignity, and visual poise of an international editorial publication (such as *Vogue Africa*, *The Financial Times*, or *Monocle*), combined with the authentic warmth and pride of Western Region culture.

```
+-----------------------------------------------------------------------------------------+
|                               DESIGN PILLARS                                            |
+-----------------------------------------------------------------------------------------+
| EDITORIAL SERENITY | Generous whitespace, disciplined typographic scale, calm pacing    |
| VERIFIED GRAVITAS  | Every stat backed by real documentation; authentic documentary media|
| ORGANIC FLUIDITY   | Inertia-based smooth scrolling, masked typographic reveals          |
| CULTURAL DIGNITY   | Nzema heritage and coastal warmth elevated with presidential poise  |
+-----------------------------------------------------------------------------------------+
```

### 1.2 Legacy Website Audit (`dorcasaffotoffey.com`): Data Harvested vs. Design Failures Eliminated

An autopsy of Hon. Dorcas’s previous website reveals a profound mismatch between her real-world stature and her digital representation. We harvest the **factual evidence and historical track record** while **completely discarding the outdated aesthetics**:

| Dimension | Legacy Website (`dorcasaffotoffey.com`) Failure Mode | The New Editorial Stateswoman Standard |
| :--- | :--- | :--- |
| **Visual Architecture** | Outdated Bootstrap 3 template with harsh `#007bff` primary blue buttons, clashing generic red alerts, and cramped margins. | Bespoke Next.js 15 layout wrapped in Deep Jomoro Emerald (`#0B251E`), Warm Alabaster, and subtle Royal Gold accents. |
| **Typography** | Generic system sans-serif fonts, unspaced uppercase headers, and poor line-height causing reading fatigue. | Haute-couture editorial serif (*Canela* / *Cormorant Garamond*) paired with crisp, high-legibility geometric sans (*Satoshi*). |
| **Motion & Scroll** | Abrupt, jerky scrolling with a generic jQuery "scroll-to-top" arrow button and a distracting third-party Crisp chat widget. | **Lenis virtual smooth inertia scrolling** paired with **GSAP ScrollTrigger** for organic, narrative-driven reveals. |
| **Content Curation** | Uncurated dumps of random external news (e.g. outdated COVID articles from 2020, raw funeral donation notices). | Curated, high-impact pillars: Ministerial transport reforms, the `30Home Initiative`, school dignity tours, and the Jomoro Factory prospectus. |
| **Data Presentation** | Static bullet points with no verification, no timestamps, and low-resolution stretched mobile snapshots. | **Tactile Verified Impact Dashboard** featuring live counters, geo-coordinates, stamped municipal handovers, and high-res photojournalism. |

#### Key Factual Assets Harvested from the Legacy Site
1. **Chieftaincy & Cultural Honor:** Enstooled as **Nkosuo Hemaa** (Development Queenmother) of Ahobre No. 1 by the chiefs and elders for her community-building initiatives; known affectionately as *"Jomoro Yaa Asantewaa"* and *"Jomoro Anyelazo"*.
2. **Agrarian Access Bridges:** Construction of critical footbridges unlocking isolated farming communities (Abolekpole, Amakubakrom, Alabuale, Azambolo, and Kongonja bridges) allowing cocoa, rubber, and coconut farmers to bring produce to market.
3. **Safe Water Interventions:** Full reconstruction and securing of the Anlomatuope Primary School hand-dug well (saving the lives of school children after near-fatal accidents), Mpeasem well, Boakwaw borehole, and Nawule submersible water pump.
4. **Healthcare Track Record:** Donation of a fully equipped modern ambulance to Half-Assini Government Hospital; paying off emergency surgical operation bills for needy constituents; donation of medical beds to Beyin Methodist Health Centre; and wheelchairs for disabled children.
5. **Economic Empowerment:** Launch of the *Interest-Free Loan Scheme* in partnership with Jomoro Rural Bank for over 200 market women; donation of Solo knapsack sprayers to Aleboale farmers; direct financial assistance to coastal women fish processors and the Elubo Garment Makers and Okada riders associations.
6. **National Policy Advocacy:** Challenging the Ministry of the Interior in Parliament regarding the prolonged closure of the Elubo land borders, saving cross-border livelihoods for thousands of traders.

---

## 2. Visual Identity System & Design Tokens

### 2.1 Color Palette

The color system combines the warm alabaster paper canvas inspired by the editorial design in `screenshots/design.jpg`, paired with **Vibrant Imperial Violet (`#7C3AED`)** as the primary dynamic accent, executive dark tones, and subtle royal gold:

```
+-------------------------+-------------------------+-------------------------+
|  IMPERIAL VIOLET (Acc.) |    WARM ALABASTER       |  EXECUTIVE CHARCOAL     |
|         #7C3AED         |         #FAF8F5         |         #11161B         |
|  Royal Ghanaian majesty,|  Warm editorial paper   |  Parliamentary weight,  |
|  vibrant modern accent  |  feel, calm & tactile   |  stateliness, contrast  |
+-------------------------+-------------------------+-------------------------+
|  SUBTLE SAND / CARD     |    ROYAL GOLD (Muted)   |  PRISTINE WHITE         |
|         #F2EFE9         |         #D4AF37         |         #FFFFFF         |
|  Card surfaces, borders,|  Traditional honors,    |  High-contrast cards,   |
|  divider lines          |  chieftaincy dignity    |  modals & focus states  |
+-------------------------+-------------------------+-------------------------+
```

#### CSS Token Definitions
```css
:root {
  /* Brand Primitives */
  --color-accent-purple: #7C3AED;       /* Primary Accent (Imperial Violet) */
  --color-accent-purple-light: #9333EA;
  --color-accent-purple-dark: #6D28D9;
  --color-accent-purple-glow: rgba(124, 58, 237, 0.18);
  
  --color-canvas-warm: #FAF8F5;         /* Warm Alabaster Canvas (Inspired by Screenshot) */
  --color-canvas-subtle: #F2EFE9;
  --color-canvas-muted: #E6E1D7;
  --color-canvas-dark: #11161B;         /* Executive Charcoal */
  --color-canvas-charcoal: #192027;
  
  --color-gold-500: #D4AF37;            /* Chieftaincy & Mineral Accent */
  
  /* Typography Scale */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Syne', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Timing & Easing */
  --ease-out-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}
```
  --color-surface-base: #FBF9F5; /* Warm Editorial Canvas */
  --color-surface-subtle: #F3EFE8;
  --color-surface-border: #E5DFD5;
  
  /* Typography Scale */
  --font-serif: 'Canela', 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Satoshi', 'General Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Timing & Easing */
  --ease-out-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### 2.2 Typographic Hierarchy
1. **Display & Editorial Headlines:** *Canela* / *Cormorant Garamond* (Light & Regular italic). Imparts immediate literary gravitas, elegance, and stateswoman presence.
2. **Interface, Body & Subheadings:** *Satoshi* / *General Sans* (Medium & Regular). High legibility, geometric precision, modern and crisp.
3. **Data Indicators & Tagging:** *JetBrains Mono*. Used for latitude/longitude stamps (`5.0592° N, 2.6288° W [JOMORO]`), official gazette citations, and verified timestamps.

---

## 3. Smooth Scrolling & Premium Animation Architecture

To ensure the website feels tactile, responsive, and luxurious without causing performance hiccups:

```
[Browser Viewport]
       │
       ▼
┌───────────────────────────────┐
│     Lenis Virtual Scroller     │  --> Smooth inertial dampening (duration: 1.2s, smoothTouch: true)
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│   GSAP ScrollTrigger Engine   │  --> Manages pinning, timeline scrubbing & coordinate reveals
└──────────────┬────────────────┘
               │
       ┌───────┴───────┬─────────────────┬─────────────────┐
       ▼               ▼                 ▼                 ▼
 ┌───────────┐   ┌───────────┐     ┌───────────┐     ┌───────────┐
 │ SplitText │   │ Clip-Path │     │ Horizontal│     │ Real-time │
 │ Line Mask │   │ Image Zoom│     │ Pin Scrub │     │ Counters  │
 └───────────┘   └───────────┘     └───────────┘     └───────────┘
```

### 3.1 Core Animation Rules
- **No Floating Particles or AI Web Gradients:** These immediately look cheap and amateurish.
- **Micro-Interactions are Magnetic & Subdued:** Buttons subtly gravitate toward the cursor within a 20px radius (`translate3d(x, y, 0)`).
- **Text Enters via Overflow Hidden Masks:** Lines of text slide up smoothly from behind an invisible clipping mask (`clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)`), not sudden fades or bouncy spring oscillations.
- **Image Parallax with Subtle Unveiling:** Photographs expand gently from an initial 1.1x scale down to 1.0x with smooth parallax scrubbing as the user scrolls.

---

## 4. The Narrative Scrollytelling Experience ("The Arc of Purpose")

The homepage is organized as a seamless, scroll-driven documentary that takes visitors on a captivating visual journey:

```
+-----------------------------------------------------------------------------------------+
|                               HOMEPAGE NARRATIVE ARC                                    |
+-----------------------------------------------------------------------------------------+
| PROLOGUE  | The Framed Documentary Hero: "LEADERSHIP ROOTED IN DIGNITY"                 |
| ACT I     | Roots & Conviction: Pinned Story Unfold (Tikobo No. 1 to Parliament)        |
| ACT II    | Verified Impact Ledger: Real Deliverables (Bridges, Water, Maternal Care)   |
| ACT III   | Executive Transformation: Best Performing Deputy Minister of Transport 2026 |
| ACT IV    | Official Dispatches: Speeches, Parliamentary Records & Press Releases        |
| EPILOGUE  | Open Governance & Citizen Direct Access Desk                                |
+-----------------------------------------------------------------------------------------+
*Note: The prospective 6-month brand calendar is maintained separately in plan.md and 
intentionally excluded from the public platform per strategic directive.*
```

### 4.1 Detailed Section-by-Section Breakdown

#### Section 1: Hero Experience (Prologue — Inspired by `screenshots/design.jpg`)
- **Visual Presentation:** A framed documentary canvas set against a warm alabaster paper background (`#FAF8F5`).
- **Interactive Visual Cross-fade:** Starts with an authoritative, stately solo portrait of Hon. Dorcas in parliamentary elegance, and smoothly cross-fades into her among the smiling people and crowd of Jomoro on hover or scroll.
- **Typographic Overlap:**
  - *Serif Kicker:* `Member of Parliament & Deputy Minister` (Italic, top center).
  - *Massive Accent Headline:* **"LEADERSHIP ROOTED IN DIGNITY"** in Vibrant Imperial Violet (`#7C3AED`) using `font-display` (Syne), overlapping the central photo.
  - *Layered CTA Button:* Boxed container with purple border and hover inversion: **"DISCOVER THE VISION →"**.
  - *Bottom Scroll Hook:* **"EXPLORE"** in tracking-ultra with a clean vertical purple stroke line pointing downwards.

#### Section 2: Act I — The Genesis, Cultural Crown & Global Trajectory (Pinned Story)
- **Layout:** Asymmetrical editorial split-screen.
- **Scroll Interaction:** Left side pins with a powerful quote: *"I was born the 18th of 23 children in Tikobo No. 1. I know what it means to build resilience with bare hands. Leadership is only legitimate when it brings tangible dignity to every family, farmer, and child."* Alongside her cultural title: **Nkosuo Hemaa (Development Queenmother) of Ahobre No. 1**.
- **Right Side Scrolling Cards:**
  1. *Foundations:* Roots in Tikobo No. 1 & Bonyere, Nkroful Secondary, and traditional enstoolment.
  2. *Enterprise:* 25 years building real estate and healthcare ventures in Atlanta, Georgia (USA) and Ghana.
  3. *Patronage:* Purchasing and relocating Division One club **Jomoro FC** to create professional youth athletic pipelines.
  4. *Governance:* Flipping the Jomoro parliamentary seat, defending cross-border traders at Elubo, and becoming Deputy Minister of Transport.

#### Section 3: Act II — The Interactive Verified Impact Ledger
- **Visual Style:** High-contrast editorial ledger with live counters:
  - `30+` Detained Mothers Discharged (Half-Assini Hospital Ambulance & Maternity Debt Relief).
  - `5` Agrarian Access Bridges (Abolekpole, Amakubakrom, Azambolo, Alabuale, Kongonja).
  - `200+` Market Women Financed (Jomoro Rural Bank Interest-Free Loan Scheme).
  - Lifesaving well reconstruction at Anlomatuope Primary School and Nawule submersible pump.
- **Filter Tabs:** `All`, `Healthcare & Maternal`, `Agrarian Bridges`, `Clean Water`, `Economic Livelihoods`.
- **Interactive Slide-Out Modal Drawer:** Clicking any card opens the official stamped verification record with reference code, partner, and audited impact report.

#### Section 4: Act III — Executive Transport Leadership & National Honours
- **Feature Focus:** Honored as the **Best Performing Deputy Minister of 2026** at the 6th Ministers of State Excellence Honours.
- **Three Core Pillars:**
  1. *Fleet Reform:* MMTL bus rehabilitation and mass mobility equity.
  2. *Road Safety & Licensing:* Decentralized DVLA community documentation clinics.
  3. *Border Corridors:* Regional trade logistics and defending cross-border trade at Elubo.

#### Section 5: Act IV — Newsroom & Official Dispatches
- **Layout:** Three-column newspaper grid.
- **Key Records:** The parliamentary question on Elubo land border reopenings, the 2026 Ministerial Excellence acceptance address, and the Half-Assini maternal health declaration. Interactive modal to read statements in full.

#### Section 6: Epilogue — Citizen Direct Access Desk & Open Governance
- **Functionality:** Constituent submission portal with automatic tracking reference (`#DAT-XXXXXX`) for welfare, student support, transport corridor reporting, and business partnerships. Supported by contact offices in Parliament House (Accra), Half-Assini, and Elubo.
  - `Constituent Assistance Desk` (Scholarship inquiries, community petitions).
  - `Transport Sector Feedback` (Road condition reporting, transport operator ideas).
  - `Investor & Partnership Inquiries` (Business collaboration, factory project).
  - `Media & Press Bookings` (Interview requests for national and international press).

---

## 5. Technical Implementation & Code Blueprint

### 5.1 Tech Stack Architecture
- **Framework:** Next.js 15 (React 19, App Router, Server Components).
- **Styling:** Tailwind CSS v4 with custom CSS custom properties.
- **Motion & Scrolling:**
  - `@studio-freight/lenis` (v1.0.42+) for silky smooth inertial scrolling.
  - `gsap` (GreenSock 3.12+) + `ScrollTrigger` for deterministic scrubbed animations.
- **Icons & UI Primitives:** Lucide React + Radix UI Primitives (Accessible Dialogs, Tabs, Tooltips).
- **Content Management:** Sanity.io / Headless CMS for rapid press release and media publishing by her communications team.
- **Hosting & CDN:** Vercel Edge Network with Cloudinary image optimization (delivering WebP/AVIF images tailored to mobile connections in Ghana).

### 5.2 Smooth Scroll (Lenis) + GSAP Setup
```typescript
// components/providers/SmoothScrollProvider.tsx
'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}
```

### 5.3 Masked Headline Text Reveal
```typescript
// components/animations/TextReveal.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
}

export function TextReveal({ children, className = '', tag: Tag = 'h2' }: TextRevealProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    
    // Split into lines/words via GSAP or CSS clip-path
    gsap.fromTo(
      el,
      {
        yPercent: 100,
        opacity: 0,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
      {
        yPercent: 0,
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden py-1">
      <Tag ref={textRef as any} className={className}>
        {children}
      </Tag>
    </div>
  );
}
```

### 5.4 Horizontal Milestone Pin & Scrub (The 6-Month Calendar)
```typescript
// components/sections/HorizontalTimeline.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MILESTONES = [
  {
    month: 'Nov 2026',
    title: '30Home Verification',
    badge: 'Maternal Care',
    desc: 'Auditing hospital welfare cases & clearing debts for 30 detained mothers.',
  },
  {
    month: 'Dec 2026',
    title: 'Christmas Homecomings',
    badge: 'Family Dignity',
    desc: 'Releasing 30 mothers before Christmas and procuring 400 school hygiene packs.',
  },
  {
    month: 'Jan 2027',
    title: 'Menstrual Dignity & Transport',
    badge: 'Youth & Operators',
    desc: 'School outreach sessions & vehicle affordability roundtable with automakers.',
  },
  {
    month: 'Feb 2027',
    title: 'Shelters & Investment Brief',
    badge: 'Infrastructure',
    desc: 'Bus Stops 1 & 2 completed; launching the Jomoro Factory investor brief.',
  },
  {
    month: 'Mar 2027',
    title: 'DVLA Licensing Clinic',
    badge: 'Road Safety',
    desc: 'Community driver documentation, testing & bus stops 3 & 4 delivery.',
  },
  {
    month: 'Apr 2027',
    title: 'The Handover & Results',
    badge: 'Accountability',
    desc: 'Public inspection of all 4 bus stops and release of the 6-Month Results Report.',
  },
];

export function HorizontalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const totalScrollWidth = container.scrollWidth - window.innerWidth + 120;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#0B251E] text-white overflow-hidden">
      <div className="absolute top-12 left-12 z-10">
        <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase">
          Six-Month Brand Building Calendar
        </span>
        <h2 className="text-3xl md:text-5xl font-serif mt-2">The Architecture of Delivery</h2>
      </div>

      <div
        ref={containerRef}
        className="flex items-center h-full pl-12 pr-24 gap-8 pt-24"
      >
        {MILESTONES.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[380px] h-[460px] bg-[#11322A]/80 border border-[#D4AF37]/30 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-md hover:border-[#D4AF37] transition-colors duration-500"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <span className="font-serif text-2xl text-white/50">{item.month}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
              <p className="font-sans text-sm text-[#E5DFD5]/80 leading-relaxed">{item.desc}</p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">PHASE 0{idx + 1}</span>
              <span className="text-xs font-sans text-[#D4AF37] tracking-wider uppercase font-semibold">
                Verified Progress →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 6. Information Architecture & Comprehensive Site Map

```
                                  [HOME]
                                     │
      ┌──────────────┬───────────────┼───────────────┬──────────────┐
      ▼              ▼               ▼               ▼              ▼
  [ABOUT]       [INITIATIVES]   [TRANSPORT &    [INVEST IN     [NEWSROOM &
- Roots        - 30Home Fund    PARLIAMENT]      JOMORO]       CITIZEN HUB]
- Education    - School Pads   - Fleet Reforms  - Factory Deck - Press Releases
- Global Bus.  - 4 Bus Stops   - MMTL Retooling - Agribusiness - Verified Reports
- Jomoro FC    - Micro-Loans   - DVLA Clinics   - Border Hub   - Citizen Portal
```

### Complete Page Breakdown

| Page Route | Page Purpose | Key Components |
| :--- | :--- | :--- |
| `/` (Home) | Flagship entry, scrollytelling narrative, high-level impact overview. | Hero, Roots, Policy Scrub, Verified Impact Dashboard, 6-Month Timeline, Newsroom preview. |
| `/about` | Complete biography, educational honors, corporate career, sports patronage. | Interactive career timeline, photojournalism gallery, video interview archive. |
| `/initiatives/30home` | Dedicated portal for the 30Home maternal care relief campaign. | Live discharge counter, hospital stories, social welfare verification records, donation link. |
| `/initiatives/transit` | Bus stops, driver clinics, vehicle affordability projects. | Interactive map of Jomoro transit shelters, contractor blueprints, handover photos. |
| `/initiatives/education`| Menstrual hygiene tour & school support. | 4-school tracker, pad distribution tally, teacher acknowledgements. |
| `/transport-policy` | Ministerial achievements, parliamentary committee records. | Speeches, Hansard excerpts, transport fleet statistics, award recognition. |
| `/invest-jomoro` | Industrial gateway prospectus to attract factories and foreign direct investment. | Economic overview, infrastructure access, contact desk for investors. |
| `/newsroom` | Central archive for official releases, media kits, high-res portraits. | Searchable press archive, downloadable PDF statements, high-res media pack (ZIP). |
| `/citizen-service` | Direct portal for constituents and citizens to submit inquiries. | Ticketed form, automated tracking number, FAQs for constituency services. |

---

## 7. Performance, Security & Low-Bandwidth Optimizations

Because many constituents and stakeholders will access the site from mobile phones across the Western Region and rural Ghana:
1. **Adaptive Image Compression (WebP/AVIF):** Automatically serves low-bandwidth compressed assets on mobile devices while maintaining 4K retina fidelity on desktop.
2. **Zero Layout Shift (CLS < 0.05):** Aspect ratios strictly pre-defined on all responsive image containers to prevent page jumpiness.
3. **Graceful Motion Fallback (`prefers-reduced-motion`):** If a user has motion sensitivity or older mobile hardware, GSAP animations gracefully fall back to clean native static CSS layouts.
4. **Offline Capability & PWA:** Service worker caching for the Newsroom and Contact pages so constituents can view phone numbers and statements even in poor connectivity areas.
5. **Bank-Grade Form Security:** Anti-spam Turnstile/hCaptcha on the Citizen Service portal to protect the office from automated spam and harassment.
