import { useEffect, useState } from "react";
import { EnQuiz1, EnQuiz2, EnQuiz3 } from "../../components";
import { CategoryDateData } from "../../apis";
import { CategoryDateDataResponse } from "../../apis/type";
import { useParams } from "react-router-dom";

export const EnglishLearningView = () => {
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const [problems, setProblems] = useState<CategoryDateDataResponse[]>([]);
  const { date } = useParams<{ date: string }>();
  const day = `${date || "1"}일차`;

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await CategoryDateData("ENGLISH", day);
        if (data) {
          setProblems(data);
          console.log("영어 문제s", data);
        }
      } catch (error) {
        console.error("영어 문제 조회 실패", error);
      }
    };

    fetchProblems();
  }, [day]);

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
        return <EnQuiz1 onNext={handleNext} problems={problems} day={day} />;
      case 2:
        return (
          <EnQuiz2
            onNext={handleNext}
            onBack={handleBack}
            problems={problems}
            day={day}
          />
        );
      case 3:
        return (
          <EnQuiz3
            date={date || "1"}
            onBack={handleBack}
            problems={problems}
            day={day}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderQuiz()}</>;
};
