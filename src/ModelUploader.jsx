import { useState } from "react";
import React from "react";

const ModelUploader = ({ onModelLoad }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        // Max 50MB
        alert("File size exceeds 50MB limit!");
        return;
      }
      if (!file.name.endsWith(".gltf") && !file.name.endsWith(".glb")) {
        alert("Unsupported file format! Please upload a GLTF/GLB model.");
        return;
      }
      setFileName(file.name);
      onModelLoad(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".gltf,.glb" onChange={handleFileChange} />
      {fileName && <p>Loaded: {fileName}</p>}
    </div>
  );
};

export default ModelUploader;
