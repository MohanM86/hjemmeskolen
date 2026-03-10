import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KLASSER, klasseConfig, fagConfig, byggTemaUrl } from '@/lib/config'
import { matematikkPensum } from '@/data/matematikk/pensum'
import { norskPensum } from '@/data/norsk/pensum'
import { engelskPensum } from '@/data/engelsk/pensum'
import { multiplikasjon3 } from '@/data/matematikk/klasse3-multiplikasjon'
import { bokstaverAM1 } from '@/data/norsk/klasse1-bokstaver-am'
import { hilsener1 } from '@/data/engelsk/klasse1-hilsener'
import Quiz from '@/components/quiz/Quiz'
import type { Klasse, Fag, TemaInnhold, PensumTema } from '@/types'

interface Props {
  params: { klasse: string; fag: string; tema: string }
}

const FAGSLUG: Fag[] = ['matematikk', 'norsk', 'engelsk']

// In a real system, this would come from a database/CMS
// For MVP, we use a lookup map
const TEMA_INNHOLD: Record<string, TemaInnhold> = {
  'matematikk-3-multiplikasjon': multiplikasjon3,
  'norsk-1-bokstaver-a-m': bokstaverAM1,
  'engelsk-1-hilsener': hilsener1,
}

function getTemaInnhold(klasse: Klasse, fag: Fag, temaSlug: string): TemaInnhold | null {
  const key = `${fag}-${klasse}-${temaSlug}`
  return TEMA_INNHOLD[key] ?? null
}

function getPensumTema(klasse: Klasse, fag: Fag, temaSlug: string): PensumTema | null {
  const kilde = fag === 'matematikk' ? matematikkPensum : fag === 'norsk' ? norskPensum : engelskPensum
  const klFag = kilde.find((p) => p.klasse === klasse)
  return klFag?.temaer.find((t) => t.slug === temaSlug) ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const klasse = params.klasse as Klasse
  const fag = params.fag as Fag
  const temaSlug = params.tema

  const innhold = getTemaInnhold(klasse, fag, temaSlug)
  const pensum = getPensumTema(klasse, fag, temaSlug)

  if (!innhold && !pensum) return {}

  const tittel = innhold?.metaTittel ?? `${pensum?.tittel ?? temaSlug} | ${fagConfig[fag]?.tittel} ${klasseConfig[klasse]?.label} | Hjemmeskolen.no`
  const beskrivelse = innhold?.metaBeskrivelse ?? `Lær ${pensum?.tittel ?? temaSlug} i ${fagConfig[fag]?.tittel} for ${klasseConfig[klasse]?.label}. Gratis oppgaver og quiz.`

  return {
    title: tittel,
    description: beskrivelse,
    alternates: { canonical: `https://hjemmeskolen.no/klasse/${klasse}/${fag}/${temaSlug}` },
  }
}

export default function TemaSide({ params }: Props) {
  const klasse = params.klasse as Klasse
  const fag = params.fag as Fag
  const temaSlug = params.tema

  if (!KLASSER.includes(klasse) || !FAGSLUG.includes(fag)) notFound()

  const innhold = getTemaInnhold(klasse, fag, temaSlug)
  const pensumTema = getPensumTema(klasse, fag, temaSlug)

  // Get all temaer for related navigation
  const kilde = fag === 'matematikk' ? matematikkPensum : fag === 'norsk' ? norskPensum : engelskPensum
  const alleTemaer = kilde.find((p) => p.klasse === klasse)?.temaer ?? []
  const relaterteTemaer = alleTemaer.slice(0, 4).filter((t) => t.slug !== temaSlug)

  const fagCfg = fagConfig[fag]
  const klassCfg = klasseConfig[klasse]

  const tittel = innhold?.tittel ?? pensumTema?.tittel ?? temaSlug
  const ingress = innhold?.ingress ?? pensumTema?.beskrivelse ?? ''

  const nesteTemaUrl = innhold?.nesteTema
    ? byggTemaUrl(klasse, fag, innhold.nesteTema)
    : null

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="py-12 sm:py-16 border-b border-gray-100"
        style={{ background: `linear-gradient(135deg, ${fagCfg.fargeLight} 0%, white 100%)` }}
      >
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-900">Hjem</Link>
            <span>›</span>
            <Link href={`/klasse/${klasse}`} className="hover:text-gray-900">{klassCfg.label}</Link>
            <span>›</span>
            <Link href={`/klasse/${klasse}/${fag}`} className="hover:text-gray-900">{fagCfg.tittel}</Link>
            <span>›</span>
            <span className="text-gray-900 font-semibold">{tittel}</span>
          </nav>

          <div className="flex items-start gap-5 flex-wrap">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md flex-shrink-0"
              style={{ backgroundColor: fagCfg.fargeLight }}
            >
              {fagCfg.ikon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span
                  className="badge text-xs"
                  style={{ backgroundColor: fagCfg.fargeLight, color: fagCfg.farge }}
                >
                  {fagCfg.tittel}
                </span>
                <span className="badge bg-gray-100 text-gray-500 text-xs">{klassCfg.label}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-900 text-gray-900 mb-3">{tittel}</h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{ingress}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Forklaring + Oppgaver */}
          <div className="lg:col-span-2 space-y-10">

            {/* FORKLARING */}
            {innhold ? (
              <section>
                <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center text-base">📖</span>
                  Forklaring
                </h2>
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
                  {innhold.forklaring.split('\n\n').map((avsnitt, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
                      {avsnitt}
                    </p>
                  ))}
                </div>

                {/* Eksempler */}
                {innhold.eksempler.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-display font-800 text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <span>💡</span> Eksempler
                    </h3>
                    <div className="space-y-2">
                      {innhold.eksempler.map((eks, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3"
                        >
                          <span className="text-amber-400 font-bold text-sm mt-0.5">→</span>
                          <span className="text-gray-700 text-sm font-medium">{eks}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ) : (
              <section>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
                  <p className="text-amber-800 font-semibold">📝 Innhold for dette temaet er under utarbeidelse.</p>
                  <p className="text-amber-600 text-sm mt-2">Sjekk tilbake snart!</p>
                </div>
              </section>
            )}

            {/* LÆRINGSMÅL */}
            {innhold?.læringsmål && innhold.læringsmål.length > 0 && (
              <section>
                <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-base">🎯</span>
                  Hva skal du lære?
                </h2>
                <ul className="space-y-3">
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
            {innhold && innhold.oppgaver.length > 0 && (
              <section>
                <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center text-base">✏️</span>
                  Oppgaver ({innhold.oppgaver.length})
                </h2>
                <div className="space-y-4">
                  {innhold.oppgaver.map((oppgave, i) => (
                    <OppgaveKort key={oppgave.id} oppgave={oppgave} nummer={i + 1} fagFarge={fagCfg.farge} fagFargeLys={fagCfg.fargeLight} />
                  ))}
                </div>
              </section>
            )}

            {/* QUIZ */}
            {innhold && innhold.quiz.length > 0 && (
              <section>
                <h2 className="font-display font-800 text-2xl text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center text-base">⚡</span>
                  Quiz — Test kunnskapen din!
                </h2>
                <Quiz
                  spørsmål={innhold.quiz}
                  temaSlug={temaSlug}
                  nesteTemaUrl={nesteTemaUrl ?? undefined}
                />
              </section>
            )}
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Neste tema */}
            {innhold?.nesteTema && (
              <div className="card p-5">
                <h3 className="font-display font-800 text-base text-gray-900 mb-3">Neste tema</h3>
                <Link
                  href={byggTemaUrl(klasse, fag, innhold.nesteTema)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-medium text-gray-700 text-sm group-hover:text-brand-600">
                    {alleTemaer.find((t) => t.slug === innhold.nesteTema)?.tittel ?? innhold.nesteTema}
                  </span>
                  <span className="text-gray-400 group-hover:text-brand-600">→</span>
                </Link>
              </div>
            )}

            {/* Nøkkelord */}
            {innhold?.nøkkelord && innhold.nøkkelord.length > 0 && (
              <div className="card p-5">
                <h3 className="font-display font-800 text-base text-gray-900 mb-3">Nøkkelord</h3>
                <div className="flex flex-wrap gap-2">
                  {innhold.nøkkelord.map((ord) => (
                    <span
                      key={ord}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: fagCfg.fargeLight, color: fagCfg.farge }}
                    >
                      {ord}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Relaterte temaer */}
            <div className="card p-5">
              <h3 className="font-display font-800 text-base text-gray-900 mb-3">Andre temaer i {fagCfg.tittel}</h3>
              <ul className="space-y-2">
                {relaterteTemaer.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={byggTemaUrl(klasse, fag, t.slug)}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-colors group text-sm"
                    >
                      <span style={{ color: fagCfg.farge }}>{fagCfg.ikon}</span>
                      <span className="text-gray-600 group-hover:text-brand-600 font-medium">{t.tittel}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/klasse/${klasse}/${fag}`}
                    className="text-xs font-semibold mt-2 block"
                    style={{ color: fagCfg.farge }}
                  >
                    Se alle temaer i {fagCfg.tittel} →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kompetansemål */}
            {pensumTema?.kompetansemål && (
              <div className="card p-5 bg-gray-50">
                <h3 className="font-display font-800 text-sm text-gray-700 mb-3">Kompetansemål (KL20)</h3>
                <ul className="space-y-2">
                  {pensumTema.kompetansemål.map((mål, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-gray-300 mt-0.5">•</span>
                      <span>{mål}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: tittel,
            description: ingress,
            educationalLevel: klassCfg.label,
            learningResourceType: 'Lesson',
            teaches: innhold?.læringsmål ?? pensumTema?.kompetansemål ?? [],
            inLanguage: 'nb',
            provider: { '@type': 'Organization', name: 'Hjemmeskolen.no' },
            keywords: innhold?.nøkkelord?.join(', ') ?? '',
          }),
        }}
      />
    </div>
  )
}

// Inline oppgave component (server rendered)
function OppgaveKort({
  oppgave,
  nummer,
  fagFarge,
  fagFargeLys,
}: {
  oppgave: { id: string; sporsmal: string; hint?: string; vanskelighetsgrad: string; svar: string | number }
  nummer: number
  fagFarge: string
  fagFargeLys: string
}) {
  const vanskelighetsIkon = oppgave.vanskelighetsgrad === 'lett' ? '🟢' : oppgave.vanskelighetsgrad === 'middels' ? '🟡' : '🔴'

  return (
    <div className="card p-5 border-l-4" style={{ borderLeftColor: fagFarge }}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ backgroundColor: fagFarge }}
          >
            {nummer}
          </span>
          <span className="text-xs font-medium text-gray-400">{vanskelighetsIkon} {oppgave.vanskelighetsgrad}</span>
        </div>
      </div>
      <p className="font-display font-700 text-gray-900 mb-3">{oppgave.sporsmal}</p>
      {oppgave.hint && (
        <div className="text-sm text-gray-500 bg-gray-50 rounded-xl p-3 flex items-start gap-2">
          <span className="text-amber-400">💡</span>
          <span><strong>Hint:</strong> {oppgave.hint}</span>
        </div>
      )}
      <details className="mt-3">
        <summary className="text-sm font-semibold cursor-pointer text-gray-500 hover:text-gray-900">
          Vis svar
        </summary>
        <div
          className="mt-2 p-3 rounded-xl text-sm font-bold"
          style={{ backgroundColor: fagFargeLys, color: fagFarge }}
        >
          Svar: {oppgave.svar}
        </div>
      </details>
    </div>
  )
}
