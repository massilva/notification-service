import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification';
import { Notification } from '@application/entities/notification';
import { PrismaService } from '../prisma.service';
import { NoParams } from '@application/entities/no-params';
import { PrismaNotificationMapper } from '../mappers/prisma-notification';
import { Notification as PrismaNotification } from '@prisma/client';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(_: NoParams): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany();

    return notifications.map((notification: PrismaNotification) => {
      return PrismaNotificationMapper.fromPrisma(notification);
    });
  }

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: PrismaNotificationMapper.toPrisma(notification),
    });
  }
}
