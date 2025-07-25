import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureSwagger } from '@/shared/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
