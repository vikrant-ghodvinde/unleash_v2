import { createSlice } from "@reduxjs/toolkit";

const cardCornersSlice = createSlice({
  name: "cardCorners",
  initialState: {
    corners: "rounded",
  },
  reducers: {
    setCorners: (state, actions) => {
      state.corners = actions.payload.corners;
    },
  },
});

export const { setCorners } = cardCornersSlice.actions;
export default cardCornersSlice.reducer;
