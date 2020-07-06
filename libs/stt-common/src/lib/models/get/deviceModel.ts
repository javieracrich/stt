import { BasicDeviceModel } from './basicDeviceModel';
import { BasicSchoolModel } from './basicSchoolModel';
import { BasicSchoolBusModel } from './basicSchoolBusModel';
import { DeviceType } from '../enums/DeviceType';

export interface DeviceModel {
  name: string;
  type: DeviceType;
  deviceCode: string;
  school: BasicSchoolModel;
  schoolBus: BasicSchoolBusModel;
  relatedDevice: BasicDeviceModel;
  rowVersion: string;
}
