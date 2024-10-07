import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

export default function LandingPage({ onLevelSelect }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for hamburger menu

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setTimeout(() => onLevelSelect(level), 1000); // 1-second delay to simulate transition
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 flex flex-col items-center justify-center">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 w-full">
        <h1 className="text-white text-2xl font-bold sm:text-3xl">Ultimate Quiz</h1>
        <nav>
          <button
            className="text-white sm:hidden block focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger icon (SVG) */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden sm:flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#quiz" className="hover:text-gray-300">Start Quiz</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-indigo-700 sm:hidden flex flex-col items-center space-y-4 p-4 text-white">
          <a href="#about" className="hover:text-gray-300" onClick={toggleMenu}>About Us</a>
          <a href="#quiz" className="hover:text-gray-300" onClick={toggleMenu}>Start Quiz</a>
          <a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a>
        </nav>
      )}

      <section className="text-center text-white mt-24 px-4 sm:px-0">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Ultimate Quiz
        </motion.h1>

        <motion.p
          className="text-lg mb-10 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Select a level to begin your challenge!
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <motion.button
              key={level}
              aria-label={`Select ${level} level`}
              className={`px-6 py-3 text-lg sm:text-xl rounded-full bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-600 hover:text-white ${
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

      <footer className="absolute bottom-0 left-0 right-0 p-4 bg-indigo-700 text-center text-white w-full">
        <p>© 2024 Ultimate Quiz. All rights reserved.</p>
      </footer>
    </main>
  );
}

LandingPage.propTypes = {
  onLevelSelect: PropTypes.func.isRequired, 
};
