import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { SparkleIcon } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  function handleStart() {
    localStorage.removeItem('trippie-answers');
    router.push('/story');
  }

  return (
    <main
      className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden"
    >
      {/* Sparkles background */}
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

      {/* Main image card with parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Image background with parallax inside card */}
        {/* Image background with parallax inside card */}
<div
  className="absolute inset-0 bg-cover bg-top"
  style={{ backgroundImage: 'url("/images/suitcase-bg.png")' }}
></div>



        {/* Gradient overlay for readability */}
<div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#1E0A4F]/90 to-transparent z-10" />

        {/* Card content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 text-center text-white">
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 text-[#10EDD0] drop-shadow-[0_0_8px_#10EDD0] flex items-center justify-center gap-2">
              <SparkleIcon className="w-6 h-6 text-white animate-pulse" />
              Discover Your Trippie
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              There are many kinds of Trippies.
              <br />
              Each one sees the world differently.
              <br />
              <strong className="text-white">Ready to find out which one you are?</strong>
            </p>
          </div>

          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-[#10DBAC] text-[#3E1F92] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-[#3E1F92] transition-all duration-200"
          >
            Let’s Begin ✨
          </motion.button>
        </div>
      </motion.div>

      {/* Floating trippie card image */}
      <motion.img
        src="/card-float.png"
        alt="Trippie Card"
        className="absolute bottom-6 right-6 w-20 h-auto opacity-80 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
    </main>
  );
}
