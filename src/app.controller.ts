import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('question') question: string) {
    return this.appService.getHello(question);
  }

  @Post('send')
  async send(@Body() body) {
    return this.appService.sendMessage(body);
  }
}