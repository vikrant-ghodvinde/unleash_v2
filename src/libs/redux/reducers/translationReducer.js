import { createSlice } from "@reduxjs/toolkit";

const translationSlice = createSlice({
  name: "translation",
  initialState: {
    selectedLanguage: {
      name: "English",
      flag: "english",
      code: "en",
    },
  },
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload.selectedLanguage;
    },
  },
});

export const { setSelectedLanguage } = translationSlice.actions;
export default translationSlice.reducer;
