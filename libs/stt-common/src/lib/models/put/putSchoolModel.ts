export interface PutSchoolModel {
  name: string;
  logoUrl: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  email: string;
  directorCode?: string;
  rowVersion: string;
}
