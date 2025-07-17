import styled from "@emotion/styled";
import { AnswerCard } from "../components/AnswerCard";
import NextButton from "../components/NextButton";
import { MathAnswer } from "../components";
import { useEffect, useState } from "react";
import CompleteSplash from "./CompleteSplash";
import { useParams } from "react-router-dom";
import { CheckAnswers } from "../apis/index";
import { Problem } from "../apis/type";

const CheckResult = () => {
  const { date } = useParams<{ date: string }>();
  const day = `${date}일차`;

  const [showSplash, setShowSplash] = useState(false);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await CheckAnswers(day || "1일차");
        setProblems(response.data);
      } catch (error) {
        console.error("답안 확인 중 오류! : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, [day]);

  const handleComplete = () => {
    setShowSplash(true);
  };

  if (showSplash) {
    return <CompleteSplash />;
  }

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <Section>
        정답 확인
        <CardWrap>
          {problems.map((problem) => {
            if (problem.category === "MATH") {
              return (
                <MathAnswer
                  key={problem.id}
                  isCorrect={problem.isCorrect}
                  problem={problem.problem}
                  answer={problem.answer}
                  problemDetail={problem.problemDetail}
                />
              );
            } else if (problem.level === 3) {
              return (
                <AnswerCard
                  url={problem.photoUrl}
                  key={problem.id}
                  answer={problem.answer}
                  isCorrect={problem.isCorrect}
                />
              );
            }
          })}
        </CardWrap>
      </Section>
      <NextButton state="completed" onClick={handleComplete} />
    </Container>
  );
};

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  font-size: 27px;
  font-weight: 700;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 156px;
  padding: 96px 0 70px;
`;

export default CheckResult;
