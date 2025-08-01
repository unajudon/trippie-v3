// pages/all-trippies.tsx

'use client';

import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles'; // Assuming the SparklesCore component is set up

import { trippies } from '@/lib/trippieData'; // Import your updated trippies data

export default function AllTrippiesPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Meet All the Trippies</h1>

       <div className="grid grid-cols-2 gap-6">
  {trippies.map((trippie) => (
    <Link
      key={trippie.slug}
      href={`/trippie/${trippie.slug}`}
      className="bg-gradient-to-br from-[#9C4DFF] to-[#32E4B8] text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
    >
     <img
  src={`/images/${trippie.slug}.png`}
  alt={trippie.name}
  className="w-full h-40 object-contain p-2"
/>

      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{trippie.name}</h2>
      </div>
    </Link>
  ))}
</div>
{/* Retake Quiz Button */}
<div className="flex justify-center mt-10">
  <a
    href="/"
    className="bg-white text-[#7041F2] font-semibold text-sm md:text-base px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition-all duration-200"
  >
    Retake Quiz
  </a>
</div>


      </div>
    </main>
  );
}
