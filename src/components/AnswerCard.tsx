import styled from "@emotion/styled";
import check from "../assets/ic_round-check.svg";
import cross from "../assets/bitcoin-icons_cross-filled.svg";
import apple from "../assets/twemoji_red-apple.svg";

type CardState = "right" | "wrong" | "all";

interface Prop {
  state: CardState;
  problem: string;
}

const AnswerCard = ({ state, problem }: Prop) => {
  const getCardContent = () => {
    switch (state) {
      case "right":
        return (
          <>
            <Wrap>
              <img src={apple} />
              {problem}
            </Wrap>
            <img src={check} />
          </>
        );
      case "wrong":
        return (
          <>
            <Wrap>
              <img src={apple} />
              {problem}
            </Wrap>{" "}
            <img src={cross} />
          </>
        );
      case "all":
        return (
          <Wrap>
            <img src={apple} />
            {problem}
          </Wrap>
        );
    }
  };

  return <Card state={state}>{getCardContent()}</Card>;
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
`;

export default AnswerCard;
