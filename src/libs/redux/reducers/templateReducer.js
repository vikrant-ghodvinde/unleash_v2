import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
  initialState: {
    templateType: "linedIn(4:5)",
  },
  reducers: {
    setTemplateType: (state, action) => {
      state.templateType = action.payload.templateType;
    },
  },
});

export const { setTemplateType } = templateSlice.actions;
export default templateSlice.reducer;
