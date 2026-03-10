// ============================================================
// CORE TYPES FOR Hjemmeskolen.no
// ============================================================

export type Klasse = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export type Fag = 'matematikk' | 'norsk' | 'engelsk'

export type Vanskelighetsgrad = 'lett' | 'middels' | 'vanskelig'

// ---- QUIZ ----

export interface QuizSporsmal {
  id: string
  sporsmal: string
  alternativer: string[]
  riktigSvar: number // index
  forklaring?: string
}

// ---- OPPGAVE ----

export interface Oppgave {
  id: string
  type: 'flervalg' | 'tekst' | 'tall' | 'dra-og-slipp'
  sporsmal: string
  svar: string | number
  hint?: string
  vanskelighetsgrad: Vanskelighetsgrad
}

// ---- TEMA ----

export interface TemaInnhold {
  slug: string
  tittel: string
  ingress: string // kort for barn
  forklaring: string // litt lenger
  eksempler: string[]
  oppgaver: Oppgave[]
  quiz: QuizSporsmal[]
  relaterteTemaer: string[] // slugs
  nesteTema?: string // slug
  forrigeTema?: string // slug
  læringsmål: string[]
  nøkkelord: string[]
  // SEO
  metaTittel: string
  metaBeskrivelse: string
  ogBeskrivelse?: string
}

// ---- FAG TEMA OVERSIKT ----

export interface TemaOversikt {
  slug: string
  tittel: string
  ikon: string // emoji
  beskrivelse: string
  antallOppgaver: number
  klasse: Klasse
  fag: Fag
}

// ---- FAG ----

export interface FagData {
  slug: Fag
  tittel: string
  ikon: string
  farge: string
  fargeLight: string
  beskrivelse: string
  temaer: TemaOversikt[]
}

// ---- KLASSE ----

export interface KlasseData {
  klasse: Klasse
  tittel: string
  aldersgrupppe: string
  ikon: string
  beskrivelse: string
  fag: FagData[]
}

// ---- PENSUM MAP ----

export interface PensumTema {
  slug: string
  tittel: string
  klasse: Klasse
  fag: Fag
  beskrivelse: string
  kompetansemål: string[]
}

export interface PensumFag {
  fag: Fag
  klasse: Klasse
  temaer: PensumTema[]
}

// ---- QUIZ SESSION ----

export interface QuizResultat {
  temaSlug: string
  antallRiktig: number
  antallTotalt: number
  tidBrukt?: number // sekunder
  dato: string
}

// ---- SITE CONFIG ----

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
  }
}
