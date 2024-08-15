import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';

configDotenv();

const PORT = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');
  app.enableCors();
  
  console.log(`Сервер запущен: http://localhost:${PORT}`);

  await app.listen(PORT);
}
bootstrap();
