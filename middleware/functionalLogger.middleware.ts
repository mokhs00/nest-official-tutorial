import { NextFunction, Request, Response } from 'express';

export function functionalLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('[functional logger]Request. . .');
  next();
}
