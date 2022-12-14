import { Module } from '@nestjs/common';
import { GetAllNotifications } from '@application/usecases/get-all-notifications';
import { SendNotification } from '@application/usecases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationController } from './controllers/notification';
import { SendNotificationRequest } from '@application/entities/interfaces/send-notification/request';
import { Usecase } from '@application/usecases/usecase';
import { SendNotificationResponse } from '@application/entities/interfaces/send-notification/response';
import { Notification } from '@application/entities/notification';
import { NoParams } from '@application/entities/no-params';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    {
      provide: Usecase<SendNotificationRequest, SendNotificationResponse>,
      useClass: SendNotification,
    },
    {
      provide: Usecase<NoParams, Notification>,
      useClass: GetAllNotifications,
    },
  ],
})
export class HttpModule {}
