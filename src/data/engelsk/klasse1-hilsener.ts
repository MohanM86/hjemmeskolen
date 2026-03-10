import type { TemaInnhold } from '@/types'

// ============================================================
// ENGELSK — 1. KLASSE — HILSENER OG HØFLIGHET
// Originalt innhold basert på Kunnskapsløftet 2020
// ============================================================

export const hilsener1: TemaInnhold = {
  slug: 'hilsener',
  tittel: 'Hilsener og høflighet',
  ingress: 'Nå skal vi lære å si hei og ha det på engelsk! Vi lærer også noen høflige ord som gjør at folk blir glade.',
  forklaring: `Engelsk er et språk som snakkes av mer enn 1,5 milliarder mennesker i verden.
Når du møter noen, kan du si hei på engelsk. Og når du forlater noen, sier du ha det!

De viktigste hilse-ordene på engelsk er:
- Hello! = Hei!
- Hi! = Hei! (mer uformelt)  
- Good morning! = God morgen!
- Good afternoon! = God ettermiddag!
- Good evening! = God kveld!
- Goodbye! = Ha det bra!
- Bye! = Ha det! (mer uformelt)
- See you! = Vi ses!

Høflige ord som alltid er bra å kunne:
- Please = Vær så snill
- Thank you = Takk
- Thank you very much = Tusen takk
- You're welcome = Vær så god / Ingen årsak
- Sorry = Unnskyld
- Excuse me = Unnskyld meg`,
  eksempler: [
    'Når du møter en venn om morgenen: "Hi! Good morning!"',
    'Når noen gir deg noe: "Thank you!"',
    'Når du vil ha hjelp: "Please, can you help me?"',
    'Når du forlater skolen: "Goodbye! See you tomorrow!"',
    'Når du bumper inn i noen: "Sorry!"',
  ],
  læringsmål: [
    'Si hello, hi, goodbye og bye riktig',
    'Bruke please og thank you i riktig situasjon',
    'Forstå enkle engelske hilsener',
    'Svare når noen hilser på deg på engelsk',
    'Kjenne til god morning, good afternoon og good evening',
  ],
  nøkkelord: ['hello', 'hi', 'goodbye', 'bye', 'please', 'thank you', 'sorry', 'good morning', 'hilsen', 'høflighet'],
  oppgaver: [
    {
      id: 'hil1-o1',
      type: 'flervalg',
      sporsmal: 'Hva betyr "Hello" på norsk?',
      svar: 'Hei',
      hint: 'Dette er det vanligste engelske hilse-ordet',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'hil1-o2',
      type: 'flervalg',
      sporsmal: 'Hva sier du på engelsk når du vil takke noen?',
      svar: 'Thank you',
      hint: 'To ord. Det første starter på T.',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'hil1-o3',
      type: 'flervalg',
      sporsmal: 'Hva betyr "Goodbye" på norsk?',
      svar: 'Ha det bra',
      hint: 'Du sier dette når du går hjem fra en venn',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'hil1-o4',
      type: 'flervalg',
      sporsmal: 'Du vil ha en kake. Hva legger du til for å være høflig?',
      svar: 'Please',
      hint: '"I want a cake... please!"',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'hil1-o5',
      type: 'flervalg',
      sporsmal: 'Hva betyr "Good morning"?',
      svar: 'God morgen',
      hint: '"Morning" betyr morgen på norsk',
      vanskelighetsgrad: 'lett',
    },
  ],
  quiz: [
    {
      id: 'hil1-q1',
      sporsmal: 'Hva betyr "Thank you"?',
      alternativer: ['Hei', 'Ha det', 'Takk', 'Unnskyld'],
      riktigSvar: 2,
      forklaring: '"Thank you" betyr "Takk" på norsk. Vi bruker det når vi er takknemlige.',
    },
    {
      id: 'hil1-q2',
      sporsmal: 'Noen hjelper deg. Hva sier du på engelsk?',
      alternativer: ['Sorry', 'Please', 'Goodbye', 'Thank you'],
      riktigSvar: 3,
      forklaring: 'Når noen hjelper deg, sier du "Thank you" = Takk!',
    },
    {
      id: 'hil1-q3',
      sporsmal: 'Hva sier du til en venn om morgenen på engelsk?',
      alternativer: ['Goodbye', 'Good morning', 'Good evening', 'Sorry'],
      riktigSvar: 1,
      forklaring: '"Good morning" betyr god morgen. Du sier dette om morgenen!',
    },
    {
      id: 'hil1-q4',
      sporsmal: 'Hva betyr "Please"?',
      alternativer: ['Hei', 'Ha det', 'Takk', 'Vær så snill'],
      riktigSvar: 3,
      forklaring: '"Please" betyr "vær så snill". Vi bruker det når vi ber om noe.',
    },
    {
      id: 'hil1-q5',
      sporsmal: 'Hva sier du på engelsk når du går hjem?',
      alternativer: ['Hello', 'Good morning', 'Goodbye', 'Please'],
      riktigSvar: 2,
      forklaring: '"Goodbye" betyr ha det bra. Vi sier det når vi forlater noen.',
    },
  ],
  relaterteTemaer: ['tall-1-10-en', 'farger-en', 'dyr-en'],
  nesteTema: 'tall-1-10-en',
  metaTittel: 'Hilsener og høflighet | Engelsk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær engelske hilsener for 1. klasse. Hello, goodbye, please og thank you med quiz. Gratis engelsk for norske barn.',
}
