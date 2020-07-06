import { SchoolGrade } from '../enums/SchoolGrade';

export interface GradeRoomModel {
  name: string;
  code: string;
  grade: SchoolGrade;
  rowVersion: string;
}
