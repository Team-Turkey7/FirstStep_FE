import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
import { AnswerCard } from "../components/AnswerCard";
import { MathAnswer } from "../components";

const WrongAnswer = () => {
  return (
    <Container>
      <NavBar />
      <Section>
        틀린 문제
        <Wrap>
          <AnswerCard state="all" problem="hello" />
          <AnswerCard state="all" problem="hello" />
          <MathAnswer state="all" problemId={1} problem="3+4" answer="7" />
          <MathAnswer
            state="all"
            problemId={2}
            problem="태수와 고래밥"
            answer="6개"
            problemDetail="태수는 20개의 고래밥을 가지고 있다.
하지만 정욱이가 고래밥이 너무 가지고 싶어
태수의 고래밥 14개를 뺏었다.
태수가 가지고 있는 고래밥의 개수는? "
          />
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
