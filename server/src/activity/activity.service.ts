import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ActivityEntity } from '@activity/entity/activity.entity';
import { ActivityDto } from './dto/activity.dto';
import { ActivityCreateDto } from './dto/activity-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { toActivityDto } from '@shared/mapper';
import { UserDto } from '@user/dto/user.dto';
import { UserService } from '@user/user.service';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activityRepo: Repository<ActivityEntity>,
    private readonly userService: UserService,
  ) {}

  async getAllActivities(): Promise<ActivityDto[]> {
    const activities = await this.activityRepo.find({ relations: ['owner'] });
    return activities.map((act) => toActivityDto(act));
  }

  async getOneActivity(id: string): Promise<ActivityDto> {
    const activity = await this.activityRepo.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!activity) {
      throw new HttpException(`Activity doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toActivityDto(activity);
  }

  async createActivity(
    { username }: UserDto,
    activityDto: ActivityCreateDto,
  ): Promise<ActivityDto> {
    const { name } = activityDto;

    const owner = await this.userService.findOne({ where: { username } });
    const activity: ActivityEntity = await this.activityRepo.create({
      name,
      owner,
    });

    await this.activityRepo.save(activity);
    return toActivityDto(activity);
  }
}
