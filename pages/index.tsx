'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { SparkleIcon } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  function handleStart() {
    localStorage.removeItem('trippie-answers');
    router.push('/quiz/1');
  }

  return (

    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">

      
      {/* Sparkling animated background */}
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

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-xl bg-[#7041F2] text-white shadow-2xl rounded-3xl p-10 border border-white/10"
      >
        <motion.h1
  className="text-3xl md:text-4xl font-bold mb-4 leading-snug flex items-center gap-2 text-[#10DBAC] drop-shadow-[0_0_10px_#10DBAC]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <SparkleIcon className="w-6 h-6 animate-pulse text-[#10DBAC]" />
  what kind of trippie are you?
</motion.h1>


        <motion.p
          className="text-base md:text-lg mb-6 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          You hatched in an abandoned suitcase clutching a mysterious purple card and no clue.
          <br />
          Now you’re wandering the Earth, snack first, questions later.
          <br />
          Time to find your Trippie kind.
        </motion.p>

        <motion.button
          onClick={handleStart}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white/20 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-[#7041F2] transition-all duration-200 animate-pulse-slow"
        >
          ✨ Start the Quiz ✨
        </motion.button>

      </motion.div>

      {/* Floating Trippie card */}
      <motion.img
        src="/card-float.png"
        alt="Trippie Card"
        className="absolute bottom-6 right-6 w-20 h-auto opacity-80 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
    </main>
  );
}
