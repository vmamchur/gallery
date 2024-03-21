import IUser from "@shared/types/user.interface";

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
