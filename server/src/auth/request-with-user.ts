import { UserDto } from '@user/dto/user.dto';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: UserDto;
}
