/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import KoreanIcon from "../assets/img/Korean.svg";
import EnglishIcon from "../assets/img/English.svg";
import MathIcon from "../assets/img/Math.svg";
import { colors } from "../styles";
import { Speaker } from "../components/Speaker";
import backIcon from "../assets/img/backIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Topic = [
  { icon: KoreanIcon, name: "한글", code: "KOREAN", path: "korean" },
  { icon: EnglishIcon, name: "영어", code: "ENGLISH", path: "english" },
  { icon: MathIcon, name: "연산", code: "MATH", path: "math" },
];

export const Study = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("한글, 영어, 연산");
  const { date } = useParams<{ date: string }>();
  const day = `${date}일차`;

  const handleTopicSelect = (topicName: string) => {
    setSelectedTopic(topicName);

    if (topicName === "한글") {
      navigate(`/korean/${date}`);
    } else if (topicName === "영어") {
      navigate(`/english/${date}`);
    } else if (topicName === "연산") {
      navigate(`/math/${date}`);
    }
  };

  return (
    <div css={Container}>
      <div css={Header}>
        <img
          css={BackButton}
          src={backIcon}
          onClick={() => navigate("/main")}
        />
        <p css={DayText}>{day}</p>
      </div>

      <div css={Content}>
        <p css={Title}>학습하기</p>
        <Speaker text={selectedTopic} />

        <div css={ButtonWrapper}>
          {Topic.map((topic) => (
            <div
              key={topic.code}
              css={TopicButton}
              onClick={() => handleTopicSelect(topic.name)}
            >
              <img css={Icon} src={topic.icon} />
              <p css={Subject}>{topic.name}</p>
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
  cursor: pointer;
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
