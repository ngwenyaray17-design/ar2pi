# VitalLink Health 🏥

**Concierge healthcare navigation — find specialists, book appointments faster, manage medical records.**

A full-stack landing page + waitlist system for a healthcare navigation service. Built with Vite, React, TypeScript, Tailwind CSS, and a lightweight Express API.

---

## Quick Start

### 1. Start the backend (port 3001)
```bash
cd server
npm install
node server.js
```

### 2. Start the frontend (port 3000)
```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to the backend automatically.

---

## What's Included

### Brand Identity
- Logo (3 variants: full, horizontal, symbol-only)
- Color palette: Deep Teal (#0D7C7C), Soft Sky (#5BA8D5), Warm Coral (#E8836A)
- Typography: Inter (headings), Lato (body)
- Full brand guidelines document

### Landing Page
- Responsive design (mobile + desktop)
- Hero section with tagline: "Your health navigated. Stress-free."
- Service cards: Specialist Search, Appointment Booking, Medical Records
- "How It Works" step-by-step section
- Testimonials section
- Waitlist email signup form

### Waitlist Backend
- `POST /api/waitlist` — capture emails with timestamps
- `GET /api/waitlist` — retrieve all signups
- JSON file storage (persistent, no database needed)

### Tech Stack
- **Frontend:** Vite + React + TypeScript + Tailwind CSS v4
- **Backend:** Node.js + Express
- **Icons:** Lucide React

---

## Project Structure
```
ar2pi/
├── public/          # Static assets (logo, favicon)
├── server/          # Express API backend
│   ├── server.js    # API endpoints
│   ├── package.json
│   └── waitlist.json # Captured emails
├── src/             # React app
│   ├── App.tsx      # Main landing page component
│   ├── App.css      # Component styles
│   ├── index.css    # Tailwind config + brand theme
│   └── main.tsx     # Entry point
├── index.html       # HTML shell
├── vite.config.ts   # Vite + API proxy config
└── package.json
```

---

## Revenue Model
- **Monthly subscription:** $29–$49/mo (individual/family)
- **Per-service fees:** $19/appointment booking, $49/care plan review

---

## Built for Marketplace
This business is ready to be acquired and operated. Next steps for the new owner:
1. Merge the feature branches to `main`
2. Deploy the landing page (Vercel, Netlify, or Railway)
3. Connect Stripe for payments
4. Set up subscription products

---

© 2026 VitalLink Health