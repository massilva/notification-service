import { NoParams } from '../entities/no-params';
import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract getAll(param: NoParams): Promise<Notification[]>;
}
