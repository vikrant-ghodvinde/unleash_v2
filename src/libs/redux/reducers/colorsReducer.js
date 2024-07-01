import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    primaryColor: "#000",
    secondaryColor: "#000",
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload.primaryColor;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload.secondaryColor;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor } =
  colorSlice.actions;
export default colorSlice.reducer;
