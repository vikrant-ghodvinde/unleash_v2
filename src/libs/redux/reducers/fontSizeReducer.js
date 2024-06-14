import { createSlice } from "@reduxjs/toolkit";

export const fontSizeSlice = createSlice({
  name: "fontSize",
  initialState: {
    headingSize: "small",
    contentSize: "small",
  },
  reducers: {
    setFontSize: (state, action) => {
      state.headingSize = action.payload.headingSize;
      state.contentSize = action.payload.contentSize;
    },
  },
});

export const { setFontSize } = fontSizeSlice.actions;
export default fontSizeSlice.reducer;
