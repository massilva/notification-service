import { Body, Controller, Post, Get } from '@nestjs/common';
import { NoParams } from 'src/application/entities/no-params';
import { GetAllNotifications } from 'src/application/usecases/get-all-notifications';
import { SendNotification } from 'src/application/usecases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private getAllNotifications: GetAllNotifications,
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
