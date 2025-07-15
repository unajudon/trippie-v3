'use client';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const trippies = [
  { name: 'Monsieur Trippie', slug: 'monsieur-trippie' },
  { name: 'Baby Egg Trippie', slug: 'baby-egg-trippie' },
  { name: 'Onigiri Trippie', slug: 'onigiri-trippie' },
  { name: 'Boba Trippie', slug: 'boba-trippie' },
  { name: 'Snorkeler Trippie', slug: 'snorkeler-trippie' },
  { name: 'Bao Trippie', slug: 'bao-trippie' },
  { name: 'YouTrippy', slug: 'youtrippy' },
  { name: 'Surfer Trippie', slug: 'surfer-trippie' },
];

export default function AllTrippiesPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#7041F2] to-[#10DBAC] px-4 py-16 font-poppins text-white overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Meet All the Trippies
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {trippies.map((trippie) => (
            <Link
              key={trippie.slug}
              href={`/trippie/${trippie.slug}`}
              className="bg-white text-[#7041F2] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={`/images/${trippie.slug}.jpg`}
                alt={trippie.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{trippie.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
