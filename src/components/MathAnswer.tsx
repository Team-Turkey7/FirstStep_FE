import { useState } from "react";
import styled from "@emotion/styled";
import { bottomArrow } from "../assets";

interface ITestType {
  problemId: number;
  problem: string;
  problemDetail: string;
  answer: string;
}

export const MathAnswer = ({
  problemId,
  problem,
  problemDetail,
  answer,
}: ITestType) => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper key={problemId} onClick={() => setActive((prev) => !prev)}>
      <Header>
        <Question>{problem}</Question>
        <ArrowIcon $active={active}>
          <img src={bottomArrow} />
        </ArrowIcon>
      </Header>

      <ContentWrapper $active={active}>
        <Divider />
        <ProblemDetail>{problemDetail}</ProblemDetail>
        <AnswerText>답: {answer}</AnswerText>
      </ContentWrapper>
    </Wrapper>
  );
};

const ProblemDetail = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 340px;
  background-color: #d3d3d3;
  border-radius: 15px;
  padding: 16px 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Question = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const ArrowIcon = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: rotate(${({ $active }) => ($active ? "180deg" : "0deg")});
`;

const ContentWrapper = styled.div<{ $active: boolean }>`
  overflow: hidden;
  max-height: ${({ $active }) => ($active ? "200px" : "0")};
  transition: max-height 0.3s ease;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #888;
  margin: 12px 0;
`;

const AnswerText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
