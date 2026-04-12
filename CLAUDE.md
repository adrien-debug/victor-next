# Victor — Agent Rules

## Project
- **Stack:** Next.js 16 / React 19 / Tailwind CSS 4 / TypeScript 5
- **Port:** 3010 (ne jamais changer)
- **Deploy:** Vercel

## Structure
```
src/
├── app/
│   ├── page.tsx         # Composition de la page (imports composants)
│   ├── layout.tsx       # Layout global + fonts + metadata
│   └── globals.css      # Design tokens + styles globaux
├── components/
│   ├── Navigation.tsx   # Nav + hamburger mobile
│   ├── Hero.tsx
│   ├── SectionEditorial.tsx
│   ├── SectionEnvironments.tsx
│   ├── SectionDefinition.tsx
│   ├── SectionArchitecture.tsx
│   ├── SectionFlow.tsx
│   ├── SectionManifesto.tsx
│   ├── SectionContact.tsx
│   ├── Footer.tsx
│   ├── VisionCard.tsx
│   └── ProgressBar.tsx
```

## Conventions
- CSS 100% custom via globals.css (pas de classes Tailwind utility dans JSX)
- Design tokens en CSS custom properties
- Mobile-first responsive (768px / 1024px / 1920px)
- Composants extraits dans src/components/
- Scroll reveal via IntersectionObserver dans page.tsx
