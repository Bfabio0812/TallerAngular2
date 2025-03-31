import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load .env file
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // <--- frontend Angular
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe()); // Enable validation
  await app.listen(3000);
}
bootstrap();
