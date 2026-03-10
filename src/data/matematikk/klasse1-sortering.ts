import type { TemaInnhold } from '@/types'

export const sortering: TemaInnhold = {
  slug: 'sortering',
  tittel: 'Sortering og kategorisering',
  ingress: 'Sortering betyr å ordne ting etter bestemte regler — etter farge, størrelse, form eller annen egenskap. Vi sorterer ting hver dag uten å tenke over det!',
  forklaring: `Sortering betyr å sette ting i grupper etter hva de har til felles.

Vi kan sortere etter FARGE:
🔴🔴🔴 | 🔵🔵🔵 | 🟡🟡
Alle røde for seg, alle blå for seg, alle gule for seg.

Vi kan sortere etter FORM:
⭕⭕⭕ | 🔺🔺 | ◻◻◻◻
Alle sirkler for seg, alle trekanter for seg, alle firkanter for seg.

Vi kan sortere etter STØRRELSE:
Stor 🐘 | Middels 🐕 | Liten 🐭
Ordne fra størst til minst, eller fra minst til størst.

Vi kan sortere etter TYPE:
Frukt: 🍎🍊🍋 | Grønnsaker: 🥕🥦🧅 | Drikke: 🥛🧃

Viktige begreper:
GRUPPE — en samling med ting som har noe til felles
EGENSKAP — det som gjør noe til det det er (farge, form, størrelse)
KATEGORI — en type gruppe

Matematikk og sortering:
Når vi sorterer og teller, kan vi finne ut hvilken gruppe som er størst og hvilken som er minst.`,
  eksempler: [
    'Sortere sokker etter farge: svarte for seg, hvite for seg',
    'Sortere klosser etter form: sirkler her, firkanter der',
    'Sortere dyr etter størrelse: minste til størst',
    'Sortere mat: frukt i én gruppe, grønnsaker i en annen',
    'Sortere blyanter etter lengde: korte, mellomstore, lange',
  ],
  læringsmål: [
    'Sortere gjenstander etter farge, form og størrelse',
    'Forklare hvilken regel som ble brukt til sortering',
    'Telle hvor mange som er i hver gruppe',
    'Bruke matematiske begreper som gruppe, egenskap og kategori',
  ],
  nøkkelord: ['sortering', 'kategorisering', 'gruppe', 'egenskap', 'farge', 'form', 'størrelse', 'kategori', 'sortere'],
  oppgaver: [
    {
      id: 'sort-o1',
      type: 'flervalg',
      sporsmal: 'Du sorterer klosser etter farge. Hvilken egenskap bruker du?',
      svar: 'Farge',
      hint: 'Hvilken egenskap beskriver rødt, blått og gult?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'sort-o2',
      type: 'tall',
      sporsmal: 'Det er 3 røde baller, 2 blå baller og 4 gule baller. Hvor mange grupper er det?',
      svar: 3,
      hint: 'Hver farge er én gruppe',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'sort-o3',
      type: 'tall',
      sporsmal: 'Du sorterer disse dyrene etter størrelse: hund, maur, elefant, mus. Hvor mange er i gruppen "stor"? (hund og elefant teller som store)',
      svar: 2,
      hint: 'Hund og elefant er de største dyrene i listen',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'sort-o4',
      type: 'flervalg',
      sporsmal: 'Eple, pære, banan og gulrot — hva hører IKKE hjemme i fruktgruppen?',
      svar: 'Gulrot',
      hint: 'Gulrot er en grønnsak, ikke en frukt',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'sort-o5',
      type: 'tall',
      sporsmal: 'Du har 5 trekanter og 3 sirkler. Hvilken gruppe er størst? Skriv antallet i den største gruppen.',
      svar: 5,
      hint: '5 eller 3 — hvilken er størst?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'sort-o6',
      type: 'flervalg',
      sporsmal: 'Hva er en «egenskap» i matematikk?',
      svar: 'Noe som beskriver en gjenstand, som farge eller form',
      hint: 'Egenskaper er det vi sorterer etter',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'sort-o7',
      type: 'flervalg',
      sporsmal: 'Noen sorterer sko etter farge. Andre sorterer dem etter størrelse. Er begge metodene riktige?',
      svar: 'Ja, begge er riktige — vi bestemmer selv egenskapen',
      hint: 'Det finnes ikke bare én måte å sortere på',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'sort-o8',
      type: 'tall',
      sporsmal: 'Det er 2 hunder, 3 katter og 1 kanin. Hvor mange dyr er det totalt?',
      svar: 6,
      hint: '2 + 3 + 1 = ?',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'sort-o9',
      type: 'flervalg',
      sporsmal: 'Du sorterer disse ordene: sol, regn, bil, sky, tog, snø. Hvilke to grupper passer best?',
      svar: 'Vær og transport',
      hint: 'Sol, regn, sky og snø handler om vær. Bil og tog er...',
      vanskelighetsgrad: 'vanskelig',
    },
    {
      id: 'sort-o10',
      type: 'tall',
      sporsmal: 'Du sorterer 10 klosser i to like grupper. Hvor mange er det i hver gruppe?',
      svar: 5,
      hint: '10 delt på 2 like grupper = ?',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'sort-q1',
      sporsmal: 'Du sorterer klosser i to grupper: røde og blå. Det er 4 røde og 3 blå. Hvilken gruppe er størst?',
      alternativer: ['Blå', 'De er like store', 'Røde', 'Vi vet ikke'],
      riktigSvar: 2,
      forklaring: '4 er mer enn 3, så den røde gruppen er størst.',
    },
    {
      id: 'sort-q2',
      sporsmal: 'Hva er riktig når vi sorterer etter FORM?',
      alternativer: ['Vi lager grupper med samme farge', 'Vi lager grupper med samme form', 'Vi lager grupper med samme størrelse', 'Vi lager grupper med samme vekt'],
      riktigSvar: 1,
      forklaring: 'Sortering etter form betyr at vi samler alle sirkler, alle trekanter, alle firkanter osv.',
    },
    {
      id: 'sort-q3',
      sporsmal: 'Hva hører hjemme i gruppen «grønnsaker»?',
      alternativer: ['Eple', 'Gulrot', 'Banan', 'Appelsin'],
      riktigSvar: 1,
      forklaring: 'Gulrot er en grønnsak. Eple, banan og appelsin er frukt.',
    },
    {
      id: 'sort-q4',
      sporsmal: 'Du skal sortere blyanter etter lengde. Hvilken egenskap bruker du?',
      alternativer: ['Farge', 'Type', 'Form', 'Størrelse'],
      riktigSvar: 3,
      forklaring: 'Lengde er en form for størrelse — vi sorterer etter størrelse.',
    },
    {
      id: 'sort-q5',
      sporsmal: 'Det er 6 dyr. 4 er i gruppen "store dyr". Hvor mange er i gruppen "små dyr"?',
      alternativer: ['3', '4', '2', '5'],
      riktigSvar: 2,
      forklaring: '6 − 4 = 2. Hvis 4 er store, er de resterende 2 i den lille gruppen.',
    },
  ],
  relaterteTemaer: ['former-og-figurer', 'mer-og-mindre', 'monster-og-rekker'],
  forrigeTema: 'monster-og-rekker',
  metaTittel: 'Sortering og kategorisering | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å sortere gjenstander etter farge, form og størrelse for 1. klasse. Øv på kategorisering med oppgaver og quiz. Gratis matematikk basert på norsk skolepensum.',
}
