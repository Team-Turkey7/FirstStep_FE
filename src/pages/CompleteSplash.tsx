import styled from "@emotion/styled";
import confetti from "../assets/8b5cf5e900445458c224e3f44b1efbb3ef9dc105.png";

const CompleteSplash = () => {
  return (
    <Container>
      <Wrap>
        <img src={confetti} />
        오늘의 학습을
        <br /> 완료하였습니다!!
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 86px;
  font-size: 29px;
  font-weight: 700;
  text-align: center;
  img {
    width: 180px;
    height: 180px;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default CompleteSplash;
