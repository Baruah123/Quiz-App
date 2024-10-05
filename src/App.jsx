import { useState } from 'react';
import LandingPage from '../src/components/LandingPage';
import QuizPage from '../src/components/QuizPage';
import ScorePage from '../src/components/ScorePage';

function App() {
  const [quizLevel, setQuizLevel] = useState(null);  // Track selected quiz level
  const [score, setScore] = useState(null);          // Track the user's score
  const [total, setTotal] = useState(null);          // Track total number of questions

  // Handle level selection from LandingPage
  const handleLevelSelect = (level) => {
    setQuizLevel(level);
  };

  // Handle quiz completion and set score and total questions
  const handleQuizFinish = (finalScore, totalQuestions) => {
    setScore(finalScore);
    setTotal(totalQuestions);
  };

  // Restart quiz functionality
  const handleRestart = () => {
    setQuizLevel(null);
    setScore(null);
    setTotal(null);
  };

  // Conditional rendering based on the current stage of the quiz
  if (quizLevel === null) {
    return <LandingPage onLevelSelect={handleLevelSelect} />;
  }

  if (score === null) {
    return <QuizPage level={quizLevel} onFinish={handleQuizFinish} />;
  }

  return <ScorePage score={score} total={total} onRestart={handleRestart} />;
}

export default App;
