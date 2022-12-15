import { ScheduleIn, ScheduleOut } from './schedule';

describe('Notification schedule', () => {
  it('should be able to create a notification schedule in', () => {
    expect(() => new ScheduleIn(new Date())).toBeTruthy();
  });

  it('should not be able to create a notification schedule in before now', () => {
    expect(() => {
      const now = new Date();

      now.setDate(now.getDate() - 1);

      return new ScheduleIn(now);
    }).toThrow();
  });

  it('should be able to create a notification schedule out', () => {
    expect(() => new ScheduleOut(new Date())).toBeTruthy();
  });

  it('should be able to create a notification schedule out before now', () => {
    expect(() => {
      const now = new Date();

      now.setDate(now.getDate() - 1);

      return new ScheduleOut(now);
    }).toBeTruthy();
  });
});
