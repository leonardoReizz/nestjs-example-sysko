import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(id: number): { id: number; name: string } {
    return {
      id,
      name: 'Leonardo Reis',
    };
  }
}
