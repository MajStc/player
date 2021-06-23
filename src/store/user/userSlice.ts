import { createSlice } from "@reduxjs/toolkit";

import { defaultUserData as initialState } from "../../utils/Defaults/userData";

const userLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.AuthorizationToken = payload.AuthorizationToken;
      state.User = payload.User;
      localStorage.setItem("token", payload.AuthorizationToken.Token);
    },
  },
});

export default userLogin.reducer;

export const { setUserData } = userLogin.actions;
