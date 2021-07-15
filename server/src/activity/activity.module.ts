import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from '@activity/entity/activity.entity';
import { UserEntity } from '@user/entity/user.entity';
import { UserModule } from '@user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forFeature([ActivityEntity, UserEntity]),
  ],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
