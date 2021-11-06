import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}
