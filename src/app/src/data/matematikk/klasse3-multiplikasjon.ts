import type { TemaInnhold } from '@/types'

// ============================================================
// MATEMATIKK — 3. KLASSE — MULTIPLIKASJON
// Originalt innhold basert på Kunnskapsløftet 2020
// ============================================================

export const multiplikasjon3: TemaInnhold = {
  slug: 'multiplikasjon',
  tittel: 'Multiplikasjon',
  ingress: 'Multiplikasjon er en rask måte å legge sammen like store tall. I stedet for å skrive 3 + 3 + 3 kan du skrive 3 × 3.',
  forklaring: `Multiplikasjon betyr at vi legger sammen den samme mengden flere ganger.

Tenk deg at du har 4 kurver, og i hver kurv er det 3 epler. Hvor mange epler er det totalt?
Du kan legge sammen slik: 3 + 3 + 3 + 3 = 12
Eller du kan gange: 4 × 3 = 12

Det er akkurat det samme — men ganging er mye raskere!

Vi sier: "4 ganger 3 er lik 12"
Vi skriver: 4 × 3 = 12

Det første tallet (4) forteller oss hvor mange grupper vi har.
Det andre tallet (3) forteller oss hvor mange det er i hver gruppe.
Svaret (12) kaller vi produktet.`,
  eksempler: [
    '2 × 3 = 6 (to grupper med tre i hver = 3 + 3)',
    '5 × 4 = 20 (fem grupper med fire i hver = 4 + 4 + 4 + 4 + 4)',
    '3 × 7 = 21 (tre grupper med sju i hver)',
    '6 × 2 = 12 (seks grupper med to i hver = 2 + 2 + 2 + 2 + 2 + 2)',
    '1 × 9 = 9 (en gruppe med ni = bare 9)',
    '0 × 5 = 0 (null grupper = ingenting)',
  ],
  læringsmål: [
    'Forstå at multiplikasjon er gjentatt addisjon',
    'Kjenne gangetabellen for 2, 3, 4, 5 og 10',
    'Skrive gangestykker riktig med ×-tegnet',
    'Løse enkle tekstoppgaver med multiplikasjon',
    'Forstå at vi kan gange i hvilken rekkefølge vi vil (3 × 4 = 4 × 3)',
  ],
  nøkkelord: ['multiplikasjon', 'ganging', 'gange', 'gangetabell', 'produkt', 'faktor', 'grupper', 'gjentatt addisjon'],
  oppgaver: [
    {
      id: 'mult3-o1',
      type: 'flervalg',
      sporsmal: 'Hva er 3 × 4?',
      svar: '12',
      hint: 'Tell grupper: 4 + 4 + 4',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mult3-o2',
      type: 'flervalg',
      sporsmal: 'Hva er 5 × 2?',
      svar: '10',
      hint: 'Fem grupper med to: 2 + 2 + 2 + 2 + 2',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mult3-o3',
      type: 'tall',
      sporsmal: 'Skriv svaret: 6 × 3 = ?',
      svar: 18,
      hint: 'Tre grupper med seks, eller seks grupper med tre',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mult3-o4',
      type: 'tall',
      sporsmal: 'Emma har 4 bokser. I hver boks er det 5 fargeblyanter. Hvor mange fargeblyanter har hun totalt?',
      svar: 20,
      hint: '4 bokser med 5 i hver = 4 × 5',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mult3-o5',
      type: 'tall',
      sporsmal: 'Hva er 7 × 2?',
      svar: 14,
      hint: 'Se på 2-gangen: 2, 4, 6, 8, 10, 12, 14',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mult3-o6',
      type: 'flervalg',
      sporsmal: 'Hva er 10 × 4?',
      svar: '40',
      hint: 'Gange med 10 er enkelt – bare legg til en null!',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mult3-o7',
      type: 'tall',
      sporsmal: 'Det er 3 lag i et fotballturnering. Hvert lag har 9 spillere. Hvor mange spillere er det totalt?',
      svar: 27,
      hint: '3 × 9 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mult3-o8',
      type: 'tall',
      sporsmal: 'Hva er 8 × 5?',
      svar: 40,
      hint: '5-gangen: 5, 10, 15, 20, 25, 30, 35, 40',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mult3-o9',
      type: 'tall',
      sporsmal: 'Hva er 6 × 6?',
      svar: 36,
      hint: 'Seks seksere: 6 + 6 + 6 + 6 + 6 + 6',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'mult3-o10',
      type: 'flervalg',
      sporsmal: 'Lars sier at 4 × 7 er det samme som 7 × 4. Har han rett?',
      svar: 'Ja, ganging kan gjøres i begge retninger',
      hint: 'Prøv begge: 4 × 7 og 7 × 4',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'mult3-q1',
      sporsmal: 'Hva er 3 × 5?',
      alternativer: ['10', '15', '20', '12'],
      riktigSvar: 1,
      forklaring: '3 × 5 = 15. Tre grupper med fem: 5 + 5 + 5 = 15.',
    },
    {
      id: 'mult3-q2',
      sporsmal: 'Hva betyr 4 × 6?',
      alternativer: ['4 pluss 6', 'Fire grupper med seks', 'Seks minus fire', 'Ti totalt'],
      riktigSvar: 1,
      forklaring: 'Multiplikasjon betyr grupper. 4 × 6 betyr fire grupper med seks i hver.',
    },
    {
      id: 'mult3-q3',
      sporsmal: 'Hva er 2 × 9?',
      alternativer: ['16', '11', '18', '20'],
      riktigSvar: 2,
      forklaring: '2 × 9 = 18. To grupper med ni: 9 + 9 = 18.',
    },
    {
      id: 'mult3-q4',
      sporsmal: 'Det er 5 eskere og 4 godterier i hver eske. Hvor mange godterier er det?',
      alternativer: ['9', '16', '20', '25'],
      riktigSvar: 2,
      forklaring: '5 × 4 = 20. Fem eskere med fire i hver gir 20 godterier.',
    },
    {
      id: 'mult3-q5',
      sporsmal: 'Hva er 10 × 7?',
      alternativer: ['17', '63', '70', '77'],
      riktigSvar: 2,
      forklaring: 'Gange med 10 betyr å legge til en null. 10 × 7 = 70.',
    },
  ],
  relaterteTemaer: ['addisjon-til-100', 'divisjon', 'tallinja'],
  nesteTema: 'divisjon',
  forrigeTema: 'subtraksjon-til-100',
  metaTittel: 'Multiplikasjon | Matematikk 3. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær multiplikasjon for 3. klasse. Forstå gangetabellen, gjentatt addisjon og løs oppgaver med quiz. Gratis og tilpasset norsk skolepensum.',
}
