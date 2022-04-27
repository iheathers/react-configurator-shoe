import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import "./css/App.css";
import "./css/Shoe.css";
import Car from "./objects/Car";
import { Picker } from "./components/ColorPicker";

function App() {
  return (
    <>
      <Picker />
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <Suspense fallback={null}>
          <Car />
          <Environment files="sky.hdr" />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
