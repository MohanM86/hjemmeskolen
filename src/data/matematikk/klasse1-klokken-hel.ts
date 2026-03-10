import type { TemaInnhold } from '@/types'

export const klokkenhel: TemaInnhold = {
  slug: 'klokken-hel',
  tittel: 'Klokken – hele timer',
  ingress: 'Klokken hjelper oss å vite hva tid det er. I 1. klasse lærer vi å lese klokken når den viser hele timer — som klokken 3 eller klokken 7.',
  forklaring: `En klokke har to visere:

Den KORTE viseren (timeviser):
- Viser hvilken time det er
- Beveger seg sakte rundt

Den LANGE viseren (minuttviser):
- Viser minutter
- Når den lange viseren peker rett opp (mot 12), er det HEL TIME

Når vi leser hel time:
- Se på den KORTE viseren
- Den lange viseren peker alltid rett opp (på 12)

Eksempler:
🕐 Klokken 1: kort viser på 1, lang viser på 12
🕒 Klokken 3: kort viser på 3, lang viser på 12
🕗 Klokken 7: kort viser på 7, lang viser på 12

Tallene på klokken:
Klokken har tallene 1–12. Viserne går med solen (med klokken).

Digital klokke:
På en digital klokke ser hel time slik ut:
03:00 = klokken 3
07:00 = klokken 7
12:00 = klokken 12 (middag!)

En dag har 24 timer. Klokken går rundt to ganger i løpet av en dag.`,
  eksempler: [
    'Lang viser på 12 + kort viser på 5 = klokken 5',
    'Lang viser på 12 + kort viser på 8 = klokken 8',
    '06:00 = klokken 6 (morgentid — frokost!)',
    '12:00 = klokken 12 (middag!)',
    '19:00 = klokken 7 (kveldstid)',
  ],
  læringsmål: [
    'Kjenne igjen den korte viseren (timeviser) og den lange viseren (minuttviser)',
    'Lese klokken når den viser hele timer',
    'Forstå at den lange viseren peker på 12 ved hel time',
    'Koble analoge klokkeslett til digitale (f.eks. 3:00)',
  ],
  nøkkelord: ['klokke', 'time', 'hel time', 'timeviser', 'minuttviser', 'digital', 'analog', 'viser'],
  oppgaver: [
    {
      id: 'kh-o1',
      type: 'tall',
      sporsmal: 'Den lange viseren peker på 12 og den korte peker på 4. Hva er klokken?',
      svar: 4,
      hint: 'Se på den korte viseren — den viser timen',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'kh-o2',
      type: 'tall',
      sporsmal: 'Den lange viseren peker på 12 og den korte peker på 9. Hva er klokken?',
      svar: 9,
      hint: 'Den korte viseren viser timen',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'kh-o3',
      type: 'flervalg',
      sporsmal: 'Hva viser den lange viseren når det er hel time?',
      svar: '12',
      hint: 'Den lange viseren peker alltid rett OPP ved hel time',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'kh-o4',
      type: 'tall',
      sporsmal: 'Klokken er 07:00 på den digitale klokken. Hva er klokken?',
      svar: 7,
      hint: 'De første tallene viser timen',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'kh-o5',
      type: 'tall',
      sporsmal: 'Du skal stå opp klokken 7. Hvilken viser ser du på for å sjekke timen?',
      svar: 1,
      hint: 'Skriv 1 for timeviser (den korte) eller 2 for minuttviser (den lange)',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'kh-o6',
      type: 'tall',
      sporsmal: 'Det er klokken 6 om morgenen. Hva viser den korte viseren?',
      svar: 6,
      hint: 'Den korte viseren viser alltid timen',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'kh-o7',
      type: 'flervalg',
      sporsmal: 'Klokken er 12:00. Hva kalles dette på norsk?',
      svar: 'Middag',
      hint: 'Klokken 12 midt på dagen har et spesielt navn',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'kh-o8',
      type: 'tall',
      sporsmal: 'Skolen starter klokken 8. Hva viser den korte viseren da?',
      svar: 8,
      hint: 'Den korte viseren viser timen — 8',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'kh-o9',
      type: 'tall',
      sporsmal: 'Klokken er 03:00. Skriv timen som et tall.',
      svar: 3,
      hint: '03:00 betyr klokken 3',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'kh-o10',
      type: 'tall',
      sporsmal: 'Klokken er nå 5. Om 3 timer, hva er klokken da?',
      svar: 8,
      hint: '5 + 3 = ?',
      vanskelighetsgrad: 'vanskelig',
    },
  ],
  quiz: [
    {
      id: 'kh-q1',
      sporsmal: 'Hva peker den lange viseren på når det er hel time?',
      alternativer: ['6', '3', '12', '9'],
      riktigSvar: 2,
      forklaring: 'Ved hel time peker den lange viseren alltid rett opp på 12.',
    },
    {
      id: 'kh-q2',
      sporsmal: 'Hvilken viser viser hvilken TIME det er?',
      alternativer: ['Den lange', 'Den korte', 'Begge to', 'Ingen av dem'],
      riktigSvar: 1,
      forklaring: 'Den KORTE viseren (timeviseren) viser timen.',
    },
    {
      id: 'kh-q3',
      sporsmal: 'Den korte viseren peker på 2 og den lange på 12. Hva er klokken?',
      alternativer: ['Klokken 12', 'Klokken 2', 'Klokken 6', 'Klokken 10'],
      riktigSvar: 1,
      forklaring: 'Den korte viseren er på 2 og den lange er på 12 — det er klokken 2.',
    },
    {
      id: 'kh-q4',
      sporsmal: 'Hva betyr 08:00 på en digital klokke?',
      alternativer: ['Klokken 0', 'Klokken 8 minutter', 'Klokken 8', 'Klokken 80'],
      riktigSvar: 2,
      forklaring: '08:00 betyr klokken 8 — tallene foran kolon (:) viser timen.',
    },
    {
      id: 'kh-q5',
      sporsmal: 'Klokken er 4. Om 2 timer, hva er klokken da?',
      alternativer: ['5', '7', '6', '8'],
      riktigSvar: 2,
      forklaring: '4 + 2 = 6. Klokken er 6.',
    },
  ],
  relaterteTemaer: ['tall-til-10', 'tall-til-20'],
  forrigeTema: 'maaling-og-lengde',
  nesteTema: 'monster-og-rekker',
  metaTittel: 'Klokken – hele timer | Matematikk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær å lese klokken på hele timer for 1. klasse. Forstå timeviser og minuttviser med oppgaver og quiz. Gratis matematikk basert på norsk skolepensum.',
}
