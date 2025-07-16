// CompleteSplash.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import confetti from "../assets/8b5cf5e900445458c224e3f44b1efbb3ef9dc105.png";
import { keyframes } from "@emotion/react";

const CompleteSplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Wrap>
        <ImageContainer>
          <img src={confetti} />
        </ImageContainer>
        <TextContainer>
          오늘의 학습을
          <br /> 완료하였습니다!!
        </TextContainer>
      </Wrap>
    </Container>
  );
};

const explode = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    width: 180px;
    height: 180px;
    animation: ${explode} 0.6s;
  }
`;

const TextContainer = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 86px;
  font-size: 29px;
  font-weight: 700;
  text-align: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export default CompleteSplash;
