import { UserCategory } from '../enums/UserCategory';

export interface PostUserFilter {
  category: UserCategory;
  text?: string;
}
