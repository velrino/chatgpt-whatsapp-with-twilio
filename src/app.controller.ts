import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('send')
  async send(@Body() body) {
    return this.appService.sendMessage(body);
  }
}