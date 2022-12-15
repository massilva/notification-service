import { Body, Controller, Post, Get } from '@nestjs/common';
import { NoParams } from '@application/entities/no-params';
import { Usecase } from '@application/usecases/usecase';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotificationResponse } from '@application/entities/interfaces/send-notification/response';
import { SendNotificationRequest } from '@application/entities/interfaces/send-notification/request';
import { NotificationViewModel } from '../view-model/notification-view-model';
import { Notification } from '@application/entities/notification';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: Usecase<
      SendNotificationRequest,
      SendNotificationResponse
    >,
    private getAllNotifications: Usecase<NoParams, Notification[]>,
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
