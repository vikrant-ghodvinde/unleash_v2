import { createSlice } from "@reduxjs/toolkit";

const fontStyleSlice = createSlice({
  name: "fontStyle",
  initialState: {
    primaryFontFamily: "'Playfair Display', serif",
    primaryFontWeight: "700",
    secondaryFontFamily: "'PT Serif', serif",
    secondaryFontWeight: "400",
  },
  reducers: {
    setPrimaryFontFamily: (state, action) => {
      state.primaryFontFamily = action.payload.primaryFontFamily;
    },
    setPrimaryFontWeight: (state, action) => {
      state.primaryFontWeight = action.payload.primaryFontWeight;
    },
    setSecondaryFontFamily: (state, action) => {
      state.secondaryFontFamily = action.payload.secondaryFontFamily;
    },
    setSecondaryFontWeight: (state, action) => {
      state.secondaryFontWeight = action.payload.secondaryFontWeight;
    },
  },
});

export const {
  setPrimaryFontFamily,
  setPrimaryFontWeight,
  setSecondaryFontFamily,
  setSecondaryFontWeight,
} = fontStyleSlice.actions;
export default fontStyleSlice.reducer;
