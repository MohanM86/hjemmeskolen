'use client'

import { useState } from 'react'
import type { QuizSporsmal } from '@/types'

interface QuizProps {
  spørsmål: QuizSporsmal[]
  temaSlug: string
  nesteTemaUrl?: string
}

type QuizStatus = 'playing' | 'ferdig'

interface SvarTilstand {
  valgt: number | null
  riktig: boolean | null
}

export default function Quiz({ spørsmål, temaSlug, nesteTemaUrl }: QuizProps) {
  const [nåværendeIndex, setNåværendeIndex] = useState(0)
  const [svar, setSvar] = useState<SvarTilstand[]>(
    spørsmål.map(() => ({ valgt: null, riktig: null }))
  )
  const [status, setStatus] = useState<QuizStatus>('playing')
  const [visForklaring, setVisForklaring] = useState(false)

  const nåværende = spørsmål[nåværendeIndex]
  const nåværendeSvar = svar[nåværendeIndex]
  const erBesvart = nåværendeSvar.valgt !== null

  const antallRiktig = svar.filter((s) => s.riktig === true).length
  const prosent = Math.round((antallRiktig / spørsmål.length) * 100)

  function velgSvar(index: number) {
    if (erBesvart) return

    const riktig = index === nåværende.riktigSvar
    const nyeSvar = [...svar]
    nyeSvar[nåværendeIndex] = { valgt: index, riktig }
    setSvar(nyeSvar)
    setVisForklaring(true)
  }

  function neste() {
    setVisForklaring(false)
    if (nåværendeIndex < spørsmål.length - 1) {
      setNåværendeIndex(nåværendeIndex + 1)
    } else {
      setStatus('ferdig')
    }
  }

  function startPåNytt() {
    setSvar(spørsmål.map(() => ({ valgt: null, riktig: null })))
    setNåværendeIndex(0)
    setStatus('playing')
    setVisForklaring(false)
  }

  // ── FERDIG ──
  if (status === 'ferdig') {
    const emoji = prosent >= 80 ? '🏆' : prosent >= 60 ? '⭐' : prosent >= 40 ? '👍' : '💪'
    const melding =
      prosent >= 80
        ? 'Kjempebra! Du kan dette!'
        : prosent >= 60
        ? 'Bra jobbet! Prøv en gang til for å bli enda bedre.'
        : prosent >= 40
        ? 'Ikke dårlig! Les forklaringen igjen og prøv på nytt.'
        : 'Ikke gi opp! Alle lærer litt etter litt.'

    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className="font-display font-800 text-2xl text-gray-900 mb-2">Quiz ferdig!</h3>
        <p className="text-gray-500 mb-6">{melding}</p>

        {/* Score */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 inline-block min-w-[200px]">
          <div className="text-4xl font-display font-900 text-gray-900">{antallRiktig}/{spørsmål.length}</div>
          <div className="text-gray-500 text-sm font-medium mt-1">riktige svar ({prosent}%)</div>

          {/* Progress bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-3">
            <div
              className="h-3 rounded-full transition-all duration-500"
              style={{
                width: `${prosent}%`,
                backgroundColor: prosent >= 80 ? '#22c55e' : prosent >= 60 ? '#eab308' : '#f97316',
              }}
            />
          </div>
        </div>

        {/* Detaljert oversikt */}
        <div className="mb-8 space-y-2 text-left max-w-sm mx-auto">
          {spørsmål.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm ${
                svar[i].riktig ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}
            >
              <span className="font-bold">{svar[i].riktig ? '✓' : '✗'}</span>
              <span className="font-medium line-clamp-1">{s.sporsmal}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={startPåNytt}
            className="btn-primary px-8"
          >
            🔄 Prøv igjen
          </button>
          {nesteTemaUrl && (
            <a href={nesteTemaUrl} className="btn-secondary px-8">
              Neste tema →
            </a>
          )}
        </div>
      </div>
    )
  }

  // ── PLAYING ──
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
      {/* Progress bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="h-2 bg-brand-500 transition-all duration-300"
          style={{ width: `${((nåværendeIndex) / spørsmål.length) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Quiz header */}
        <div className="flex items-center justify-between mb-6">
          <span className="badge bg-brand-100 text-brand-700">
            Spørsmål {nåværendeIndex + 1} av {spørsmål.length}
          </span>
          <div className="flex gap-1">
            {spørsmål.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i < nåværendeIndex
                    ? svar[i].riktig
                      ? 'bg-green-500'
                      : 'bg-red-400'
                    : i === nåværendeIndex
                    ? 'bg-brand-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <h3 className="font-display font-800 text-xl sm:text-2xl text-gray-900 mb-6 leading-snug">
          {nåværende.sporsmal}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {nåværende.alternativer.map((alt, i) => {
            const erValgt = nåværendeSvar.valgt === i
            const erRiktig = i === nåværende.riktigSvar
            let styling = 'bg-gray-50 border-2 border-gray-200 hover:border-brand-300 hover:bg-brand-50 text-gray-700'

            if (erBesvart) {
              if (erRiktig) {
                styling = 'bg-green-50 border-2 border-green-400 text-green-800'
              } else if (erValgt && !erRiktig) {
                styling = 'bg-red-50 border-2 border-red-400 text-red-800'
              } else {
                styling = 'bg-gray-50 border-2 border-gray-200 text-gray-400 cursor-not-allowed'
              }
            }

            return (
              <button
                key={i}
                onClick={() => velgSvar(i)}
                disabled={erBesvart}
                className={`w-full text-left px-5 py-4 rounded-2xl font-semibold transition-all duration-150 flex items-center gap-4 ${styling} ${
                  !erBesvart ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                }`}
              >
                {/* Option letter */}
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  erBesvart && erRiktig
                    ? 'bg-green-200 text-green-800'
                    : erBesvart && erValgt && !erRiktig
                    ? 'bg-red-200 text-red-800'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {['A', 'B', 'C', 'D'][i]}
                </span>
                <span>{alt}</span>
                {erBesvart && erRiktig && <span className="ml-auto text-green-600 font-bold">✓</span>}
                {erBesvart && erValgt && !erRiktig && <span className="ml-auto text-red-500 font-bold">✗</span>}
              </button>
            )
          })}
        </div>

        {/* Forklaring */}
        {visForklaring && nåværende.forklaring && (
          <div className={`rounded-2xl p-4 mb-4 text-sm leading-relaxed ${
            nåværendeSvar.riktig ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-orange-50 text-orange-800 border border-orange-200'
          }`}>
            <span className="font-bold">{nåværendeSvar.riktig ? '✓ Riktig! ' : '✗ Feil. '}</span>
            {nåværende.forklaring}
          </div>
        )}

        {/* Neste knapp */}
        {erBesvart && (
          <button
            onClick={neste}
            className="btn-primary w-full justify-center"
          >
            {nåværendeIndex < spørsmål.length - 1 ? 'Neste spørsmål →' : 'Se resultater 🏁'}
          </button>
        )}
      </div>
    </div>
  )
}
