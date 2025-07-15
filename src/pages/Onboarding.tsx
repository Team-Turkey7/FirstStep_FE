/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import LogoIcon from "../assets/img/Logo.svg";
import { colors } from "../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Onboarding = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/main");
    }, 600); // 애니메이션 길이와 맞춰줌
  };

  return (
    <div css={Container} onClick={handleClick}>
      <img css={[Logo, fadeOut && fadeOutStyle]} src={LogoIcon} alt="logo" />
      <p css={[Title, fadeOut && fadeOutStyle]}>첫걸음</p>
    </div>
  );
};

const Container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background-color: white;
`;

const Logo = css`
  width: 100px;
  height: 100px;
`;

const Title = css`
  color: ${colors.colors.main[50]};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;

const fadeOutKeyframe = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const fadeOutStyle = css`
  animation: ${fadeOutKeyframe} 0.6s ease forwards;
`;
