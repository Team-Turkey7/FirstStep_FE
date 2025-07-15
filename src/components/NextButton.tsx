import styled from "@emotion/styled";
import React from "react";
import { colors } from "../styles";
import arrow_white from "../assets/arrow-white.svg";
import arrow_black from "../assets/arrow-black.svg";

type ButtonState = "active" | "disabled" | "completed";

interface Prop {
  state: ButtonState;
  text: string;
}

const NextButton = ({ state, text }: Prop) => {
  const getButtonContent = () => {
    switch (state) {
      case "active":
        return (
          <>
            {text} <img src={arrow_white} alt="arrow" />
          </>
        );
      case "disabled":
        return (
          <>
            {text} <img src={arrow_black} alt="arrow" />
          </>
        );
      case "completed":
        return text;
    }
  };

  return (
    <Button state={state} disabled={state === "disabled"}>
      {getButtonContent()}
    </Button>
  );
};

const Button = styled.button<{ state: ButtonState }>`
  width: 172px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  cursor: ${({ state }) => (state === "disabled" ? "not-allowed" : "pointer")};

  background-color: ${({ state }) => {
    switch (state) {
      case "active":
        return colors.colors.main[40];
      case "disabled":
        return "#dbdbdb";
      case "completed":
        return colors.colors.main[40];
    }
  }};

  color: ${({ state }) => {
    switch (state) {
      case "active":
        return "white";
      case "disabled":
        return "black";
      case "completed":
        return "white";
    }
  }};

  img {
    position: absolute;
    right: 14px;
  }
`;

export default NextButton;
