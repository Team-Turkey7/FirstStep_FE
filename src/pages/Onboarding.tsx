/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoIcon from "../assets/img/Logo.svg";
import { colors } from "../styles";

export const Onboarding = () => {
  return (
    <div css={Container}>
      <img css={Logo} src={LogoIcon} />
      <p css={Title}>첫걸음</p>
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
