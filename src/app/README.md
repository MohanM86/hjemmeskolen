# Hjemmeskolen.no

**Norges gratis læringsplattform for barn fra 1. til 7. klasse.**

Matematikk, norsk og engelsk basert på Kunnskapsløftet 2020.

---

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000)

## Bygg for produksjon

```bash
npm run build
npm start
```

## Deploy til Vercel

1. Push til GitHub
2. Importer repo i Vercel
3. Vercel bygger automatisk

---

## Prosjektstruktur

```
src/
├── app/
│   ├── layout.tsx              # Root layout med header/footer
│   ├── page.tsx                # Forsiden
│   ├── sitemap.ts              # Dynamisk sitemap
│   ├── robots.ts               # robots.txt
│   ├── for-foreldre/           # Side for foreldre
│   ├── klasse/
│   │   └── [klasseSlug]/       # Klasse-side (1-klasse … 7-klasse)
│   │       ├── page.tsx
│   │       └── [fagSlug]/      # Fag-side (matematikk/norsk/engelsk)
│   │           ├── page.tsx
│   │           └── [temaSlug]/ # Tema-side
│   │               └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── quiz/
│       └── Quiz.tsx            # Interaktiv quiz-komponent
│
├── data/
│   ├── klasser.ts              # Sentral datafil: alle 7 klasser
│   ├── fag.ts                  # Sentral datafil: matematikk, norsk, engelsk
│   ├── matematikk/
│   │   ├── pensum.ts           # Pensumkart klasse 1–7 (84 temaer)
│   │   └── klasse3-multiplikasjon.ts
│   ├── norsk/
│   │   ├── pensum.ts           # Pensumkart klasse 1–7 (70 temaer)
│   │   └── klasse1-bokstaver-am.ts
│   └── engelsk/
│       ├── pensum.ts           # Pensumkart klasse 1–7 (70 temaer)
│       └── klasse1-hilsener.ts
│
├── lib/
│   └── config.ts               # Sitekonfig, URL-hjelpere, fag- og klassekonfig
│
└── types/
    └── index.ts                # TypeScript-typer
```

## Legge til nytt innhold

1. Åpne `src/data/[fag]/`
2. Lag ny fil, f.eks. `klasse3-addisjon.ts`
3. Bruk `TemaInnhold`-typen fra `src/types/index.ts`
4. Registrer den i `TEMA_REGISTER` i `src/app/klasse/[klasseSlug]/[fagSlug]/[temaSlug]/page.tsx`

### Eksempel:

```typescript
import type { TemaInnhold } from '@/types'

export const addisjon3: TemaInnhold = {
  slug: 'addisjon-til-100',
  tittel: 'Addisjon til 100',
  ingress: 'Lær å legge sammen to-sifrede tall...',
  forklaring: '...',
  eksempler: ['23 + 45 = 68'],
  læringsmål: ['...'],
  nøkkelord: ['addisjon', 'plusse', '...'],
  oppgaver: [...],
  quiz: [...],
  relaterteTemaer: ['subtraksjon-til-100'],
  nesteTema: 'subtraksjon-til-100',
  metaTittel: 'Addisjon til 100 | Matematikk 3. klasse | Hjemmeskolen.no',
  metaBeskrivelse: '...',
}
```

## Fase 2 planer

- [ ] Naturfag, samfunnsfag, KRLE
- [ ] Adminpanel med CMS
- [ ] Brukerkontoer og fremgangssporing
- [ ] Lærerdashboard
- [ ] Offline-støtte (PWA)
- [ ] Flerspråklig støtte (nynorsk)

## Teknologi

- **Next.js 14** — App Router
- **TypeScript** — Fullstendig typet
- **Tailwind CSS** — Designsystem
- **Vercel** — Deploy
- **Google Fonts** — Nunito / Nunito Sans

## Pensum

Basert på Kunnskapsløftet 2020. Alt innhold er originalt og ikke kopiert fra skolebøker.

---

© 2024 Hjemmeskolen.no
