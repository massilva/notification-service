import { Module } from '@nestjs/common';
import { GetAllNotifications } from 'src/application/usecases/get-all-notifications';
import { SendNotification } from '../../application/usecases/send-notification';
import { DatabaseModule } from '../../infra/database/database.module';
import { NotificationController } from './controllers/notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification, GetAllNotifications],
})
export class HttpModule {}
