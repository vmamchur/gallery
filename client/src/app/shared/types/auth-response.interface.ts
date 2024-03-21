import IUser from "./user.interface";

export default interface IAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}
