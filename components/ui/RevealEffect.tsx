import { motion } from 'framer-motion';

export default function RevealEffect() {
  const sparkleCount = 15;

  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {[...Array(sparkleCount)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
          style={{
            top: `${random(30, 70)}%`,
            left: `${random(20, 80)}%`,
          }}
        />
      ))}
    </div>
  );
}
