import styled from "@emotion/styled";
import { colors } from "../styles";
import speaker from "../assets/ix_sound-loud-filled.svg";

export const Speaker = () => {
  return (
    <Container>
      <img src={speaker} />
    </Container>
  );
};

const Container = styled.div`
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colors.main[30]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
