import PropTypes from 'prop-types'; // Import PropTypes
import { motion } from 'framer-motion';
import { useState } from 'react';

const sampleQuestions = {
  Beginner: [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], correct: '4' },
    { question: 'What color is the sky?', options: ['Green', 'Blue', 'Red'], correct: 'Blue' }
  ],
  Intermediate: [
    { question: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris'], correct: 'Paris' },
    { question: 'What is 5 * 6?', options: ['30', '36', '25'], correct: '30' }
  ],
  Advanced: [
    { question: 'Who developed the theory of relativity?', options: ['Newton', 'Einstein', 'Tesla'], correct: 'Einstein' },
    { question: 'What is the speed of light?', options: ['299,792 km/s', '150,000 km/s', '450,000 km/s'], correct: '299,792 km/s' }
  ]
};

export default function QuizPage({ level, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = sampleQuestions[level];

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onFinish(score + 1, questions.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 p-4 sm:p-8">
      <motion.div
        className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col space-y-3 sm:space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


// Define prop types
QuizPage.propTypes = {
  level: PropTypes.string.isRequired, // level should be a string
  onFinish: PropTypes.func.isRequired // onFinish should be a function
};
