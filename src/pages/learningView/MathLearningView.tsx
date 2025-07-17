import { useEffect, useState } from "react";
import { MathQuiz1, MathQuiz2 } from "../../components";
import { CategoryDateDataResponse } from "../../apis/types";
import { CategoryDateData } from "../../apis";
import { useParams } from "react-router-dom";

export const MathLearningView = () => {
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const [problems, setProblems] = useState<CategoryDateDataResponse[]>([]);
  const { date } = useParams<{ date: string }>();
  const day = `${date}일차`;

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await CategoryDateData("MATH", day);
        if (data) {
          setProblems(data);
          console.log("연산 문제s", data);
        }
      } catch (error) {
        console.error("연산 문제 조회 실패", error);
      }
    };

    fetchProblems();
  }, [day]);

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
        return (
          <MathQuiz1
            onNext={handleNext}
            onBack={handleBack}
            problems={problems}
            day={day}
          />
        );
      case 2:
        return <MathQuiz2 onBack={handleBack} problems={problems} day={day} />;
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
