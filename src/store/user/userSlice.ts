import { createSlice } from "@reduxjs/toolkit";

import { defaultUserData as initialState } from "../../utils/Defaults/userData";

const userLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      console.log(payload);
      console.log(state.User);
      state = payload;
    },
    clearUserData: (state) => {
      state = initialState;
    },
  },
});

export default userLogin.reducer;

export const { setUserData, clearUserData } = userLogin.actions;
