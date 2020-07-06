import { BasicDeviceModel } from './basicDeviceModel';
import { BasicUserModel } from './basicUserModel';
import { BasicSchoolBusModel } from './basicSchoolBusModel';

export interface SchoolBusModel {
  code: string;
  patent: string;
  name: string;
  school: BasicSchoolBusModel;
  drivers: BasicUserModel[];
  supervisors: BasicUserModel[];
  device: BasicDeviceModel;
  rowVersion: string;
}
