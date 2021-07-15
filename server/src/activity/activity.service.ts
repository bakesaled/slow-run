import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ActivityEntity } from '@activity/entity/activity.entity';
import { ActivityDto } from './dto/activity.dto';
import { toActivityDto } from './mapper';
import { ActivityCreateDto } from './dto/activity-create.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activityRepo: Repository<ActivityEntity>,
  ) {}

  async getAllActivities(): Promise<ActivityDto[]> {
    const activities = await this.activityRepo.find();
    return activities.map((act) => toActivityDto(act));
  }

  async getOneActivity(id: string): Promise<ActivityDto> {
    const activity = await this.activityRepo.findOne({
      where: { id },
    });
    if (!activity) {
      throw new HttpException(`Activity doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toActivityDto(activity);
  }

  async createActivity(activityDto: ActivityCreateDto): Promise<ActivityDto> {
    const { name } = activityDto;

    const activity: ActivityEntity = await this.activityRepo.create({
      id: uuidv4(),
      name,
    });

    await this.activityRepo.save(activity);
    return toActivityDto(activity);
  }
}
