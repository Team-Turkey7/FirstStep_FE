import { useState } from "react";
import { Quiz1, Quiz2, Quiz3 } from "../components";

export const KoreanLearningView = () => {
  const [currentQuiz, setCurrentQuiz] = useState(1);

  const handleNext = () => {
    if (currentQuiz < 3) {
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
        return <Quiz1 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <Quiz2 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Quiz3 onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
