import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  KLASSE_SLUGS,
  type KlasseSlug,
  slugTilKlasse,
  klasseConfig,
  fagConfig,
  byggTemaUrl,
  byggFagUrl,
} from '@/lib/config'
import { klasser } from '@/data/klasser'
import { finnFagEtterSlug } from '@/data/fag'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import { multiplikasjon3 } from '@/data/matematikk/klasse3-multiplikasjon'
import { bokstaverAM1 } from '@/data/norsk/klasse1-bokstaver-am'
import { hilsener1 } from '@/data/engelsk/klasse1-hilsener'
import Quiz from '@/components/quiz/Quiz'
import type { Klasse, Fag, TemaInnhold, PensumTema } from '@/types'

interface Props {
  params: { klasseSlug: string; fagSlug: string; temaSlug: string }
}

const GYLDIGE_FAG = ['matematikk', 'norsk', 'engelsk']

// ── TEMA-INNHOLD REGISTER ─────────────────────────────────
// Nøkkel: "<fagSlug>-<klasseNr>-<temaSlug>"
// Legg til nye temaer her etter hvert som de lages
const TEMA_REGISTER: Record<string, TemaInnhold> = {
  'matematikk-3-multiplikasjon': multiplikasjon3,
  'norsk-1-bokstaver-a-m': bokstaverAM1,
  'engelsk-1-hilsener': hilsener1,
}

function slåOppInnhold(klasseNr: Klasse, fagSlug: string, temaSlug: string): TemaInnhold | null {
  return TEMA_REGISTER[`${fagSlug}-${klasseNr}-${temaSlug}`] ?? null
}

function slåOppPensumTema(klasseNr: Klasse, fagSlug: string, temaSlug: string): PensumTema | null {
  const kilde =
    fagSlug === 'matematikk' ? matematikkPensum
    : fagSlug === 'norsk' ? norskPensum
    : engelskPensum
  return kilde.find((p) => p.klasse === klasseNr)?.temaer.find((t) => t.slug === temaSlug) ?? null
}

function hentAlleTemaer(klasseNr: Klasse, fagSlug: string): PensumTema[] {
  const kilde =
    fagSlug === 'matematikk' ? matematikkPensum
    : fagSlug === 'norsk' ? norskPensum
    : engelskPensum
  return kilde.find((p) => p.klasse === klasseNr)?.temaer ?? []
}

// ── STATIC PARAMS ─────────────────────────────────────────
// Genererer alle 224+ temaer som statiske sider
export async function generateStaticParams() {
  const params: { klasseSlug: string; fagSlug: string; temaSlug: string }[] = []

  const alleKilder = [...matematikkPensum, ...norskPensum, ...engelskPensum]

  for (const entry of alleKilder) {
    const klasseNr = entry.klasse as Klasse
    const klasseSlug = `${klasseNr}-klasse`
    const fagSlug = entry.fag

    for (const tema of entry.temaer) {
      params.push({ klasseSlug, fagSlug, temaSlug: tema.slug })
    }
  }

  return params
}

// ── METADATA ──────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { klasseSlug, fagSlug, temaSlug } = params
  const klasseNr = slugTilKlasse[klasseSlug as KlasseSlug]
  if (!klasseNr) return {}

  const innhold = slåOppInnhold(klasseNr, fagSlug, temaSlug)
  const pensum = slåOppPensumTema(klasseNr, fagSlug, temaSlug)
  const klasseData = klasser.find((k) => k.slug === klasseSlug)
  const fagData = finnFagEtterSlug(fagSlug)

  const tittel = innhold?.metaTittel
    ?? `${pensum?.tittel ?? temaSlug} | ${fagData?.navn} ${klasseData?.navn} | Hjemmeskolen.no`
  const beskrivelse = innhold?.metaBeskrivelse
    ?? `Lær ${pensum?.tittel ?? temaSlug} i ${fagData?.navn.toLowerCase()} for ${klasseData?.navn}. Gratis oppgaver og quiz.`

  return {
    title: tittel,
    description: beskrivelse,
    alternates: {
      canonical: `https://hjemmeskolen.no/klasse/${klasseSlug}/${fagSlug}/${temaSlug}`,
    },
  }
}

// ── PAGE ──────────────────────────────────────────────────
export default function TemaSide({ params }: Props) {
  const { klasseSlug, fagSlug, temaSlug } = params

  if (!KLASSE_SLUGS.includes(klasseSlug as KlasseSlug)) notFound()
  if (!GYLDIGE_FAG.includes(fagSlug)) notFound()

  const klasseNr = slugTilKlasse[klasseSlug as KlasseSlug]
  const fagData = finnFagEtterSlug(fagSlug)!
  const klasseData = klasser.find((k) => k.slug === klasseSlug)!

  const innhold = slåOppInnhold(klasseNr, fagSlug, temaSlug)
  const pensumTema = slåOppPensumTema(klasseNr, fagSlug, temaSlug)

  if (!innhold && !pensumTema) notFound()

  const alleTemaer = hentAlleTemaer(klasseNr, fagSlug)
  const currentIdx = alleTemaer.findIndex((t) => t.slug === temaSlug)
  const forrigeTema = currentIdx > 0 ? alleTemaer[currentIdx - 1] : null
  const nesteTema = currentIdx >= 0 && currentIdx < alleTemaer.length - 1 ? alleTemaer[currentIdx + 1] : null
  const relaterteAndre = alleTemaer.filter((t) => t.slug !== temaSlug).slice(0, 4)

  const tittel = innhold?.tittel ?? pensumTema?.tittel ?? temaSlug
  const ingress = innhold?.ingress ?? pensumTema?.beskrivelse ?? ''
  const nesteTemaUrl = nesteTema ? byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, nesteTema.slug) : null

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="py-12 sm:py-16 border-b border-gray-100"
        style={{ background: `linear-gradient(135deg, ${fagData.fargeLight} 0%, #ffffff 70%)` }}
      >
        <div className="section-container">
          {/* Brødsmule */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-900">Hjem</Link>
            <span className="text-gray-300">›</span>
            <Link href={`/klasse/${klasseSlug}`} className="hover:text-gray-900">{klasseData.navn}</Link>
            <span className="text-gray-300">›</span>
            <Link href={`/klasse/${klasseSlug}/${fagSlug}`} className="hover:text-gray-900">{fagData.navn}</Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold">{tittel}</span>
          </nav>

          {/* Tittel */}
          <div className="flex items-start gap-5 flex-wrap">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
              style={{ backgroundColor: fagData.fargeLight }}
            >
              {fagData.ikon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="badge text-xs"
                  style={{ backgroundColor: fagData.fargeLight, color: fagData.farge }}
                >
                  {fagData.navn}
                </span>
                <span className="badge bg-gray-100 text-gray-500 text-xs">{klasseData.navn}</span>
                {innhold && (
                  <span className="badge bg-green-100 text-green-700 text-xs">
                    ✓ Innhold tilgjengelig
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900 mb-3">{tittel}</h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{ingress}</p>
            </div>
          </div>

          {/* Prev/Next tema */}
          {(forrigeTema || nesteTema) && (
            <div className="flex items-center gap-3 mt-6">
              {forrigeTema && (
                <Link
                  href={byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, forrigeTema.slug)}
                  className="btn-secondary py-2 px-4 text-sm"
                >
                  ← {forrigeTema.tittel}
                </Link>
              )}
              {nesteTema && (
                <Link
                  href={byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, nesteTema.slug)}
                  className="btn-secondary py-2 px-4 text-sm ml-auto"
                >
                  {nesteTema.tittel} →
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── INNHOLD ── */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Hoved-kolonne */}
          <div className="lg:col-span-2 space-y-10">

            {innhold ? (
              <>
                {/* FORKLARING */}
                <section>
                  <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">📖</span>
                    Forklaring
                  </h2>
                  <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6">
                    {innhold.forklaring.split('\n\n').map((avsnitt, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
                        {avsnitt}
                      </p>
                    ))}
                  </div>

                  {innhold.eksempler.length > 0 && (
                    <div className="mt-5">
                      <h3 className="font-display font-800 text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <span>💡</span> Eksempler
                      </h3>
                      <div className="space-y-2">
                        {innhold.eksempler.map((eks, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3"
                          >
                            <span className="text-amber-500 font-bold text-sm mt-0.5">→</span>
                            <span className="text-gray-700 text-sm font-medium">{eks}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                {/* LÆRINGSMÅL */}
                {innhold.læringsmål?.length > 0 && (
                  <section>
                    <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">🎯</span>
                      Hva skal du lære?
                    </h2>
                    <ul className="space-y-2">
                      {innhold.læringsmål.map((mål, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-3"
                        >
                          <span className="text-green-600 font-bold mt-0.5">✓</span>
                          <span className="text-gray-700 font-medium text-sm">{mål}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* OPPGAVER */}
                {innhold.oppgaver.length > 0 && (
                  <section>
                    <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">✏️</span>
                      Oppgaver ({innhold.oppgaver.length})
                    </h2>
                    <div className="space-y-4">
                      {innhold.oppgaver.map((oppgave, i) => (
                        <div
                          key={oppgave.id}
                          className="card p-5 border-l-4"
                          style={{ borderLeftColor: fagData.farge }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                              style={{ backgroundColor: fagData.farge }}
                            >
                              {i + 1}
                            </span>
                            <span className="text-xs text-gray-400">
                              {oppgave.vanskelighetsgrad === 'lett' ? '🟢' : oppgave.vanskelighetsgrad === 'middels' ? '🟡' : '🔴'}{' '}
                              {oppgave.vanskelighetsgrad}
                            </span>
                          </div>
                          <p className="font-display font-700 text-gray-900 mb-3">{oppgave.sporsmal}</p>
                          {oppgave.hint && (
                            <div className="text-sm text-gray-500 bg-gray-50 rounded-xl p-3 mb-3 flex gap-2">
                              <span className="text-amber-400">💡</span>
                              <span><strong>Hint:</strong> {oppgave.hint}</span>
                            </div>
                          )}
                          <details>
                            <summary className="text-sm font-semibold cursor-pointer text-gray-400 hover:text-gray-700 select-none">
                              Vis svar
                            </summary>
                            <div
                              className="mt-2 p-3 rounded-xl text-sm font-bold"
                              style={{ backgroundColor: fagData.fargeLight, color: fagData.farge }}
                            >
                              Svar: {oppgave.svar}
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* QUIZ */}
                {innhold.quiz.length > 0 && (
                  <section>
                    <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                      <span className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center">⚡</span>
                      Quiz — Test deg selv!
                    </h2>
                    <Quiz
                      spørsmål={innhold.quiz}
                      temaSlug={temaSlug}
                      nesteTemaUrl={nesteTemaUrl ?? undefined}
                    />
                  </section>
                )}
              </>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-display font-800 text-amber-800 text-lg mb-2">
                  Innhold under utarbeidelse
                </p>
                <p className="text-amber-600 text-sm">
                  Dette temaet er registrert i pensumkartet, men vi holder på å skrive innholdet. Sjekk tilbake snart!
                </p>
                {pensumTema && (
                  <div className="mt-6 text-left max-w-sm mx-auto">
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">Kompetansemål:</p>
                    <ul className="space-y-1">
                      {pensumTema.kompetansemål.map((mål, i) => (
                        <li key={i} className="text-sm text-amber-700 flex gap-2">
                          <span>•</span><span>{mål}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Neste tema */}
            {nesteTema && (
              <div className="card p-5">
                <h3 className="font-display font-800 text-sm text-gray-700 mb-3 uppercase tracking-wider">Neste tema</h3>
                <Link
                  href={byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, nesteTema.slug)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-700 text-sm group-hover:text-brand-600">
                    {nesteTema.tittel}
                  </span>
                  <span className="text-gray-400 group-hover:text-brand-600">→</span>
                </Link>
              </div>
            )}

            {/* Nøkkelord */}
            {innhold?.nøkkelord?.length > 0 && (
              <div className="card p-5">
                <h3 className="font-display font-800 text-sm text-gray-700 mb-3 uppercase tracking-wider">Nøkkelord</h3>
                <div className="flex flex-wrap gap-1.5">
                  {innhold.nøkkelord.map((ord) => (
                    <span
                      key={ord}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: fagData.fargeLight, color: fagData.farge }}
                    >
                      {ord}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Andre temaer */}
            <div className="card p-5">
              <h3 className="font-display font-800 text-sm text-gray-700 mb-3 uppercase tracking-wider">
                Andre temaer
              </h3>
              <ul className="space-y-1">
                {relaterteAndre.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={byggTemaUrl(klasseSlug as KlasseSlug, fagSlug as Fag, t.slug)}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-sm"
                    >
                      <span style={{ color: fagData.farge }}>{fagData.ikon}</span>
                      <span className="text-gray-600 group-hover:text-brand-600 font-medium">{t.tittel}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href={`/klasse/${klasseSlug}/${fagSlug}`}
                    className="text-xs font-semibold"
                    style={{ color: fagData.farge }}
                  >
                    Se alle {alleTemaer.length} temaer →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kompetansemål */}
            {pensumTema?.kompetansemål && (
              <div className="card p-5 bg-gray-50">
                <h3 className="font-display font-800 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                  Kompetansemål (KL20)
                </h3>
                <ul className="space-y-2">
                  {pensumTema.kompetansemål.map((mål, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-gray-300 mt-0.5 flex-shrink-0">•</span>
                      <span>{mål}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: tittel,
            description: ingress,
            educationalLevel: klasseData.navn,
            learningResourceType: 'Lesson',
            teaches: innhold?.læringsmål ?? pensumTema?.kompetansemål ?? [],
            inLanguage: 'nb',
            provider: { '@type': 'Organization', name: 'Hjemmeskolen.no' },
            url: `https://hjemmeskolen.no/klasse/${klasseSlug}/${fagSlug}/${temaSlug}`,
            keywords: innhold?.nøkkelord?.join(', ') ?? '',
          }),
        }}
      />
    </div>
  )
}
