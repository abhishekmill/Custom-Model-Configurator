import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gltfModel: [],
  modelFile: [],
  modelProp: [],
  transformControlsMode: "translate",
  selectedModel: null
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setGltfModel: (state, action) => {
      state.gltfModel = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setTransformControlsMode: (state, action) => {
      state.transformControlsMode = action.payload;
    },
    addModelFile: (state, action) => {
      state.modelFile.push(action.payload);
    },
    addModelProp: (state, action) => {
      state.modelProp.push(action.payload);
    },
    deleteModel: (state, action) => {
      state.modelFile = state.modelFile.filter(
        (_, index) => index !== action.payload
      );
    },

    //setting propsssssssssssssssss
    setPositionX: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].position.x = value;
      }
    },
    setPositionY: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].position.y = value;
      }
    },
    setPositionZ: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].position.z = value;
      }
    },

    // rotationnnn
    setRotationX: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].rotation.x = value;
      }
    },
    setRotationY: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].rotation.y = value;
      }
    },
    setRotationZ: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].rotation.z = value;
      }
    },

    // scale

    setScaleX: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].scale.x = value;
      }
    },
    setScaleY: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].scale.y = value;
      }
    },
    setScaleZ: (state, action) => {
      const { idx, value } = action.payload;
      if (state.modelProp[idx]) {
        state.modelProp[idx].scale.z = value;
      }
    },

    //setting propss closed

    setScale: (state, action) => {
      state.modelProp.scale = { ...state.modelProp.scale, ...action.payload };
    },
    setRotation: (state, action) => {
      state.modelProp.rotation = {
        ...state.modelProp.rotation,
        ...action.payload,
      };
    },
  },
});

export const {
  setScaleX,
  setScaleY,
  setScaleZ,
  setRotationX,
  setRotationY,
  setRotationZ,
  setPositionX,
  setPositionY,
  setPositionZ,
  setSelectedModel,
  addModelProp,
  setGltfModel,
  addModelFile,
  deleteModel,
  setTransformControlsMode,
} = modelSlice.actions;

export default modelSlice.reducer;
