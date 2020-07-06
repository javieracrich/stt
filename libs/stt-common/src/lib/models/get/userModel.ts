import { BasicSchoolModel } from './basicSchoolModel';
import { UserCategory } from '../enums/UserCategory';
import { SchoolGrade } from '../enums/SchoolGrade';
import { CardModel } from './cardModel';

export interface UserModel {
  code: string;
  firstName: string;
  lastName: string;
  category: UserCategory;
  grade: SchoolGrade;
  gradeRoomName: string;
  studentId: string;
  cards: CardModel[];
  email: string;
  photoUrl: string;
  phone: string;
  school: BasicSchoolModel;
  lastStatusId: number;
  lastStatusDateTime: Date;
}
