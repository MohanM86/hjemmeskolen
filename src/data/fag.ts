// ============================================================
// SENTRAL DATASTRUKTUR — FAG
// Hjemmeskolen.no
// ============================================================

export interface FagData {
  navn: string          // "Matematikk"
  slug: string          // "matematikk"
  ikon: string          // emoji
  farge: string         // hex — primærfarge
  fargeLight: string    // hex — lys bakgrunn
  kortBeskrivelse: string
  langBeskrivelse: string
  bgClass: string       // Tailwind-klasse
  textClass: string
  borderClass: string
  badgeClass: string
}

export const fag: FagData[] = [
  {
    navn: 'Matematikk',
    slug: 'matematikk',
    ikon: '🔢',
    farge: '#6366F1',
    fargeLight: '#EEF4FF',
    kortBeskrivelse: 'Tall, regning og geometri',
    langBeskrivelse:
      'Matematikk på Hjemmeskolen.no dekker alt fra enkle tall og addisjon i 1. klasse til algebra, Pythagoras og statistikk i 7. klasse. Hvert tema har forklaring, oppgaver og interaktiv quiz.',
    bgClass: 'bg-indigo-50',
    textClass: 'text-indigo-700',
    borderClass: 'border-indigo-200',
    badgeClass: 'bg-indigo-100 text-indigo-700',
  },
  {
    navn: 'Norsk',
    slug: 'norsk',
    ikon: '📖',
    farge: '#F97316',
    fargeLight: '#FFF7ED',
    kortBeskrivelse: 'Lesing, skriving og grammatikk',
    langBeskrivelse:
      'Norsk på Hjemmeskolen.no dekker bokstaver og lyder i 1. klasse til avansert grammatikk, retorikk og nynorsk i 7. klasse. Originalt innhold basert på Kunnskapsløftet 2020.',
    bgClass: 'bg-orange-50',
    textClass: 'text-orange-700',
    borderClass: 'border-orange-200',
    badgeClass: 'bg-orange-100 text-orange-700',
  },
  {
    navn: 'Engelsk',
    slug: 'engelsk',
    ikon: '🌍',
    farge: '#22C55E',
    fargeLight: '#F0FDF4',
    kortBeskrivelse: 'Ord, setninger og grammatikk',
    langBeskrivelse:
      'Engelsk på Hjemmeskolen.no starter med hilsener og farger i 1. klasse og bygger til avansert grammatikk, essay og akademisk engelsk i 7. klasse.',
    bgClass: 'bg-green-50',
    textClass: 'text-green-700',
    borderClass: 'border-green-200',
    badgeClass: 'bg-green-100 text-green-700',
  },
]

// Hjelpefunksjoner
export function finnFagEtterSlug(slug: string): FagData | undefined {
  return fag.find((f) => f.slug === slug)
}

export const ALLE_FAG_SLUGS = fag.map((f) => f.slug)
