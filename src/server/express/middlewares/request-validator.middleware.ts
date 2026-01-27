import type { NextFunction, Request, Response } from 'express';
import { ValidationError } from '@shared/errors/validation.error.js';
import type { ZodObject } from 'zod';

export function validateRequest(schema: ZodObject) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.safeParse(req.body);
    if (!result.success)
      throw new ValidationError(
        result.error.issues.map((issue) => issue.message).join(','),
      );
    next();
  };
}
