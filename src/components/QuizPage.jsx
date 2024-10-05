import PropTypes from 'prop-types'; // Import PropTypes
import { motion } from 'framer-motion';
import { useState } from 'react';

// Sample Questions
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
  const [isAnswerSelected, setIsAnswerSelected] = useState(false); // New state to manage answer selection
  const questions = sampleQuestions[level];

  const handleOptionClick = (selectedOption) => {
    if (isAnswerSelected) return; // Prevent multiple selections
    setIsAnswerSelected(true);

    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    setTimeout(() => {
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setIsAnswerSelected(false); // Reset for the next question
      } else {
        onFinish(score + 1, questions.length);
      }
    }, 1000); // Delay before moving to the next question
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 p-4">
      <motion.div
        className="bg-white shadow-lg p-8 rounded-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg transition duration-300 
                ${isAnswerSelected ? (option === questions[currentQuestion].correct ? 'bg-green-500' : 'bg-red-500') : 'bg-indigo-600'} 
                text-white hover:bg-indigo-800`}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswerSelected} // Disable button after selection
            >
              {option}
            </button>
          ))}
        </div>
        {isAnswerSelected && (
          <p className="mt-4 text-lg">{ 
            questions[currentQuestion].correct === questions[currentQuestion].options.find(option => option === questions[currentQuestion].correct)
              ? 'Correct!'
              : 'Incorrect!'
          }</p>
        )}
      </motion.div>
    </div>
  );
}

// Define prop types
QuizPage.propTypes = {
  level: PropTypes.string.isRequired, // level should be a string
  onFinish: PropTypes.func.isRequired // onFinish should be a function
};
