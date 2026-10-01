# P3 Construction Group & Real Estate - Deployment Guide

This documentation outlines the production build, prerendering pipeline, environment configuration, hosting configuration (Vercel), custom domain setup with SSL/HTTPS, and post-deployment validation.

---

## 1. Environment & Build Specifications

- **Node.js Version**: `v20.x` or higher (verified on Node `v22` / `v25`)
- **Package Manager**: `npm`
- **Output Directory**: `dist`
- **Build Command**:
  ```bash
  npm run build
  ```
- **What `npm run build` executes under the hood**:
  1. `node scripts/optimize-images.cjs` — Converts hero to high-perf WebP (<200KB), ensures OG social image is 1200x630 (<100KB), optimizes apple-touch-icon and generates favicons.
  2. `vite build` — Compiles and minifies TypeScript/React bundle and CSS.
  3. `node scripts/prerender.cjs` — Generates static HTML files for every route (`/`, `/services`, `/services/cost-estimation`, `/services/structural-engineering`, `/services/turnkey-construction`, `/services/geotechnical-investigation`, `/properties`, `/projects`, `/contact`, and `404.html`) with prerendered `<title>`, `<meta name="description">`, canonical `<link>`, Open Graph, Twitter cards, and Schema.org JSON-LD directly in the raw HTML source. Also generates clean `sitemap.xml` and `robots.txt`.

---

## 2. Environment Variables

Configure this environment variable in your hosting dashboard (e.g., Vercel Project Settings > Environment Variables):

| Variable Name | Required | Default Value | Description |
| :--- | :---: | :--- | :--- |
| `SITE_URL` | **Yes** | `https://REPLACE-WITH-DOMAIN.com` | Production canonical base domain (e.g. `https://p3construction-et.com` or `https://p3-construction-and-real-estate.vercel.app`). Do not include a trailing slash. |

> **Note**: If `SITE_URL` is omitted, the build defaults to `https://REPLACE-WITH-DOMAIN.com`. Setting `SITE_URL` dynamically injects the live domain into all canonical tags, Open Graph `og:url` / `og:image`, Twitter tags, Schema.org IDs, and `sitemap.xml` entries.

---

## 3. Hosting Setup (Vercel)

### Project Configuration
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Clean URLs & Native 404 Routing
The site uses multi-page static prerendering. In `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true
}
```
- Direct visits to `/services`, `/services/cost-estimation`, `/properties`, etc. serve their dedicated static HTML files directly.
- Unknown URLs return the prerendered `dist/404.html` with real HTTP status 404 (and `<meta name="robots" content="noindex, nofollow">`).

---

## 4. Connecting a Custom Domain with HTTPS

1. Navigate to **Vercel Project Dashboard** > **Settings** > **Domains**.
2. Add your apex domain (e.g. `p3construction-et.com`) and `www` subdomain (`www.p3construction-et.com`).
3. Set your DNS records in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **A Record**: `@` pointing to `76.76.21.21`
   - **CNAME Record**: `www` pointing to `cname.vercel-dns.com`
4. Vercel automatically provisions and auto-renews a free Let's Encrypt SSL certificate for HTTPS.
5. In Vercel Project Settings > Environment Variables, add:
   - `SITE_URL` = `https://your-custom-domain.com`
6. Trigger a redeploy to generate the static HTML files with your custom domain in the canonicals and sitemap.

---

## 5. Business Data Verification Before Launch

Open [src/config/business.ts](file:///d:/tp3%20_-addis-ababa-construction-advisory%20(1)/src/config/business.ts):
- Every value marked with `// TODO: VERIFY WITH CLIENT` (official phone numbers, emails, physical HQ coordinates, MoWUD license number, and square-meter pricing) should be reviewed and confirmed with the client.
- Modifying `src/config/business.ts` immediately updates all pages, contact drawers, footers, and Schema.org structured data.

---

## 6. Post-Deployment SEO & Quality Checklist

Perform these 4 essential checks immediately after pushing live:

### 1. View-Source Test on 3 Pages
Right-click and select **"View Page Source"** (or `Ctrl+U`) on:
- Homepage (`/`)
- Cost Estimation (`/services/cost-estimation`)
- Contact (`/contact`)

**Check**:
- Ensure `<title>` and `<meta name="description">` are present in raw HTML (not injected by JS).
- Ensure `<link rel="canonical">` matches your live domain.
- Ensure `<script type="application/ld+json">` contains the complete `Service` or `LocalBusiness` schema.

### 2. Google Rich Results Test
1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter your live homepage and service URLs.
3. Confirm that `LocalBusiness`, `GeneralContractor`, and `Service` structured data are recognized without syntax errors.

### 3. Google Search Console & Sitemap Submission
1. In [Google Search Console](https://search.google.com/search-console), verify domain ownership (DNS TXT record).
2. Under **Sitemaps**, submit:
   ```text
   https://your-custom-domain.com/sitemap.xml
   ```
3. Verify that all 9 indexable routes are detected.

### 4. Google PageSpeed Insights & Core Web Vitals
1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on desktop and mobile.
2. Confirm:
   - **LCP (Largest Contentful Paint)**: Hero image `<link rel="preload" href="/hero-bg.webp">` loads in WebP format under 100KB.
   - **Font Display**: Google Fonts load with `display=swap`.
   - **SEO Score**: 100/100.
