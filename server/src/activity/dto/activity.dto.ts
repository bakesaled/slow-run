import { IsNotEmpty } from 'class-validator';

export class ActivityDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  createdAt?: Date;
}
