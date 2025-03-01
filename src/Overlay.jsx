import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Overlay = () => {
 const { gltfModel } = useSelector((slice) => slice.model);



 useEffect(() => {
   console.log("gltfModel",gltfModel);

 }, [gltfModel]);
  return (
    <div className="absolute z-50 w-full bg-red-500  ">
      <div className="">{
        gltfModel && (gltfModel.map((item,index)=>{
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
        }))}
    
      </div>
    </div>
  );
}

export default Overlay