import styled from "@emotion/styled";
import { Speaker, NextButton, QuizCard } from "..";
import { backIcon } from "../../assets";

interface QuizProps {
  onNext: () => void;
  onBack: () => void;
}

export const Quiz2 = ({ onNext, onBack }: QuizProps) => {
  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="뒤로가기" />
        </BackButton>
        <DayText>1일차</DayText>
      </Header>

      <Content>
        <Title>간단한 단어</Title>
        <Speaker />
        <QuizCard num={2} />
      </Content>
      <ButtonWrapper>
        <NextButton state="active" text="다음" onClick={onNext} />
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
