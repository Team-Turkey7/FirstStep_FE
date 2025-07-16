/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DayButton from "../components/DayButton";
import { colors } from "../styles";
import MyIcon from "../assets/img/MyIcon.svg";
import Study from "../assets/img/Study.svg";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  const handleDayClick = (day: number) => {
    navigate(`/study/${day}`);
  };

  return (
    <div css={Container}>
      <img css={My} src={MyIcon} onClick={() => navigate("/")} />
      <img css={StudyIcon} src={Study} />
      <p css={Title}>학습하기</p>
      <p css={Content}>
        성장을 위한 가장 든든한 <span css={Important}>첫걸음</span>, <br />
        지금 시작하세요
      </p>
      <div css={ButtonGrid}>
        {Array.from({ length: 30 }, (_, i) => (
          <DayButton
            key={i + 1}
            day={(i + 1).toString()}
            isCompleted={true}
            onClick={() => handleDayClick(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 60px 32px;
`;

const My = css`
  width: 48px;
  height: 48px;
  display: flex;
  align-self: flex-end;
`;

const StudyIcon = css`
  width: 154px;
  height: 120px;
`;

const Title = css`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;

const Content = css`
  color: #6c6c6c;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

const Important = css`
  color: ${colors.colors.main[40]};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

const ButtonGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 20px;
`;
