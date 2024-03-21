import { httpClient } from "../http-client";
import AuthRequest from "@shared/types/auth-request.interface";
import AuthResponse from "@shared/types/auth-response.interface";

const authService = {
  async register(registerData: AuthRequest): Promise<AuthResponse> {
    const { data } = await httpClient.post("/auth/register", registerData);

    return data;
  },

  async login(loginData: AuthRequest): Promise<AuthResponse> {
    const { data } = await httpClient.post("/auth/login", loginData);

    return data;
  },

  async logout() {
    const { data } = await httpClient.get("/auth/logout");

    return data;
  },

  async refresh(refreshToken: string): Promise<AuthResponse> {
    const { data } = await httpClient.post("/auth/refresh", { refreshToken });

    return data;
  },
};

export default authService;
