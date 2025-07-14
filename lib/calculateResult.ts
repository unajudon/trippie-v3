// lib/calculateResult.ts

type Trippie = {
  name: string;
  mbti: string[];
  quirkyTraits: string[];
  strengths: string;
  weaknesses: string;
};

const TRIPPIES: Trippie[] = [
  {
    name: 'Monsieur Trippie',
    mbti: ['ENFP', 'ENTP'],
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
    name: 'Baby Egg Trippie',
    mbti: ['INFP'],
    quirkyTraits: [
      'Sleeps in a nest of neck pillows',
      'Talks to clouds and gives them names',
      'Sings lullabies to snacks',
      'Daydreams while floating mid-air'
    ],
    strengths: 'Empathetic, imaginative, idealistic',
    weaknesses: 'Can be sensitive, indecisive, withdrawn',
  },
  {
    name: 'Onigiri Trippie',
    mbti: ['ISFJ', 'ISTJ'],
    quirkyTraits: [
      'Always packs spare socks for others',
      'Uses bubble wrap for emotional protection',
      'Never forgets anyone’s birthday',
      'Folds maps with origami precision'
    ],
    strengths: 'Responsible, dependable, caring, detailed',
    weaknesses: 'Can resist change, take on too much, overly cautious',
  },
  {
    name: 'Boba Trippie',
    mbti: ['ESFP', 'ESFJ', 'ESTP'],
    quirkyTraits: [
      'Pops boba pearls when excited',
"Can't stop dancing when waiting in line",
      'Tries every new drink trend instantly',
      'Wears mismatched socks on purpose'
    ],
    strengths: 'Energetic, fun-loving, charming, lives in the moment',
    weaknesses: 'Impulsive, forgetful, easily distracted',
  },
  {
    name: 'Snorkeler Trippie',
    mbti: ['ISTP'],
    quirkyTraits: [
      'Wears fins everywhere “just in case”',
      'Fixes gadgets mid-flight',
      'Never reads manuals — just goes',
      'Has a toolkit disguised as a toiletry bag'
    ],
    strengths: 'Logical, adaptable, observant, independent',
    weaknesses: 'Can be blunt, aloof, risk-prone',
  },
  {
    name: 'Bao Trippie',
    mbti: ['INFJ', 'INTP'],
    quirkyTraits: [
      'Meditates before boarding',
      'Collects lost thoughts in tiny jars',
      'Quotes philosophers to passport officers',
      'Floats while thinking too hard'
    ],
    strengths: 'Insightful, reflective, deep, calm',
    weaknesses: 'Can be distant, overthink, struggle with practicals',
  },
  {
    name: 'YouTrippy',
    mbti: ['ENTJ', 'INTJ', 'ESTJ'],
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
    name: 'Surfer Trippie',
    mbti: ['ISFP'],
    quirkyTraits: [
      'Rides cloud-waves with headphones on',
      'Collects rare pebbles and shells',
      'Always humming a travel tune',
      'Has sand in their pocket at all times'
    ],
    strengths: 'Chill, artistic, kind, adaptable',
    weaknesses: 'Can be overly private, avoids conflict, drifts off tasks',
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

  for (const trippie of TRIPPIES) {
    if (trippie.mbti.includes(mbti)) {
      return trippie;
    }
  }

  return null;
}
