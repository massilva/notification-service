import { Content } from './content';
import { Notification } from './notification';

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
});
