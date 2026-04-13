# Victor — Companion Intelligence

Not an assistant. Not a tool. A living extension of your intent.

## Quick Start

```bash
npm install
npm run dev
```

Serveur local : **http://localhost:3310**

## Stack

- **Next.js 16.2.3** (Turbopack)
- **React 19.2.4**
- **Tailwind CSS 4**
- **TypeScript 5**

## Scripts

```bash
npm run dev      # Serveur de développement (port 3310)
npm run build    # Build de production
npm run start    # Serveur de production (port 3310)
npm run lint     # Linter ESLint
```

## Déploiement

Déployé sur **Vercel** :
- Repo GitHub : `https://github.com/adrien-debug/victor-next.git`
- Project ID : `prj_ZjF4gFC6cvHoTNAiawG66KvxLOqT`

## Structure

```
victor-next/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Page principale (composition)
│   │   ├── layout.tsx         # Layout global + fonts + metadata
│   │   ├── globals.css        # Design tokens + styles globaux
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts   # API endpoint formulaire contact
│   └── components/
│       ├── Navigation.tsx     # Nav fixe + hamburger mobile
│       ├── Hero.tsx           # Section héro avec image de fond
│       ├── SectionEditorial.tsx
│       ├── SectionEnvironments.tsx
│       ├── SectionDefinition.tsx
│       ├── SectionArchitecture.tsx
│       ├── SectionFlow.tsx    # 4 étapes opérationnelles
│       ├── SectionManifesto.tsx
│       ├── SectionContact.tsx # Formulaire de contact (nom, email, org, message)
│       ├── Footer.tsx
│       ├── VisionCard.tsx     # Carte réutilisable avec image
│       └── ProgressBar.tsx    # Barre de progression scroll
├── public/
│   └── victor-assets/         # Images et assets
├── next.config.ts
└── package.json
```

## Configuration

Port fixe : **3310** (ne jamais changer)

## Design System

### Breakpoints (Mobile-First)
- **Mobile:** `< 768px` (défaut)
- **Tablet:** `768px - 1023px`
- **Desktop:** `1024px - 1919px`
- **Large:** `≥ 1920px`

### Color Tokens
```css
--bg: #050505
--accent: #5eead4
--text: #ffffff
--text-dim: #94a3b8
--text-muted: #64748b
```

### Spacing Tokens
```css
--spacing-section: 80px → 100px (large)
--spacing-horizontal: 24px → 40px → 60px
```

### Container Tokens
```css
--container-xl: 1400px
--container-lg: 1200px
--container-md: 1000px
```

## API

### POST /api/contact

Reçoit les soumissions du formulaire de contact.

**Body (JSON) :**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "organisation": "string (optional)",
  "message": "string (required, max 5000 chars)"
}
```

**Réponses :**
- `200` : `{ "success": true }`
- `400` : validation error
- `429` : rate limit (1 soumission / 60s par IP)

**TODO** : Connecter un service email (Resend, SendGrid) pour recevoir les leads. Le code contient un exemple commenté dans `src/app/api/contact/route.ts`.

## Notes Techniques

- **Turbopack** activé par défaut
- **100% CSS custom** (0 classes Tailwind utility dans JSX)
- **Mobile-first responsive** avec 4 breakpoints
- **Menu hamburger** sur mobile avec slide-in animé
- **Performance** : scroll throttling avec requestAnimationFrame
- **Accessibilité** : focus-visible, skip-to-content, ARIA labels, contrastes WCAG
- **Composants modulaires** : chaque section est un composant isolé
- **Formulaire de contact** : validation client + serveur, rate limiting, états loading/success/error
- **Email** : intégration Resend (nécessite `RESEND_API_KEY` en env, voir `.env.example`)
- **Analytics** : Vercel Analytics activé
- **OpenGraph** : image + metadata pour le partage social
