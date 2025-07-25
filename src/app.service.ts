import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    return {
      message: 'Welcome to Shodesh Board Server!',
      version: '1.0.0',
      status: 'Running',
      timestamp: new Date().toISOString(),
    };
  }
}
