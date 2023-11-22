import styled from "styled-components";
import Footer from "./Footer";

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  padding: 20px;
`;

const Map = () => (
  <>
    <Container>
      <Text>Lokalizajca Pomnika Biskupa Albina Małysiaka</Text>
      <iframe
        title="Pomnika Biskupa Albina Małysiaka"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7007.38449280657!2d19.916507154492706!3d50.061717049796826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDAzJzQwLjYiTiAxOcKwNTUnMDcuOCJF!5e1!3m2!1spl!2spl!4v1699554173490!5m2!1spl!2spl"
        width="800"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
    <Footer />
  </>
);

export default Map;
