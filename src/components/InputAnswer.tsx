import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface IInputAnswerType {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  answer?: string;
  isAnswer?: boolean | null;
}

export const InputAnswer = ({
  placeholder,
  value,
  onChange,
  answer,
  isAnswer,
}: IInputAnswerType) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (answer) {
      setIsCorrect(value === answer);
    } else if (isAnswer !== null && isAnswer !== undefined) {
      setIsCorrect(isAnswer);

      if (isAnswer !== null) {
        setTimeout(() => {
          setIsCorrect(null);
        }, 1000);
      }
    }
  }, [value, answer, isAnswer]);

  return (
    <InputAnswerContent
      type="text"
      value={value}
      $isAnswer={isCorrect}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const InputAnswerContent = styled.input<{ $isAnswer: boolean | null }>`
  width: 290px;
  height: 48px;
  font-size: 24px;
  border: ${({ $isAnswer }) =>
    $isAnswer === true
      ? "2px solid #12D022"
      : $isAnswer === false
      ? "2px solid #FF2A2A"
      : "none"};
  border-bottom: ${({ $isAnswer }) =>
    $isAnswer === true
      ? "2px solid #12D022"
      : $isAnswer === false
      ? "2px solid #FF2A2A"
      : "2px dashed #000000"};
  border-radius: ${({ $isAnswer }) => ($isAnswer !== null ? "8px" : "0")};
  text-align: center;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;
