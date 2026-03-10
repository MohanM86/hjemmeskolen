import type { TemaInnhold } from '@/types'

export const merOgMindre: TemaInnhold = {
  slug: 'mer-og-mindre',
  tittel: 'Mer og mindre',
  ingress: 'Noen ganger vil vi vite hvem som har flest, hvem som har færrest, eller om to mengder er like store. Det kalles å sammenligne tall.',
  forklaring: `Når vi sammenligner tall, bruker vi tre begreper:

MER (større enn)
7 er mer enn 4 — fordi 7 er lenger ut på tallrekken enn 4.
Vi skriver det slik: 7 > 4 (den spisse pilen peker mot det lille tallet)

MINDRE (mindre enn)
3 er mindre enn 8 — fordi 3 er kortere ut på tallrekken enn 8.
Vi skriver det slik: 3 < 8 (den spisse pilen peker mot det lille tallet)

LIKE MANGE
5 er like mye som 5 — to grupper med samme antall.
Vi skriver det slik: 5 = 5

En enkel huskeregel for > og <:
Tegnet er som en krokodilles munn 🐊
Krokodillen vil alltid spise det STØRSTE tallet.
Munnen åpner seg mot det største tallet.

8 > 3 betyr «krokodillen foretrekker 8»

Du kan også sammenligne ved å:
- Tegne prikker og se hvem som har flest
- Bruke tallinja — det tallet som er lenger til høyre er størst`,
  eksempler: [
    '9 er mer enn 6 → 9 > 6',
    '2 er mindre enn 7 → 2 < 7',
    '4 er like mye som 4 → 4 = 4',
    'En pose med 8 godterier har mer enn en pose med 5 → 8 > 5',
    'Krokodillen spiser alltid det største: 3 🐊 7 betyr 3 < 7',
  ],
  læringsmål: [
    'Bruke begrepene mer, mindre og like mange',
    'Sammenligne to tall og si hvilket som er størst/minst',
    'Forstå symbolene > (større enn) og < (mindre enn)',
    'Bruke tallrekken til å sammenligne tall',
  ],
  nøkkelord: ['mer', 'mindre', 'like mange', 'størst', 'minst', 'sammenligne', 'større enn', 'mindre enn', 'krokodille'],
  oppgaver: [
    {
      id: 'mom-o1',
      type: 'flervalg',
      sporsmal: 'Er 8 mer eller mindre enn 5?',
      svar: 'Mer',
      hint: 'Finn 5 og 8 på tallrekken — hvilken er lenger til høyre?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mom-o2',
      type: 'flervalg',
      sporsmal: 'Er 2 mer eller mindre enn 9?',
      svar: 'Mindre',
      hint: '2 er nær starten av tallrekken, 9 er nær slutten',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mom-o3',
      type: 'tall',
      sporsmal: 'Hvilket tall er størst: 3 eller 7?',
      svar: 7,
      hint: 'Bruk tallrekken: 1, 2, 3, 4, 5, 6, 7 — hvilken er lengst ut?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mom-o4',
      type: 'tall',
      sporsmal: 'Hvilket tall er minst: 6 eller 4?',
      svar: 4,
      hint: '4 er kortere ut på tallrekken enn 6',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mom-o5',
      type: 'flervalg',
      sporsmal: 'En pose har 6 godterier, en annen har 8. Hvilken pose har mer?',
      svar: 'Posen med 8',
      hint: '6 eller 8 — hvilket tall er størst?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mom-o6',
      type: 'flervalg',
      sporsmal: 'Hva betyr tegnet > i regnestykket 9 > 4?',
      svar: '9 er større enn 4',
      hint: 'Krokodillen spiser det største — munnen åpner mot 9',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mom-o7',
      type: 'tall',
      sporsmal: 'Sett inn riktig tall: 5 er like mange som ?',
      svar: 5,
      hint: 'Like mange betyr samme tall på begge sider',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mom-o8',
      type: 'tall',
      sporsmal: 'Lars har 7 bøker. Mia har 4 bøker. Hvem har flest? Skriv antallet.',
      svar: 7,
      hint: '7 eller 4 — hvilken er størst?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mom-o9',
      type: 'tall',
      sporsmal: 'Hva er det minste tallet du kan skrive inn her slik at det er sant: ? < 5',
      svar: 0,
      hint: 'Hvilket tall er minst mulig og likevel under 5?',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'mom-o10',
      type: 'tall',
      sporsmal: 'Hva er det største tallet du kan skrive inn her slik at det er sant: ? < 10',
      svar: 9,
      hint: 'Det må være mindre enn 10 — hva er det største tallet under 10?',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'mom-q1',
      sporsmal: 'Hvilket tall er størst?',
      alternativer: ['4', '9', '6', '2'],
      riktigSvar: 1,
      forklaring: '9 er størst. På tallrekken er 9 lenger til høyre enn 4, 6 og 2.',
    },
    {
      id: 'mom-q2',
      sporsmal: 'Hva betyr 3 < 8?',
      alternativer: ['3 er større enn 8', '3 er like mye som 8', '3 er mindre enn 8', '8 er mindre enn 3'],
      riktigSvar: 2,
      forklaring: '3 < 8 betyr at 3 er mindre enn 8. Krokodillen åpner munnen mot 8.',
    },
    {
      id: 'mom-q3',
      sporsmal: 'Emma har 5 klistremerker og Sofie har 5 klistremerker. Hvem har flest?',
      alternativer: ['Emma', 'Sofie', 'De har like mange', 'Ingen av dem'],
      riktigSvar: 2,
      forklaring: 'De har begge 5 klistremerker — de er like mange. 5 = 5.',
    },
    {
      id: 'mom-q4',
      sporsmal: 'Hva er riktig?',
      alternativer: ['7 < 3', '3 > 7', '7 > 3', '3 = 7'],
      riktigSvar: 2,
      forklaring: '7 > 3 betyr at 7 er større enn 3. Det er riktig!',
    },
    {
      id: 'mom-q5',
      sporsmal: 'Hvilket tall er minst?',
      alternativer: ['8', '1', '5', '3'],
      riktigSvar: 1,
      forklaring: '1 er minst. Det er nærmest 0 på tallrekken.',
    },
  ],
  relaterteTemaer: ['tall-til-10', 'tall-til-20', 'sortering'],
  forrigeTema: 'subtraksjon-til-10',
  nesteTema: 'former-og-figurer',
  metaTittel: 'Mer og mindre | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å sammenligne tall for 1. klasse. Forstå mer, mindre og like mange med symbolene > og <. Gratis matematikk basert på norsk skolepensum.',
}
