# Tiberius Digital — Website

Cinematic WebGL marketing site for Tiberius Digital, built with Next.js (App Router).

## Stack
- **Next.js 14** — App Router, statically prerendered
- **Three.js** — scroll-driven camera-rail 3D stage with custom GLSL (matcap metals, simplex-noise displacement, particles)
- **GSAP + ScrollTrigger** — scroll choreography, text masking, reveals
- Custom lerped smooth scroll (no runtime dependency)

## Development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Structure
```
app/            layout (SEO metadata, JSON-LD), page, global styles
components/     Stage, Loader, SiteHeader, Experience (client boot)
components/sections/  Hero … SiteFooter (server components)
lib/site-engine.js    animation + WebGL engine (initSite/destroy)
```

The page is fully server-rendered and indexable; `Experience` boots the
animation engine client-side after hydration. No-JS, reduced-motion and
WebGL-failure fallbacks keep the content readable in every case.
