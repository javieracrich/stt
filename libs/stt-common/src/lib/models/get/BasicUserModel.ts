import { UserCategory } from '../enums/UserCategory';

export interface BasicUserModel {
  code: string;
  firstName: string;
  lastName: string;
  userCategory: UserCategory;
}
