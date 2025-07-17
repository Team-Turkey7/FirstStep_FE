import styled from "@emotion/styled";
import { colors } from "../styles";

interface Prop {
  day: string;
  completed?: boolean;
  onClick: () => void;
}

const DayButton = ({ day, completed, onClick }: Prop) => {
  console.log("Day:", day, "completed:", completed);
  return (
    <Container completed={!!completed} onClick={onClick}>
      {day}
    </Container>
  );
};

const Container = styled.div<{ completed: boolean }>`
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
  ${({ completed }) =>
    completed &&
    `
    background-color: ${colors.colors.main[50]};
    color: white;
  `}
`;

export default DayButton;
