import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gltfModel: [],
};

export const modelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setGltfModel: (state, action) => {
      state.gltfModel = action.payload;
    },
  },
});

export const { setGltfModel } = modelSlice.actions;

export default modelSlice.reducer;
