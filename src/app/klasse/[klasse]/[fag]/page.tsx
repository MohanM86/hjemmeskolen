import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KLASSER, klasseConfig, fagConfig, lagMetaTittel } from '@/lib/config'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import type { Klasse, Fag, PensumTema } from '@/types'

interface Props {
  params: { klasse: string; fag: string }
}

const FAGSLUG: Fag[] = ['matematikk', 'norsk', 'engelsk']

export async function generateStaticParams() {
  const params = []
  for (const klasse of KLASSER) {
    for (const fag of FAGSLUG) {
      params.push({ klasse, fag })
    }
  }
  return params
}

function getTemaer(klasse: Klasse, fag: Fag): PensumTema[] {
  const kilde = fag === 'matematikk' ? matematikkPensum : fag === 'norsk' ? norskPensum : engelskPensum
  return kilde.find((p) => p.klasse === klasse)?.temaer ?? []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const klasse = params.klasse as Klasse
  const fag = params.fag as Fag
  if (!KLASSER.includes(klasse) || !FAGSLUG.includes(fag)) return {}
  const fagCfg = fagConfig[fag]
  const klassCfg = klasseConfig[klasse]
  return {
    title: lagMetaTittel(`${fagCfg.tittel} ${klassCfg.label}`),
    description: `${fagCfg.tittel} for ${klassCfg.label}. Gratis oppgaver, forklaringer og quiz basert på norsk skolepensum. ${getTemaer(klasse, fag).length} temaer.`,
    alternates: { canonical: `https://hjemmeskolen.no/klasse/${klasse}/${fag}` },
  }
}

export default function FagSide({ params }: Props) {
  const klasse = params.klasse as Klasse
  const fag = params.fag as Fag

  if (!KLASSER.includes(klasse) || !FAGSLUG.includes(fag)) notFound()

  const fagCfg = fagConfig[fag]
  const klassCfg = klasseConfig[klasse]
  const temaer = getTemaer(klasse, fag)

  return (
    <div>
      {/* HEADER */}
      <section style={{ background: `linear-gradient(135deg, ${fagCfg.fargeLight} 0%, white 100%)` }} className="py-12 sm:py-16">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-900 transition-colors">Hjem</Link>
            <span>›</span>
            <Link href={`/klasse/${klasse}`} className="hover:text-gray-900 transition-colors">{klassCfg.label}</Link>
            <span>›</span>
            <span className="font-semibold text-gray-900">{fagCfg.tittel}</span>
          </nav>

          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md"
              style={{ backgroundColor: fagCfg.fargeLight }}
            >
              {fagCfg.ikon}
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900">
                {fagCfg.tittel} — {klassCfg.label}
              </h1>
              <p className="text-gray-500 mt-1">{temaer.length} temaer · Gratis oppgaver og quiz</p>
            </div>
          </div>

          {/* Fag switcher */}
          <div className="flex items-center gap-3 flex-wrap">
            {FAGSLUG.map((f) => (
              <Link
                key={f}
                href={`/klasse/${klasse}/${f}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  f === fag
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{fagConfig[f].ikon}</span>
                <span>{fagConfig[f].tittel}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAER */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {temaer.map((tema, index) => (
              <Link
                key={tema.slug}
                href={`/klasse/${klasse}/${fag}/${tema.slug}`}
                className="card p-6 group hover:scale-[1.02] transition-all cursor-pointer flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: fagCfg.fargeLight }}
                  >
                    {fagCfg.ikon}
                  </div>
                  <span className="text-xs font-bold text-gray-300">#{index + 1}</span>
                </div>

                <h2 className="font-display font-800 text-lg text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {tema.tittel}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{tema.beskrivelse}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tema.kompetansemål.slice(0, 2).map((mål, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: fagCfg.fargeLight, color: fagCfg.farge }}
                      >
                        {mål.slice(0, 25)}{mål.length > 25 ? '…' : ''}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-bold" style={{ color: fagCfg.farge }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `${fagCfg.tittel} ${klassCfg.label}`,
            numberOfItems: temaer.length,
            itemListElement: temaer.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: t.tittel,
              url: `https://hjemmeskolen.no/klasse/${klasse}/${fag}/${t.slug}`,
            })),
          }),
        }}
      />
    </div>
  )
}
