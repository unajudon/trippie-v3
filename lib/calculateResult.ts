// lib/calculateResult.ts
// lib/trippies.ts

export type Trippie = {
  name: string;
  mbti: string[];
  quirkyTraits: string[];
  strengths: string;
  weaknesses: string;
};

export const trippies: Trippie[] = [
  {
    name: 'YouTrippie',
    mbti: ['INTJ', 'ESTJ'],
    quirkyTraits: [
      'Leads a group tour uninvited',
      'Draws spreadsheets on café napkins',
      'Has an itinerary tattooed (temporarily)',
      'Knows the exchange rate everywhere'
    ],
    strengths: 'Strategic, confident, efficient, ambitious',
    weaknesses: 'Can be controlling, stubborn, impatient',
  },
  {
    name: 'Onitrippie',
    mbti: ['ENFP', 'ESFP'],
    quirkyTraits: [
      'Carries a passport for every mood',
      'Laughs mid-sentence then finishes it later',
      'Always finds hidden alleys and secret paths',
      'Has 10 half-filled travel journals'
    ],
    strengths: 'Creative, spontaneous, curious, witty',
    weaknesses: 'Easily distracted, avoids routine, may overcommit',
  },
  {
    name: 'Trippie Bro',
    mbti: ['ESTP', 'ISTP'],
    quirkyTraits: [
      'Backflips off clouds for fun',
      'Collects passport stamps like trophies',
      'Always looking for a “shortcut”',
      'Surfs turbulence like a pro'
    ],
    strengths: 'Bold, adaptable, action-oriented, observant',
    weaknesses: 'Impulsive, risk-prone, easily bored',
  },
  {
    name: 'Baby Trippie',
    mbti: ['INFP', 'ISFP'],
    quirkyTraits: [
      'Sleeps in a nest of neck pillows',
      'Talks to clouds and gives them names',
      'Sings lullabies to snacks',
      'Daydreams while floating mid-air'
    ],
    strengths: 'Empathetic, imaginative, idealistic, kind',
    weaknesses: 'Can be sensitive, indecisive, withdrawn',
  },
  {
    name: 'MerTrippie',
    mbti: ['ESFJ', 'ENTP'],
    quirkyTraits: [
      'Hosts underwater karaoke parties',
      'Has 500 travel contacts but still remembers your name',
      'Invents a new app idea daily',
      'Sends thank-you notes to dolphins'
    ],
    strengths: 'Charismatic, outgoing, generous, clever',
    weaknesses: 'Can overextend, get distracted, or crave validation',
  },
  {
    name: 'Monsieur Trippie',
    mbti: ['INFJ', 'ENTJ'],
    quirkyTraits: [
      'Wears a cape “just because”',
      'Quotes philosophers to passport officers',
      'Dreams in metaphors and flight maps',
      'Keeps their luggage minimalist but mysterious'
    ],
    strengths: 'Insightful, visionary, determined, persuasive',
    weaknesses: 'Overthinks, perfectionist, can steamroll others',
  },
  {
    name: 'Snorkeler Trippie',
    mbti: ['ISTJ', 'INTP'],
    quirkyTraits: [
      'Has a labelled drawer for every travel item',
      'Rewires magic maps for fun',
      'Memorizes flight schedules “just in case”',
      'Only trusts snorkels they built themselves'
    ],
    strengths: 'Logical, reliable, reflective, precise',
    weaknesses: 'Rigid at times, overthinks, socially aloof',
  },
  {
    name: 'Boba Trippie',
    mbti: ['ENFJ', 'ISFJ'],
    quirkyTraits: [
      'Pops boba pearls when excited',
      'Tries every new drink trend instantly',
      'Has a mini fan club without trying',
      'Remembers your order better than you do'
    ],
    strengths: 'Warm, caring, popular, responsible',
    weaknesses: 'People-pleasing, self-sacrificing, overly sentimental',
  },
];


export function getTrippieResult(answers: string[]): Trippie | null {
  const counts: Record<string, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };

  for (const value of answers) {
    if (counts[value] !== undefined) counts[value]++;
  }

  const EI = counts.E >= counts.I ? 'E' : 'I';
  const SN = counts.S >= counts.N ? 'S' : 'N';
  const TF = counts.T >= counts.F ? 'T' : 'F';
  const JP = counts.J >= counts.P ? 'J' : 'P';

  const mbti = `${EI}${SN}${TF}${JP}`;

  for (const trippie of trippies) {
    if (trippie.mbti.includes(mbti)) {
      return trippie;
    }
  }

  return null;
}
