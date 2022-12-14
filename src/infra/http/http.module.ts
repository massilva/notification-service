import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/usecases/send-notification';
import { DatabaseModule } from '../../infra/database/database.module';
import { NotificationController } from './controllers/notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
