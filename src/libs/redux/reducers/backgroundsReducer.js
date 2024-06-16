import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "backgrounds",
  initialState: {
    primaryBackground: "#4B5563",
    secondaryBackground: "#4B5563",
    imageBackground: "",
    backgroundType: "solidColor",
    swapGradient: false,
  },
  reducers: {
    setPrimaryBackground: (state, action) => {
      state.primaryBackground = action.payload.primaryBackground;
    },
    setSecondaryBackground: (state, action) => {
      state.secondaryBackground = action.payload.secondaryBackground;
    },
    setSwapGradient: (state) => {
      state.swapGradient = !state.swapGradient;
    },
    setImageBackground: (state, action) => {
      state.imageBackground = action.payload.imageBackground;
    },
    setBackgroundType: (state, action) => {
      state.backgroundType = action.payload.backgroundType;
    },
  },
});

export const {
  setPrimaryBackground,
  setSecondaryBackground,
  setImageBackground,
  setBackgroundType,
  setSwapGradient,
} = backgroundSlice.actions;
export default backgroundSlice.reducer;
