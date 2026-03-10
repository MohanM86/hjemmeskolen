import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KLASSER, klasseConfig, fagConfig, byggFagUrl, lagMetaTittel, lagMetaBeskrivelse } from '@/lib/config'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import type { Klasse } from '@/types'

interface Props {
  params: { klasse: string }
}

export async function generateStaticParams() {
  return KLASSER.map((k) => ({ klasse: k }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const klasse = params.klasse as Klasse
  if (!KLASSER.includes(klasse)) return {}

  const cfg = klasseConfig[klasse]
  return {
    title: lagMetaTittel(`${cfg.label} – Matematikk, Norsk og Engelsk`),
    description: lagMetaBeskrivelse(
      `Gratis oppgaver og quiz for ${cfg.label} (${cfg.alder}). Matematikk, norsk og engelsk basert på norsk skolepensum.`,
      klasse
    ),
    alternates: { canonical: `https://hjemmeskolen.no/klasse/${klasse}` },
  }
}

function getTemaerForKlasseOgFag(klasse: Klasse, fag: 'matematikk' | 'norsk' | 'engelsk') {
  const kilde = fag === 'matematikk' ? matematikkPensum : fag === 'norsk' ? norskPensum : engelskPensum
  return kilde.find((p) => p.klasse === klasse)?.temaer ?? []
}

export default function KlasseSide({ params }: Props) {
  const klasse = params.klasse as Klasse
  if (!KLASSER.includes(klasse)) notFound()

  const cfg = klasseConfig[klasse]
  const fagListe = ['matematikk', 'norsk', 'engelsk'] as const

  const forrigeKlasse = klasse !== '1' ? String(parseInt(klasse) - 1) as Klasse : null
  const nesteKlasse = klasse !== '7' ? String(parseInt(klasse) + 1) as Klasse : null

  return (
    <div>
      {/* ── HEADER ── */}
      <section className="gradient-hero py-12 sm:py-16">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-gray-900 transition-colors">Hjem</Link>
            <span>›</span>
            <span className="text-gray-900 font-semibold">{cfg.label}</span>
          </nav>

          <div className="flex items-center gap-6">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg flex-shrink-0"
              style={{ backgroundColor: cfg.farge + '25' }}
            >
              {cfg.ikon}
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900 mb-1">
                {cfg.label}
              </h1>
              <p className="text-gray-500 text-lg">{cfg.alder} · Matematikk, norsk og engelsk</p>
            </div>
          </div>

          {/* Klasse navigation */}
          <div className="flex items-center gap-3 mt-8">
            {forrigeKlasse && (
              <Link
                href={`/klasse/${forrigeKlasse}`}
                className="btn-secondary py-2 px-4 text-sm"
              >
                ← {forrigeKlasse}. klasse
              </Link>
            )}
            <div className="flex gap-2 flex-wrap">
              {KLASSER.map((k) => (
                <Link
                  key={k}
                  href={`/klasse/${k}`}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                    k === klasse
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {k}
                </Link>
              ))}
            </div>
            {nesteKlasse && (
              <Link
                href={`/klasse/${nesteKlasse}`}
                className="btn-secondary py-2 px-4 text-sm"
              >
                {nesteKlasse}. klasse →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── FAG OG TEMAER ── */}
      <section className="py-12">
        <div className="section-container">
          <div className="space-y-16">
            {fagListe.map((fag) => {
              const fagCfg = fagConfig[fag]
              const temaer = getTemaerForKlasseOgFag(klasse, fag)

              return (
                <div key={fag}>
                  {/* Fag header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                        style={{ backgroundColor: fagCfg.fargeLight }}
                      >
                        {fagCfg.ikon}
                      </div>
                      <div>
                        <h2 className="font-display font-800 text-2xl text-gray-900">{fagCfg.tittel}</h2>
                        <p className="text-gray-500 text-sm">{temaer.length} temaer</p>
                      </div>
                    </div>
                    <Link
                      href={byggFagUrl(klasse, fag)}
                      className="hidden sm:flex items-center gap-2 font-semibold text-sm transition-colors"
                      style={{ color: fagCfg.farge }}
                    >
                      Se alle temaer →
                    </Link>
                  </div>

                  {/* Temaer grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {temaer.slice(0, 8).map((tema) => (
                      <Link
                        key={tema.slug}
                        href={`/klasse/${klasse}/${fag}/${tema.slug}`}
                        className="card p-5 group hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: fagCfg.fargeLight }}
                          >
                            {fagCfg.ikon}
                          </div>
                          <div>
                            <h3 className="font-display font-700 text-gray-900 text-sm leading-tight group-hover:text-brand-600 transition-colors">
                              {tema.tittel}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{tema.beskrivelse}</p>
                          </div>
                        </div>
                      </Link>
                    ))}

                    {temaer.length > 8 && (
                      <Link
                        href={byggFagUrl(klasse, fag)}
                        className="card p-5 flex items-center justify-center text-center hover:scale-[1.02] transition-all cursor-pointer border-dashed"
                        style={{ color: fagCfg.farge }}
                      >
                        <div>
                          <div className="text-2xl mb-2">+{temaer.length - 8}</div>
                          <div className="font-semibold text-sm">Vis alle temaer</div>
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

      {/* Schema structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: `${cfg.label} – Hjemmeskolen.no`,
            description: `Matematikk, norsk og engelsk for ${cfg.label} (${cfg.alder})`,
            provider: { '@type': 'Organization', name: 'Hjemmeskolen.no' },
            educationalLevel: cfg.label,
            inLanguage: 'nb',
          }),
        }}
      />
    </div>
  )
}
