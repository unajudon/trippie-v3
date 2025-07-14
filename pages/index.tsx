import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#7041F2] to-[#9B6EF3] flex items-center justify-center px-4 py-10 font-poppins text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-xl bg-youpurple text-white border border-youmint shadow-xl rounded-3xl p-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Trippie Quiz</h1>

        <p className="text-base md:text-lg mb-6 leading-relaxed">
          You hatched in an abandoned suitcase clutching a mysterious purple card and no clue. <br />
          Now you’re wandering the Earth, snack first, questions later. <br />
          Time to find your Trippie kind.
        </p>

        <button
          onClick={() => router.push('/quiz/1')}
          className="bg-youmint text-youpurple font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-youpurple transition-all duration-200"
        >
          Start Quiz
        </button>
      </motion.div>
    </main>
  );
}
