import { Module } from '@nestjs/common';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule,
    DatabaseModule,
    MessagingModule,
  ],
})
export class AppModule {}
