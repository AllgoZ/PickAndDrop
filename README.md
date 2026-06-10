# Pick & Drop Logistics — Official Website

> **Fast. Safe. Reliable. Every Mile.**

Official website for **Pick & Drop Logistics** — a professional transportation, logistics, and packers & movers company serving all over India, headquartered in Coimbatore, Tamil Nadu.

---

## 🚛 Live Preview

Deploy to Netlify / Vercel / Firebase Hosting — see deployment section below.

---

## 🏢 Company Details

| Detail | Info |
|--------|------|
| **Company** | Pick & Drop Logistics |
| **Industry** | Transportation, Logistics, Packers & Movers |
| **Coverage** | All Over India |
| **Headquarters** | 1/8, Ayyappa Nagar, Kalapatti Main Road, Coimbatore – 641048 |
| **Phone** | 9600101149 |
| **Email** | pndlogistics2025@gmail.com |
| **Instagram** | [@pick_nd_drop_logistics](https://www.instagram.com/pick_nd_drop_logistics) |

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18 | UI Framework |
| Vite | 5 | Build Tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon Library |
| Swiper.js | 11 | Testimonials Slider |

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       ├── logo.jpeg           # Company logo
│       └── fleet/              # Vehicle images (14 real fleet photos)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Header.jsx          # Sticky navbar with mobile menu
│       ├── Hero.jsx            # Full-screen hero with stats
│       ├── About.jsx           # About section
│       ├── Services.jsx        # 3 service categories
│       ├── WhyChooseUs.jsx     # 6 feature cards
│       ├── Fleet.jsx           # Vehicle fleet with tabs (15 vehicles)
│       ├── PackersMovers.jsx   # Packers & movers section
│       ├── Testimonials.jsx    # Swiper testimonials slider
│       ├── ServiceAreas.jsx    # 10 city coverage cards
│       ├── Leadership.jsx      # Co-founders section
│       ├── Contact.jsx         # Quote form → WhatsApp
│       └── Footer.jsx          # Footer + floating WhatsApp button
├── index.html                  # SEO + OpenGraph meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/AllgoZ/PickAndDrop.git
cd PickAndDrop

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output → dist/
```

---

## 🌐 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy**

Or deploy via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: dist
# Configure as SPA: Yes
npm run build
firebase deploy
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#0B4F6C` | Main brand, navbar, buttons |
| Secondary Green | `#2E8B57` | Accents, checkmarks |
| Accent Yellow | `#F4B400` | CTAs, highlights, stats |
| Light Background | `#F8FAFC` | Section backgrounds |
| Dark Text | `#1F2937` | Body text |

---

## 📋 Sections

1. **Hero** — Full-screen with headline, stats (5000+ deliveries, 1000+ customers), and CTA buttons
2. **About** — Company overview with fleet metrics
3. **Services** — Transportation, Packers & Movers, Express Delivery
4. **Why Choose Us** — 6 key differentiators
5. **Fleet** — 15 vehicles from 0.7T to 40T with category filters
6. **Packers & Movers** — Detailed relocation services
7. **Testimonials** — Auto-playing Swiper slider
8. **Service Areas** — 10 cities across South India
9. **Leadership** — Sarankumar Ponraj & Gowtham Nachimuthu D
10. **Contact** — Quote form with WhatsApp integration
11. **Footer** — Links, contact info, social media

---

## 👥 Founders

**Sarankumar Ponraj** — Co-Founder & Managing Director  
Leading business development, customer relationships, strategic planning, and company growth.  
📞 9524531398

**Gowtham Nachimuthu D** — Co-Founder & Operations Director  
Managing operations, fleet coordination, transportation planning, and service quality.  
📞 9600412704

---

© 2026 Pick & Drop Logistics. All Rights Reserved.
