import type { TemaInnhold } from '@/types'

export const maalingOgLengde: TemaInnhold = {
  slug: 'maaling-og-lengde',
  tittel: 'Måling og lengde',
  ingress: 'Vi kan måle ting med kroppen vår! Skritt, håndsbredder og blyanter er alle gode måleenheter når vi ikke har en linjal.',
  forklaring: `Å måle betyr å finne ut hvor lang, høy eller bred noe er.

I 1. klasse bruker vi ikke-standardiserte enheter — det betyr vi måler med ting vi finner rundt oss.

Hva kan vi bruke til å måle?
🦶 SKRITT — ta skritt fra én ende til en annen og tell
✋ HÅNDSBREDDE — legg hånden flat og flytt den bortover
✏️ BLYANT — legg blyanter bortover og tell hvor mange
📏 Kloss — legg klosser i rad og tell

Eksempel: Hvor lang er pulten din?
Legg blyanter bortover: 1 blyant, 2 blyanter, 3 blyanter, 4 blyanter — pulten er 4 blyanter lang!

Viktige begreper:
LENGRE — når noe er lenger enn noe annet
KORTERE — når noe er kortere enn noe annet
LIKE LANGT — når to ting er like lange

Husk:
- Vi må bruke den SAMME enheten gjennom hele målingen
- En håndsbredde fra mamma er større enn fra deg — derfor ble standardmål laget (cm og m), men det lærer vi mer om senere!`,
  eksempler: [
    'Et bord er 6 blyanter langt',
    'En bok er 2 håndsbredder høy',
    'Gangen er 15 skritt lang',
    'Katten er kortere enn hunden',
    'To streker er like lange',
  ],
  læringsmål: [
    'Måle lengde med ikke-standardiserte enheter (blyant, skritt, håndsbredde)',
    'Bruke begrepene lengre, kortere og like langt',
    'Sammenligne to gjenstanderes lengde',
    'Forstå at man må bruke samme enhet gjennom en måling',
  ],
  nøkkelord: ['måle', 'lengde', 'lengre', 'kortere', 'like langt', 'skritt', 'håndsbredde', 'blyant', 'enhet'],
  oppgaver: [
    {
      id: 'mol-o1',
      type: 'flervalg',
      sporsmal: 'Du måler bordet med blyanter og teller 5. Hva betyr det?',
      svar: 'Bordet er 5 blyanter langt',
      hint: 'Antall blyanter forteller oss lengden',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mol-o2',
      type: 'tall',
      sporsmal: 'Du går fra døren til vinduet og teller 8 skritt. Hvor mange skritt er det?',
      svar: 8,
      hint: 'Les spørsmålet nøye',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mol-o3',
      type: 'flervalg',
      sporsmal: 'En katt er 4 håndsbredder lang. En hund er 7 håndsbredder lang. Hvem er lengst?',
      svar: 'Hunden',
      hint: '4 eller 7 — hvilken er størst?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mol-o4',
      type: 'flervalg',
      sporsmal: 'Hva betyr det at to streker er «like lange»?',
      svar: 'De er nøyaktig like store',
      hint: 'Like lang betyr samme lengde',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mol-o5',
      type: 'tall',
      sporsmal: 'En boks er 3 klosser høy. En annen er 5 klosser høy. Hvor mange klosser høyere er den høyeste?',
      svar: 2,
      hint: '5 − 3 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mol-o6',
      type: 'flervalg',
      sporsmal: 'Hvorfor er det lurt å bruke den SAMME enheten gjennom hele målingen?',
      svar: 'For å få et riktig svar',
      hint: 'Hva skjer hvis du bytter enhet midt i målingen?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mol-o7',
      type: 'tall',
      sporsmal: 'Et bord er 6 blyanter langt. Et annet er 4 blyanter langt. Hvor mange blyanter kortere er det korte bordet?',
      svar: 2,
      hint: '6 − 4 = ?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'mol-o8',
      type: 'flervalg',
      sporsmal: 'Du vil finne ut hvilken av to bøker som er tykkest. Hva gjør du?',
      svar: 'Legger dem ved siden av hverandre og ser',
      hint: 'Sammenligning betyr å sette side ved side',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'mol-o9',
      type: 'tall',
      sporsmal: 'Et tau er 10 skritt langt. Du har gått 4 skritt. Hvor mange skritt gjenstår?',
      svar: 6,
      hint: '10 − 4 = ?',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'mol-o10',
      type: 'flervalg',
      sporsmal: 'Kan du bruke mamma sine skritt til å måle samme rom som med dine skritt og få samme svar?',
      svar: 'Nei, mammas skritt er lengre',
      hint: 'Voksne har lengre bein enn barn',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'mol-q1',
      sporsmal: 'Hva bruker vi til å måle lengde i 1. klasse når vi ikke har linjal?',
      alternativer: ['Klokken', 'Blyanter, skritt eller håndsbredder', 'Kilo og gram', 'Minutter'],
      riktigSvar: 1,
      forklaring: 'Vi bruker blyanter, skritt, håndsbredder og andre gjenstander som måleenheter.',
    },
    {
      id: 'mol-q2',
      sporsmal: 'En pinne er 3 håndsbredder lang. En annen er 5 håndsbredder lang. Hvilken er kortere?',
      alternativer: ['Den som er 5 håndsbredder', 'De er like lange', 'Den som er 3 håndsbredder', 'Ingen av dem'],
      riktigSvar: 2,
      forklaring: 'Den som er 3 håndsbredder er kortere — 3 er mindre enn 5.',
    },
    {
      id: 'mol-q3',
      sporsmal: 'Hva betyr det at to streker er «like lange»?',
      alternativer: ['Den ene er lenger', 'De er nøyaktig like store', 'Den ene er kortere', 'Vi vet ikke'],
      riktigSvar: 1,
      forklaring: 'Like lange betyr nøyaktig samme lengde.',
    },
    {
      id: 'mol-q4',
      sporsmal: 'Et rom er 12 skritt langt. Et annet er 9 skritt langt. Hvilket er lengst?',
      alternativer: ['Det 9 skritt lange', 'De er like lange', 'Det 12 skritt lange', 'Vi kan ikke vite'],
      riktigSvar: 2,
      forklaring: '12 er større enn 9, så rommet som er 12 skritt er lengst.',
    },
    {
      id: 'mol-q5',
      sporsmal: 'Hvorfor kan mamma og du få ulikt svar når dere måler det samme rommet i skritt?',
      alternativer: ['Fordi rommet er rart', 'Fordi dere teller feil', 'Fordi mammas skritt er lengre', 'Fordi det ikke er lurt å måle i skritt'],
      riktigSvar: 2,
      forklaring: 'Mammas skritt er lengre enn dine, så hun trenger færre skritt for å dekke samme lengde.',
    },
  ],
  relaterteTemaer: ['former-og-figurer', 'sortering', 'mer-og-mindre'],
  forrigeTema: 'former-og-figurer',
  nesteTema: 'klokken-hel',
  metaTittel: 'Måling og lengde | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å måle lengde med skritt, blyanter og håndsbredder for 1. klasse. Sammenlign lengder og bruk begreper som kortere og lengre. Gratis matematikk.',
}
