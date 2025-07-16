import { useState } from "react";
import { EnQuiz1, EnQuiz2, EnQuiz3 } from "../components";

export const EnglishLearningView = () => {
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
        return <EnQuiz1 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <EnQuiz2 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <EnQuiz3 onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
