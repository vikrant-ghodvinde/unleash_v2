import { createSlice } from "@reduxjs/toolkit";

const textAlignSlice = createSlice({
  name: "textAlign",
  initialState: {
    alignment: "left",
  },
  reducers: {
    setAlignment: (state, action) => {
      state.alignment = action.payload.alignment;
    },
  },
});

export const { setAlignment } = textAlignSlice.actions;
export default textAlignSlice.reducer;
