'use client';

import { useRouter } from 'next/router';
import { trippies } from '@/lib/trippieData'; // move your data to a separate file

export default function TrippieResultPage() {
  const router = useRouter();
  const { slug } = router.query;

  const trippie = trippies.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === slug
  );

  if (!trippie) {
    return (
      <main className="min-h-screen flex items-center justify-center font-poppins">
        <p className="text-lg text-red-600">Trippie not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#7041F2] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins">
      <div className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-3xl p-10 text-center">
        <img
          src={`/images/${slug}.jpg`}
          alt={trippie.name}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{trippie.name}</h1>
        <p className="mb-4 text-white/80 italic">({trippie.mbti.join(', ')})</p>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Quirky Traits:</h2>
          <ul className="list-disc list-inside">
            {trippie.quirkyTraits.map((trait, idx) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Strengths:</h2>
          <p>{trippie.strengths}</p>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-1">Weaknesses:</h2>
          <p>{trippie.weaknesses}</p>
        </div>

        <a
          href="/all-trippies"
          className="mt-6 inline-block bg-white text-[#7041F2] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-200"
        >
          ← Back to All Trippies
        </a>
      </div>
    </main>
  );
}
