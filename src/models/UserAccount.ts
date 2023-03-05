import { ObjectId } from "mongodb";

export default class UserAccount {
  constructor(
    public userName: string,
    public password: string,
    public nickName: string,
    public instrument: string,
    public role: string,
    public email: string
  ) {}
}
