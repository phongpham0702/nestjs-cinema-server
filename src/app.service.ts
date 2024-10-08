import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService:ConfigService) {
    
  }
  getHello(): string {
    console.log(this.configService.get('database.user'));
    Logger.warn("hello")
    return 'Hello World!';
  }
}
