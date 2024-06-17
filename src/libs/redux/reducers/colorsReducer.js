import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    primaryColor: "#000",
    secondaryColor: "#000",
    highlightColor: "#000",
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload.primaryColor;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload.secondaryColor;
    },
    setHighlightColor: (state, action) => {
      state.highlightColor = action.payload.highlightColor;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor, setHighlightColor } =
  colorSlice.actions;
export default colorSlice.reducer;
