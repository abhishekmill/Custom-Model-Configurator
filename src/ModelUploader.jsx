import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedModelName } from "./rtk/slices/modelSlice";

const ModelUploader = ({ onModelsLoad }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!onModelsLoad) {
        console.error("onModelsLoad is not provided!");
        return;
      }

      const validFiles = acceptedFiles.filter(
        (file) => file.size <= 50 * 1024 * 1024
      );
      if (validFiles.length !== acceptedFiles.length) {
        alert("Some files were too large and were skipped!");
      }

      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      onModelsLoad((prevModels) => [...prevModels, ...validFiles]);
    },
    [onModelsLoad]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "model/gltf-binary": [".glb"], "model/gltf+json": [".gltf"] },
    multiple: true,
  });

 const selectedModel = useSelector((slice) => slice.model.selectedModel);



const dispatch = useDispatch()

useEffect(() => {
  if(files){

    dispatch(setSelectedModelName(files[selectedModel]?.name))
    
  }

}, [files, selectedModel]);

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-6 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your models here.....</p>
      ) : (
        <p>Drag & drop models, or click to select multiple</p>
      )}

     
    </div>
  );
};

export default ModelUploader;
