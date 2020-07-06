import { DeviceType } from '../enums/DeviceType';

export interface PostDeviceModel {
  name: string;
  deviceCode: string;
  type: DeviceType;
  schoolBusCode: string;
}
