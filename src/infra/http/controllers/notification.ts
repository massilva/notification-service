import { Body, Controller, Post, Get } from '@nestjs/common';
import { NoParams } from '@application/entities/no-params';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-model/notification-view-model';
import { SendNotification } from '@application/usecases/send-notification';
import { GetAllNotifications } from '@application/usecases/get-all-notifications';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private getAllNotifications: GetAllNotifications,
  ) {}

  @Get()
  async list() {
    const notifications = await this.getAllNotifications.execute(
      new NoParams(),
    );

    return notifications.map(NotificationViewModel.toHTTP);
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
