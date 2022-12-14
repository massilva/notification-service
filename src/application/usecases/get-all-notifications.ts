import { NoParams } from '../entities/no-params';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification';
import { Usecase } from './usecase';

export class GetAllNotifications implements Usecase<NoParams, Notification[]> {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(param: NoParams): Promise<Notification[]> {
    return await this.notificationRepository.getAll(param);
  }
}
