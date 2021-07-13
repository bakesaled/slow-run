import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ActivityEntity } from './entity/activity.entity';
import { ActivityDto } from './dto/activity.dto';
import { activities } from '../mock/activities.mock';
import { toPromise } from '../data-to-promise/data-to-promise';
import { toActivityDto } from './mapper';
import { ActivityCreateDto } from './dto/activity-create.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ActivityService {
  activities: ActivityEntity[] = activities;

  async getAllActivities(): Promise<ActivityDto[]> {
    return activities.map((activity) => toActivityDto(activity));
  }

  async getOneActivity(id: string): Promise<ActivityDto> {
    const activity = this.activities.find((act) => act.id === id);
    if (!activity) {
      throw new HttpException(`Activity doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toPromise(toActivityDto(activity));
  }

  async createActivity(activityDto: ActivityCreateDto): Promise<ActivityDto> {
    const { name } = activityDto;

    const activity: ActivityEntity = {
      id: uuidv4(),
      name,
    };

    this.activities.push(activity);
    return toPromise(toActivityDto(activity));
  }
}
