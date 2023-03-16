import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const twilioService = app.get(AppService);

  twilioService.listen();

  const port = process.env.APP_PORT ?? 80;
  const host = process.env.HOST || '0.0.0.0';
  await app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

bootstrap();
