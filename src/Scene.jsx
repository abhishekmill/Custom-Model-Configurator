import { Canvas, useThree } from "@react-three/fiber";
import { Environment, GizmoHelper, GizmoViewport, Grid, OrbitControls, TransformControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import ModelUploader from "./ModelUploader";
import Model from "./Model";
import React from "react";
import {DoubleSide} from  'three'
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import ClickOutsideHandler from "./ClickOutsideHandler";
import { addModelFile, addModelProp, setScaleY, setSelectedModel } from "./rtk/slices/modelSlice";
import Overlay from "./Overlay";
const Scene = () => {
  const [models, setModels] = useState([]); 
 const orbitRef = useRef();
 const transformRef = useRef();
     const dispatch =useDispatch()

 
 const { transformControlsMode } = useSelector((slice) => slice.model);
 
   const handleModelClick = (e, modelIndex) => {
     e.stopPropagation(); 
     
     dispatch(setSelectedModel(modelIndex));
   };

 const selectedModel = useSelector((slice) => slice.model.selectedModel);

   
const modelProp  = useSelector((slice) => slice.model.modelProp);
  return (
    <div className="h-screen flex">
        <Overlay />
      <div className="w-1/4 p-4 bg-gray-100">
        <ModelUploader onModelsLoad={setModels} />
      </div>
      <div className="w-3/4">
        <Canvas camera={{ position: [15, 8, 21] }}>
          <ClickOutsideHandler />
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
          {models.map((model, index) => {
            const onclick = (e) => {
              if (!modelProp[index]) {
                dispatch(
                  addModelProp({
                    position: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                    scale: {
                      x: 1,
                      y: 1,
                      z: 1,
                    },
                    rotation: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                  })
                );
              }
            };

            return (
              <TransformControls
                position={[
                  modelProp[index]?.position?.x ?? 0,
                  modelProp[index]?.position?.y ?? 0,
                  modelProp[index]?.position?.z ?? 0,
                ]}
                scale={[
                  modelProp[index]?.scale?.x ?? 1,
                  modelProp[index]?.scale?.y ?? 1,
                  modelProp[index]?.scale?.z ?? 1,
                ]}
                rotation={[
                  modelProp[index]?.rotation?.x ?? 0,
                  modelProp[index]?.rotation?.y ?? 0,
                  modelProp[index]?.rotation?.z ?? 0,
                ]}
                enabled={selectedModel === index}
                showX={selectedModel === index}
                showY={selectedModel === index}
                showZ={selectedModel === index}
                mode={transformControlsMode}
                onMouseDown={() => (orbitRef.current.enabled = false)}
                onMouseUp={() => (orbitRef.current.enabled = true)}
              >
                <group
                  name="model"
                  onClick={(e) => {
                    handleModelClick(e, index);

                    onclick();
                  }}
                >
                  <Model
                    isSelected={selectedModel === index}
                    key={index}
                    modelFile={model}
                    position={[index * 2, 0, 0]}
                  />
                </group>
              </TransformControls>
            );
          })}
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
