# Swathy Moorthy — Personal Portfolio & Commerce Strategy Showcase

> **Production-Grade, Luminous Glassmorphic Web Experience**  
> *E-commerce Analyst & Marketplace Strategist*  
> Anchored in Paris, France & Pondicherry, India

---

## ✨ Overview

This repository houses the personal portfolio and digital commerce showcase for **Swathy Moorthy**. Built strictly to production standards with a luminous **Glassmorphism** design aesthetic (layered translucency, specular borders, backdrop blur, and rich micro-interactions), the site highlights verified metrics, cross-border marketplace operations, and end-to-end catalog strategies.

### 🌟 Key Highlights

- **Aesthetic**: Modern light theme with frosted glass cards (`backdrop-blur-xl`), animated cursor-tracking specular reflections, lavender-to-azure gradients, and clean typography.
- **Factual Source of Truth**: Faithfully reflects verified career milestones from `Swathy_Resume.pdf`:
  - **4 Career Milestones**: Neteven (Lectra Group, Paris) as CSM and International Content Coordinator, Cognizant (Chennai), Lumina Datamatics (Pondicherry).
  - **Verified Metrics**: `20+` marketplaces, `60%` visibility increase, `90%+` brand exposure growth, and `3+` years in digital commerce.
  - **Case Studies**: In-depth strategy walkthroughs for Amazon, Zalando, Farfetch, La Redoute, and Walmart.
- **Interactive Commerce Intelligence Dashboard**: Real-time performance momentum curves, channel coverage distribution, and simulated operations activity feed.
- **Global Marketplace Network**: Dynamic interactive operations map connecting Paris and India hubs to 20+ international marketplace endpoints.
- **One-Click Resume**: Integrated view and direct download for `Swathy_Resume.pdf`.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: Tailwind CSS + Vanilla CSS Glassmorphism tokens (`.glass-panel`, `.glass-panel-hover`, `.glass-badge`, `.bg-mesh-canvas`)
- **Icons**: Lucide React + custom inline SVGs for brand logos
- **Design Tokens**: 
  - Primary Purple: `#5B41C1`
  - Cerulean Blue: `#5893E0`
  - Vibrant Teal: `#43C2C2`
  - Emerald Green: `#58E55C`
  - Coral Accent: `#F25A5F`
- **TypeScript**: Strict type checking with clean data models in `src/data/portfolioData.ts`

---

## 📂 Project Architecture

```text
├── public/
│   ├── images/              # Hero & About portraits (photo1.png, hero1.png)
│   ├── logo/                # High-res company & marketplace logos
│   └── Swathy_Resume.pdf    # Direct downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom glassmorphism, mesh canvas, and scrollbar rules
│   │   ├── layout.tsx       # Root layout, metadata, and font definitions
│   │   └── page.tsx         # Structured single-page executive flow
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx       # Frosted glass card with dynamic mouse spotlight
│   │   │   └── GlassBadge.tsx      # Multi-variant translucent pill badge
│   │   ├── Navbar.tsx              # Sticky glass pill navigation with active observer
│   │   ├── Hero.tsx                # Luminous hero with strategy chain and stats strip
│   │   ├── About.tsx               # Bento-grid executive summary & international badges
│   │   ├── Experience.tsx          # Career timeline with expandable role cards
│   │   ├── CommerceStories.tsx     # 4 deep-dive case studies with workflow tabs
│   │   ├── Dashboard.tsx           # Commerce intelligence dashboard with SVG momentum curves
│   │   ├── MarketplaceNetwork.tsx  # Interactive Paris & India global operations map
│   │   ├── Skills.tsx              # Verified tool stack and 12 core competencies
│   │   ├── ResumeSection.tsx       # Academic degrees, languages, and resume preview
│   │   └── ContactFooter.tsx       # Magnetic email CTA and verified LinkedIn link
│   └── data/
│       └── portfolioData.ts        # Centralized resume data, metrics, and case studies
└── docs/
    └── prompt.md            # Comprehensive project specification
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/swathymoorthy01/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Launch development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

The application can be deployed instantly to **Vercel**, **Netlify**, or **GitHub Pages**:

### Vercel (Recommended for Next.js)
1. Import `swathymoorthy01/MyPortfolio` on [Vercel](https://vercel.com).
2. Framework preset will automatically detect Next.js.
3. Click **Deploy**.

---

## 📄 License & Contact

- **Author**: Swathy Moorthy
- **Email**: [swathymoorthy2000@gmail.com](mailto:swathymoorthy2000@gmail.com)
- **LinkedIn**: [Swathy Moorthy](https://www.linkedin.com/in/swathy-moorthy-847133210/)
- **Repository**: [https://github.com/swathymoorthy01/MyPortfolio.git](https://github.com/swathymoorthy01/MyPortfolio.git)
