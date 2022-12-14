import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notification';

export class InMemoryNotification implements NotificationRepository {
  private _notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this._notifications.push(notification);
  }

  get notifications(): Notification[] {
    return this._notifications;
  }
}
