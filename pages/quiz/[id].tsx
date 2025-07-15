// pages/quiz/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { questions } from '@/lib/questions';
import { motion } from 'framer-motion';

export default function QuizQuestion() {
  const router = useRouter();
  const { id } = router.query;

  const questionIndex = parseInt(id as string, 10) - 1;
  const question = questions[questionIndex];
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('trippie-answers');
    if (stored) {
      const parsed = JSON.parse(stored);
      const full = new Array(10).fill(null).map((_, i) => parsed[i] || null);
      setAnswers(full);
    } else {
      setAnswers(new Array(10).fill(null));
    }
  }, []);

  function handleAnswer(value: string) {
    const updated = [...answers];
    updated[questionIndex] = value;
    setAnswers(updated);
    localStorage.setItem('trippie-answers', JSON.stringify(updated));

    if (questionIndex + 1 < questions.length) {
      router.push(`/quiz/${questionIndex + 2}`);
    } else {
      router.push('/result');
    }
  }

  if (!question || isNaN(questionIndex)) {
    return <p className="p-6 text-center text-white">Loading...</p>;
  }

  return (
   <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-center justify-center px-4 py-10 font-poppins text-white overflow-hidden">

      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-3xl p-8 border border-white/10"
      >
      <h2 className="text-lg md:text-xl font-medium text-white mb-6 leading-relaxed">
  {question.description}
</h2>


        <div className="flex flex-col gap-4">
          {question.choices.map((choice, idx) => (
           <motion.button
  key={idx}
  onClick={() => handleAnswer(choice.value)}
  whileTap={{ scale: 0.97 }}
  whileHover={{ scale: 1.02 }}
  className="w-full bg-[#10DBAC] text-[#7041F2] font-semibold px-4 py-3 rounded-xl shadow-md hover:bg-white hover:text-[#7041F2] transition-all duration-200"
>
  {choice.text}
</motion.button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-white/20 rounded-full mt-6 mb-2 overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <p className="text-sm text-white/60 mt-6 text-right">
          Question {questionIndex + 1} of {questions.length}
        </p>
      </motion.div>
    </main>
  );
}
