import { ActivityEntity } from './entity/activity.entity';
import { ActivityDto } from './dto/activity.dto';

export const toActivityDto = (data: ActivityEntity): ActivityDto => {
  const { id, name } = data;

  return { id, name };
};
