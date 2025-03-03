import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTransformControlsMode } from './rtk/slices/modelSlice';

const Overlay = () => {
 const { gltfModel } = useSelector((slice) => slice.model);



const dispatch = useDispatch()
 useEffect(() => {
   console.log("gltfModels",gltfModel);

 }, [gltfModel]);
  return (
    <>
      <div className="w-60 z-[70]  h-16 bg-red-700 rounded-b-lg top-0 absolute left-[50%] flex justify-evenly ">
        <Icon
          path={"/rotation.jpg"}
          onClick={() => {
            dispatch(setTransformControlsMode("rotate"));
          }}
        />
        <Icon
          path={"/scale.jpg"}
          onClick={() => {
            dispatch(setTransformControlsMode("scale"));
          }}
        />
        <Icon
          path={"/translate.jpeg"}
          onClick={() => {
            dispatch(setTransformControlsMode("translate"));
          }}
        />
      </div>
      <div className="absolute top-0 z-50 w-full bg-red-500  ">
        {/* <div className="">
          {gltfModel &&
            gltfModel.map((item, index) => {
              console.log(item);

              return (
                <>
                  <div key={index}>
                    {" "}
                    {item.name}
                    <input
                      type="range"
                      min={0}
                      max={2}
                      step={0.01}
                      onChange={(e) => {
                        item.material.metalness = e.target.value;
                      }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={2}
                      step={0.01}
                      onChange={(e) => {
                        item.material.roughness = e.target.value;
                      }}
                    />
                  </div>
                </>
              );
            })}
        </div> */}
      </div>
    </>
  );
}

export default Overlay




const Icon = ({ path,onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-14 h-14 hover:scale-110 overflow-hidden rounded-b-md  duration-150 "
      >
        <img src={path} alt="" />
      </div>
    </>
  );
};