import { Schedule } from './schedule';

describe('Notification schedule', () => {
  it('should be able to create a notification schedule', () => {
    expect(() => new Schedule(new Date())).toBeTruthy();
  });

  it('should not be able to create a notification schedule before now', () => {
    expect(() => {
      const now = new Date();

      now.setDate(now.getDate() - 1);

      return new Schedule(now);
    }).toThrow();
  });
});
