import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { getDbConnectionOptions, runDbMigrations } from '@shared/utils';
import * as cookieParser from 'cookie-parser';
import { ConnectionOptions } from 'typeorm';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV) as ConnectionOptions),
    {
      cors: {
        origin: 'http://localhost:4200',
        credentials: true,
      },
    },
  );

  app.use(cookieParser());

  /**
   * Run DB migrations
   */
  await runDbMigrations();

  await app.listen(port);

  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
