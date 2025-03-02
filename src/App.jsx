import { useState } from "react";
import React from "react";
import ModelUploader from "./ModelUploader";
import Scene from "./Scene";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./Overlay";


function App() {
  const [modelFile, onModelLoad] = useState(null);
  return (
    <>
      {" "}
      <div className=" z-30">
        <Overlay />
      </div>
      <div className=" h-screen  ">
        <Scene />
      </div>
    </>
  );
}

export default App;
