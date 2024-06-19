import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
