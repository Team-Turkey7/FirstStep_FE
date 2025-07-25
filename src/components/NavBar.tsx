import styled from "@emotion/styled";
import { arrowLeft } from "../assets";
import { useNavigate } from "react-router-dom";

interface Prop {
  day?: string;
}

const NavBar = ({ day }: Prop) => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={arrowLeft} onClick={() => navigate(-1)} />
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
