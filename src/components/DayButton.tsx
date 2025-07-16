import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";

interface Prop {
  day: string;
  isCompleted?: boolean;
  onClick: () => void;
}

const DayButton = ({ day, isCompleted = false, onClick }: Prop) => {
  return (
    <Container isCompleted={isCompleted} onClick={onClick}>
      {day}일차
    </Container>
  );
};

const Container = styled.div<{ isCompleted: boolean }>`
  width: 92px;
  height: 92px;
  border: none;
  border-radius: 20px;
  background-color: #dbdbdb;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${({ isCompleted }) =>
    isCompleted &&
    `
    background-color: ${colors.colors.main[50]};
    color: white;
  `}
`;

export default DayButton;
