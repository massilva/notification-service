import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification';
import { Notification } from '@application/entities/notification';
import { PrismaService } from '../prisma.service';
import { Content } from '@application/entities/content';
import { NoParams } from '@application/entities/no-params';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(_: NoParams): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany();
    return notifications.map((notification) => {
      return new Notification({
        recipientId: notification.recipientId,
        content: new Content(notification.content),
        category: notification.category,
      });
    });
  }

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
