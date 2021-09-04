import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkCode(code: string) {
    return 'code check validations passed!';
  }
}
