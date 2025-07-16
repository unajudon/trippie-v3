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
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-start justify-center pt-12 md:pt-20 px-3 font-poppins text-white overflow-hidden">

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
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-2xl p-5 md:p-6 border border-white/10 relative z-10"
      >
        {/* Header Text */}
        <h1 className="text-sm md:text-base font-semibold mb-4 text-[#10DBAC]">
          🌟 You hatched inside an abandoned suitcase, hidden in a quiet corner of Changi Airport…<br />
          No memory. Just a soft glow…
        </h1>

        {/* Optional Subheading */}
        <h2 className="text-sm md:text-base font-normal text-white mb-4 leading-relaxed">
          {/* Optional additional story text */}
        </h2>

        {/* Story Image */}
        <img
          src="/images/story-square.png"
          alt="Trippie Story"
          className="w-full h-auto rounded-xl mb-5 shadow-md"
        />

        {/* Begin Journey Button */}
        <motion.button
          onClick={handleBegin}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white text-[#7041F2] text-sm font-semibold px-3 py-2 rounded-lg shadow hover:bg-[#10DBAC] hover:text-white transition-all duration-200"
        >
          Begin Journey
        </motion.button>
      </motion.div>
    </main>
  );
}
