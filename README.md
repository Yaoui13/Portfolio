# Portfolio — Yacine Aoui

Portfolio personnel développé avec **Next.js** (App Router) et **Tailwind CSS**, basé sur le template [Magic UI Portfolio](https://github.com/dillionverma/portfolio).

🔗 En ligne : https://yaoui13.github.io/Portfolio/

## Stack
- Next.js 16 (export statique)
- React 19 / TypeScript
- Tailwind CSS, Magic UI, Radix UI

## Développement

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Le contenu (expériences, formation, projets, compétences) est centralisé dans `src/data/resume.tsx`.

## Build & déploiement

Le site est exporté en statique et publié sur **GitHub Pages** via GitHub Actions
(`.github/workflows/deploy.yml`) à chaque push sur `main`.

```bash
NEXT_PUBLIC_BASE_PATH=/Portfolio pnpm build   # génère ./out
```

Basé sur le template de [dillionverma](https://github.com/dillionverma/portfolio) — [licence MIT](./LICENSE).
