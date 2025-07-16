import { useState } from "react";
import {
  Quiz1,
  Quiz2,
  Quiz3,
  EnQuiz1,
  EnQuiz2,
  EnQuiz3,
  MathQuiz1,
  MathQuiz2,
} from "../components";

interface Subject {
  id: string;
  name: string;
  startQuiz: number;
  endQuiz: number;
}

const subjects: Subject[] = [
  { id: "korean", name: "한글", startQuiz: 1, endQuiz: 3 },
  { id: "english", name: "영어", startQuiz: 4, endQuiz: 6 },
  { id: "math", name: "연산", startQuiz: 7, endQuiz: 8 },
];

export const LearningView = () => {
  // 더미로 한글 선택된 상태로 시작
  const [selectedSubject, setSelectedSubject] = useState<string>("korean");
  const [currentQuiz, setCurrentQuiz] = useState(1);

  const handleNext = () => {
    const currentSubject = subjects.find((s) => s.id === selectedSubject);
    if (currentSubject && currentQuiz < currentSubject.endQuiz) {
      setCurrentQuiz((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    const currentSubject = subjects.find((s) => s.id === selectedSubject);
    if (currentSubject && currentQuiz > currentSubject.startQuiz) {
      setCurrentQuiz((prev) => prev - 1);
    }
  };

  // 더미 함수들 (나중에 과목 선택 기능 구현 시 사용)
  // const selectKorean = () => {
  //   setSelectedSubject("korean");
  //   setCurrentQuiz(1);
  // };

  // const selectEnglish = () => {
  //   setSelectedSubject("english");
  //   setCurrentQuiz(4);
  // };

  // const selectMath = () => {
  //   setSelectedSubject("math");
  //   setCurrentQuiz(7);
  // };

  const renderQuiz = () => {
    switch (currentQuiz) {
      case 1:
        return <Quiz1 onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <Quiz2 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Quiz3 onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <EnQuiz1 onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <EnQuiz2 onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <EnQuiz3 onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <MathQuiz1 onNext={handleNext} onBack={handleBack} />;
      case 8:
        return <MathQuiz2 onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
