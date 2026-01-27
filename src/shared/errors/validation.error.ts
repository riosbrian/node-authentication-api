import { CustomError } from './custom-error.js';

export class ValidationError extends CustomError {
  constructor(public message: string) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}
