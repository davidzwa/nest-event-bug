import { Injectable } from '@nestjs/common';
import { OnCustomEvent } from './custom-event.decorator';

@Injectable()
export class AppService {
  @OnCustomEvent()
  getHello(): string {
    return 'Hello World!';
  }
}
