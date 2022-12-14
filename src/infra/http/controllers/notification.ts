import { Body, Controller, Post, Get } from '@nestjs/common';
import { NoParams } from '@application/entities/no-params';
import { Usecase } from '@application/usecases/usecase';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotificationResponse } from '@application/entities/interfaces/send-notification/response';
import { SendNotificationRequest } from '@application/entities/interfaces/send-notification/request';

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
    return await this.getAllNotifications.execute(new NoParams());
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
