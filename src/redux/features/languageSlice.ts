import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "@typings/reduxTypes";

const initialState: LanguageState = { value: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
