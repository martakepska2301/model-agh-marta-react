import styled from "styled-components";
import pomnik from "./images/pomnik.jpg";
import Footer from "./Footer";

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Agh = styled.img`
  height: 560px;
  margin: 55px;
`;

const Text = styled.p`
  margin: auto;
  padding: 60px 0;
  max-width: 800px;
`;

const HedaderText = styled.div`
  margin: auto;
  font-size: 40px;
  `;

const Home = () => (
  <Container>
    <HedaderText>Pomnik ks. bp. Albina Małysiaka</HedaderText>
    <Container>
      <Agh src={pomnik} />
    </Container>
    <Text>
    Pomnik ks. bp Albina Małysiaka był przedmiotem pracy magisterskiej pt. „Tworzenie i udostępnianie modeli 3D w Internecie”, wykonanej przez studentkę Wydzialu Geodezji Górniczej i Inżynierii Środowiska AGH - Martę Kępską-Toborek.
Polegała ona na stworzeniu dwóch modeli wspomnianego pomnika, oraz ich wizualizacji na niniejszej stronie internetowej </Text>
    <Footer />
  </Container>
);

export default Home;
