import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  KLASSE_SLUGS,
  type KlasseSlug,
  slugTilKlasse,
  klasseConfig,
  fagConfig,
  byggFagUrl,
  byggTemaUrl,
  byggKlasseUrl,
} from '@/lib/config'
import { klasser } from '@/data/klasser'
import { fag as fagListe, finnFagEtterSlug } from '@/data/fag'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import type { Klasse, Fag } from '@/types'

interface Props {
  params: { klasseSlug: string; fagSlug: string }
}

const GYLDIGE_FAG = ['matematikk', 'norsk', 'engelsk']

// ── STATIC PARAMS ─────────────────────────────────────────
// Genererer alle 21 kombinasjoner: 7 klasser × 3 fag
export async function generateStaticParams() {
  const params = []
  for (const klasseSlug of KLASSE_SLUGS) {
    for (const fagSlug of GYLDIGE_FAG) {
      params.push({ klasseSlug, fagSlug })
    }
  }
  return params
}
/*
  Eksempel på genererte paths:
  /klasse/1-klasse/matematikk
  /klasse/1-klasse/norsk
  /klasse/1-klasse/engelsk
  /klasse/2-klasse/matematikk
  … (21 totalt)
*/

// ── METADATA ──────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { klasseSlug, fagSlug } = params
  const klasseData = klasser.find((k) => k.slug === klasseSlug)
  const fagData = finnFagEtterSlug(fagSlug)

  if (!klasseData || !fagData) return {}

  const klasseNr = slugTilKlasse[klasseSlug as KlasseSlug]
  const temaer = getTemaer(klasseNr, fagSlug)

  return {
    title: `${fagData.navn} – ${klasseData.navn} | Hjemmeskolen.no`,
    description: `Gratis ${fagData.navn.toLowerCase()} for ${klasseData.navn} (${klasseData.alder}). ${temaer.length} temaer med forklaringer, oppgaver og quiz. Basert på norsk skolepensum.`,
    alternates: {
      canonical: `https://hjemmeskolen.no/klasse/${klasseSlug}/${fagSlug}`,
    },
    openGraph: {
      title: `${fagData.navn} – ${klasseData.navn} | Hjemmeskolen.no`,
      description: `${temaer.length} temaer innen ${fagData.navn.toLowerCase()} for ${klasseData.navn}.`,
      type: 'website',
    },
  }
}

// ── HJELPEFUNKSJON ─────────────────────────────────────────
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
export default function FagSide({ params }: Props) {
  const { klasseSlug, fagSlug } = params

  if (!KLASSE_SLUGS.includes(klasseSlug as KlasseSlug)) notFound()
  if (!GYLDIGE_FAG.includes(fagSlug)) notFound()

  const klasseNr = slugTilKlasse[klasseSlug as KlasseSlug]
  const cfg = klasseConfig[klasseNr]
  const fagData = finnFagEtterSlug(fagSlug)!
  const klasseData = klasser.find((k) => k.slug === klasseSlug)!
  const temaer = getTemaer(klasseNr, fagSlug)

  return (
    <div>
      {/* ── HEADER ── */}
      <section
        className="py-12 sm:py-16 border-b border-gray-100"
        style={{
          background: `linear-gradient(135deg, ${fagData.fargeLight} 0%, #ffffff 70%)`,
        }}
      >
        <div className="section-container">
          {/* Brødsmule */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-900 transition-colors">Hjem</Link>
            <span className="text-gray-300">›</span>
            <Link href={`/klasse/${klasseSlug}`} className="hover:text-gray-900 transition-colors">
              {klasseData.navn}
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold">{fagData.navn}</span>
          </nav>

          {/* Tittel */}
          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
              style={{ backgroundColor: fagData.fargeLight }}
            >
              {fagData.ikon}
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900">
                {fagData.navn} — {klasseData.navn}
              </h1>
              <p className="text-gray-500 mt-1">
                {temaer.length} temaer · Gratis oppgaver og quiz · {klasseData.alder}
              </p>
            </div>
          </div>

          {/* Fag-switcher for denne klassen */}
          <div className="flex items-center gap-2 flex-wrap">
            {fagListe.map((f) => (
              <Link
                key={f.slug}
                href={`/klasse/${klasseSlug}/${f.slug}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  f.slug === fagSlug
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
                style={
                  f.slug === fagSlug
                    ? { backgroundColor: fagData.farge }
                    : {}
                }
              >
                <span>{f.ikon}</span>
                <span>{f.navn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEMAER ── */}
      <section className="py-12">
        <div className="section-container">
          {temaer.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🚧</div>
              <p className="font-semibold text-lg">Innhold under utarbeidelse</p>
              <p className="text-sm mt-2">Sjekk tilbake snart — vi jobber med det!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {temaer.map((tema, index) => (
                <Link
                  key={tema.slug}
                  href={byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, tema.slug)}
                  className="card p-6 group hover:scale-[1.02] transition-all cursor-pointer flex flex-col"
                >
                  {/* Nummer + ikon */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: fagData.fargeLight }}
                    >
                      {fagData.ikon}
                    </div>
                    <span className="text-xs font-bold text-gray-200">#{index + 1}</span>
                  </div>

                  {/* Tittel */}
                  <h2 className="font-display font-800 text-lg text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {tema.tittel}
                  </h2>

                  {/* Beskrivelse */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {tema.beskrivelse}
                  </p>

                  {/* Kompetansemål-chips */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {tema.kompetansemål.slice(0, 2).map((mål, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: fagData.fargeLight,
                            color: fagData.farge,
                          }}
                        >
                          {mål.length > 30 ? mål.slice(0, 30) + '…' : mål}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-end mt-3">
                      <span
                        className="text-sm font-bold"
                        style={{ color: fagData.farge }}
                      >
                        Gå til tema →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Schema.org ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `${fagData.navn} – ${klasseData.navn}`,
            description: `${temaer.length} temaer i ${fagData.navn.toLowerCase()} for ${klasseData.navn}`,
            numberOfItems: temaer.length,
            itemListElement: temaer.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: t.tittel,
              url: `https://hjemmeskolen.no/klasse/${klasseSlug}/${fagSlug}/${t.slug}`,
            })),
          }),
        }}
      />
    </div>
  )
}
