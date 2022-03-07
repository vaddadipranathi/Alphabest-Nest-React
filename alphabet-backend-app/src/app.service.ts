import { Injectable } from '@nestjs/common';

/**
 * Starting of AppService
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
