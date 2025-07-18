// pages/trippie/[slug].tsx

import { useRouter } from 'next/router';
import { trippies } from '@/lib/trippieData';  // Import trippie data

export default function TrippiePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the trippie by slug
  const trippie = trippies.find((t) => t.slug === slug);

  if (!trippie) {
    return <div>Trippie not found!</div>;  // Handle case when trippie is not found
  }

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">{trippie.name}</h1>

        {/* Trippie Image */}
        <div className="text-center mb-8">
          <img
            src={`/images/${trippie.slug}.jpg`}  // Ensure the image exists in public/images folder
            alt={trippie.name}
            className="w-full h-48 object-cover mb-4"
          />
        </div>

        {/* Quirky Traits */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-1">Quirky Traits:</h2>
          <ul className="list-disc list-inside">
            {trippie.quirkyTraits.map((trait, idx) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>
        </div>

        {/* Strengths */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-1">Strengths:</h2>
          <p>{trippie.strengths}</p>
        </div>

        {/* Weaknesses */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-1">Weaknesses:</h2>
          <p>{trippie.weaknesses}</p>
        </div>
      </div>
    </main>
  );
}
