import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface IInputAnswerType {
  isClicked: boolean;
  placeholder: string;
}

// 더미 정답
const answer = "사과";

export const InputAnswer = ({ isClicked, placeholder }: IInputAnswerType) => {
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [isAnswer, setIsAnswer] = useState<boolean | null>(null);

  // isClicked가 true가 되면 정답 여부 판단
  useEffect(() => {
    if (isClicked) {
      const answerWhether = inputAnswer === answer;
      setIsAnswer(answerWhether);
    }
  }, [isClicked]);

  return (
    <InputAnswerContent
      $isClicked={isClicked}
      $isAnswer={isAnswer}
      type="text"
      placeholder={placeholder}
      value={inputAnswer}
      onChange={(e) => setInputAnswer(e.target.value)}
      readOnly={isClicked} // 클릭 후 입력 막기
    />
  );
};

const InputAnswerContent = styled.input<{
  $isClicked: boolean;
  $isAnswer: boolean | null;
}>`
  width: 264px;
  height: 48px;
  font-size: 24px;
  text-align: center;
  border: none;
  padding: 0 8px;
  outline: none;

  ${({ $isClicked, $isAnswer }) =>
    $isClicked && $isAnswer !== null
      ? `
    box-shadow: inset 0 0 0 2px ${$isAnswer ? "#12D022" : "#FF2A2A"};
    border-radius: 8px;
  `
      : `
    border-bottom: 2px dashed #000000;
    border-radius: 0;
  `}

  transition: all 0.2s ease;
`;
