import type { TemaInnhold } from '@/types'

// ============================================================
// NORSK — 1. KLASSE — BOKSTAVENE A–M
// Originalt innhold basert på Kunnskapsløftet 2020
// ============================================================

export const bokstaverAM1: TemaInnhold = {
  slug: 'bokstaver-a-m',
  tittel: 'Bokstavene A–M',
  ingress: 'Nå skal vi lære de første bokstavene i alfabetet! Vi begynner med A og går til M. Disse bokstavene finner du i mange av ordene du leser og skriver.',
  forklaring: `Alle ord er laget av bokstaver. Det norske alfabetet har 29 bokstaver.
Vi starter med de første 13: A, B, C, D, E, F, G, H, I, J, K, L, M.

Hver bokstav har to former:
- Stor bokstav (store): A B C D E F G H I J K L M
- Liten bokstav (minuskler): a b c d e f g h i j k l m

Hver bokstav lager også en lyd. Vi kaller dette fonemen. 
For eksempel lager bokstaven A lyden "aaa" – som i "and" og "appelsin".`,
  eksempler: [
    'A a — "aaa" — And, Appelsin, Arm',
    'B b — "bbb" — Ball, Bil, Bamse',
    'C c — "sss" eller "kkk" — Cafe, Camilla',
    'D d — "ddd" — Dyr, Dame, Dør',
    'E e — "eee" — Eple, Elefant, Emil',
    'F f — "fff" — Fugl, Fisk, Far',
    'G g — "ggg" — Gris, Gutt, Grønn',
    'H h — "hhh" — Hund, Hus, Hylle',
    'I i — "iii" — Is, Insekt, Igle',
    'J j — "jjj" — Jul, Jente, Jordbær',
    'K k — "kkk" — Katt, Kopp, Kule',
    'L l — "lll" — Løve, Lys, Leke',
    'M m — "mmm" — Mus, Mor, Melk',
  ],
  læringsmål: [
    'Kjenne igjen store og små bokstaver A til M',
    'Si lyden til hver bokstav',
    'Finne bokstaver i ord og setninger',
    'Skrive bokstavene med riktig form',
    'Koble bokstav til bilder og ord',
  ],
  nøkkelord: ['bokstav', 'alfabet', 'lyd', 'stor bokstav', 'liten bokstav', 'fonemer', 'vokaler', 'konsonanter'],
  oppgaver: [
    {
      id: 'bam1-o1',
      type: 'flervalg',
      sporsmal: 'Hvilken bokstav begynner ordet "Hund" med?',
      svar: 'H',
      hint: 'Si ordet høyt: H-und. Hva er første lyd?',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'bam1-o2',
      type: 'flervalg',
      sporsmal: 'Hvilken bokstav lager lyden "aaa"?',
      svar: 'A',
      hint: 'Tenk på "and" eller "appelsin"',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'bam1-o3',
      type: 'flervalg',
      sporsmal: 'Hva er den lille versjonen av bokstaven K?',
      svar: 'k',
      hint: 'Store K ser slik ut: K — liten ser nesten lik ut men er mindre',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'bam1-o4',
      type: 'flervalg',
      sporsmal: 'Hvilket ord begynner med bokstaven M?',
      svar: 'Melk',
      hint: 'M lager lyden "mmm" — tenk på ting som begynner med den lyden',
      vanskelighetsgrad: 'lett',
    },
    {
      id: 'bam1-o5',
      type: 'flervalg',
      sporsmal: 'Hvilken bokstav kommer etter D i alfabetet?',
      svar: 'E',
      hint: 'Synger vi: A, B, C, D... hva kommer da?',
      vanskelighetsgrad: 'middels',
    },
    {
      id: 'bam1-o6',
      type: 'flervalg',
      sporsmal: 'Hvor mange bokstaver er det fra A til M?',
      svar: '13',
      hint: 'Tell dem: A, B, C, D, E, F, G, H, I, J, K, L, M',
      vanskelighetsgrad: 'middels',
    },
  ],
  quiz: [
    {
      id: 'bam1-q1',
      sporsmal: 'Hvilken bokstav begynner ordet "Fugl" med?',
      alternativer: ['E', 'F', 'G', 'H'],
      riktigSvar: 1,
      forklaring: '"Fugl" begynner med bokstaven F. F lager lyden "fff".',
    },
    {
      id: 'bam1-q2',
      sporsmal: 'Hva er riktig liten bokstav for A?',
      alternativer: ['A', 'a', 'Å', 'å'],
      riktigSvar: 1,
      forklaring: 'Stor A skrives A og liten a skrives a. De lager samme lyd!',
    },
    {
      id: 'bam1-q3',
      sporsmal: 'Hvilket dyr begynner med bokstaven K?',
      alternativer: ['Hund', 'Løve', 'Katt', 'Fugl'],
      riktigSvar: 2,
      forklaring: '"Katt" begynner med K. K lager lyden "kkk".',
    },
    {
      id: 'bam1-q4',
      sporsmal: 'Hvilken bokstav lager lyden "mmm"?',
      alternativer: ['N', 'L', 'B', 'M'],
      riktigSvar: 3,
      forklaring: 'Bokstaven M lager lyden "mmm" – som i "mor" og "melk".',
    },
    {
      id: 'bam1-q5',
      sporsmal: 'Hvilken bokstav kommer mellom B og D?',
      alternativer: ['A', 'C', 'E', 'F'],
      riktigSvar: 1,
      forklaring: 'Alfabetet går: A, B, C, D... Mellom B og D er det C.',
    },
  ],
  relaterteTemaer: ['bokstaver-n-aa', 'lyder-og-fonemer', 'enkle-ord'],
  nesteTema: 'bokstaver-n-aa',
  metaTittel: 'Bokstavene A–M | Norsk 1. klasse | Hjemmeskolen.no',
  metaBeskrivelse: 'Lær bokstavene A til M for 1. klasse. Norsk alfabet med lyder, eksempler og quiz. Gratis norsk for barn i 1. klasse.',
}
