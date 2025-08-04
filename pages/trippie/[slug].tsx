import { useRouter } from 'next/router';
import { trippies } from '@/lib/trippieData';

export default function TrippiePage() {
  const router = useRouter();
  const { slug } = router.query;

  const trippie = trippies.find((t) => t.slug === slug);

  if (!trippie) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] text-white font-poppins">
        <p className="text-lg">Trippie not found!</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex flex-col items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden space-y-6">
      <div className="relative z-10 max-w-md w-full text-center">
        {/* Trippie Result Image */}
        <img
          src={`/images/results/${trippie.slug}.png`}
          alt={trippie.name}
          className="w-full rounded-3xl shadow-2xl mb-6"
        />

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="bg-white text-[#7041F2] font-medium text-sm px-6 py-2 min-w-[140px] rounded-xl shadow hover:bg-gray-100 transition"
          >
            Retake Quiz
          </a>
          <a
            href="/all-trippies"
            className="bg-[#10DBAC] text-white font-medium text-sm px-6 py-2 min-w-[140px] rounded-xl shadow hover:bg-[#0cc69c] transition"
          >
            View All Trippies
          </a>
        </div>
      </div>
    </main>
  );
}
