export interface PutSchoolBusModel {
  name: string;
  schoolCode?: string;
  driverCodes: string[];
  supervisorCodes: string[];
  deviceCode: string;
  patent: string;
  rowVersion: string;
}
