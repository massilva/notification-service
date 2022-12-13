import { Replace } from 'src/helpers/replace';
import { Content } from './content';
import { Schedule } from './schedule';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null; //Date, undefined ou null
  createdAt: Date;
  scheduleAt: Schedule;
}

export class Notification {
  private props: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      { createdAt?: Date; scheduleAt?: Schedule }
    >,
  ) {
    this.props = {
      ...props,
      createdAt: this.createdAt ?? new Date(),
      scheduleAt: this.scheduleAt ?? new Schedule(new Date()),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set scheduleAt(scheduleAt: Schedule) {
    this.props.scheduleAt = scheduleAt;
  }

  public get scheduleAt(): Schedule {
    return this.props.scheduleAt;
  }
}
