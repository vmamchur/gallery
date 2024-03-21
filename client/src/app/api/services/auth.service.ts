import { httpClient } from "../http-client";
import IAuthRequest from "@shared/types/auth-request.interface";
import IAuthResponse from "@shared/types/auth-response.interface";

const authService = {
  async register(registerData: IAuthRequest): Promise<IAuthResponse> {
    const { data } = await httpClient.post("/auth/register", registerData);

    return data;
  },

  async login(loginData: IAuthRequest): Promise<IAuthResponse> {
    const { data } = await httpClient.post("/auth/login", loginData);

    return data;
  },

  async logout() {
    const { data } = await httpClient.get("/auth/logout");

    return data;
  },

  async refresh(refreshToken: string): Promise<IAuthResponse> {
    const { data } = await httpClient.post("/auth/refresh", { refreshToken });

    return data;
  },
};

export default authService;
