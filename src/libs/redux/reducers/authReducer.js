import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userName: "",
    userImage: "",
    userEmail: "",
    loggedIn: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.userName = action.payload.userName;
      state.userImage = action.payload.userImage;
      state.userEmail = action.payload.userEmail;
      state.loggedIn = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.userName = "";
      state.userImage = "";
      state.userEmail = "";
      state.loggedIn = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
