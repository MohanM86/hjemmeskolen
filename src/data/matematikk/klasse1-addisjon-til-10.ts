import type { TemaInnhold } from '@/types'

export const addisjontil10: TemaInnhold = {
  slug: 'addisjon-til-10',
  tittel: 'Addisjon til 10',
  ingress: 'Addisjon betyr å legge sammen. Når vi plusser to tall, finner vi ut hvor mange det er totalt. Her lærer vi å plusse tall der svaret er 10 eller mindre.',
  forklaring: `Addisjon er å legge to mengder sammen til én.

Vi bruker plustegnet (+) og er-lik-tegnet (=):
3 + 4 = 7

Les det slik: «tre pluss fire er lik sju»

Du kan tenke på det som klosser:
🟦🟦🟦 + 🟩🟩🟩🟩 = 🟦🟦🟦🟩🟩🟩🟩 (7 klosser)

Viktige regnestykker til 10 du bør huske:
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6
4 + 4 = 8
5 + 5 = 10
1 + 9 = 10
2 + 8 = 10
3 + 7 = 10
4 + 6 = 10

Et smart triks: Rekkefølgen spiller ingen rolle!
3 + 4 = 7, og 4 + 3 = 7 (samme svar!)

Du kan bruke fingrene til å regne. Hold opp 3 fingre på én hånd og 4 på den andre — tell alle: 1, 2, 3, 4, 5, 6, 7.`,
  eksempler: [
    '2 + 3 = 5 (to epler pluss tre epler er fem epler)',
    '4 + 4 = 8 (fire fugler pluss fire fugler er åtte fugler)',
    '1 + 9 = 10 (én katt pluss ni katter er ti katter)',
    '6 + 0 = 6 (pluss null endrer ikke svaret)',
    '5 + 5 = 10 (to halvfulle hender gir to fulle hender)',
  ],
  læringsmål: [
    'Bruke plustegnet (+) og er-lik-tegnet (=) riktig',
    'Legge sammen to tall der svaret er 10 eller mindre',
    'Forstå at rekkefølgen ikke spiller noen rolle (3+4 = 4+3)',
    'Kjenne til vennepar til 10 (1+9, 2+8, 3+7, 4+6, 5+5)',
    'Bruke fingre eller gjenstander som hjelpemiddel',
  ],
  nøkkelord: ['addisjon', 'plusse', 'pluss', 'legge sammen', 'sum', 'er lik', 'vennepar', 'totalt'],
  oppgaver: [
    {
      id: 'at10-o1',
      type: 'tall',
      sporsmal: 'Hva er 2 + 3?',
      svar: 5,
      hint: 'Bruk fingrene: hold opp 2, legg til 3 til',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'at10-o2',
      type: 'tall',
      sporsmal: 'Hva er 4 + 4?',
      svar: 8,
      hint: 'Fire pluss fire — tell: 1,2,3,4 ... 5,6,7,8',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'at10-o3',
      type: 'tall',
      sporsmal: 'Hva er 1 + 6?',
      svar: 7,
      hint: 'Start på 6 og tell én til',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'at10-o4',
      type: 'tall',
      sporsmal: 'Du har 3 røde baller og 2 blå baller. Hvor mange baller har du totalt?',
      svar: 5,
      hint: '3 + 2 = ?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'at10-o5',
      type: 'tall',
      sporsmal: 'Hva er 5 + 4?',
      svar: 9,
      hint: 'Start på 5 og tell fire til: 6, 7, 8, 9',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'at10-o6',
      type: 'tall',
      sporsmal: 'Hva mangler? 3 + ? = 7',
      svar: 4,
      hint: 'Tre pluss hva gir sju? Tell fra 3 til 7',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'at10-o7',
      type: 'tall',
      sporsmal: 'Det sitter 4 fugler i et tre. 3 fugler til flyr inn. Hvor mange fugler er det nå?',
      svar: 7,
      hint: '4 + 3 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'at10-o8',
      type: 'tall',
      sporsmal: 'Hva er 6 + 4?',
      svar: 10,
      hint: '6 og 4 er vennepar til 10',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'at10-o9',
      type: 'tall',
      sporsmal: 'Hva er 0 + 8?',
      svar: 8,
      hint: 'Pluss null endrer ikke svaret',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'at10-o10',
      type: 'tall',
      sporsmal: 'Hva mangler? ? + 5 = 10',
      svar: 5,
      hint: 'Fem pluss hva gir ti? Husk vennepar!',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'at10-q1',
      sporsmal: 'Hva er 3 + 5?',
      alternativer: ['7', '9', '8', '6'],
      riktigSvar: 2,
      forklaring: '3 + 5 = 8. Tre pluss fem er lik åtte.',
    },
    {
      id: 'at10-q2',
      sporsmal: 'Sofie har 4 klistremerker. Hun får 3 til. Hvor mange har hun nå?',
      alternativer: ['6', '8', '7', '5'],
      riktigSvar: 2,
      forklaring: '4 + 3 = 7. Sofie har sju klistremerker.',
    },
    {
      id: 'at10-q3',
      sporsmal: 'Hva er 5 + 5?',
      alternativer: ['9', '11', '10', '8'],
      riktigSvar: 2,
      forklaring: '5 + 5 = 10. Fem pluss fem er ti. Det er et vennepar til 10!',
    },
    {
      id: 'at10-q4',
      sporsmal: 'Hva er 2 + 8?',
      alternativer: ['9', '10', '11', '6'],
      riktigSvar: 1,
      forklaring: '2 + 8 = 10. To og åtte er vennepar til 10.',
    },
    {
      id: 'at10-q5',
      sporsmal: 'Er 4 + 3 det samme som 3 + 4?',
      alternativer: ['Nei, de er forskjellige', 'Ja, begge er 7', 'Ja, begge er 8', 'Nei, 4+3 er størst'],
      riktigSvar: 1,
      forklaring: 'Ja! 4 + 3 = 7 og 3 + 4 = 7. Rekkefølgen spiller ingen rolle ved addisjon.',
    },
  ],
  relaterteTemaer: ['tall-til-10', 'tall-til-20', 'subtraksjon-til-10'],
  forrigeTema: 'tall-til-20',
  nesteTema: 'subtraksjon-til-10',
  metaTittel: 'Addisjon til 10 | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å plusse tall til og med 10 for 1. klasse. Forstå addisjon, vennepar og løs oppgaver med quiz. Gratis matematikk basert på norsk skolepensum.',
}
