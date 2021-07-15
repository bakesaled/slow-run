import { ActivityEntity } from '@activity/entity/activity.entity';
import { ActivityDto } from '@activity/dto/activity.dto';
import { UserDto } from '@user/dto/user.dto';
import { UserEntity } from '@user/entity/user.entity';

export const toActivityDto = (data: ActivityEntity): ActivityDto => {
  const { id, name, owner } = data;

  return { id, name, owner: owner ? toUserDto(owner) : null };
};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;
  return { id, username, email };
};
