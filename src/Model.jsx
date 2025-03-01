import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGltfModel } from "./rtk/slices/modelSlice";
import React from "react";
const Model = ({ modelFile }) => {
  const [modelUrl, setModelUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modelFile) {
      const url = URL.createObjectURL(modelFile);
      setModelUrl(url);
      return () => URL.revokeObjectURL(url); // Cleanup
    }
  }, [modelFile]);

  const gltf = modelUrl ? useLoader(GLTFLoader, modelUrl) : null;

  useEffect(() => {
    if (gltf) {
      const meshList = [];

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          console.log(child);
          
          meshList.push({
            name: child.name || "Unnamed Mesh",
            material: child.material || "No Material",
            
          });
        }
      });

      console.log("Meshes in Model:", meshList);
      dispatch(setGltfModel(meshList));
    }
  }, [gltf, dispatch]);

  return gltf ? <primitive object={gltf.scene} /> : null;
};

export default Model;
