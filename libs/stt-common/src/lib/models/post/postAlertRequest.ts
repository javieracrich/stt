import { AlertType } from '../enums/AlertType';
import { UserCategory } from '../enums/UserCategory';

export interface PostAlertRequest {
  userCategories: UserCategory[];
  alertType: AlertType;
  message: string;
}
