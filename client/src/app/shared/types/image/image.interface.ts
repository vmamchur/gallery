import IUser from "../user/user.interface";

export default interface IImage {
  id: string;
  author: IUser;
  authorId: string;
  name: string;
  description?: string;
  filename: string;
}
