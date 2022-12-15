import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { ScheduleOut } from '@application/entities/schedule';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      scheduleAt: notification.scheduleAt.value,
    };
  }

  static fromPrisma(notification: PrismaNotification) {
    return new Notification(
      {
        category: notification.category,
        content: new Content(notification.content),
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
        scheduleAt: new ScheduleOut(notification.scheduleAt),
      },
      notification.id,
    );
  }
}
