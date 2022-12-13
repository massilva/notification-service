export class Schedule {
  private readonly schedule: Date;

  constructor(schedule: Date) {
    const now = new Date();

    if (schedule < now) {
      throw new Error('Schedule cannot be before now');
    }

    this.schedule = schedule;
  }

  get value(): Date {
    return this.schedule;
  }
}
