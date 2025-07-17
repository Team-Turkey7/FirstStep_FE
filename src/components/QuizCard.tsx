/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import seatchIcon from "../assets/img/searchIcon.svg";
import { BigText } from "./BigText";

interface QuizCardProps {
  num: number;
  problem: string;
  problemDetail?: string;
  photoURL?: string;
}

export const QuizCard = ({
  num,
  problem,
  problemDetail,
  photoURL,
}: QuizCardProps) => {
  const [showBigText, setShowBigText] = useState(false);

  const onclickDetail = () => {
    setShowBigText(true);
  };

  const closeBigText = () => {
    setShowBigText(false);
  };

  if (showBigText) {
    return (
      <div css={OverlayContainer} onClick={closeBigText}>
        <div css={BigTextWrapper} onClick={(e) => e.stopPropagation()}>
          <BigText problemDetail={problem || ""} onBack={closeBigText} />
        </div>
      </div>
    );
  }

  return (
    <div css={Container}>
      {num === 1 && (
        <>
          <p css={Text}>{problem}</p>
          <p css={Pronunciation}>{problemDetail}</p>
        </>
      )}

      {num === 2 && <p css={Text}>{problem}</p>}

      {num === 3 && <img css={Image} src={photoURL} />}

      {num === 4 && (
        <>
          <p css={Text}>{problem}</p>
          <p css={Pronunciation}>{problemDetail}</p>
        </>
      )}

      {num === 5 && (
        <>
          <p css={Text}>{problem}</p>
          <p css={Pronunciation}>[{problemDetail}]</p>
        </>
      )}
      {num === 6 && <img css={Image} src={photoURL} />}

      {num === 7 && <p css={Text}>{problem}</p>}

      {num === 8 && (
        <>
          <p css={Problem}>{problem}</p>
          <img css={Icon} src={seatchIcon} onClick={onclickDetail} />
        </>
      )}
    </div>
  );
};

const Container = css`
  width: 300px;
  height: 246px;
  border-radius: 15px;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 31px;
`;

const OverlayContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const BigTextWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = css`
  font-size: 62px;
  font-style: normal;
  font-weight: 500;
`;

const Pronunciation = css`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const Image = css`
  width: 75px;
  height: 75px;
`;

const Problem = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const Icon = css`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
