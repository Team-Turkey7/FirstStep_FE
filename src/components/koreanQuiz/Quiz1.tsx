import styled from "@emotion/styled";
import { Speaker, QuizCard } from "..";
import { backIcon } from "../../assets";
import NextButton from "../NextButton";
import { CategoryDateDataResponse } from "../../apis/type";

interface QuizProps {
  onNext: () => void;
  onBack: () => void;
  problems: CategoryDateDataResponse[];
  day: string;
}

export const Quiz1 = ({ onNext, onBack, problems, day }: QuizProps) => {
  const levelProblems = problems.filter((problem) => problem.level === 1);
  const currentProblem = levelProblems[0];

  if (!currentProblem) {
    return (
      <Container>
        <div>문제를 불러오는 중</div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="뒤로가기" />
        </BackButton>
        <DayText>{day}</DayText>
      </Header>

      <Content>
        <Title>자음/모음</Title>
        <Speaker text={currentProblem.problem} />
        <QuizCard
          num={1}
          problem={currentProblem.problem}
          problemDetail={currentProblem.problemDetail}
        />
      </Content>
      <ButtonWrapper>
        <NextButton state="active" onClick={onNext} />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px 40px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  left: 0;
`;

const DayText = styled.div`
  flex: 1;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const Content = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 28px;
`;

const ButtonWrapper = styled.div`
  margin-top: 60%;
`;
