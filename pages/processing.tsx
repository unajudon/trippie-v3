import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export default function ProcessingPage() {
  const router = useRouter();

  function handleReveal() {
    router.push('/result');
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

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-2xl p-5 md:p-6 border border-white/10 relative z-10"
      >
        {/* Header Text */}
        <h1 className="text-base md:text-lg font-semibold mb-3 text-[#10DBAC]">
          Your Trippie Energy Is… Shifting ✨
        </h1>

        {/* Subheading */}
        <h2 className="text-sm md:text-base font-normal text-white mb-4 leading-relaxed">
          Your answers have been collected. Your snacks, tallied.<br />
          Your travel instincts? Analyzed by a panel of very tiny floating dragons.<br />
          <br />
          The Trippieverse is buzzing...
        </h2>

        {/* Processing Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-4/5 max-w-sm mx-auto h-auto rounded-xl mb-4 shadow-md"
        >
          <source src="/videos/processing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Reveal Button */}
        <motion.button
          onClick={handleReveal}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white text-[#7041F2] text-base font-semibold px-4 py-3 rounded-xl shadow hover:bg-[#10DBAC] hover:text-white transition-all duration-200"
        >
          Reveal My Trippie
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
