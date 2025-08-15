import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { SparkleIcon } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  function handleStart() {
    localStorage.removeItem('trippie-answers');
    router.push('/story');
  }

  return (
    <>
      {/* ✅ Preload suitcase background */}
      <Head>
        <link rel="preload" href="/images/suitcase-bg.png" as="image" />
      </Head>

      <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex flex-col items-center justify-start pt-10 md:pt-16 px-4 font-poppins text-white overflow-hidden space-y-6">
        
        {/* ✅ Sparkles rendered slightly delayed to prioritize text & layout */}
        <div className="absolute inset-0 z-0 pointer-events-none will-change-transform animate-fade-in-delayed">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            particleColor="#ffffff"
            className="w-full h-full"
          />
        </div>

        {/* Card wrapper */}
        <div className="w-full flex justify-center mt-[-40px] md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md min-h-[500px] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            style={{ height: '70vh' }}
          >
            {/* ✅ Background image using <Image> for optimization */}
            <Image
              src="/images/suitcase-bg.png"
              alt="Background"
              fill
              priority
              className="absolute inset-0 object-cover object-top rounded-3xl"
            />

            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#14074A]/95 to-transparent z-10 rounded-t-3xl" />

            {/* Card content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-6 py-6 text-center text-white">
              <div className="mt-[18%]">
                <h1 className="text-3xl font-bold mb-4 text-[#10EDD0] drop-shadow-[0_0_8px_#10EDD0] flex items-center justify-center gap-2">
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
        </div>

        {/* ✅ Optimized logo */}
        <Image
          src="/images/youtrip-logo.png"
          alt="YouTrip Logo"
          width={96}
          height={40}
          priority
          className="w-24 md:w-28 h-auto opacity-80 z-10"
        />
      </main>
    </>
  );
}
