import { ActivityType } from './activity-type.enum';

export interface Activity {
  id?: string;
  name?: string;
  date?: Date;
  type?: ActivityType;
  duration?: number; //seconds
  distance?: number; //meters
}

// export function createActivity(params: Partial<Activity>) {
//   return {} as Activity;
// }
