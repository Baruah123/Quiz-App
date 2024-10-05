import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LandingPage({ onLevelSelect }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setTimeout(() => onLevelSelect(level), 1000); // 1-second delay to simulate transition
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 flex flex-col items-center justify-center">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
        <h1 className="text-white text-3xl font-bold">Ultimate Quiz</h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#quiz" className="hover:text-gray-300">Start Quiz</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="text-center text-white mt-24">
        <motion.h1
          className="text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Ultimate Quiz
        </motion.h1>

        <motion.p
          className="text-lg mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Select a level to begin your challenge!
        </motion.p>

        <div className="flex justify-center gap-6">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <motion.button
              key={level}
              aria-label={`Select ${level} level`}
              className={`px-6 py-3 text-xl rounded-full bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-600 hover:text-white ${
                selectedLevel === level ? 'scale-105' : ''
              }`}
              onClick={() => handleLevelSelect(level)}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {level}
            </motion.button>
          ))}
        </div>
      </section>

      <footer className="absolute bottom-0 left-0 right-0 p-4 bg-indigo-700 text-center text-white">
        <p>© 2024 Ultimate Quiz. All rights reserved.</p>
      </footer>
    </main>
  );
}
