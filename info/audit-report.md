# Audit Report — Mr. Big Evolution
_Generated: 2026-03-25_

## 🔴 Critical (must fix before launch)
- [ ] No `.env` file — `NEXT_PUBLIC_SITE_URL` not set (SEO canonical URLs, OG tags will use localhost)
- [ ] No `favicon.ico` — missing entirely from public/
- [ ] OG image is `og-image.png` not `og-image.jpg` — layout references `.jpg` but file is `.png`. Either rename file or update layout
- [ ] `metadata` dict missing new SEO fields — no `name`, `phone`, `email`, `address`, `type` keys (needed for base layout JSON-LD). This project predates the SEO update
- [ ] Reviews appear fabricated — generic names ("Miguel F.", "Ana S.", "Rui M.", "Catarina L."), no "Google Review" role, no real reviewer data. Need to scrape real reviews with `ignite reviews`
- [ ] `home` dict key still has placeholder text — `"This is the starting point of your project. Edit this page to get started."`
- [ ] Copyright says "© 2025" in both EN and PT — should be 2026

## 🟡 Warning (should verify with client)
- [ ] Pricing plans all say "Contact Us" / "Consultar" — verify if actual prices should be shown
- [ ] FAQ answer for hours says "Contact us directly" — should include actual hours if known
- [ ] `contact.instagram` is "@mrbigevolution" without full URL — should be `https://www.instagram.com/mrbigevolution/`
- [ ] `contact.facebook` is "/mrbigevolution" without full URL — should be `https://www.facebook.com/mrbigevolution`
- [ ] KO Team website listed as "koteam.pt" — no protocol, should be `https://koteam.pt`
- [ ] No Google Maps embed URL in contact section — no map will display
- [ ] No Google Maps link in contact section — no "Get Directions" link target
- [ ] `footer.copyright` differs between EN ("© 2025 Mr. Big Evolution. All rights reserved.") and PT ("© 2025 Mr. Big Evolution. Todos os direitos reservados.") — the text is correctly translated but the year is wrong in both

## 🟢 Info (nice to have)
- [ ] Default Next.js SVGs still in public/ (file.svg, globe.svg, next.svg, vercel.svg, window.svg) — should clean up
- [ ] No `site.webmanifest` — add for PWA support and mobile home screen
- [ ] No apple-touch-icon or android-chrome icons — add for mobile
- [ ] Dict uses non-standard structure — keys like `review1Text`, `review1Author` instead of arrays. Works but inconsistent with other templates (vet, mechanic use arrays)
- [ ] `stats` dict uses flat key structure (`area`, `areaLabel`) instead of array pattern used in other templates
- [ ] No `real-reviews.md` — reviews haven't been scraped yet
- [ ] No `design-brief.md` — no design direction documented

## 📊 Summary
- **7 critical issues** (SEO, favicons, fabricated reviews, placeholder text)
- **8 warnings** (URLs, pricing, hours, maps)
- **7 info items** (cleanup, consistency)
- **0 images missing** (all referenced images exist)
- **14 real images present** ✅ (hero, about, koteam, 6 facilities, 4 reviews)
- **EN/PT data match** ✅ (phone, email, address all identical — copyright year wrong in both)
- **Branding consistent** ✅ ("Mr. Big Evolution" throughout)

**Top 3 to fix first:**
1. Add `metadata` SEO fields to dict (name, phone, email, address, type) — JSON-LD won't work without these
2. Scrape real reviews with `ignite reviews` to replace fabricated ones
3. Create `.env` with production URL + add favicon set
