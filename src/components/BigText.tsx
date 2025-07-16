/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logoIcon from "../assets/img/LogoIcon.svg";
import { backIcon } from "../assets";

interface BigTextProps {
  problemDetail: string;
  onBack: () => void;
}

export const BigText = ({ problemDetail, onBack }: BigTextProps) => {
  return (
    <div css={FullScreen}>
      <div css={Header}>
        <img css={BackButton} src={backIcon} alt="뒤로가기" onClick={onBack} />
      </div>
      <div css={ContentWrapper}>
        <div css={Container}>
          <p css={Text}>{problemDetail}</p>
          <img css={Icon} src={logoIcon} />
        </div>
      </div>
    </div>
  );
};

const FullScreen = css`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px 20px;

  @media (max-width: 768px) {
    padding: 40px 16px 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 12px 12px;
  }
`;

const Header = css`
  width: 100%;
  display: flex;
  align-items: center;
`;

const BackButton = css`
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 16px;
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    margin-left: 12px;
    margin-top: 12px;
  }
`;

const ContentWrapper = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Container = css`
  width: 90%;
  max-width: 400px;
  height: 80%;
  border-radius: 15px;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 350px;
    height: 75%;
    padding: 24px 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    height: 70%;
    padding: 20px 16px;
    border-radius: 10px;
  }
`;

const Text = css`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: flex-start;
  text-align: left;
  line-height: 1.4;
  word-spacing: 0.3em;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.2;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

const Icon = css`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  width: 65px;
  height: 80px;

  @media (max-width: 768px) {
    width: 55px;
    height: 68px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 56px;
  }
`;
