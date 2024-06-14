import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    primaryColor: "#000",
    secondaryColor: "",
    highlightColor: "",
  },
  reducers: {
    setColors: (state, action) => {
      state.primaryColor = action.payload.primaryColor;
      state.secondaryColor = action.payload.secondaryColor;
      state.highlightColor = action.payload.highlightColor;
    },
  },
});

export const { setColors } = colorSlice.actions;
export default colorSlice.reducer;
