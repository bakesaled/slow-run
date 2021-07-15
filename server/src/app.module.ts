import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from '@activity/activity.module';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [ActivityModule, TypeOrmModule.forRoot(connOptions)],
      providers: [AppService],
    };
  }
}
