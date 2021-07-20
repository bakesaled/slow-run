import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ActivityDto } from './dto/activity.dto';
import { ActivityService } from './activity.service';
import { ActivityCreateDto } from './dto/activity-create.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '@user/dto/user.dto';
import JwtAuthGuard from '../auth/jwt-auth.guard';

@Controller('api/activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<ActivityDto[]> {
    return await this.activityService.getAllActivities();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async findOne(@Param('id') id: string): Promise<ActivityDto> {
    return await this.activityService.getOneActivity(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard())
  async create(
    @Body() activityCreateDto: ActivityCreateDto,
    @Req() req: any,
  ): Promise<ActivityDto> {
    const user = <UserDto>req.user;
    return await this.activityService.createActivity(user, activityCreateDto);
  }
}
