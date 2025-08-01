import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTrippieResult } from '@/lib/calculateResult';

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

        // Prepare payload
        const payload = {
          TrippieType: mbtiResult.name,
          MBTI: mbtiResult.mbti?.join('') || 'Unknown',
          Score: parsed.length.toString(),
          Browser: navigator.userAgent,
        };

        // Send to internal API (bypasses CORS)
        fetch('/api/log-trippie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-3xl p-10 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">You are {result.name}!</h1>
        <p className="mb-4 text-white/80 italic">({result.mbti.join(', ')})</p>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Quirky Traits:</h2>
          <ul className="list-disc list-inside">
            {result.quirkyTraits.map((trait: string, idx: number) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Strengths:</h2>
          <p>{result.strengths}</p>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-1">Weaknesses:</h2>
          <p>{result.weaknesses}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
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
            className="bg-[#10DBAC] text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-[#0cc69c] transition"
          >
            Share My Result
          </button>

          <a
            href="/all-trippies"
            className="bg-gray-100 text-[#7041F2] font-semibold px-6 py-3 rounded-2xl shadow hover:bg-white transition text-center"
          >
            See All Trippies
          </a>
        </div>

        <button
          onClick={() => (location.href = '/')}
          className="mt-6 bg-[#10DBAC] text-[#7041F2] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-[#7041F2] transition-all duration-200"
        >
          Retake Quiz
        </button>
      </motion.div>
    </main>
  );
}
