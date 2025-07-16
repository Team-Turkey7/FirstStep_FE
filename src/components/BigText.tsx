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
  padding: 60px 20px 20px 60px;
`;

const Header = css`
  width: 100%;
  display: flex;
  align-items: center;
`;

const BackButton = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px;
`;

const ContentWrapper = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
`;

const Icon = css`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  width: 65px;
  height: 80px;
`;
