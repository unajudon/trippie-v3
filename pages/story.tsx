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
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex flex-col items-center justify-start pt-16 md:pt-24 px-4 font-poppins text-white overflow-hidden space-y-6">
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

      {/* Story card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-2xl p-5 md:p-6 border border-white/10 relative z-10"
      >
        {/* Header Text */}
        <h1 className="text-base md:text-lg font-semibold mb-3 text-[#10DBAC]">
          🌟 You hatched inside an abandoned suitcase, hidden in a quiet corner of Changi Airport… 
          No memory. Just a soft glow…
        </h1>

        {/* Optional Subheading */}
        <h2 className="text-sm md:text-base font-normal text-white mb-4 leading-relaxed">
          {/* Add story continuation here if needed */}
        </h2>

        {/* Story Image — styled like the quiz page */}
        <img
          src="/images/story-square.jpeg"
          alt="Trippie Story"
          className="w-4/5 max-w-sm mx-auto h-auto rounded-xl mb-4 shadow-md"
        />

        {/* Begin Journey Button */}
        <motion.button
          onClick={handleBegin}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white text-[#7041F2] text-base font-semibold px-4 py-3 rounded-xl shadow hover:bg-[#10DBAC] hover:text-white transition-all duration-200"
        >
          Begin Journey
        </motion.button>
      </motion.div>

      {/* YouTrip logo under the card */}
      <img
        src="/images/youtrip-logo.png"
        alt="YouTrip Logo"
        className="w-24 md:w-28 h-auto opacity-80"
      />
    </main>
  );
}
