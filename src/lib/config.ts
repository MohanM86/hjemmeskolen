import type { Klasse, Fag, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Hjemmeskolen.no',
  description: 'Gratis læring for norske barn fra 1. til 7. klasse. Matematikk, norsk og engelsk tilpasset Kunnskapsløftet 2020.',
  url: 'https://hjemmeskolen.no',
  ogImage: 'https://hjemmeskolen.no/og-image.png',
  links: {},
}

// ── KLASSE KONFIG ──────────────────────────────────────────

/** Enkelt-char nøkler — beholdes for pensum-data-oppslag */
export const KLASSER: Klasse[] = ['1', '2', '3', '4', '5', '6', '7']

/** SEO-vennlige URL-slugs: "1-klasse", "2-klasse", … */
export const KLASSE_SLUGS = [
  '1-klasse', '2-klasse', '3-klasse', '4-klasse',
  '5-klasse', '6-klasse', '7-klasse',
] as const
export type KlasseSlug = typeof KLASSE_SLUGS[number]

/** Map fra URL-slug → enkelt Klasse-nøkkel */
export const slugTilKlasse: Record<KlasseSlug, Klasse> = {
  '1-klasse': '1', '2-klasse': '2', '3-klasse': '3', '4-klasse': '4',
  '5-klasse': '5', '6-klasse': '6', '7-klasse': '7',
}

/** Map fra enkelt Klasse-nøkkel → URL-slug */
export const klasseToSlug: Record<Klasse, KlasseSlug> = {
  '1': '1-klasse', '2': '2-klasse', '3': '3-klasse', '4': '4-klasse',
  '5': '5-klasse', '6': '6-klasse', '7': '7-klasse',
}

export const FAG: Fag[] = ['matematikk', 'norsk', 'engelsk']

// ── FAG KONFIG ─────────────────────────────────────────────

export const fagConfig = {
  matematikk: {
    tittel: 'Matematikk',
    ikon: '🔢',
    farge: '#6366F1',
    fargeLight: '#EEF4FF',
    fargeHover: '#4338CA',
    bgClass: 'bg-indigo-50',
    textClass: 'text-indigo-700',
    borderClass: 'border-indigo-200',
    badgeClass: 'bg-indigo-100 text-indigo-700',
    kortBeskrivelse: 'Tall, regning og geometri',
  },
  norsk: {
    tittel: 'Norsk',
    ikon: '📖',
    farge: '#F97316',
    fargeLight: '#FFF7ED',
    fargeHover: '#C2410C',
    bgClass: 'bg-orange-50',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-200',
    badgeClass: 'bg-orange-100 text-orange-700',
    kortBeskrivelse: 'Lesing, skriving og grammatikk',
  },
  engelsk: {
    tittel: 'Engelsk',
    ikon: '🌍',
    farge: '#22C55E',
    fargeLight: '#F0FDF4',
    fargeHover: '#15803D',
    bgClass: 'bg-green-50',
    textClass: 'text-green-700',
    borderClass: 'border-green-200',
    badgeClass: 'bg-green-100 text-green-700',
    kortBeskrivelse: 'Ord, setninger og kommunikasjon',
  },
} as const

export const klasseConfig: Record<Klasse, {
  label: string
  slug: KlasseSlug
  alder: string
  ikon: string
  farge: string
  beskrivelse: string
}> = {
  '1': { label: '1. klasse', slug: '1-klasse', alder: '6–7 år', ikon: '🌱', farge: '#84CC16', beskrivelse: 'Grunnleggende lesing, skriving og tall til 20.' },
  '2': { label: '2. klasse', slug: '2-klasse', alder: '7–8 år', ikon: '🌿', farge: '#22C55E', beskrivelse: 'Lesing av tekster, addisjon og subtraksjon til 20.' },
  '3': { label: '3. klasse', slug: '3-klasse', alder: '8–9 år', ikon: '🌻', farge: '#EAB308', beskrivelse: 'Gangetabellen, adjektiver og engelsk grammatikk.' },
  '4': { label: '4. klasse', slug: '4-klasse', alder: '9–10 år', ikon: '⭐', farge: '#F97316', beskrivelse: 'Store tall, brøk, setningsanalyse og present simple.' },
  '5': { label: '5. klasse', slug: '5-klasse', alder: '10–11 år', ikon: '🚀', farge: '#6366F1', beskrivelse: 'Desimaltall, prosent, argumenterende skriving.' },
  '6': { label: '6. klasse', slug: '6-klasse', alder: '11–12 år', ikon: '🔭', farge: '#8B5CF6', beskrivelse: 'Algebra, brøk med ulik nevner og essay-skriving.' },
  '7': { label: '7. klasse', slug: '7-klasse', alder: '12–13 år', ikon: '🏆', farge: '#EC4899', beskrivelse: 'Pythagoras, prosentvis endring og akademisk engelsk.' },
}

// ── URL HJELPERE ───────────────────────────────────────────

/** /klasse/3-klasse */
export function byggKlasseUrl(klasseSlug: KlasseSlug): string {
  return `/klasse/${klasseSlug}`
}

/** /klasse/3-klasse/matematikk */
export function byggFagUrl(klasseSlug: KlasseSlug, fagSlug: Fag): string {
  return `/klasse/${klasseSlug}/${fagSlug}`
}

/** /klasse/3-klasse/matematikk/multiplikasjon */
export function byggTemaUrl(klasseSlug: KlasseSlug, fagSlug: Fag, temaSlug: string): string {
  return `/klasse/${klasseSlug}/${fagSlug}/${temaSlug}`
}

/** Konverter gammel Klasse-char til ny slug-URL */
export function klasseNrTilUrl(klasse: Klasse): string {
  return `/klasse/${klasseToSlug[klasse]}`
}

// ── SEO HJELPERE ───────────────────────────────────────────

export function lagMetaTittel(tittel: string, klasse?: Klasse, fag?: Fag): string {
  const deler = [tittel]
  if (fag) deler.push(fagConfig[fag].tittel)
  if (klasse) deler.push(`${klasse}. klasse`)
  deler.push('Hjemmeskolen.no')
  return deler.join(' | ')
}

export function lagMetaBeskrivelse(ingress: string, klasse?: Klasse, fag?: Fag): string {
  const suffix =
    klasse && fag
      ? ` Gratis ${fagConfig[fag].tittel.toLowerCase()} for ${klasseConfig[klasse].label}. Øv og lær med oppgaver og quiz.`
      : ' Gratis læringsplattform for norske barn.'
  return ingress.slice(0, 130) + suffix
}

export function formaterKlasse(klasse: Klasse): string {
  return `${klasse}. klasse`
}
