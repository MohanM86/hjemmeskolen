import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, fagConfig } from '@/lib/config'
import { klasser } from '@/data/klasser'
import { fag as fagListe } from '@/data/fag'

export const metadata: Metadata = {
  title: 'Gratis læring for norske barn fra 1.–7. klasse',
  description: 'Hjemmeskolen.no er en gratis norsk læringsplattform for barn. Matematikk, norsk og engelsk basert på Kunnskapsløftet 2020. Perfekt for norske barn i utlandet.',
  alternates: {
    canonical: siteConfig.url,
  },
}

const TRINNKORT = [
  { emoji: '🌱', tittel: 'Steg for steg', tekst: 'Temaene er bygget opp gradvis, slik at barn mestrer ett trinn av gangen.' },
  { emoji: '🎯', tittel: 'Tilpasset norsk pensum', tekst: 'Alt innhold følger Kunnskapsløftet 2020 og norsk progresjon.' },
  { emoji: '📱', tittel: 'Fungerer overalt', tekst: 'Bruk plattformen på mobil, nettbrett eller PC — hjemme eller i utlandet.' },
  { emoji: '✅', tittel: 'Øv med quiz', tekst: 'Interaktive oppgaver og quiz gir umiddelbar tilbakemelding.' },
]

const POPULÆRE_EMNER = [
  { tittel: 'Gangetabellen', klasseSlug: '3-klasse', fag: 'matematikk', tema: 'multiplikasjon', ikon: '✖️' },
  { tittel: 'Bokstavene', klasseSlug: '1-klasse', fag: 'norsk', tema: 'bokstaver-a-m', ikon: '🔤' },
  { tittel: 'Engelsk hilsener', klasseSlug: '1-klasse', fag: 'engelsk', tema: 'hilsener', ikon: '👋' },
  { tittel: 'Addisjon', klasseSlug: '2-klasse', fag: 'matematikk', tema: 'addisjon-til-20', ikon: '➕' },
  { tittel: 'Brøk', klasseSlug: '5-klasse', fag: 'matematikk', tema: 'brok-5', ikon: '½' },
  { tittel: 'Adjektiver', klasseSlug: '3-klasse', fag: 'norsk', tema: 'adjektiver', ikon: '📝' },
]

export default function Forside() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="gradient-hero py-16 sm:py-24 overflow-hidden">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-4 py-1.5 text-sm font-semibold text-green-700 mb-8 shadow-sm">
              <span>🇳🇴</span>
              <span>Norges gratis læringsplattform for barn</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-900 text-gray-900 mb-6 text-balance">
              Gratis læring for{' '}
              <span className="text-brand-600 relative">
                norske barn
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-200 rounded-full" />
              </span>{' '}
              — uansett hvor i verden
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Matematikk, norsk og engelsk for 1.–7. klasse. Basert på det norske skolepensumet.
              Perfekt for familier i utlandet og barn som vil øve mer hjemme.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/klasse/1-klasse" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Velg klasse og start 🚀
              </Link>
              <Link href="#hvordan" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                Hvordan fungerer det?
              </Link>
            </div>

            {/* Social proof */}
            <p className="text-sm text-gray-400 mt-8">
              100% gratis · Uten innlogging · Basert på Kunnskapsløftet 2020
            </p>
          </div>
        </div>
      </section>

      {/* ── VELG KLASSE ── */}
      <section className="py-16 bg-white" id="klasser">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-4">
              Velg klasse
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Klikk på barnet ditt sin klasse for å se alle fag og temaer.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {klasser.map((k) => (
              <Link
                key={k.slug}
                href={`/klasse/${k.slug}`}
                className="card group p-5 text-center hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <div
                  className="text-4xl mb-3 mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: k.farge + '20' }}
                >
                  {k.ikon}
                </div>
                <div className="font-display font-800 text-gray-900 text-lg">{k.id}.</div>
                <div className="text-sm text-gray-500 font-medium">klasse</div>
                <div className="text-xs text-gray-400 mt-1">{k.alder}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAOVERSIKT ── */}
      <section className="py-16 bg-surface">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-4">
              Tre fag i fase 1
            </h2>
            <p className="text-gray-500 text-lg">
              Start med de viktigste fagene. Naturfag og samfunnsfag kommer snart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fagListe.map((f) => (
              <Link
                key={f.slug}
                href={`/klasse/1-klasse/${f.slug}`}
                className="card group p-8 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: f.fargeLight }}
                >
                  {f.ikon}
                </div>
                <h3 className="font-display font-800 text-2xl text-gray-900 mb-3">
                  {f.navn}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {f.langBeskrivelse}
                </p>
                <div className="mt-6 flex items-center gap-2 font-semibold" style={{ color: f.farge }}>
                  <span>Utforsk faget</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORDAN FUNGERER DET ── */}
      <section className="py-16 bg-white" id="hvordan">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-4">
              Slik fungerer Hjemmeskolen.no
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Enkelt og strukturert — slik at barna raskt finner det de trenger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRINNKORT.map((kort, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl mb-5">
                  {kort.emoji}
                </div>
                <h3 className="font-display font-800 text-lg text-gray-900 mb-2">{kort.tittel}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{kort.tekst}</p>
              </div>
            ))}
          </div>

          {/* Steps visual */}
          <div className="mt-16 bg-gradient-to-br from-brand-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                { steg: '1', tittel: 'Velg klasse', icon: '🎒', tekst: 'Klikk på 1.–7. klasse' },
                { steg: '2', tittel: 'Velg fag', icon: '📐', tekst: 'Matte, norsk eller engelsk' },
                { steg: '3', tittel: 'Velg tema', icon: '🗂️', tekst: 'F.eks. «Multiplikasjon»' },
                { steg: '4', tittel: 'Lær og øv', icon: '🏆', tekst: 'Les, løs oppgaver, ta quiz' },
              ].map((s, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-display font-900 text-lg mx-auto mb-4 shadow-md">
                    {s.steg}
                  </div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h4 className="font-display font-800 text-gray-900 mb-1">{s.tittel}</h4>
                  <p className="text-sm text-gray-500">{s.tekst}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-6 left-[calc(100%-1rem)] text-gray-300 text-xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULÆRE TEMAER ── */}
      <section className="py-16 bg-surface">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-4">
              Populære temaer
            </h2>
            <p className="text-gray-500 text-lg">
              De temaene barn og foreldre søker mest etter
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {POPULÆRE_EMNER.map((emne, i) => {
              const fagCfg = fagConfig[emne.fag as keyof typeof fagConfig]
              return (
                <Link
                  key={i}
                  href={`/klasse/${emne.klasseSlug}/${emne.fag}/${emne.tema}`}
                  className="card p-5 flex items-center gap-4 hover:scale-[1.02] transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: fagCfg.fargeLight }}
                  >
                    {emne.ikon}
                  </div>
                  <div>
                    <div className="font-display font-800 text-gray-900">{emne.tittel}</div>
                    <div className="text-sm text-gray-400">
                      {emne.klasseSlug.replace('-klasse', '')}. klasse · {fagCfg.tittel}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FOR FORELDRE ── */}
      <section className="py-16 bg-white" id="foreldre">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-semibold text-orange-700 mb-6">
                👨‍👩‍👧 For foreldre og foresatte
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-6">
                Holder norsk pensum — uansett hvor du bor
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Bor dere i utlandet i noen måneder? Eller vil du at barnet ditt skal øve litt ekstra hjemme?
                Hjemmeskolen.no gir deg et strukturert og gratis alternativ som følger det norske skolepensumet nøyaktig.
              </p>
              <ul className="space-y-4">
                {[
                  '✓ Ingen innlogging nødvendig',
                  '✓ Alltid gratis — ingen skjulte kostnader',
                  '✓ Fungerer på alle enheter',
                  '✓ Strukturert etter norsk klassetrinn',
                  '✓ Tydelig fremgang gjennom temaene',
                  '✓ Trygt og uten reklame',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="text-brand-600 font-bold">{item.slice(0, 1)}</span>
                    <span>{item.slice(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/for-foreldre" className="btn-primary">
                  Les mer for foreldre →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand-50 to-green-50 rounded-3xl p-8 space-y-4">
                {[
                  { ikon: '✈️', tittel: 'I utlandet?', tekst: 'Følg norsk pensum uansett hvor i verden dere befinner dere.' },
                  { ikon: '📅', tittel: 'Ekstra øving', tekst: 'Perfekt for 15–20 minutter læring etter skolen eller i helger.' },
                  { ikon: '🌍', tittel: 'Hjemmeskole', tekst: 'Strukturert innhold som hjelper hjemmeskolingsfamilier.' },
                  { ikon: '🔄', tittel: 'Repetisjon', tekst: 'La barnet repetere tema de ikke forstod på skolen.' },
                ].map((k, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-sm">
                    <span className="text-2xl">{k.ikon}</span>
                    <div>
                      <div className="font-display font-800 text-gray-900">{k.tittel}</div>
                      <div className="text-sm text-gray-500">{k.tekst}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (AEO) ── */}
      <section className="py-16 bg-surface">
        <div className="section-container max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900 mb-12 text-center">
            Vanlige spørsmål
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Er Hjemmeskolen.no virkelig gratis?',
                a: 'Ja, Hjemmeskolen.no er helt gratis å bruke for alle. Det er ingen betaling, ingen abonnement og ingen skjulte kostnader. Plattformen er støttet av annonsering (ikke rettet mot barn) og bidragsgivere.',
              },
              {
                q: 'Trenger jeg å opprette en konto?',
                a: 'Nei, du trenger ikke å opprette en konto. Bare gå til siden, velg klasse og start å lære. Alt er tilgjengelig uten innlogging.',
              },
              {
                q: 'Følger innholdet norsk skolepensum?',
                a: 'Ja, alt innhold er laget basert på Kunnskapsløftet 2020 — det offisielle norske læreplanverket. Temaene er strukturert etter vanlig norsk progresjon for hvert klassetrinn.',
              },
              {
                q: 'Passer plattformen for barn i utlandet?',
                a: 'Absolutt! Hjemmeskolen.no er spesielt laget for norske familier som bor i utlandet i kortere eller lengre perioder. Det gir barna mulighet til å holde seg oppdatert på norsk skolepensum.',
              },
              {
                q: 'Hvilke fag er tilgjengelig?',
                a: 'I fase 1 har vi matematikk, norsk og engelsk for alle klassetrinn fra 1. til 7. klasse. Naturfag, samfunnsfag og KRLE planlegges i fase 2.',
              },
            ].map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-display font-800 text-gray-900 mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 bg-brand-600">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-white mb-4">
            Klar til å begynne?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Velg klassen til barnet ditt og kom i gang med gratis læring i dag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/klasse/1-klasse" className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-2xl hover:bg-brand-50 transition-colors shadow-lg text-lg">
              Start med 1. klasse 🌱
            </Link>
            <Link href="/klasse/7-klasse" className="inline-flex items-center gap-2 bg-brand-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-800 transition-colors shadow-lg text-lg">
              Gå til 7. klasse 🏆
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Hjemmeskolen.no',
            description: 'Gratis norsk læringsplattform for barn fra 1. til 7. klasse',
            url: 'https://hjemmeskolen.no',
            educationalLevel: ['PrimaryEducation'],
            inLanguage: 'nb',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'NOK',
            },
          }),
        }}
      />
    </div>
  )
}
