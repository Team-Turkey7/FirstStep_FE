/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logoIcon from "../assets/img/LogoIcon.svg";

export const BigText = () => {
  return (
    <div css={Container}>
      <p css={Text}>
        태수는 20개의 고래밥을 가지고 있다. 하지만 정욱이가 고래밥이 너무 가지고
        싶어 태수의 고래밥 14개를 뺏었다. 태수가 가지고 있는 고래밥의 개수는?
      </p>
      <img css={Icon} src={logoIcon} />
    </div>
  );
};

const Container = css`
  width: 348px;
  height: 702px;
  border-radius: 15px;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px;
`;

const Text = css`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
`;

const Icon = css`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  width: 65px;
  height: 80px;
`;
