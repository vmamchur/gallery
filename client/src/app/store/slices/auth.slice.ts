import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  clearAuthData,
  getAuthData,
  saveAuthData,
} from "@shared/helpers/auth-storage";
import IAuthRequest from "@shared/types/auth-request.interface";
import IUser from "@shared/types/user.interface";
import authService from "src/app/api/services/auth.service";

const register = createAsyncThunk(
  "auth/register",
  async (registerData: IAuthRequest) => {
    try {
      const { user, accessToken, refreshToken } =
        await authService.register(registerData);

      saveAuthData(accessToken, refreshToken);

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);

const login = createAsyncThunk(
  "auth/login",
  async (loginData: IAuthRequest) => {
    try {
      const { user, accessToken, refreshToken } =
        await authService.login(loginData);

      saveAuthData(accessToken, refreshToken);

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await authService.logout();
    clearAuthData();
  } catch (error) {
    console.log(error);
  }
});

const refresh = createAsyncThunk("auth/refresh", async () => {
  try {
    const { refreshToken } = getAuthData();

    const {
      user,
      accessToken,
      refreshToken: createdRefreshToken,
    } = await authService.refresh(refreshToken);

    saveAuthData(accessToken, createdRefreshToken);

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
});

interface AuthState {
  currentUser: IUser | null;
  isChecked: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isChecked = true;
    });
    builder.addCase(refresh.rejected, (state) => {
      state.currentUser = null;
      state.isChecked = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.currentUser = null;
    });
  },
});

export const authActions = {
  register,
  login,
  logout,
  refresh,
};
export default authSlice.reducer;
