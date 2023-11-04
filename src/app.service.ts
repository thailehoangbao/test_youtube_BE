import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  tinhTong(soA: number, soB: number): number {
    return soA + soB;
  }

}
