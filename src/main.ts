import { NestFactory } from '@nestjs/core';
import { functionalLogger } from 'middleware/functionalLogger.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(functionalLogger);
  await app.listen(3000);
}
bootstrap();
