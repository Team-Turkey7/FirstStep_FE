import styled from "@emotion/styled";
import { useState } from "react";
import { Speaker, NextButton, QuizCard } from "../../components";
import { InputAnswer } from "../../components/InputAnswer";
import { backIcon } from "../../assets";

interface QuizProps {
  onNext: () => void;
  onBack: () => void;
}

export const Quiz3 = ({ onNext, onBack }: QuizProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isGraded, setIsGraded] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const correctAnswer = "사과";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsGraded(false);
    setIsCorrect(null);
  };

  const handleCheckAnswer = () => {
    const result = inputValue.trim() === correctAnswer;
    setIsCorrect(result);
    setIsGraded(true);
  };

  const handleNext = () => {
    if (!isGraded) {
      handleCheckAnswer();
    } else {
      onNext();
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="뒤로가기" />
        </BackButton>
        <DayText>1일차</DayText>
      </Header>

      <Content>
        <Title>그림보고 단어 맞추기</Title>
        <Speaker />

        <QuizCardContainer>
          <QuizCard num={3} />
          {isGraded && (
            <FeedbackOverlay>
              {isCorrect ? (
                <CorrectCircle />
              ) : (
                <IncorrectX>
                  <XLine />
                  <XLine />
                </IncorrectX>
              )}
            </FeedbackOverlay>
          )}
        </QuizCardContainer>

        <InputContainer>
          <InputAnswer
            placeholder="단어를 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
            isAnswer={isGraded ? isCorrect : null}
          />
        </InputContainer>
      </Content>

      <ButtonWrapper>
        <NextButton
          state={inputValue.trim() ? "active" : "disabled"}
          text="다음"
          onClick={handleNext}
        />
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

const QuizCardContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FeedbackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const CorrectCircle = styled.div`
  width: 140px;
  height: 140px;
  border: 8px solid #12d022;
  border-radius: 50%;
  margin-top: 10%;
`;

const IncorrectX = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const XLine = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  width: 180px;
  height: 10px;
  background: #ff2a2a;
  border-radius: 4px;
  transform-origin: center;

  &:first-of-type {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:last-of-type {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const InputContainer = styled.div`
  margin: 40px 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 20%;
`;
