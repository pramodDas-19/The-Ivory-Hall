# The Ivory Hall — Luxury Event Venue Website

> **“A Space for Moments That Matter.”**

A production-quality, client-ready **single one-page website** built for **The Ivory Hall**, a luxury architectural event venue in Goa, India.

---

## 🏛️ Brand & Design System

- **Background:** `#FAF9F6` (Warm Architectural Ivory)
- **Pure White:** `#FFFFFF`
- **Charcoal:** `#1C1C1A`
- **Soft Taupe:** `#E8E4DC`
- **Champagne Gold:** `#B89B62` (Restrained luxury accent)
- **Light Border:** `#DDD9D0`
- **Typography:**
  - **Headings:** *Cormorant Garamond* (Editorial, classical serif)
  - **Body / UI:** *Manrope* (Clean, modern sans-serif)

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Subtle, polished micro-interactions)
- **Lucide React** (Minimalist architectural iconography)

---

## 📁 Architecture & Components

```
src/
├── app/
│   ├── globals.css         # Custom typography, scrollbar & smooth scrolling
│   ├── layout.tsx          # Cormorant Garamond & Manrope fonts, SEO OpenGraph metadata
│   └── page.tsx            # Single One-Page assembly with modal state
└── components/
    ├── Navbar.tsx           # Sticky header with transparent-to-ivory blur transition & mobile drawer
    ├── Hero.tsx             # Bright architectural hero with editorial typography & CTA actions
    ├── Intro.tsx            # Spacious two-column introduction with brand pillars
    ├── Spaces.tsx           # 2x2 responsive grid for Ballroom, Courtyard, Terrace & Dining
    ├── Features.tsx         # 8 venue specifications with charcoal & champagne accents
    ├── Events.tsx           # 4 curated event types with subtle hover interactions
    ├── Gallery.tsx          # Asymmetrical editorial gallery with interactive full-screen Lightbox
    ├── WhyIvoryHall.tsx     # Split architectural layout with 4 key values
    ├── Testimonials.tsx     # Refined quotes with clear demo attribution
    ├── Location.tsx         # Architectural destination card with Goa coordinates and transit access
    ├── CTA.tsx              # Final call-to-action with quick booking inquiry form & WhatsApp link
    ├── Footer.tsx           # Minimal footer with logo, navigation, demo contact details & back-to-top
    └── AvailabilityModal.tsx # Interactive date checking & reservation modal
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```

---

## 🌟 Key Highlights

1. **Strictly One-Page Architecture:** All navigation links scroll smoothly to in-page anchors (`#about`, `#spaces`, `#events`, `#gallery`, `#location`, `#contact`).
2. **Authentic Brand Emblem:** Uses the provided high-resolution emblem (`public/logo.png`) seamlessly across desktop/mobile headers and footer.
3. **Bright Luxury Aesthetic:** Crisp, natural light photography instead of dark clichés or generic AI templates.
4. **Interactive Concierge Touchpoints:**
   - Universal "Check Availability" modal accessible across navigation, hero, spaces, and CTA.
   - Quick callback submission form in the CTA section.
   - Clickable gallery with high-resolution lightbox viewer.
   - WhatsApp concierge direct link.
