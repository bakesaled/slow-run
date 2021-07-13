import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivityDto } from './dto/activity.dto';
import { ActivityService } from './activity.service';
import { ActivityCreateDto } from './dto/activity-create.dto';

@Controller('api/activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async findAll(): Promise<ActivityDto[]> {
    return await this.activityService.getAllActivities();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ActivityDto> {
    return await this.activityService.getOneActivity(id);
  }

  @Post()
  async create(
    @Body() activityCreateDto: ActivityCreateDto,
  ): Promise<ActivityDto> {
    return await this.activityService.createActivity(activityCreateDto);
  }
}
