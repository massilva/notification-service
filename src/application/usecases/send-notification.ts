import { Usecase } from './usecase';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification';
import { Notification } from '@application/entities/notification';
import { SendNotificationResponse } from '@application/entities/interfaces/send-notification/response';
import { SendNotificationRequest } from '@application/entities/interfaces/send-notification/request';
import { Content } from '@application/entities/content';

@Injectable()
export class SendNotification
  implements Usecase<SendNotificationRequest, SendNotificationResponse>
{
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId: recipientId,
      content: new Content(content),
      category: category,
    });

    await this.notificationRepository.create(notification);
    return {
      notification,
    };
  }
}
