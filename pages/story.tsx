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
<main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-start justify-center pt-16 md:pt-24 px-4 font-poppins text-white overflow-hidden">
      
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
  {/* Header Text */}
  <h1 className="text-sm md:text-base font-semibold mb-6 text-[#10DBAC]">
    🌟 You hatched inside an abandoned suitcase, hidden in a quiet corner of Changi Airport…<br />
    No memory. Just a soft glow…
  </h1>

  {/* Optional Subheading */}
  <h2 className="text-base md:text-lg font-normal text-white mb-8 leading-relaxed">
    {/* Optional additional story text */}
  </h2>

  {/* Square image slightly smaller than button width */}
  <div className="w-11/12 aspect-square mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
    <img
      src="/images/story-square.png" // update with your actual image path
      alt="Trippie Story"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Begin Journey Button */}
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
