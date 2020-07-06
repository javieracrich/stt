import { PushType } from './../enums/pushType';

export interface PostStudentFilter {
  roomCode?: string;
  text?: String;
  lastStatusId?: PushType;
}
