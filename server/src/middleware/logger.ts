import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddlewareClothes implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Запрос Clothes');
    next();
  }
}