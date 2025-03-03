import { Canvas, useThree } from "@react-three/fiber";
import { Environment, GizmoHelper, GizmoViewport, Grid, OrbitControls, TransformControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import ModelUploader from "./ModelUploader";
import Model from "./Model";
import React from "react";
import {DoubleSide} from  'three'
import { useSelector } from "react-redux";
import * as THREE from "three";
const Scene = () => {
  const [models, setModels] = useState([]); 
 const orbitRef = useRef();
 const transformRef = useRef();
     const gl = new THREE.WebGLRenderer();

 useEffect(() => {
   const handleOutsideClick = (e) => {
     if (setSelectedModel) {
       setSelectedModel(null);
     }
    
    
   };
 
   

   window.addEventListener("click", handleOutsideClick);

   return () => {
     window.removeEventListener("click", handleOutsideClick);
   };
 }, [gl]);
 const { transformControlsMode } = useSelector((slice) => slice.model);
   const [selectedModel, setSelectedModel] = useState(null);
 console.log(models, "models");
   const handleModelClick = (e, modelIndex) => {
     e.stopPropagation(); 
     setSelectedModel(modelIndex);
     console.log(modelIndex);
     
   };
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
          <OrbitControls ref={orbitRef} />
          {/* <gridHelper/> */}
          <Grid
            side={DoubleSide}
            scale={10}
            cellSize={1}
            infiniteGrid
            cellThickness={1}
          />
          <Environment preset="city" />

          <GizmoHelper alignment="top-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["red", "green", "blue"]}
              labelColor="white"
            />
          </GizmoHelper>
          {models.map((model, index) => 
        
         {
          
          const onclick =(e)=>{
            console.log(e);

          }
          
          
          return (
            <TransformControls
              mode={transformControlsMode}
              ref={transformRef}
              onMouseDown={() => (orbitRef.current.enabled = false)}
              onMouseUp={() => (orbitRef.current.enabled = true)}
            >
              <group name="model" onClick={(e) => handleModelClick(e, index)}>
                <Model
                  isSelected={selectedModel === index}
                  key={index}
                  modelFile={model}
                  position={[index * 2, 0, 0]}
                />
              </group>
            </TransformControls>
          );}
          
          
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
