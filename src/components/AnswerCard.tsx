import styled from "@emotion/styled";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";

type CardState = "all" | "wrong" | "right";

interface Prop {
  state?: string;
  problem?: string;
  answer?: string;
  isCorrect?: boolean;
  url: string;
}

export const AnswerCard = ({
  state,
  answer,
  isCorrect,
  problem,
  url,
}: Prop) => {
  const getDisplayState = () => {
    if (state === "all") return "all";
    return isCorrect ? "wrong" : "right";
  };

  const displayState = getDisplayState();

  const getCardContent = () => {
    if (displayState === "all") {
      return (
        <Wrap>
          <img src={url} />
          {problem}
          {" : "}
          {answer}
        </Wrap>
      );
    }

    return (
      <>
        <Wrap>
          <img src={url} />
          {problem}
          {answer}
        </Wrap>
        <img src={displayState === "right" ? check : cross} />
      </>
    );
  };

  return <Card state={displayState}>{getCardContent()}</Card>;
};

const Card = styled.button<{ state: CardState }>`
  width: 340px;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  color: black;
  padding: 0 20px;

  background-color: ${({ state }) => {
    switch (state) {
      case "right":
        return "#D4FFB3";
      case "wrong":
        return "#FFC8C8";
      case "all":
        return "#D3D3D3";
    }
  }};
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    width: 35px;
    height: 35px;
  }
`;
