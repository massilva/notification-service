export class Schedule {
  private readonly schedule: Date;

  constructor(schedule: Date, validate: boolean) {
    const now = new Date();

    if (validate && schedule < now) {
      throw new Error('Schedule cannot be before now');
    }

    this.schedule = schedule;
  }

  get value(): Date {
    return this.schedule;
  }
}

export class ScheduleIn extends Schedule {
  constructor(schedule: Date) {
    super(schedule, true);
  }
}

export class ScheduleOut extends Schedule {
  constructor(schedule: Date) {
    super(schedule, false);
  }
}
