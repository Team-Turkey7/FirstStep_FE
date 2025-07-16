import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
import { AnswerCard } from "../components/AnswerCard";
import { MathAnswer } from "../components";
import { useEffect, useState } from "react";
import { Problem } from "../apis/type";
import { CheckWrongAnswers } from "../apis/inedx";

const WrongAnswer = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await CheckWrongAnswers();
        setProblems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("오답 확인 중 오류! : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <NavBar />
      <Section>
        틀린 문제
        <Wrap>
          {problems.map((problem) => {
            if (problem.category === "MATH") {
              return (
                <MathAnswer
                  key={problem.id}
                  problem={problem.problem}
                  problemDetail={problem.problemDetail}
                  answer={problem.answer}
                  state="all"
                />
              );
            } else {
              return (
                <AnswerCard
                  url={problem.photoUrl}
                  key={problem.id}
                  state="all"
                  answer={problem.answer}
                  problem={problem.problem}
                />
              );
            }
          })}
        </Wrap>
      </Section>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  font-size: 27px;
  font-weight: 700;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 58px;
  gap: 8px;
`;

export default WrongAnswer;
