export class CustomError extends Error {
  public readonly isOperational: boolean = true;

  constructor(
    public message: string,
    public readonly statusCode: number,
  ) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, CustomError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
