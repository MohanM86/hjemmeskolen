import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  KLASSE_SLUGS,
  type KlasseSlug,
  slugTilKlasse,
  klasseConfig,
  fagConfig,
  FAG,
  byggFagUrl,
  byggKlasseUrl,
  byggTemaUrl,
} from '@/lib/config'
import { klasser, forrigeKlasse, nesteKlasse } from '@/data/klasser'
import { fag as fagListe } from '@/data/fag'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import type { Klasse } from '@/types'

interface Props {
  params: { klasseSlug: string }
}

// ── STATIC PARAMS ─────────────────────────────────────────
export async function generateStaticParams() {
  return KLASSE_SLUGS.map((slug) => ({ klasseSlug: slug }))
}
// Generer: 1-klasse, 2-klasse, 3-klasse, 4-klasse, 5-klasse, 6-klasse, 7-klasse

// ── METADATA ──────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const klasseData = klasser.find((k) => k.slug === params.klasseSlug)
  if (!klasseData) return {}

  return {
    title: klasseData.seoTittel,
    description: klasseData.seoBeskrivelse,
    alternates: {
      canonical: `https://hjemmeskolen.no/klasse/${klasseData.slug}`,
    },
    openGraph: {
      title: klasseData.seoTittel,
      description: klasseData.seoBeskrivelse,
      type: 'website',
    },
  }
}

// ── HJELPEFUNKSJON — hent temaer ──────────────────────────
function getTemaer(klasseNr: Klasse, fagSlug: string) {
  const kilde =
    fagSlug === 'matematikk'
      ? matematikkPensum
      : fagSlug === 'norsk'
      ? norskPensum
      : engelskPensum
  return kilde.find((p) => p.klasse === klasseNr)?.temaer ?? []
}

// ── PAGE ──────────────────────────────────────────────────
export default function KlasseSide({ params }: Props) {
  const { klasseSlug } = params

  // Valider slug
  if (!KLASSE_SLUGS.includes(klasseSlug as KlasseSlug)) notFound()

  const klasseData = klasser.find((k) => k.slug === klasseSlug)!
  const klasseNr = slugTilKlasse[klasseSlug as KlasseSlug]
  const cfg = klasseConfig[klasseNr]

  const prevKlasse = forrigeKlasse(klasseSlug)
  const nextKlasse = nesteKlasse(klasseSlug)

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="py-12 sm:py-16"
        style={{
          background: `linear-gradient(135deg, ${cfg.farge}18 0%, #ffffff 60%)`,
        }}
      >
        <div className="section-container">
          {/* Brødsmule */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Hjem
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold">{klasseData.navn}</span>
          </nav>

          {/* Tittel-rad */}
          <div className="flex items-center gap-5 mb-8">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg flex-shrink-0"
              style={{ backgroundColor: cfg.farge + '22' }}
            >
              {cfg.ikon}
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900 mb-1">
                {klasseData.navn}
              </h1>
              <p className="text-gray-500 text-lg">
                {cfg.alder} · {klasseData.beskrivelse}
              </p>
            </div>
          </div>

          {/* Klasse-navigasjon */}
          <div className="flex items-center gap-3 flex-wrap">
            {prevKlasse && (
              <Link
                href={`/klasse/${prevKlasse.slug}`}
                className="btn-secondary py-2 px-4 text-sm"
              >
                ← {prevKlasse.navn}
              </Link>
            )}

            <div className="flex gap-2 flex-wrap">
              {klasser.map((k) => (
                <Link
                  key={k.slug}
                  href={`/klasse/${k.slug}`}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                    k.slug === klasseSlug
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  title={k.navn}
                >
                  {k.id}
                </Link>
              ))}
            </div>

            {nextKlasse && (
              <Link
                href={`/klasse/${nextKlasse.slug}`}
                className="btn-secondary py-2 px-4 text-sm"
              >
                {nextKlasse.navn} →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── FAG-SEKSJON ── */}
      <section className="py-12">
        <div className="section-container">
          {/* Fag-kort øverst */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {fagListe.map((f) => {
              const temaer = getTemaer(klasseNr, f.slug)
              return (
                <Link
                  key={f.slug}
                  href={byggFagUrl(klasseSlug as KlasseSlug, f.slug as any)}
                  className="card p-6 group hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: f.fargeLight }}
                  >
                    {f.ikon}
                  </div>
                  <h2 className="font-display font-800 text-xl text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {f.navn}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">{f.kortBeskrivelse}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: f.fargeLight, color: f.farge }}
                    >
                      {temaer.length} temaer
                    </span>
                    <span
                      className="text-sm font-bold transition-colors"
                      style={{ color: f.farge }}
                    >
                      Se alle →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Temaer per fag */}
          <div className="space-y-16">
            {fagListe.map((f) => {
              const temaer = getTemaer(klasseNr, f.slug)

              return (
                <div key={f.slug}>
                  {/* Fag-heading */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                        style={{ backgroundColor: f.fargeLight }}
                      >
                        {f.ikon}
                      </div>
                      <div>
                        <h2 className="font-display font-800 text-xl text-gray-900">
                          {f.navn}
                        </h2>
                        <p className="text-sm text-gray-400">{temaer.length} temaer tilgjengelig</p>
                      </div>
                    </div>
                    <Link
                      href={byggFagUrl(klasseSlug as KlasseSlug, f.slug as any)}
                      className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: f.farge }}
                    >
                      Se alle temaer →
                    </Link>
                  </div>

                  {/* Tema-grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {temaer.slice(0, 8).map((tema, idx) => (
                      <Link
                        key={tema.slug}
                        href={byggTemaUrl(klasseSlug as KlasseSlug, f.slug as any, tema.slug)}
                        className="card p-4 group hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: f.farge }}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <h3 className="font-display font-700 text-sm text-gray-900 leading-snug group-hover:text-brand-600 transition-colors">
                              {tema.tittel}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                              {tema.beskrivelse}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}

                    {temaer.length > 8 && (
                      <Link
                        href={byggFagUrl(klasseSlug as KlasseSlug, f.slug as any)}
                        className="card p-4 flex items-center justify-center text-center hover:scale-[1.02] transition-all cursor-pointer border-dashed border-2"
                        style={{ borderColor: f.farge + '60', color: f.farge }}
                      >
                        <div>
                          <div className="text-xl font-display font-800">+{temaer.length - 8}</div>
                          <div className="text-xs font-semibold mt-0.5">Vis alle</div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: `${klasseData.navn} – Hjemmeskolen.no`,
            description: klasseData.seoBeskrivelse,
            provider: { '@type': 'Organization', name: 'Hjemmeskolen.no', url: 'https://hjemmeskolen.no' },
            educationalLevel: klasseData.navn,
            inLanguage: 'nb',
            url: `https://hjemmeskolen.no/klasse/${klasseData.slug}`,
          }),
        }}
      />
    </div>
  )
}
