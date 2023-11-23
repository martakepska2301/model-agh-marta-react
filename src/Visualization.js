import styled from "styled-components";

import Footer from "./Footer";
import Pomnik from "./Pomnik";
import PomnikDwa from "./PomnikDwa";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
`;


const Visualization = () => {
  return (
    <>
      <Container>
        <Text>
          Cinema 4D
        </Text>
        <Canvas
          style={{
            height: "1000px",
            width: "100vw",
          }}
        >
          <ambientLight intensity={Math.PI / 4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
          <Pomnik position={[0, 2, 0]} />
          <OrbitControls />
        </Canvas>{" "}
        <Text>
          Agisoft Metashape Professional
        </Text>
        <Canvas
          style={{
            height: "1000px",
            width: "100vw",
          }}
        >
          <ambientLight intensity={Math.PI / 4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
          <PomnikDwa position={[0, 0, 0]} rotation={[0, 1460, 0]} />
          <OrbitControls />
          <Stars />
        </Canvas>
      </Container>
      <Footer />
    </>
  );
};


export default Visualization;
