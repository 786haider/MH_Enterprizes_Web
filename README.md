# MH Enterprises — Next.js Website

Premium tiles, ceramics & sanitary ware business website. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
mh-enterprises/
├── app/
│   ├── globals.css        # Global styles, animations, tile patterns
│   ├── layout.tsx         # Root layout with metadata & fonts
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky navbar with mobile menu
│   ├── Hero.tsx           # Hero with auto-sliding sections
│   ├── About.tsx          # Company story + animated counters
│   ├── Collections.tsx    # Product category grid
│   ├── Products.tsx       # Filterable product showcase
│   ├── WhyUs.tsx          # Features / USPs
│   ├── Projects.tsx       # Portfolio of landmark projects
│   ├── Testimonials.tsx   # Client testimonials carousel
│   ├── Contact.tsx        # Contact form + info
│   ├── Footer.tsx         # Full footer with newsletter
│   └── FloatingButtons.tsx # WhatsApp button + back-to-top
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Customization

### Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --gold: #C9913D;        /* Primary gold accent */
  --cream: #FAF7F2;       /* Light background */
  --charcoal: #1A1714;    /* Dark background */
}
```

### Business Info
Update the following with real data:
- **Phone numbers** in `Navbar.tsx` and `Contact.tsx`
- **Address** in `Contact.tsx` and `Footer.tsx`
- **Email** in `Contact.tsx` and `Footer.tsx`
- **WhatsApp number** in `FloatingButtons.tsx`
- **Google Maps link** in `Contact.tsx`
- **Social media links** in `Footer.tsx`

### Products
Edit the `products` array in `components/Products.tsx` to add real products with actual images.

### Projects
Edit the `projects` array in `components/Projects.tsx` to add real projects.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` + `react-dom` | UI library |
| `tailwindcss` | Utility CSS |
| `framer-motion` | Animations (optional enhancement) |
| `lucide-react` | Icons |
| `react-intersection-observer` | Scroll-triggered animations |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Traditional Hosting
```bash
npm run build
# Upload the .next folder and package.json to your server
npm start
```

---

## ✅ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Auto-sliding hero with parallax mouse effect
- ✅ Scroll-triggered reveal animations
- ✅ Animated counters (35+ years, 10K+ clients, etc.)
- ✅ Product filtering by category
- ✅ Testimonials carousel
- ✅ Contact form with success state
- ✅ WhatsApp floating button
- ✅ Custom cursor glow effect
- ✅ Gold shimmer text effects
- ✅ Tile grid background patterns
- ✅ Newsletter subscription
- ✅ Back to top button

---

*Built for MH Enterprises — 35 Years of Excellence Since 1989*
"# MH_Enterprizes_Web" 
