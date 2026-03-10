import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For foreldre og foresatte | Hjemmeskolen.no',
  description: 'Hjemmeskolen.no er laget for norske barn og foreldre. Gratis læringsplattform som følger norsk skolepensum. Perfekt for familier i utlandet.',
}

export default function ForForeldreSide() {
  return (
    <div>
      <section className="gradient-hero py-16 sm:py-24">
        <div className="section-container max-w-3xl">
          <div className="text-center">
            <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
            <h1 className="font-display text-4xl sm:text-5xl font-900 text-gray-900 mb-6">
              For foreldre og foresatte
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hjemmeskolen.no er laget for å hjelpe norske barn med å følge skolepensumet — uansett hvor i verden dere befinner dere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-800 text-3xl text-gray-900">Hvem er Hjemmeskolen.no for?</h2>
            <p className="text-gray-600 leading-relaxed">
              Plattformen er primært laget for:
            </p>
            <ul className="space-y-3 my-6 not-prose">
              {[
                { ikon: '✈️', tekst: 'Norske familier som bor i utlandet i 3 måneder eller mer' },
                { ikon: '🏠', tekst: 'Familier som ønsker ekstra læring og øving hjemme' },
                { ikon: '📚', tekst: 'Barn som trenger å repetere eller øve på vanskelige emner' },
                { ikon: '🌍', tekst: 'Hjemmeskolingsfamilier som følger norsk pensum' },
                { ikon: '🎒', tekst: 'Lærere som vil anbefale en god ressurs til elevene' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{item.ikon}</span>
                  <span className="text-gray-700 font-medium">{item.tekst}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-800 text-3xl text-gray-900 mt-12">Hva er inkludert?</h2>
            <p className="text-gray-600 leading-relaxed">
              Fase 1 av Hjemmeskolen.no inneholder:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              {[
                { fag: 'Matematikk', ikon: '🔢', temaer: '80+ temaer', klasser: 'Klasse 1–7' },
                { fag: 'Norsk', ikon: '📖', temaer: '70+ temaer', klasser: 'Klasse 1–7' },
                { fag: 'Engelsk', ikon: '🌍', temaer: '70+ temaer', klasser: 'Klasse 1–7' },
              ].map((f, i) => (
                <div key={i} className="card p-5 text-center">
                  <div className="text-3xl mb-2">{f.ikon}</div>
                  <div className="font-display font-800 text-gray-900">{f.fag}</div>
                  <div className="text-sm text-gray-500">{f.temaer}</div>
                  <div className="text-xs text-gray-400">{f.klasser}</div>
                </div>
              ))}
            </div>

            <h2 className="font-display font-800 text-3xl text-gray-900 mt-12">Basert på Kunnskapsløftet 2020</h2>
            <p className="text-gray-600 leading-relaxed">
              Alt innhold på Hjemmeskolen.no er laget basert på Kunnskapsløftet 2020 — det offisielle norske læreplanverket som alle norske skoler følger.
              Vi har ikke kopiert innhold fra skolebøker, men laget originale forklaringer, oppgaver og quizer som dekker de samme kompetansemålene.
            </p>

            <h2 className="font-display font-800 text-3xl text-gray-900 mt-12">Tips til foreldre</h2>
            <div className="space-y-4 my-6">
              {[
                { tittel: 'Start med barnets klasse', tekst: 'Velg klassen til barnet ditt og la dem utforske temaene i sitt eget tempo.' },
                { tittel: '15–20 minutter om dagen er nok', tekst: 'Konsistens er viktigere enn lengde. Litt øving hver dag gir god fremgang.' },
                { tittel: 'La barnet velge selv', tekst: 'Gi barnet muligheten til å velge temaer de er nysgjerrige på. Det øker motivasjonen.' },
                { tittel: 'Bruk quizen som mål', tekst: 'La barnet ta quizen etter å ha lest forklaringen. Det befester læringen.' },
              ].map((tips, i) => (
                <div key={i} className="card p-5">
                  <h3 className="font-display font-700 text-gray-900 mb-2">💡 {tips.tittel}</h3>
                  <p className="text-gray-500 text-sm">{tips.tekst}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/klasse/1-klasse" className="btn-primary text-lg px-10 py-4">
              Start å lære nå 🚀
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
