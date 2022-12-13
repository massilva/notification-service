import { MailService } from './mail.service';

export class SMTPMailService implements MailService {
  getMail(): string {
    return 'SMTP Mail';
  }
}
