import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //throw new HttpException("Usuário não autorizado", HttpStatus.FORBIDDEN);
    return '';
  }
}
