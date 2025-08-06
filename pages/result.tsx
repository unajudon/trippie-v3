// pages/result.tsx

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTrippieResult } from '@/lib/calculateResult';
import confetti from 'canvas-confetti';

// Optional sparkle glow background
const SparkleBurst = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
  >
    <div className="w-[280px] h-[280px] bg-[radial-gradient(circle,_#ffffff33_10%,_transparent_60%)] rounded-full blur-2xl animate-pulse" />
  </motion.div>
);

export default function Result() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('trippie-answers');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length >= 4) {
          const mbtiResult = getTrippieResult(parsed);
          setResult(mbtiResult);

          // 🎉 Confetti burst
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            zIndex: 9999,
          });

          // Log result
          const payload = {
            TrippieType: mbtiResult.name,
            MBTI: mbtiResult.mbti?.join('') || 'Unknown',
            Score: parsed.length.toString(),
            Browser: navigator.userAgent,
          };

          fetch('/api/log-trippie', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((data) => console.log('✅ Logging response:', data))
            .catch((err) => console.error('❌ Logging failed:', err));
        }
      } catch (err) {
        console.error('Invalid JSON in trippie-answers', err);
      }
    }
  }, []);

  if (!result)
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7041F2] to-[#10DBAC] text-white font-poppins">
        <p className="text-lg">Loading your Trippie...</p>
      </main>
    );

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex flex-col items-center justify-start px-4 py-8 font-poppins text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-md text-center mt-4 relative"
      >
        {/* Sparkle effect */}
        <SparkleBurst />

        {/* Instructional Text */}
        <p className="text-sm text-white/70 mb-3 relative z-10">
          Tap and hold on image to save and share!
        </p>

        {/* Trippie Result Image */}
        <img
          src={`/images/results/${result.slug}.png`}
          alt={`You are ${result.name}`}
          className="w-full rounded-3xl shadow-xl mb-6 relative z-10 ring-2 ring-white/10 hover:ring-white/30 transition-all duration-300"
        />

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mt-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: 'Discover your Trippie!',
                      text: 'I just found my Trippie type — it’s surprisingly accurate 🧳✨',
                      url: 'https://trippie-v3.vercel.app',
                    })
                    .catch((error) => console.error('Sharing failed:', error));
                } else {
                  alert('Sharing not supported on this device.');
                }
              }}
              className="bg-[#10DBAC] text-white font-medium text-sm px-6 py-2 min-w-[120px] rounded-xl shadow hover:bg-[#0cc69c] transition"
            >
              Share quiz
            </button>

            <a
              href="/all-trippies"
              className="bg-white text-[#7041F2] font-medium text-sm px-6 py-2 min-w-[120px] rounded-xl shadow hover:bg-gray-100 transition text-center"
            >
              See All
            </a>
          </div>

          <button
            onClick={() => (location.href = '/')}
            className="bg-[#7041F2] text-white font-medium text-sm px-6 py-2 min-w-[160px] rounded-xl shadow hover:bg-[#5c35db] transition"
          >
            Retake Quiz
          </button>
        </div>
      </motion.div>
    </main>
  );
}
