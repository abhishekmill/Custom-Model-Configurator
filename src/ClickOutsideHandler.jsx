import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedModel } from "./rtk/slices/modelSlice";

const ClickOutsideHandler = () => {
  const { gl } = useThree();

  const dispatch = useDispatch()
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === gl.domElement) {
        console.log("Canvas was clicked! Deselecting model...");
        dispatch(setSelectedModel(null));
      }
    };

    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("click", handleClick);
    };
  }, [gl]);

  return null;
};

export default ClickOutsideHandler;
