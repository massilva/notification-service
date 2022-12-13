import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    expect(
      () => new Content('Você recebeu uma solicitação de amizade.'),
    ).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('should not be able to create a notification content with greater than 240 characters', () => {
    expect(() => new Content('M'.repeat(241))).toThrow();
  });
});
