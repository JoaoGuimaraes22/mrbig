# Audit Report — Mr. Big Evolution
_Generated: 2026-03-25_

## 🔴 Critical (must fix before launch)
- [ ] `og-image.jpg` is actually a PNG file (wrong extension) and dimensions are 1868x884 — should be 1200x630 JPG for proper OG sharing
- [ ] Address discrepancy — info.md says "R. José de Castro 20" but dicts say "Urb. Checlos" — verify correct address with client before launch
- [ ] `about.p1, p2, p3` — marketing copy written by AI, not confirmed real business story — verify or get real copy from client

## 🟡 Warning (should verify with client)
- [ ] `metadata.email`: "ambdesportivos@gmail.com" — not confirmed in info.md, verify it's correct
- [ ] `stats.area`: "5,000m²" — unverified claim, confirm with client
- [ ] `stats.machines`: "400+" — unverified claim
- [ ] `stats.stations`: "500+" — unverified claim
- [ ] `stats.plates`: "50,000kg" — unverified claim
- [ ] `about.stat3Value` / `koTeam.foundedYear`: "2004" — founding year unverified
- [ ] `koTeam.trainersCount`: "10" — unverified
- [ ] `koTeam.monitorsCount`: "11" — unverified
- [ ] `koTeam.gymsCount`: "6" — unverified
- [ ] `koTeam.phone`: "+351 963 919 855" — not in info.md, verify
- [ ] `koTeam.website`: "https://koteam.pt" — not in info.md, verify it's live
- [ ] `contact.instagram`: "https://www.instagram.com/mrbigevolution/" — not in info.md, verify URL
- [ ] `pricing` — all 3 plans show "Contact Us" / "Consultar" — get real prices if available
- [ ] `footer.tagline`: "I'm not training in a health club." — appears to be a real gym motto (matches Dimitri's review), but confirm
- [ ] All modalities/services lists — not confirmed by info.md, verify these are the actual services offered
- [ ] All 6 facility zone descriptions — unverified, confirm zones exist as described

## 🟢 Info (nice to have)
- [ ] info.md is sparse — missing email, Instagram, category, team, schedule, pricing, about story, features
- [ ] No class schedule/timetable data — schedule section exists in dict but has no class data
- [ ] Reviews are all 5-star (Pedro 5/5, Luka 5/5, Conor 5/5, Dimitri 5/5) — real but cherry-picked, consider adding a 4-star review for credibility (e.g. A K or João Saraiva from real-reviews.md)
- [ ] `NEXT_PUBLIC_SITE_URL` is set to `https://mrbig.vercel.app/` — update to custom domain when available

## ✅ Passing checks
- [x] Business name consistent across all sections ("Mr. Big Evolution")
- [x] Phone consistent: EN metadata, contact, FAQ = PT metadata, contact, FAQ = "+351 214 538 721"
- [x] Email consistent: EN metadata + contact = PT metadata + contact = "ambdesportivos@gmail.com"
- [x] Address consistent between EN and PT dicts
- [x] KO Team phone consistent: EN koTeam + contact + FAQ = PT koTeam + contact + FAQ = "+351 963 919 855"
- [x] Rating consistent: "4.7★" in stats (both langs), "4.7" in reviews sub (both langs)
- [x] Review count consistent: "780" in stats and reviews sections (both langs)
- [x] All 4 reviews are real Google reviews (verified against real-reviews.md)
- [x] Social URLs consistent between EN and PT
- [x] `metadata.type`: "SportsActivityLocation" — valid Schema.org type
- [x] `NEXT_PUBLIC_SITE_URL` is set (not localhost)
- [x] `favicon.ico` exists (15KB, not a tiny placeholder)
- [x] All images in WebP format
- [x] No empty strings or TODO markers in dicts
- [x] No placeholder contact info (no example.com, no 912 345 678)
- [x] Google Maps embed URL present in info.md
- [x] Copyright year is 2026

## 🖼️ Images audit
- [x] `public/hero/hero.webp` (71KB)
- [x] `public/about/about.webp` (68KB)
- [x] `public/koteam/koteam.webp` (117KB)
- [x] `public/facilities/musculacao.webp` (47KB)
- [x] `public/facilities/crosstraining.webp` (72KB)
- [x] `public/facilities/combate.webp` (34KB)
- [x] `public/facilities/danca.webp` (46KB)
- [x] `public/facilities/studios.webp` (31KB)
- [x] `public/facilities/indoor.webp` (28KB)
- [x] `public/reviews/review1.webp` (15KB)
- [x] `public/reviews/review2.webp` (14KB)
- [x] `public/reviews/review3.webp` (42KB)
- [x] `public/reviews/review4.webp` (26KB)
- [x] `public/logo.png` (213KB)
- [x] `public/og-image.jpg` (861KB) ⚠️ Wrong format — is PNG, not JPG
- [x] `public/favicon.ico` (15KB)

## 📊 Summary
- **3 critical issues** (og-image format, address discrepancy, unverified about copy)
- **16 warnings** (unverified stats, contacts, services, pricing)
- **4 info items** (sparse info.md, no schedule data, cherry-picked reviews, Vercel URL)
- **0 images missing**
- **16 images present** (all WebP where applicable)

## Top 3 fixes
1. **Fix og-image.jpg** — re-export as actual JPG at 1200x630 for proper social sharing
2. **Verify address** — confirm whether "Urb. Checlos" or "R. José de Castro 20" is correct
3. **Verify gym stats** — confirm 5,000m², 400+ machines, 500+ stations, 50,000kg plates are accurate claims
