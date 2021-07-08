import { TableRow } from '../../../../table/table-row';
import { ActivityType } from './activity-type.enum';

export interface Activity extends TableRow {
  id?: string;
  date?: Date;
  type?: ActivityType;
  duration?: number; //seconds
  distance?: number; //meters
}
