import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const twilioService = app.get(AppService);

  twilioService.listen();

  await app.listen(process.env.APP_PORT || 8000);
}

bootstrap();
