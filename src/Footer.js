import styled from "styled-components";
import dekor from "./images/dekor.svg";

const Container = styled.div`
  padding-top: 200px;
`;

const Agh = styled.img`
  max-width: 1416px;
  bottom: 137px;
  transform: rotateY(180deg);
  height: 100%;
  z-index: 998;
  margin: auto;
  position: relative;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 1rem;
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

const Footer = () => (
  <Container>
    <Background>
      <Agh src={dekor} />
      <div>© 2023 Wszystkie prawa zastrzeżone</div>
    </Background>
  </Container>
);

export default Footer;
