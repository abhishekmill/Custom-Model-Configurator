import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPositionX, setPositionY, setPositionZ, setRotationX, setRotationY, setRotationZ, setScaleX, setScaleY, setScaleZ, setSelectionHiglight, setTransformControlsMode } from './rtk/slices/modelSlice';

const Overlay = () => {
 const { gltfModel } = useSelector((slice) => slice.model);
 const modelProp  = useSelector((slice) => slice.model.modelProp);
 const selectedModel = useSelector((slice) => slice.model.selectedModel);
 const selectionHiglight = useSelector((slice) => slice.model.selectionHiglight);
 const selectedModelName = useSelector(
   (slice) => slice.model.selectedModelName
 );
const [focous, setFocous ] = useState(null)


const dispatch = useDispatch()



  return (
    <>
      {/* navbar  */}
      <div className="w-60 z-[70] bg-slate-400 pb-2  rounded-b-lg top-0 absolute left-[50%] flex justify-evenly ">
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

      {/* sidebar  */}

      {/* position ans props  */}
      {selectedModel !== null ? (
        <>
          <div className="absolute top-36  left-0   w-1/4   z-50   ">
            <div className="w-full py-5 text-center  text-lg font-semibold ">
              selected model: {selectedModelName}
            </div>

            <div className="w-full flex justify-start ml-5">
              <div class="flex items-center mb-4">
                {/* <input

onClick={()=>dispatch(setSelectionHiglight(!selectionHiglight))}

                  id="default-checkbox"
                  type="checkbox"
                  value="selectionHiglight"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default checkbox
                </label> */}
              </div>
            </div>

            <h1
              onClick={() =>
                setFocous(`${focous === "Position" ? "null" : "Position"}`)
              }
              className="px-5 flex w-[100%] justify-between   text-md font-semibold"
            >
              Position{" "}
              <img
                className={` ${
                  focous === "Position"
                    ? "rotate-90 duration-200"
                    : "rotate-180 duration-200"
                }`}
                src="/arrow.png"
                alt=""
              />
            </h1>
            <div
              className={` ${focous === "Position" ? "block" : "hidden "}  `}
            >
              <Range
                value={modelProp[selectedModel]?.position?.x ?? 0}
                label="X"
                onChange={(e) => {
                  dispatch(
                    setPositionX({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.position?.y ?? 0}
                label="Y"
                onChange={(e) => {
                  dispatch(
                    setPositionY({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.position?.z ?? 0}
                label="Z"
                onChange={(e) => {
                  dispatch(
                    setPositionZ({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />
            </div>

            {/* rotation  */}

            <h1
              onClick={() =>
                setFocous(`${focous === "rotation" ? "null" : "rotation"}`)
              }
              className="px-5  text-md flex w-full justify-between font-semibold"
            >
              Rotation
              <img
                className={` ${
                  focous === "rotation"
                    ? "rotate-90 duration-200"
                    : "rotate-180 duration-200"
                }`}
                src="/arrow.png"
                alt=""
              />
            </h1>
            <div
              className={` ${focous === "rotation" ? "block" : "hidden "}  `}
            >
              <Range
                value={modelProp[selectedModel]?.rotation?.x ?? 0}
                label="X"
                onChange={(e) => {
                  dispatch(
                    setRotationX({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.rotation?.y ?? 0}
                label="Y"
                onChange={(e) => {
                  dispatch(
                    setRotationY({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.rotation?.z ?? 0}
                label="Z"
                onChange={(e) => {
                  dispatch(
                    setRotationZ({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />
            </div>

            {/* scale */}

            <h1
              onClick={() =>
                setFocous(`${focous === "scale" ? "null" : "scale"}`)
              }
              className="px-5  flex w-full justify-between text-md font-semibold"
            >
              Scale{" "}
              <img
                className={` ${
                  focous === "scale"
                    ? "rotate-90 duration-200"
                    : "rotate-180 duration-200"
                }`}
                src="/arrow.png"
                alt=""
              />
            </h1>
            <div className={` ${focous === "scale" ? "block" : "hidden "}  `}>
              <Range
                value={modelProp[selectedModel]?.scale?.x ?? 0}
                label="X"
                onChange={(e) => {
                  dispatch(
                    setScaleX({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.scale?.y ?? 0}
                label="Y"
                onChange={(e) => {
                  dispatch(
                    setScaleY({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />

              <Range
                value={modelProp[selectedModel]?.scale?.z ?? 0}
                label="Z"
                onChange={(e) => {
                  dispatch(
                    setScaleZ({
                      value: Number(e.target.value),
                      idx: selectedModel,
                    })
                  );
                }}
              />
            </div>

            <h1
              onClick={() =>
                setFocous(`${focous === "texture" ? "null" : "texture"}`)
              }
              className="px-5  flex w-full justify-between text-md font-semibold"
            >
              Model Texture
              <img
                className={` ${
                  focous === "texture"
                    ? "rotate-90 duration-200"
                    : "rotate-180 duration-200"
                }`}
                src="/arrow.png"
                alt=""
              />
            </h1>

            {focous === "texture" && (
              <div className="  ">
                {gltfModel &&
                  gltfModel.map((item, index) => {
                    console.log(item);

                    return (
                      <div className="py-2">
                        <h1 className="px-5  flex w-full justify-between text-md  ml-5 ">
                          {item.name}
                        </h1>
                        <Range
                          key={index}
                          manualInput={false}
                          // value={item.material.metalness}
                          label={"metalness"}
                          onChange={(e) => {
                            item.material.metalness = e.target.value;
                          }}
                        />
                        <Range
                          key={index}
                          manualInput={false}
                          // value={item.material.roughness}
                          label={"roughness"}
                          onChange={(e) => {
                            item.material.roughness = e.target.value;
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="top-40 absolute w-1/4 text-center ">
            selecta a model to tweak properties
          </div>
        </>
      )}
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




const Range = ({ value, label = "Label", onChange, manualInput= true }) => {
  return (
    <div className=" py-1">
      <div className="flex justify-center items-center gap-2 px-5">
        <label
          htmlFor="default-range"
          className="block  text-left px-1 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          id="default-range"
          type="range"
          value={value}
          min="-10"
          max="10"
          step="0.1"
          onChange={onChange}
          className="w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />

       {manualInput && <input
          type="number"
          value={value}
          onChange={onChange}
          className="appearance-none w-14 h-8 text-center p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500
             [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />}
      </div>
    </div>
  );
};

