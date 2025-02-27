import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";
const Model = ({ modelFile }) => {
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    if (modelFile) {
      const url = URL.createObjectURL(modelFile);
      console.log(url);
      setModelUrl(url);

      return () => URL.revokeObjectURL(url); // Cleanup old URLs
    }
  }, [modelFile]);

  const gltf = modelUrl ? useLoader(GLTFLoader, modelUrl) : null;

  return gltf ? <primitive object={gltf.scene} /> : null;
};

const Scene = ({ modelFile }) => {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model modelFile={modelFile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
