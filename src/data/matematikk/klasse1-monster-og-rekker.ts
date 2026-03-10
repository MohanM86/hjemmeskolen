import type { TemaInnhold } from '@/types'

export const monsterOgRekker: TemaInnhold = {
  slug: 'monster-og-rekker',
  tittel: 'Mønstre og rekker',
  ingress: 'Et mønster er noe som gjentar seg. Vi ser mønstre overalt — i klær, på fliser, i musikk og i tallrekker. Når vi finner mønsteret, kan vi forutse hva som kommer neste!',
  forklaring: `Et mønster er en regel som gjentar seg igjen og igjen.

FORMØNSTRE
Det enkleste mønsteret er å bytte mellom to ting:
🔴🔵🔴🔵🔴🔵 — rød, blå, rød, blå... (hva kommer neste?)

Litt mer avansert:
🔴🔴🔵🔴🔴🔵 — rød, rød, blå, rød, rød, blå...

TALLREKKER
Tall kan også danne mønstre:
2, 4, 6, 8, 10 — vi legger til 2 hver gang
1, 3, 5, 7, 9 — vi legger til 2 hver gang (men starter på 1)
10, 8, 6, 4, 2 — vi trekker fra 2 hver gang

Slik finner du mønsteret:
1. Se på de to første tallene
2. Spør: Er det noe som legges til eller trekkes fra?
3. Sjekk om det stemmer med resten
4. Bruk regelen til å finne neste tall

KJERNEN i et mønster:
Kjernen er den minste delen som gjentar seg.
I 🔴🔵🔴🔵🔴🔵 er kjernen 🔴🔵`,
  eksempler: [
    '🟡🔵🟡🔵🟡? → Neste er 🔵 (kjernen er gul-blå)',
    '1, 2, 3, 1, 2, 3, 1, 2, ? → Neste er 3',
    '2, 4, 6, 8, ? → Neste er 10 (legg til 2)',
    '10, 9, 8, 7, ? → Neste er 6 (trekk fra 1)',
    'Stor, liten, stor, liten, ? → Neste er stor',
  ],
  læringsmål: [
    'Gjenkjenne enkle mønstre med former og farger',
    'Fortsette en enkel tallrekke',
    'Beskrive regelen i et mønster',
    'Finne kjernen i et gjentakende mønster',
  ],
  nøkkelord: ['mønster', 'rekke', 'gjenta', 'kjerne', 'regel', 'neste', 'fortsette', 'tallrekke'],
  oppgaver: [
    {
      id: 'mor-o1',
      type: 'tall',
      sporsmal: 'Hva kommer neste? 1, 2, 3, 4, 5, ?',
      svar: 6,
      hint: 'Vi legger til 1 hver gang',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mor-o2',
      type: 'tall',
      sporsmal: 'Hva kommer neste? 2, 4, 6, 8, ?',
      svar: 10,
      hint: 'Vi legger til 2 hver gang',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mor-o3',
      type: 'tall',
      sporsmal: 'Hva kommer neste? 10, 8, 6, 4, ?',
      svar: 2,
      hint: 'Vi trekker fra 2 hver gang',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mor-o4',
      type: 'tall',
      sporsmal: 'Hva kommer neste? 1, 3, 5, 7, ?',
      svar: 9,
      hint: 'Vi legger til 2 hver gang',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mor-o5',
      type: 'tall',
      sporsmal: 'Hva mangler? 3, 6, 9, ?, 15',
      svar: 12,
      hint: 'Vi legger til 3 hver gang',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mor-o6',
      type: 'tall',
      sporsmal: 'Rekken starter: 5, 5, 5, 5. Hva er det femte tallet?',
      svar: 5,
      hint: 'Alle tallene er like',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mor-o7',
      type: 'tall',
      sporsmal: 'Hva kommer neste? 10, 9, 8, 7, 6, ?',
      svar: 5,
      hint: 'Vi trekker fra 1 hver gang',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mor-o8',
      type: 'tall',
      sporsmal: 'Hva mangler? 2, 4, ?, 8, 10',
      svar: 6,
      hint: 'Vi legger til 2 — 4 + 2 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mor-o9',
      type: 'tall',
      sporsmal: 'Mønsteret er: legg til 3. Start på 0. Hva er det fjerde tallet?',
      svar: 9,
      hint: '0, 3, 6, ? (legg til 3 tre ganger)',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'mor-o10',
      type: 'tall',
      sporsmal: 'Hva er neste tall? 1, 2, 1, 2, 1, ?',
      svar: 2,
      hint: 'Kjernen gjentar seg: 1, 2, 1, 2...',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'mor-q1',
      sporsmal: 'Hva kommer neste i rekken? 2, 4, 6, 8, __',
      alternativer: ['9', '12', '10', '11'],
      riktigSvar: 2,
      forklaring: 'Vi legger til 2 hver gang. 8 + 2 = 10.',
    },
    {
      id: 'mor-q2',
      sporsmal: 'Hva er regelen i denne rekken? 10, 9, 8, 7, 6',
      alternativer: ['Legg til 1', 'Trekk fra 2', 'Legg til 2', 'Trekk fra 1'],
      riktigSvar: 3,
      forklaring: 'Vi trekker fra 1 hver gang: 10−1=9, 9−1=8, 8−1=7...',
    },
    {
      id: 'mor-q3',
      sporsmal: 'Hva mangler? 1, 3, 5, __, 9',
      alternativer: ['6', '8', '7', '4'],
      riktigSvar: 2,
      forklaring: 'Vi legger til 2: 1, 3, 5, 7, 9. Det manglende tallet er 7.',
    },
    {
      id: 'mor-q4',
      sporsmal: 'Hva er kjernen i mønsteret: 🔴🔵🔴🔵🔴🔵?',
      alternativer: ['🔴🔵🔴', '🔵🔴', '🔴🔵', '🔴🔴🔵'],
      riktigSvar: 2,
      forklaring: 'Kjernen er den minste delen som gjentar seg: 🔴🔵.',
    },
    {
      id: 'mor-q5',
      sporsmal: 'Hva er neste tall? 5, 10, 5, 10, 5, __',
      alternativer: ['5', '15', '10', '0'],
      riktigSvar: 2,
      forklaring: 'Kjernen er 5, 10 — den gjentar seg. Etter 5 kommer 10.',
    },
  ],
  relaterteTemaer: ['tall-til-10', 'tall-til-20', 'sortering'],
  forrigeTema: 'klokken-hel',
  nesteTema: 'sortering',
  metaTittel: 'Mønstre og rekker | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å finne og fortsette mønstre og tallrekker for 1. klasse. Oppdag regler i rekker og øv med quiz. Gratis matematikk basert på norsk skolepensum.',
}
