export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  kafka: {
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers:
      process.env.KAFKA_BROKERS != null ? [process.env.KAFKA_BROKERS] : [],
    sasl: {
      username: process.env.KAFKA_SASL_USERNAME,
      password: process.env.KAFKA_SASL_PASSWORD,
    },
    ssl: process.env.KAFKA_SSL || true,
  },
});
