import styled from "@emotion/styled";
import { colors } from "../styles";
import speaker from "../assets/sound.svg";

interface SpeakerProps {
  text: string;
}

export const Speaker = ({ text }: SpeakerProps) => {
  const handleSpeak = () => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ko-KR";
    speechSynthesis.speak(utter);
  };

  return (
    <Container onClick={handleSpeak}>
      <img src={speaker} alt="음성 재생" />
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
