import { InMemoryNotification } from '../../../test/repositories/in-memory-notification';
import { NoParams } from '../entities/no-params';
import { GetAllNotifications } from './get-all-notifications';
import { SendNotification } from './send-notification';

describe('Get All Notification use case', () => {
  it('should be able get all notifications', async () => {
    const notificationsRepository = new InMemoryNotification();
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-id',
    });
    const getAllNotifications = new GetAllNotifications(
      notificationsRepository,
    );
    const notifications = await getAllNotifications.execute(new NoParams());

    expect(notifications).toHaveLength(1);
    expect(notifications[0]).toEqual(notification);
  });
});
