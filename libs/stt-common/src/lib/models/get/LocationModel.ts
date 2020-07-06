import { PushType } from '../enums/PushType';

export interface LocationModel {
  lat: number;
  lng: number;
  dateTime?: Date;
  busName: string;
  busCode: string;
  supervisorName: string;
  status: string;
  pushType: PushType;
  notFound: boolean;
}



