import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CodeInput } from './code-input.input';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiQuery({ name: 'code', type: CodeInput })
  @Get('/checkCode')
  checkCode(@Query('code') code: CodeInput) {
    this.appService.checkCode(code.code);
  }
}
