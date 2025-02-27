import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import ModelUploader from "./ModelUploader";
import Scene from "./Scene";

function App() {
  const [modelFile, setModelFile] = useState(null);

  return (
    <>
      <div className="w-full h-screen ">
        <ModelUploader onModelLoad={setModelFile} />
        <Scene modelFile={modelFile} />
      </div>
    </>
  );
}

export default App;
