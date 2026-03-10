import type { TemaInnhold } from '@/types'

export const subtraksjonTil10: TemaInnhold = {
  slug: 'subtraksjon-til-10',
  tittel: 'Subtraksjon til 10',
  ingress: 'Subtraksjon betyr å ta bort. Når vi bruker minustegnet, finner vi ut hvor mange som er igjen etter at noen er tatt bort.',
  forklaring: `Subtraksjon er det motsatte av addisjon. Vi tar bort en mengde fra en annen.

Vi bruker minustegnet (−) og er-lik-tegnet (=):
7 − 3 = 4

Les det slik: «sju minus tre er lik fire»

Tenk på det slik:
Du har 7 kjeks 🍪🍪🍪🍪🍪🍪🍪
Du spiser 3 av dem 🍪🍪🍪
Da er det 4 igjen 🍪🍪🍪🍪

Viktige ting å huske:
- Vi kan ikke ta bort mer enn vi har (du kan ikke spise 8 kjeks hvis du bare har 7)
- Et tall minus null er alltid det samme tallet (7 − 0 = 7)
- Et tall minus seg selv er alltid null (5 − 5 = 0)

Subtraksjon og addisjon henger sammen:
Hvis 3 + 4 = 7, så er 7 − 4 = 3 (og 7 − 3 = 4)
Dette er lurt å huske!`,
  eksempler: [
    '5 − 2 = 3 (fem minus to er tre)',
    '8 − 5 = 3 (åtte fugler, fem flyr bort, tre er igjen)',
    '10 − 6 = 4 (ti minus seks er fire)',
    '6 − 0 = 6 (ingen tas bort, alle er igjen)',
    '9 − 9 = 0 (alle tas bort, ingen er igjen)',
  ],
  læringsmål: [
    'Bruke minustegnet (−) riktig',
    'Trekke fra to tall der begge er 10 eller mindre',
    'Forstå subtraksjon som å ta bort',
    'Se sammenhengen mellom addisjon og subtraksjon',
    'Forstå at et tall minus seg selv er null',
  ],
  nøkkelord: ['subtraksjon', 'minus', 'ta bort', 'trekke fra', 'differanse', 'igjen', 'tilbake'],
  oppgaver: [
    {
      id: 'st10-o1',
      type: 'tall',
      sporsmal: 'Hva er 5 − 2?',
      svar: 3,
      hint: 'Hold opp 5 fingre og bøy ned 2',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'st10-o2',
      type: 'tall',
      sporsmal: 'Hva er 7 − 4?',
      svar: 3,
      hint: 'Start på 7 og tell baklengs 4 ganger: 6, 5, 4, 3',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'st10-o3',
      type: 'tall',
      sporsmal: 'Det er 6 epler i en kurv. Du spiser 3. Hvor mange er igjen?',
      svar: 3,
      hint: '6 − 3 = ?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'st10-o4',
      type: 'tall',
      sporsmal: 'Hva er 8 − 8?',
      svar: 0,
      hint: 'Når vi tar bort alle, er svaret alltid null',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'st10-o5',
      type: 'tall',
      sporsmal: 'Hva er 10 − 4?',
      svar: 6,
      hint: 'Husk vennepar: 4 + 6 = 10, så 10 − 4 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'st10-o6',
      type: 'tall',
      sporsmal: 'Hva mangler? 9 − ? = 5',
      svar: 4,
      hint: 'Ni minus hva gir fem? 5 + ? = 9',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'st10-o7',
      type: 'tall',
      sporsmal: '8 barn leker i sandkassen. 3 går hjem. Hvor mange er igjen?',
      svar: 5,
      hint: '8 − 3 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'st10-o8',
      type: 'tall',
      sporsmal: 'Hva er 9 − 0?',
      svar: 9,
      hint: 'Minus null betyr at ingenting tas bort',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'st10-o9',
      type: 'tall',
      sporsmal: 'Hva er 10 − 7?',
      svar: 3,
      hint: 'Husk: 7 + 3 = 10, så 10 − 7 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'st10-o10',
      type: 'tall',
      sporsmal: 'Du har 10 kroner og bruker 6. Hvor mange kroner har du igjen?',
      svar: 4,
      hint: '10 − 6 = ?',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'st10-q1',
      sporsmal: 'Hva er 6 − 2?',
      alternativer: ['3', '5', '4', '8'],
      riktigSvar: 2,
      forklaring: '6 − 2 = 4. Seks minus to er fire.',
    },
    {
      id: 'st10-q2',
      sporsmal: 'Det er 9 ballonger. 4 sprekker. Hvor mange er igjen?',
      alternativer: ['13', '6', '5', '4'],
      riktigSvar: 2,
      forklaring: '9 − 4 = 5. Det er fem ballonger igjen.',
    },
    {
      id: 'st10-q3',
      sporsmal: 'Hva er 10 − 10?',
      alternativer: ['1', '10', '0', '20'],
      riktigSvar: 2,
      forklaring: '10 − 10 = 0. Et tall minus seg selv er alltid null.',
    },
    {
      id: 'st10-q4',
      sporsmal: 'Hva er 7 − 5?',
      alternativer: ['3', '2', '1', '4'],
      riktigSvar: 1,
      forklaring: '7 − 5 = 2. Sju minus fem er to.',
    },
    {
      id: 'st10-q5',
      sporsmal: 'Hvis 4 + 6 = 10, hva er da 10 − 6?',
      alternativer: ['6', '5', '16', '4'],
      riktigSvar: 3,
      forklaring: '10 − 6 = 4. Addisjon og subtraksjon henger sammen: 4 + 6 = 10, så 10 − 6 = 4.',
    },
  ],
  relaterteTemaer: ['addisjon-til-10', 'tall-til-10', 'mer-og-mindre'],
  forrigeTema: 'addisjon-til-10',
  nesteTema: 'mer-og-mindre',
  metaTittel: 'Subtraksjon til 10 | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær subtraksjon til og med 10 for 1. klasse. Øv på å ta bort og trekke fra med oppgaver og quiz. Gratis matematikk basert på norsk skolepensum.',
}
