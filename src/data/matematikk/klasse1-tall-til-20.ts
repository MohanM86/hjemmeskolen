import type { TemaInnhold } from '@/types'

export const tallTil20: TemaInnhold = {
  slug: 'tall-til-20',
  tittel: 'Tall til 20',
  ingress: 'Etter 10 fortsetter tallrekken. Vi lærer tallene fra 11 til 20 — og forstår at de er bygget opp av en tier og enere.',
  forklaring: `Når vi har telt til 10, fortsetter vi videre. Tallene 11–20 er to-sifrede tall.

To-sifrede tall har to sifre:
- Det første sifferet viser antall tiere
- Det andre sifferet viser antall enere

11 = ti og en → «elleve»
12 = ti og to → «tolv»
13 = ti og tre → «tretten»
14 = ti og fire → «fjorten»
15 = ti og fem → «femten»
16 = ti og seks → «seksten»
17 = ti og sju → «sytten»
18 = ti og åtte → «atten»
19 = ti og ni → «nitten»
20 = to tiere → «tjue»

En fin måte å tenke på:
Hvis du har 10 epler i én kurv og 3 epler i en annen kurv, har du 13 epler totalt.

Alle tall fra 11–19 starter med «ti» (én tier) og legger til enere. 20 er spesielt — det er to hele tiere.`,
  eksempler: [
    '🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌 🍌🍌🍌 = 10 + 3 = 13 bananer',
    '10 + 5 = 15 (femten)',
    '10 + 8 = 18 (atten)',
    'En fotballspiller kan ha trøyenummer 11, 12, 13 ... opp til 20',
    'Tallrekken: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
  ],
  læringsmål: [
    'Telle fra 10 til 20',
    'Kjenne igjen og skrive tallene 11–20',
    'Forstå at to-sifrede tall er bygget opp av tiere og enere',
    'Plassere tallene 0–20 i riktig rekkefølge',
  ],
  nøkkelord: ['elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten', 'tjue', 'tier', 'ener', 'to-sifret'],
  oppgaver: [
    {
      id: 'tt20-o1',
      type: 'tall',
      sporsmal: 'Hvilket tall kommer etter 10?',
      svar: 11,
      hint: 'Ti, elleve...',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt20-o2',
      type: 'tall',
      sporsmal: 'Skriv tallet «femten» med siffer.',
      svar: 15,
      hint: 'Femten = ti og fem = 15',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt20-o3',
      type: 'tall',
      sporsmal: 'Hvilket tall er 10 + 7?',
      svar: 17,
      hint: 'Ti og sju er sytten',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt20-o4',
      type: 'tall',
      sporsmal: 'Vilket tall kommer før 20?',
      svar: 19,
      hint: 'Tell baklengs fra 20: tjue, nitten...',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'tt20-o5',
      type: 'tall',
      sporsmal: 'Du har 10 klistremerker i ett album og 6 løse. Hvor mange har du totalt?',
      svar: 16,
      hint: '10 + 6 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt20-o6',
      type: 'tall',
      sporsmal: 'Hvilket tall er 10 + 9?',
      svar: 19,
      hint: 'Ti og ni er nitten',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt20-o7',
      type: 'tall',
      sporsmal: 'Hvor mange enere er det i tallet 14?',
      svar: 4,
      hint: '14 = én tier og ? enere',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt20-o8',
      type: 'tall',
      sporsmal: 'Hvilket tall har 1 tier og 8 enere?',
      svar: 18,
      hint: '10 + 8 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'tt20-o9',
      type: 'tall',
      sporsmal: 'Hvor mange tiere er det i tallet 20?',
      svar: 2,
      hint: '20 = to tiere og null enere',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'tt20-o10',
      type: 'tall',
      sporsmal: 'Hva er det største to-sifrede tallet du kan lage med sifrene 1 og 0?',
      svar: 10,
      hint: 'Du kan lage 10 eller 01 — men 01 er det samme som 1',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'tt20-q1',
      sporsmal: 'Hva er 10 + 4?',
      alternativer: ['13', '14', '15', '40'],
      riktigSvar: 1,
      forklaring: '10 + 4 = 14. Ti og fire er fjorten.',
    },
    {
      id: 'tt20-q2',
      sporsmal: 'Hvilket tall heter «sytten»?',
      alternativer: ['16', '18', '17', '19'],
      riktigSvar: 2,
      forklaring: 'Sytten skrives som 17. Det er 10 + 7.',
    },
    {
      id: 'tt20-q3',
      sporsmal: 'Hvilket tall kommer mellom 12 og 14?',
      alternativer: ['11', '15', '13', '10'],
      riktigSvar: 2,
      forklaring: 'Mellom 12 og 14 kommer 13 — tolv, tretten, fjorten.',
    },
    {
      id: 'tt20-q4',
      sporsmal: 'Hvor mange enere er det i 16?',
      alternativer: ['1', '7', '16', '6'],
      riktigSvar: 3,
      forklaring: '16 = 1 tier + 6 enere. Enerne er 6.',
    },
    {
      id: 'tt20-q5',
      sporsmal: 'Hva er det største tallet vi har lært i dette temaet?',
      alternativer: ['10', '19', '20', '15'],
      riktigSvar: 2,
      forklaring: 'Vi lærte tall til 20. Tjue (20) er det største.',
    },
  ],
  relaterteTemaer: ['tall-til-10', 'addisjon-til-10', 'mer-og-mindre'],
  forrigeTema: 'tall-til-10',
  nesteTema: 'addisjon-til-10',
  metaTittel: 'Tall til 20 | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær tallene 11 til 20 for 1. klasse. Forstå tiere og enere, øv på å telle og skriv tall. Gratis matematikk basert på norsk skolepensum.',
}
