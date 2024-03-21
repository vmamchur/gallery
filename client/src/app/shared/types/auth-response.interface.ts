import IUser from "./user.interface";

export default interface AuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
