import { SendNotification } from './send-notification';
import { InMemoryNotification } from '../repositories/in-memory-notification';

describe('Send Notification', () => {
  it('should be able to send notification', async () => {
    const notificationRepository = new InMemoryNotification();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
