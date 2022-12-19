import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import configuration from 'src/config/configuration';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const config = configuration();
    let errorAttr = '';

    if (config.kafka.sasl.username == null) {
      errorAttr = 'username';
    } else if (config.kafka.sasl.password == null) {
      errorAttr = 'password';
    } else if (config.kafka.ssl == null) {
      errorAttr = 'ssl';
    }

    if (errorAttr.length) {
      throw new Error(`Kafka :: ${errorAttr} not found`);
    }

    super({
      client: {
        clientId: config.kafka.clientId,
        brokers: config.kafka.brokers,
        sasl: {
          mechanism: 'scram-sha-256',
          username: config.kafka.sasl.username!,
          password: config.kafka.sasl.password!,
        },
        ssl: config.kafka.ssl === 'true',
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
