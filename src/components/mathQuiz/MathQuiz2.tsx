import styled from "@emotion/styled";
import { useState } from "react";
import { Speaker, QuizCard } from "../../components";
import NextButton from "../NextButton";
import { InputAnswer } from "../../components/InputAnswer";
import { backIcon } from "../../assets";
import { CategoryDateDataResponse } from "../../apis/types";
import { MarkingProblemData } from "../../apis";
import { useNavigate } from "react-router-dom";

interface QuizProps {
  onNext: () => void;
  onBack: () => void;
  problems: CategoryDateDataResponse[];
  day: string;
}

export const MathQuiz2 = ({ onNext, onBack, problems, day }: QuizProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [isGraded, setIsGraded] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const levelProblems = problems.filter((problem) => problem.level === 3);
  const currentProblem = levelProblems[1];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsGraded(false);
    setIsCorrect(null);
  };

  const handleCheckAnswer = async () => {
    try {
      const result = await MarkingProblemData(
        currentProblem.id.toString(),
        inputValue.trim()
      );
      console.log("서버 응답:", result);

      // 서버 응답을 반대로 처리
      // 서버: false = 정답, true = 오답
      // 우리: true = 정답, false = 오답
      let finalResult: boolean;

      if (typeof result === "boolean") {
        finalResult = !result; // 반대로 변환
      } else if (result && typeof result.result === "boolean") {
        finalResult = !result.result; // 반대로 변환
      } else {
        console.error("알 수 없는 응답 형식:", !result);
        return;
      }

      console.log("서버 응답:", result, "→ 변환된 결과:", finalResult);
      setIsCorrect(finalResult);
      setIsGraded(true);

      setTimeout(() => {
        // 마지막 문제인지 확인
        const isLastProblem =
          levelProblems.length === 1 ||
          levelProblems.indexOf(currentProblem) === levelProblems.length - 1;

        if (isLastProblem) {
          navigate("/check-result");
        } else {
          onNext();
        }
      }, 1000);
    } catch (error) {
      console.error(error as Error);
    }
  };

  const handleNext = () => {
    if (!isGraded) {
      handleCheckAnswer();
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="뒤로가기" />
        </BackButton>
        <DayText>{day}</DayText>
      </Header>

      <Content>
        <Title>상황에 따른 사칙연산</Title>
        <Speaker
          text={(currentProblem.problem, currentProblem.problemDetail)}
        />

        <QuizCardContainer>
          <QuizCard
            num={8}
            problem={currentProblem.problem}
            problemDetail={currentProblem.problemDetail}
            photoURL={currentProblem.photoUrl}
          />
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
            placeholder="정답을 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
            isAnswer={isGraded ? isCorrect : null}
          />
        </InputContainer>
      </Content>

      <ButtonWrapper>
        <NextButton
          state={inputValue.trim() ? "active" : "disabled"}
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
