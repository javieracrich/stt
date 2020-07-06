import { BasicUserModel } from './basicUserModel';

export interface SchoolModel {
  name: string;
  logoUrl: string;
  code: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  email: string;
  directors: BasicUserModel[];
  rowVersion: string;
}
