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
    <main className="relative min-h-screen w-full bg-gradient-to-br from-[#3E1F92] via-[#5C35DB] to-[#10DBAC] flex items-start justify-center pt-12 md:pt-20 px-3 font-poppins text-white overflow-hidden">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#7041F2] text-white shadow-xl rounded-2xl p-5 md:p-6 border border-white/10"
      >
        <h1 className="text-base md:text-lg font-semibold mb-3 text-[#10DBAC]">
          {question.question}
        </h1>

        {question.description && (
          <h2 className="text-sm md:text-base font-normal text-white mb-4 leading-relaxed">
            {question.description}
          </h2>
        )}

        {question.image && (
  <img
    src={question.image}
    alt="Question visual"
    className="w-4/5 max-w-sm mx-auto h-auto rounded-xl mb-4 shadow-md"
  />
)}


        <div className="flex flex-col gap-3">
          {question.choices.map((choice, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleAnswer(choice.value)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white text-[#7041F2] text-sm font-semibold px-3 py-2 rounded-lg shadow hover:brightness-105 transition-all duration-200"
              style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.4)' }}
            >
              {choice.text}
            </motion.button>
          ))}
        </div>

        <div className="w-full h-2 bg-white/20 rounded-full mt-5 mb-2 overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <p className="text-xs text-white/60 mt-3 text-right">
          Question {questionIndex + 1} of {questions.length}
        </p>
      </motion.div>
    </main>
  );
}
