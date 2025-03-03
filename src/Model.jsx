import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGltfModel } from "./rtk/slices/modelSlice";
import * as THREE from "three";
import React from "react";
const Model = ({ modelFile, isSelected }) => {
  const [modelUrl, setModelUrl] = useState(null);
  const dispatch = useDispatch();

  const { gltfModel } = useSelector((slice) => slice.model);
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
         
            child.material.color = new THREE.Color(`${isSelected ? 'blue':'white' }`);

          meshList.push({
            name: child.name || "Unnamed Mesh",
            material: child.material || "No Material",
          });
        }
      });

      const updatedModels = [...gltfModel, ...meshList];

      console.log(gltf);
      gltf.materials;

      // dispatch(setGltfModel(updatedModels))
    }
  }, [gltf, dispatch, isSelected]);

  return gltf ? <primitive object={gltf.scene} /> : null;
};

export default Model;
