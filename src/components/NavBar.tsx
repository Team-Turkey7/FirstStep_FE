import styled from "@emotion/styled";
import React from "react";
import arrow from "../assets/material-symbols_arrow-back-rounded.svg";

interface Prop {
  day?: string;
}

const NavBar = ({ day }: Prop) => {
  return (
    <Container>
      <img src={arrow} />
      {day ? `${day}일차` : ""}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  position: relative;

  img {
    position: absolute;
    left: 20px;
  }
`;

export default NavBar;
