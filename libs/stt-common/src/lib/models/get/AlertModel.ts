import { UserCategory } from '../enums/UserCategory';
import { AlertType } from '../enums/AlertType';

export interface AlertModel {
  userCategories: UserCategory;
  alertType: AlertType;
  message: string;
  dateTime: Date;
}
