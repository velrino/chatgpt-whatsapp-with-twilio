import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TwilioModule.forRoot({
    //   accountSid: process.env.TWILIO_ACCOUNT_SID,
    //   authToken: process.env.TWILIO_AUTH_TOKEN,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
