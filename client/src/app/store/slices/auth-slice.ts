import { createSlice } from "@reduxjs/toolkit";

import IUser from "@shared/types/user.interface";

interface AuthState {
  currentUser: IUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
