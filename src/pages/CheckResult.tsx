import styled from "@emotion/styled";
import { AnswerCard } from "../components/AnswerCard";
import NextButton from "../components/NextButton";
import { MathAnswer } from "../components";
import { useState } from "react";
import CompleteSplash from "./CompleteSplash";

const CheckResult = () => {
  const [showSplash, setShowSplash] = useState(false);

  const handleComplete = () => {
    setShowSplash(true);
  };

  if (showSplash) {
    return <CompleteSplash />;
  }
  return (
    <Container>
      <Section>
        정답 확인
        <CardWrap>
          <AnswerCard state="right" problem="hello" />
          <AnswerCard state="wrong" problem="hello" />
          <AnswerCard state="right" problem="hello" />
          <AnswerCard state="wrong" problem="hello" />
          <MathAnswer state="right" problemId={1} problem="3+4" answer="7" />
          <MathAnswer
            state="wrong"
            problemId={2}
            problem="태수와 고래밥"
            answer="6개"
            problemDetail="태수는 20개의 고래밥을 가지고 있다.
          하지만 정욱이가 고래밥이 너무 가지고 싶어 
          태수의 고래밥 14개를 뺏었다.
          태수가 가지고 있는 고래밥의 개수는? "
          />
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
