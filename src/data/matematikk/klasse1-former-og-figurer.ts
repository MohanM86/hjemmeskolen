import type { TemaInnhold } from '@/types'

export const formerOgFigurer: TemaInnhold = {
  slug: 'former-og-figurer',
  tittel: 'Former og figurer',
  ingress: 'Verden rundt oss er full av former. En pizzabunn er en sirkel, et vindu er ofte et rektangel og en advarselsskilt er en trekant. La oss lære de vanligste formene!',
  forklaring: `Vi ser former overalt. I matematikken kaller vi dem 2D-former (todimensjonale — flat på papiret).

De fire viktigste formene i 1. klasse:

SIRKEL ⭕
- Helt rund, ingen hjørner og ingen rette sider
- Eksempler: sol, mynt, pizzabunn, hjul

TREKANT 🔺
- 3 sider og 3 hjørner
- Eksempler: advarselsskilt, takform, en skive pizza

KVADRAT ◻
- 4 like lange sider og 4 hjørner
- Alle sidene er like lange
- Eksempler: et terningside, et vindu, et sjakkbrett

REKTANGEL ▭
- 4 sider og 4 hjørner
- De to lange sidene er like, og de to korte sidene er like
- Et kvadrat er egentlig et spesielt rektangel der alle sider er like!
- Eksempler: dør, ark, TV-skjerm

Begreper:
- SIDE: den rette linjen som danner kanten av en form
- HJØRNE: der to sider møtes (et knekk)

Tips: Tell alltid hjørnene og sidene for å finne ut hvilken form det er!`,
  eksempler: [
    'Sirkel: ingen sider, ingen hjørner — helt rund',
    'Trekant: 3 sider og 3 hjørner',
    'Kvadrat: 4 like sider og 4 hjørner',
    'Rektangel: 4 sider (2 lange + 2 korte) og 4 hjørner',
    'Et stopp-skilt er et åttekant — det har 8 sider!',
  ],
  læringsmål: [
    'Kjenne igjen sirkel, trekant, kvadrat og rektangel',
    'Telle sider og hjørner på en figur',
    'Sortere figurer etter form',
    'Finne former i hverdagen rundt seg',
  ],
  nøkkelord: ['sirkel', 'trekant', 'kvadrat', 'rektangel', 'side', 'hjørne', 'form', 'figur', 'rund', 'flat'],
  oppgaver: [
    {
      id: 'fof-o1',
      type: 'tall',
      sporsmal: 'Hvor mange sider har en trekant?',
      svar: 3,
      hint: 'Tri betyr tre — trekant!',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'fof-o2',
      type: 'tall',
      sporsmal: 'Hvor mange hjørner har et kvadrat?',
      svar: 4,
      hint: 'Et kvadrat har like mange hjørner som sider',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'fof-o3',
      type: 'flervalg',
      sporsmal: 'Hvilken form er helt rund og har ingen hjørner?',
      svar: 'Sirkel',
      hint: 'Tenk på en ball eller en mynt',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'fof-o4',
      type: 'tall',
      sporsmal: 'Hvor mange sider har et rektangel?',
      svar: 4,
      hint: 'Et rektangel ligner på et kvadrat, men er avlangt',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'fof-o5',
      type: 'flervalg',
      sporsmal: 'En pizzaskive som er kuttet som en kile — hvilken form ligner den på?',
      svar: 'Trekant',
      hint: 'Tell hjørnene på pizzaskiven',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'fof-o6',
      type: 'flervalg',
      sporsmal: 'Hva er forskjellen på et kvadrat og et rektangel?',
      svar: 'Et kvadrat har fire like lange sider',
      hint: 'Begge har 4 sider — hva er spesielt med et kvadrat?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'fof-o7',
      type: 'tall',
      sporsmal: 'En form har 0 hjørner og 0 sider. Hvilken form er det? (Skriv 1 for sirkel)',
      svar: 1,
      hint: 'Hvilken form er helt rund?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'fof-o8',
      type: 'tall',
      sporsmal: 'Hvor mange hjørner har en trekant?',
      svar: 3,
      hint: 'En trekant har like mange hjørner som sider',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'fof-o9',
      type: 'flervalg',
      sporsmal: 'Et vindu er avlangt — bredere enn det er høyt. Hvilken form er det?',
      svar: 'Rektangel',
      hint: 'Det har 4 sider men de er ikke like lange',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'fof-o10',
      type: 'tall',
      sporsmal: 'Du tegner en form med 3 hjørner. Hvor mange sider har den?',
      svar: 3,
      hint: 'Antall hjørner = antall sider for denne formen',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'fof-q1',
      sporsmal: 'Hvilken form har 3 sider og 3 hjørner?',
      alternativer: ['Sirkel', 'Kvadrat', 'Trekant', 'Rektangel'],
      riktigSvar: 2,
      forklaring: 'Trekanten har 3 sider og 3 hjørner. "Tre" betyr tre!',
    },
    {
      id: 'fof-q2',
      sporsmal: 'Hvilken form er en mynt?',
      alternativer: ['Trekant', 'Rektangel', 'Kvadrat', 'Sirkel'],
      riktigSvar: 3,
      forklaring: 'En mynt er rund — det er en sirkel. Den har ingen sider og ingen hjørner.',
    },
    {
      id: 'fof-q3',
      sporsmal: 'Hvor mange sider har et kvadrat?',
      alternativer: ['3', '5', '4', '6'],
      riktigSvar: 2,
      forklaring: 'Et kvadrat har 4 sider — alle er like lange.',
    },
    {
      id: 'fof-q4',
      sporsmal: 'Hva er likt mellom et kvadrat og et rektangel?',
      alternativer: ['Begge er runde', 'Begge har 4 sider', 'Begge har 3 hjørner', 'Begge har like lange sider'],
      riktigSvar: 1,
      forklaring: 'Begge har 4 sider og 4 hjørner. Forskjellen er at kvadratet har 4 like sider.',
    },
    {
      id: 'fof-q5',
      sporsmal: 'En dør er høyere enn den er bred. Hvilken form er den?',
      alternativer: ['Sirkel', 'Trekant', 'Kvadrat', 'Rektangel'],
      riktigSvar: 3,
      forklaring: 'En dør er et rektangel — 4 sider der to er lange og to er korte.',
    },
  ],
  relaterteTemaer: ['sortering', 'maaling-og-lengde'],
  forrigeTema: 'mer-og-mindre',
  nesteTema: 'maaling-og-lengde',
  metaTittel: 'Former og figurer | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær om sirkel, trekant, kvadrat og rektangel for 1. klasse. Tell sider og hjørner og finn former i hverdagen. Gratis matematikk basert på norsk skolepensum.',
}
