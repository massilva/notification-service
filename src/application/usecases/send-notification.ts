import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification';
import { Usecase } from './usecase';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

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
