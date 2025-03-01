import { Canvas, useThree } from "@react-three/fiber";
import { Environment, GizmoHelper, GizmoViewport, Grid, OrbitControls, TransformControls } from "@react-three/drei";
import { useState } from "react";
import ModelUploader from "./ModelUploader";
import Model from "./Model";
import React from "react";
import {DoubleSide} from  'three'
const Scene = () => {
  const [models, setModels] = useState([]); // State for uploaded models

  return (
    <div className="h-screen flex">
      {/* Upload Panel */}
      <div className="w-1/4 p-4 bg-gray-100">
        <ModelUploader onModelsLoad={setModels} />
      </div>

      {/* 3D Scene */}
      <div className="w-3/4">
        <Canvas camera={{ position: [15, 8, 21] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* <gridHelper/> */}
          <Grid
            side={DoubleSide}
            scale={10}
          
            
            cellSize={1}
            infiniteGrid
            cellThickness={1}
          />
          <Environment preset="city"/>



  <GizmoHelper alignment="top-right" margin={[80, 80]}>     
    
      <GizmoViewport
              axisColors={["red", "green", "blue"]}
              labelColor="white"
            />   
            </GizmoHelper>  
          {models.map((model, index) => (
            <TransformControls>

            <Model key={index} modelFile={model} position={[index * 2, 0, 0]} />
            </TransformControls>
          ))}
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
