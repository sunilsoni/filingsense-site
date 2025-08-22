# FilingSense — Zero-build GitHub Pages Site

A professional marketing site for FilingSense, built with **HTML + Tailwind CDN** (no build tools).

## Structure
- `index.html` — Home (hero, services, CTA)
- `services/*` — Service details
- `pricing.html`, `about.html`, `resources.html`, `contact.html`
- `privacy.html`, `terms.html`, `404.html`
- `assets/*` — Logo, favicon, hero background
- `CNAME` — Sets canonical domain to `filingsense.com`
- `robots.txt`, `sitemap.xml`

## Quick edit
- Replace WhatsApp number in all pages (`919999999999`) and email (`hello@filingsense.com`).
- Replace Formspree endpoint in `contact.html`.

## Deploy on GitHub Pages
1. Create a new public repo (e.g., `filingsense-site`) on GitHub.
2. Upload these files (or push via git).
3. Go to **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / root
4. After it builds, enable **Enforce HTTPS**.

## Connect GoDaddy domain (filingsense.com)
1. In the repo, ensure `CNAME` file contains `filingsense.com`.
2. In GoDaddy DNS for `filingsense.com`:
   - Add/verify **A records** for the apex (no host, or @) to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add **CNAME** for `www` → `<your-username>.github.io`
3. Wait for DNS to propagate, then in **Settings → Pages**, toggle **Enforce HTTPS**.

## Redirect filingsense.in → filingsense.com (recommended)
- Use GoDaddy or Cloudflare to set a **301 redirect**:
  - `filingsense.in` → `https://filingsense.com/`
  - `www.filingsense.in` → `https://filingsense.com/`

## Local preview
Open `index.html` directly in your browser (no build step required).

---
Made with ❤️ and Tailwind CDN.
