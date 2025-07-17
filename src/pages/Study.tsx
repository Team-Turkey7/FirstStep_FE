/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import KoreanIcon from "../assets/img/Korean.svg";
import EnglishIcon from "../assets/img/English.svg";
import MathIcon from "../assets/img/Math.svg";
import { colors } from "../styles";
import { Speaker } from "../components/Speaker";
import backIcon from "../assets/img/backIcon.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Topic = [
  { icon: KoreanIcon, name: "한글" },
  { icon: EnglishIcon, name: "영어" },
  { icon: MathIcon, name: "연산" },
];

export const Study = () => {
  const location = useLocation();
  const day = location.state?.day || 1;
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("한글, 영어, 연산");

  return (
    <div css={Container}>
      <div css={Header}>
        <img css={BackButton} src={backIcon} onClick={() => navigate(-1)} />
        <p css={DayText}>{day}일차</p>
      </div>
      <div css={Content}>
        <p css={Title}>학습하기</p>
        <Speaker text={selectedTopic} />
        <div css={ButtonWrapper}>
          {Topic.map((index) => (
            <div css={TopicButton} onClick={() => setSelectedTopic(index.name)}>
              <img css={Icon} src={index.icon} />
              <p css={Subject}>{index.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: white;
  padding-top: 58px;
`;

const Header = css`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = css`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  left: 20px;
  width: 24px;
  height: 24px;
`;

const DayText = css`
  flex: 1;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const Content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = css`
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 28px;
`;

const ButtonWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 100px;
`;

const TopicButton = css`
  display: flex;
  width: 340px;
  height: 96px;
  align-items: center;
  gap: 18px;
  padding: 22px 136px 22px 75px;
  background-color: ${colors.colors.main[40]};
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Icon = css`
  width: 52px;
  height: 52px;
`;

const Subject = css`
  color: white;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;
