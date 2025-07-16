import { useState } from "react";
import { MathQuiz1, MathQuiz2 } from "../components";

export const MathLearningView = () => {
  const [currentQuiz, setCurrentQuiz] = useState(1);

  const handleNext = () => {
    if (currentQuiz < 2) {
      setCurrentQuiz((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuiz > 1) {
      setCurrentQuiz((prev) => prev - 1);
    }
  };

  const renderQuiz = () => {
    switch (currentQuiz) {
      case 1:
        return <MathQuiz1 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <MathQuiz2 onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
