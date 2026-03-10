// ============================================================
// SENTRAL DATASTRUKTUR — ALLE KLASSER
// Hjemmeskolen.no
// ============================================================

export interface KlasseData {
  id: number
  navn: string          // "1. klasse"
  slug: string          // "1-klasse"  ← URL-segment
  alder: string         // "6–7 år"
  ikon: string          // emoji
  farge: string         // hex
  beskrivelse: string
  seoTittel: string
  seoBeskrivelse: string
}

export const klasser: KlasseData[] = [
  {
    id: 1,
    navn: '1. klasse',
    slug: '1-klasse',
    alder: '6–7 år',
    ikon: '🌱',
    farge: '#84CC16',
    beskrivelse: 'Grunnleggende lesing, skriving, tall til 20 og engelske hilsener.',
    seoTittel: '1. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis oppgaver og quiz for 1. klasse (6–7 år). Lær bokstaver, tall til 20 og engelske ord. Basert på norsk skolepensum.',
  },
  {
    id: 2,
    navn: '2. klasse',
    slug: '2-klasse',
    alder: '7–8 år',
    ikon: '🌿',
    farge: '#22C55E',
    beskrivelse: 'Lesing av enkle tekster, addisjon og subtraksjon til 20, og engelsk ordforråd.',
    seoTittel: '2. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis oppgaver og quiz for 2. klasse (7–8 år). Øv på lesing, regnestykker og engelsk. Basert på norsk skolepensum.',
  },
  {
    id: 3,
    navn: '3. klasse',
    slug: '3-klasse',
    alder: '8–9 år',
    ikon: '🌻',
    farge: '#EAB308',
    beskrivelse: 'Gangetabellen, tekstforståelse, adjektiver og engelsk grammatikk.',
    seoTittel: '3. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis oppgaver for 3. klasse (8–9 år). Lær gangetabellen, norsk grammatikk og engelsk. Øv med quiz.',
  },
  {
    id: 4,
    navn: '4. klasse',
    slug: '4-klasse',
    alder: '9–10 år',
    ikon: '⭐',
    farge: '#F97316',
    beskrivelse: 'Store tall, brøk, setningsanalyse, verb og present simple på engelsk.',
    seoTittel: '4. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis læringsressurser for 4. klasse (9–10 år). Matematikk, norsk grammatikk og engelsk. Basert på Kunnskapsløftet 2020.',
  },
  {
    id: 5,
    navn: '5. klasse',
    slug: '5-klasse',
    alder: '10–11 år',
    ikon: '🚀',
    farge: '#6366F1',
    beskrivelse: 'Desimaltall, prosent, argumenterende skriving og engelsk grammatikk.',
    seoTittel: '5. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis oppgaver for 5. klasse (10–11 år). Desimaltall, prosent, norsk skriving og engelsk. Øv og lær med quiz.',
  },
  {
    id: 6,
    navn: '6. klasse',
    slug: '6-klasse',
    alder: '11–12 år',
    ikon: '🔭',
    farge: '#8B5CF6',
    beskrivelse: 'Algebra, brøk med ulik nevner, essay-skriving og avansert engelsk.',
    seoTittel: '6. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis læringsressurser for 6. klasse (11–12 år). Algebra, norsk essay og engelsk grammatikk. Basert på norsk pensum.',
  },
  {
    id: 7,
    navn: '7. klasse',
    slug: '7-klasse',
    alder: '12–13 år',
    ikon: '🏆',
    farge: '#EC4899',
    beskrivelse: 'Pythagoras, prosentvis endring, retorikk og akademisk engelsk.',
    seoTittel: '7. klasse – Matematikk, Norsk og Engelsk | Hjemmeskolen.no',
    seoBeskrivelse: 'Gratis oppgaver for 7. klasse (12–13 år). Pythagoras, norsk retorikk og avansert engelsk. Forbered deg til ungdomsskolen.',
  },
]

// Hjelpefunksjoner
export function finnKlasseEtterSlug(slug: string): KlasseData | undefined {
  return klasser.find((k) => k.slug === slug)
}

export function finnKlasseEtterId(id: number): KlasseData | undefined {
  return klasser.find((k) => k.id === id)
}

export function forrigeKlasse(slug: string): KlasseData | undefined {
  const idx = klasser.findIndex((k) => k.slug === slug)
  return idx > 0 ? klasser[idx - 1] : undefined
}

export function nesteKlasse(slug: string): KlasseData | undefined {
  const idx = klasser.findIndex((k) => k.slug === slug)
  return idx >= 0 && idx < klasser.length - 1 ? klasser[idx + 1] : undefined
}

export const ALLE_KLASSE_SLUGS = klasser.map((k) => k.slug)
