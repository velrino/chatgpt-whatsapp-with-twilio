import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const twilioService = app.get(AppService);

  twilioService.listen();

  const PORT = process.env.PORT || 5001;
  const host = process.env.HOST || '0.0.0.0';

  app.listen(PORT, host, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

bootstrap();
