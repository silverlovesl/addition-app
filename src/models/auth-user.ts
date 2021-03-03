import { Serializable } from './serializable';

export class AuthUser implements Serializable<AuthUser> {
  userID: string;
  token: string;
  lastName: string;
  firstName: string;
  deserialize(input: any) {
    this.userID = input.id;
    this.lastName = input.lastName;
    this.firstName = input.firstName;
    this.token = input.token;
    return this;
  }
}
