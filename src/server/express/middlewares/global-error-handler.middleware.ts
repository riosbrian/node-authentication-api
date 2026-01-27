import type { NextFunction, Request, Response } from 'express';
import { CustomError } from '@shared/errors/custom-error.js';
import { envs } from '@config/envs.js';

function formatErrorResponse(err: CustomError, path: string, isDev: boolean) {
  const base = {
    error: err.name,
    message: err.message,
    path,
  };

  return isDev ? { ...base, stack: err.stack } : base;
}

export function globalErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const isDev = envs.NODE_ENV === 'development';

  if (err instanceof CustomError) {
    const payload = formatErrorResponse(err, req.path, isDev);
    return res.status(err.statusCode).json(payload);
  }

  res.status(500).json({
    status: 'fail',
    message: 'Internal Server Error',
  });
}
