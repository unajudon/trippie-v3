// pages/story.tsx
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export default function StoryPage() {
  const router = useRouter();

  function handleBegin() {
    localStorage.removeItem('trippie-answers');
    router.push('/quiz/1');
  }

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">
      
      {/* Sparkling background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          particleColor="#ffffff"
          className="w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-3xl p-8 border border-white/10 relative z-10"
      >
        <h1 className="text-lg md:text-xl font-semibold mb-6 text-[#10DBAC]">
          🌟  You hatched inside an abandoned suitcase, hidden in a quiet corner of Changi Airport…<br />
          No memory. Just a soft glow…
        </h1>

        <h2 className="text-base md:text-lg font-normal text-white mb-8 leading-relaxed">
         
        </h2>

        <motion.button
          onClick={handleBegin}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white text-[#7041F2] font-semibold px-4 py-3 rounded-xl shadow-md hover:bg-[#10DBAC] hover:text-white transition-all duration-200"
        >
          Begin Journey
        </motion.button>
      </motion.div>
    </main>
  );
}
