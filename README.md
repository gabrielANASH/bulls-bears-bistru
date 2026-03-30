# Bulls & Bears Bistro 🐂🐻

> **Where Markets Meet Meals** — Coimbatore's first stock market themed café website.

A premium Next.js single-page restaurant website with a Bloomberg-terminal-meets-café aesthetic.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles + animations
└── components/
    ├── Navbar.tsx         # Fixed navigation with mobile menu
    ├── Hero.tsx           # Full-screen hero with live clock & trading terminal
    ├── About.tsx          # About section with animated feature cards
    ├── Menu.tsx           # "Market Listings" tabbed menu
    ├── TickerSpecials.tsx # Animated stock ticker + specials board
    ├── Quiz.tsx           # "Build Your Food Portfolio" interactive quiz
    ├── Reviews.tsx        # Customer review carousel with ratings
    ├── Location.tsx       # Map embed + hours + contact + CTAs
    └── Footer.tsx         # Brand footer with links
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `bull` | `#00ff88` | Primary – bull market neon green |
| `bear` | `#ff3355` | Secondary – bear market red |
| `gold` | `#ffd700` | Accent – premium gold |
| `dark` | `#0a0a0f` | Background |
| `card` | `#111118` | Card background |

**Fonts:**
- **Orbitron** — headings, labels, data (trading terminal feel)
- **Inter** — body text, descriptions

---

## ✏️ How to Customise

### Update Menu Items
Edit `src/components/Menu.tsx` → find the `categories` array → modify names, prices, descriptions.

### Update Ticker Prices
Edit `src/components/Hero.tsx` → `tickerItems` array.
Edit `src/components/TickerSpecials.tsx` → `specials` array.

### Change Address / Phone
Edit `src/components/Location.tsx` and `src/components/Footer.tsx`.

### Change Color Theme
Edit `tailwind.config.js` → `theme.extend.colors`:
```js
bull: '#00ff88',  // Change neon green here
bear: '#ff3355',  // Change red here
gold: '#ffd700',  // Change gold here
```

### Add Real Menu Images
In `src/components/Menu.tsx` → `MenuCard` component, replace the gradient div with:
```tsx
<Image src="/images/your-dish.jpg" alt={item.name} fill className="object-cover" />
```

---

## 📦 Tech Stack

- **Next.js 14** — React framework
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Google Fonts** — Orbitron + Inter

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

Built for **Bulls & Bears Bistro**, RS Puram, Coimbatore 🇮🇳
