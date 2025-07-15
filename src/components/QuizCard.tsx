/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import seatchIcon from "../assets/img/searchIcon.svg";

interface QuizCardProps {
  num: number;
}

export const QuizCard = ({ num }: QuizCardProps) => {
  return (
    <div css={Container}>
      {num === 1 && (
        <>
          <p css={Text}>ㄱ</p>
          <p css={Pronunciation}>기역</p>
        </>
      )}

      {num === 2 && <p css={Text}>사과</p>}

      {num === 3 && (
        <img
          css={Image}
          src="https://item.kakaocdn.net/do/bd24f6a0b8e2710b109ed04a636b969c8b566dca82634c93f811198148a26065"
        />
      )}

      {num === 4 && (
        <>
          <p css={Text}>A</p>
          <p css={Pronunciation}>에이</p>
        </>
      )}

      {num === 5 && (
        <>
          <p css={Text}>Apple</p>
          <p css={Pronunciation}>[애플]</p>
          <p css={Pronunciation}>사과</p>
        </>
      )}

      {num === 6 && <p css={Text}>3+4</p>}

      {num === 7 && (
        <>
          <p css={Problem}>
            태수는 20개의 고래밥을 가지고 있다. 하지만 정욱이가 고래밥이 너무
            가지고 싶어 태수의 고래밥 14개를 뺏었다. 태수가 가지고 있는 고래밥의
            개수는?
          </p>
          <img css={Icon} src={seatchIcon} />
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
`;
