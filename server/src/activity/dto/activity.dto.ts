import { IsNotEmpty } from 'class-validator';
import { UserDto } from '@user/dto/user.dto';

export class ActivityDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  createdAt?: Date;

  owner: UserDto;
}
