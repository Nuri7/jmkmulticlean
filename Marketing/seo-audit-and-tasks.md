# JMK Multiclean — SEO Audit & Improvement Plan

**Date:** 16 May 2026  
**Website:** [jmkmulticlean.nl](https://jmkmulticlean.nl)

---

## ✅ SEO Already Implemented

### Technical SEO
| Item | Status | Details |
|------|--------|---------|
| Page title | ✅ | "JMK Multiclean \| Professionele Schoonmaakdiensten in Noord- en Zuid-Holland" |
| Meta description | ✅ | 160 chars, includes cities + services + KVK + CTA |
| Meta keywords | ✅ | City-specific: "schoonmaakdiensten Amsterdam, kantoorschoonmaak Den Haag..." |
| Canonical URL | ✅ | Prevents duplicate content |
| Robots meta | ✅ | `index, follow` |
| robots.txt | ✅ | Allows all crawlers, points to sitemap |
| sitemap.xml | ✅ | Single page with priority 1.0 |
| hreflang | ✅ | `nl` for Dutch language signal |
| Semantic HTML | ✅ | Proper `<section>`, `<nav>`, `<footer>`, `<h1>`-`<h3>` hierarchy |
| Single H1 | ✅ | Only one `<h1>` on the page |

### Structured Data (JSON-LD)
| Item | Status | Details |
|------|--------|---------|
| LocalBusiness schema | ✅ | Full JSON-LD with name, address, phone, email |
| GeoCoordinates | ✅ | Lat/lng for Abbenes |
| Opening hours | ✅ | Ma-Za 08:00-20:00 |
| Service catalog | ✅ | 6 services listed as Offer items |
| Area served | ✅ | 6 cities as structured City entities |
| Aggregate rating | ✅ | 5.0 stars, 3 reviews |
| Price range | ✅ | "€€" indicator |

### Social / Open Graph
| Item | Status |
|------|--------|
| OG title, description, image | ✅ |
| OG locale (nl_NL) | ✅ |
| Twitter card (summary_large_image) | ✅ |

### Geo Tags
| Tag | Value |
|-----|-------|
| geo.region | NL-NH |
| geo.placename | Abbenes |
| geo.position | 52.2658;4.5633 |

---

## 📋 Task List — Remaining SEO Improvements

### 🔴 High Priority (Do First)

- [ ] **Buy custom domain `jmkmulticlean.nl`**
  - Cost: ~€10/year via TransIP, Versio, or Hostnet
  - Configure in GitHub Pages: repo → Settings → Pages → Custom domain
  - Impact: Major ranking boost — search engines trust custom domains significantly more
  - Time: ~30 minutes

- [ ] **Create Google Business Profile**
  - Go to [business.google.com](https://business.google.com)
  - Add: name, address, phone, hours, categories
  - Upload photos of completed work
  - Impact: Appear in Google Maps + Local Pack (3-pack)
  - This is the #1 local SEO action
  - Time: ~45 minutes

- [ ] **Optimize images**
  - Convert hero-bg.png to WebP format (60-80% smaller)
  - Add `width` and `height` attributes to prevent layout shift
  - Add `loading="lazy"` to below-fold images
  - Tools: Squoosh.app or TinyPNG
  - Time: ~15 minutes

- [ ] **Submit sitemap to Google Search Console**
  - Go to [Google Search Console](https://search.google.com/search-console)
  - Add property: `jmkmulticlean.nl` (or custom domain)
  - Submit sitemap.xml
  - Request indexing for the homepage
  - Time: ~10 minutes

### 🟡 Medium Priority (Do Next)

- [ ] **Submit sitemap to Bing Webmaster Tools**
  - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
  - Time: ~10 minutes

- [ ] **Create city-specific landing pages**
  - `/schoonmaak-amsterdam.html`
  - `/schoonmaak-den-haag.html`
  - `/kantoorschoonmaak-rotterdam.html`
  - Each with localized content and area-specific testimonials
  - Time: ~2-3 hours

- [ ] **Start a blog / content section**
  - "Wat Kost een Opleveringsschoonmaak?" (pricing guide — high search volume)
  - "5 Tips voor een Schoon Kantoor" (office cleaning tips)
  - "Schoonmaak Checklist bij Verhuizing" (moving checklist)
  - "Waarom Professionele Glasbewassing?" (window cleaning value)
  - Time: ~3-4 hours for 3 articles

- [ ] **Collect real Google Reviews**
  - Ask satisfied customers to leave a Google Review
  - Share a direct review link after each completed service
  - Target: 10+ reviews within first 3 months

### 🟢 Low Priority (Future Improvements)

- [ ] **Add FAQ section + FAQ schema markup**
  - "Wat kost een opleveringsschoonmaak?"
  - "Zijn jullie verzekerd?"
  - "In welke gebieden werken jullie?"
  - Can earn FAQ rich snippets in search results

- [ ] **Add individual Review schema** for each testimonial

- [ ] **Create social media profiles**
  - Google Business, Facebook, Instagram, LinkedIn
  - Add `sameAs` links in JSON-LD schema

- [ ] **Preload critical resources**
  - `<link rel="preload" href="images/hero-bg.png" as="image">`
  - `<link rel="preload" href="styles.css" as="style">`

- [ ] **Minify CSS and JS** for production

---

## 📊 Priority Matrix

| # | Task | Effort | Impact | ROI |
|---|------|--------|--------|-----|
| 1 | Custom domain (.nl) | 30 min | 🔥🔥🔥 | **Highest** |
| 2 | Google Business Profile | 45 min | 🔥🔥🔥 | **Highest** |
| 3 | Image optimization | 15 min | 🔥🔥 | High |
| 4 | Submit sitemap to Google | 10 min | 🔥🔥 | High |
| 5 | Collect Google Reviews | Ongoing | 🔥🔥🔥 | **Highest** |
| 6 | City landing pages | 2-3 hrs | 🔥🔥🔥 | High |
| 7 | Blog content | 3-4 hrs | 🔥🔥 | Medium |
| 8 | FAQ section | 30 min | 🔥 | Medium |
| 9 | Social media | 1 hr | 🔥 | Low |

> **Quick win:** Items 1-4 can be done in under 2 hours and will dramatically increase visibility.
