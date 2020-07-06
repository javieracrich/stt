import { PostUserModel } from './postUserModel';

export interface PostUserWithPasswordModel extends PostUserModel {
  password: string;
}
