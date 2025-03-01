import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";

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
      ); // Max 50MB each
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
    multiple: true, // Allow multiple file selection
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-6 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your models here...</p>
      ) : (
        <p>Drag & drop models, or click to select multiple</p>
      )}

      {files.length > 0 && (
        <ul className="mt-2">
          {files.map((file, index) => (
            <li key={index} className="text-sm">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModelUploader;
