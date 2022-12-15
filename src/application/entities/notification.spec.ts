import { Content } from './content';
import { Notification } from './notification';
import { Schedule, ScheduleIn } from './schedule';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    expect(
      () =>
        new Notification({
          content: new Content('Você recebeu uma solicitação de amizade.'),
          category: 'social',
          recipientId: 'example-id',
        }),
    ).toBeTruthy();
  });

  it('should be able to schedule a notification', () => {
    expect(() => {
      const now = new Date();

      now.setDate(now.getDate() + 1);

      return new Notification({
        content: new Content('Você recebeu uma solicitação de amizade.'),
        category: 'social',
        recipientId: 'example-id',
        scheduleAt: new ScheduleIn(now),
      });
    }).toBeTruthy();
  });
});
