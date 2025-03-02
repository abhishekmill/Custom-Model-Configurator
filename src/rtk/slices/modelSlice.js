import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gltfModel: [],
  transformControlsMode: 'translate'
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setGltfModel: (state, action) => {
      state.gltfModel = action.payload;
    },
    setTransformControlsMode: (state, action) => {
      state.transformControlsMode = action.payload;
    },
  },
});

export const { setGltfModel, setTransformControlsMode } = modelSlice.actions;

export default modelSlice.reducer;
