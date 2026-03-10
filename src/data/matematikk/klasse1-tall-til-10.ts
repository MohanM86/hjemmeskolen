import type { TemaInnhold } from '@/types'

// ============================================================
// MATEMATIKK — 1. KLASSE — TALL TIL 10
// Originalt innhold basert på Kunnskapsløftet 2020
// ============================================================

export const tallTil10: TemaInnhold = {
  slug: 'tall-til-10',
  tittel: 'Tall til 10',
  ingress: 'Tallene 0 til 10 er de første tallene vi lærer. Vi bruker dem hver dag — til å telle, leke og finne ut hvor mange det er av noe.',
  forklaring: `Tall er symboler vi bruker for å vise hvor mange det er av noe.

Tallene 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 og 10 er de første du lærer.

Hvert tall har et navn og et utseende:
0 = null (ingenting)
1 = en (én finger)
2 = to (øynene dine)
3 = tre (syklene på en trehjulssykkel)
4 = fire (bena på en hund)
5 = fem (fingrene på én hånd)
6 = seks (bena på en insekt)
7 = sju (dagene i en uke)
8 = åtte (bena på en edderkopp)
9 = ni (spillerne på et baseballlag)
10 = ti (fingrene på begge hender)

Tallene kommer alltid i samme rekkefølge. Når vi teller oppover, blir tallene større. Når vi teller nedover, blir de mindre.

Husk: null er også et tall! Det betyr at det ikke er noe der.`,
  eksempler: [
    '🍎🍎🍎 = 3 epler',
    '⭐⭐⭐⭐⭐ = 5 stjerner',
    '🐱🐱🐱🐱🐱🐱🐱 = 7 katter',
    '0 betyr ingenting — en tom tallerken har 0 epler',
    'Tallrekken: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
  ],
  læringsmål: [
    'Kjenne igjen og skrive tallene 0–10',
    'Telle gjenstander opp til 10',
    'Forstå at hvert tall representerer en bestemt mengde',
    'Si tallrekken i riktig rekkefølge',
    'Forstå at null betyr ingenting',
  ],
  nøkkelord: ['tall', 'siffer', 'telle', 'mengde', 'null', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti'],
  oppgaver: [
    {
      id: 'tt10-o1',
      type: 'tall',
      sporsmal: 'Tell fingrene på én hånd. Hvor mange er det?',
      svar: 5,
      hint: 'Bruk hånden din og tell hver finger',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o2',
      type: 'tall',
      sporsmal: 'En edderkopp har åtte bein. Hvilket tall er det?',
      svar: 8,
      hint: 'Åtte skrives med dette sifferet: 8',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o3',
      type: 'tall',
      sporsmal: 'Hvilket tall kommer etter 6?',
      svar: 7,
      hint: 'Tell videre fra 6: sekss... sju!',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o4',
      type: 'tall',
      sporsmal: 'Hvilket tall kommer før 4?',
      svar: 3,
      hint: 'Tell baklengs fra 4: fire... tre!',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o5',
      type: 'tall',
      sporsmal: 'En uke har sju dager. Skriv dette som et tall.',
      svar: 7,
      hint: 'Sju skrives som 7',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o6',
      type: 'tall',
      sporsmal: 'Du har ingen epler i hånden. Hvilket tall viser dette?',
      svar: 0,
      hint: 'Ingenting = null',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt10-o7',
      type: 'tall',
      sporsmal: 'Tell: 🐶🐶🐶🐶🐶🐶🐶🐶🐶. Hvor mange hunder er det?',
      svar: 9,
      hint: 'Tell hundene én og én',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt10-o8',
      type: 'tall',
      sporsmal: 'Hva er det største tallet du kan skrive med ett siffer?',
      svar: 9,
      hint: 'De ensifrede tallene er 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt10-o9',
      type: 'tall',
      sporsmal: 'Tell fingrene på begge hender. Hvor mange er det?',
      svar: 10,
      hint: '5 fingre på én hånd + 5 fingre på den andre',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt10-o10',
      type: 'tall',
      sporsmal: 'Hvilket tall er midt mellom 4 og 6?',
      svar: 5,
      hint: 'Tell: 4, ?, 6',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'tt10-q1',
      sporsmal: 'Hvor mange stjerner er det? ⭐⭐⭐⭐⭐⭐',
      alternativer: ['5', '6', '7', '8'],
      riktigSvar: 1,
      forklaring: 'Tell stjernene én og én: 1, 2, 3, 4, 5, 6. Det er 6 stjerner.',
    },
    {
      id: 'tt10-q2',
      sporsmal: 'Hvilket tall kommer etter 9?',
      alternativer: ['8', '10', '11', '7'],
      riktigSvar: 1,
      forklaring: 'Etter 9 kommer 10. Tallrekken er: ...8, 9, 10.',
    },
    {
      id: 'tt10-q3',
      sporsmal: 'Hva betyr tallet 0?',
      alternativer: ['Veldig mange', 'Ingenting', 'Ti', 'En'],
      riktigSvar: 1,
      forklaring: 'Null (0) betyr at det ikke er noe der — ingenting.',
    },
    {
      id: 'tt10-q4',
      sporsmal: 'En hund har fire bein. Hvilken tallkort passer?',
      alternativer: ['3', '5', '4', '6'],
      riktigSvar: 2,
      forklaring: 'En hund har fire bein, og fire skrives som 4.',
    },
    {
      id: 'tt10-q5',
      sporsmal: 'Hvilket tall er dette: åtte?',
      alternativer: ['6', '9', '7', '8'],
      riktigSvar: 3,
      forklaring: 'Åtte skrives som 8.',
    },
  ],
  relaterteTemaer: ['tall-til-20', 'addisjon-til-10', 'mer-og-mindre'],
  nesteTema: 'tall-til-20',
  metaTittel: 'Tall til 10 | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær tallene 0 til 10 for 1. klasse. Tel gjenstander, kjenn igjen siffer og øv med quiz. Gratis matematikk basert på norsk skolepensum.',
}
