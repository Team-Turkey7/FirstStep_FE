/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DayButton from "../components/DayButton";
import { colors } from "../styles";
import MyIcon from "../assets/img/MyIcon.svg";
import Study from "../assets/img/Study.svg";
import { useNavigate } from "react-router-dom";
import { Complete } from "../apis";
import { CompletionResponse } from "../apis/type";
import { useEffect, useState } from "react";

export const Main = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<CompletionResponse[] | null>(null);

  useEffect(() => {
    const getCompleteResult = async () => {
      try {
        const response = await Complete();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    getCompleteResult();
  }, []);

  const handleDayClick = (date: number) => {
    navigate("/study", { state: { date: `${date}일차` } });
  };

  return (
    <div css={Container}>
      <img css={My} src={MyIcon} onClick={() => navigate("/wrong-answer")} />
      <img css={StudyIcon} src={Study} />
      <p css={Title}>학습하기</p>
      <p css={Content}>
        성장을 위한 가장 든든한 <span css={Important}>첫걸음</span>, <br />
        지금 시작하세요
      </p>
      <div css={ButtonGrid}>
        {data?.map((index) => (
          <DayButton
            key={index.date}
            day={index.date.toString()}
            completed={index.complete}
            onClick={() =>
              handleDayClick(parseInt(index.date.replace("일차", ""), 10))
            }
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
