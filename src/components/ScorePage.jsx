import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

export default function ScorePage({ score, total, onRestart }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-6">Quiz Completed!</h2>
        <p className="text-2xl mb-6">Your Score: {score} / {total}</p>
        
        <motion.button
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={onRestart}
          aria-label="Restart quiz"
          whileHover={{ scale: 1.1 }}
        >
          Try Again
        </motion.button>
      </div>
    </main>
  );
}

// Define prop types
ScorePage.propTypes = {
  score: PropTypes.number.isRequired,   // score should be a number
  total: PropTypes.number.isRequired,    // total should be a number
  onRestart: PropTypes.func.isRequired    // onRestart should be a function
};
