import express, { type Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AppRouter } from './routes/app.routes.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';
import { globalErrorHandler } from './middlewares/global-error-handler.middleware.js';

const BASE_API_URL = '/api/v1';

export class ExpressAdapter {
  private app: Application = express();

  constructor() {
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandlers();
  }

  get handler() {
    return this.app;
  }

  private setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(cors({ credentials: true }));
  }

  private setupRoutes() {
    this.app.use(BASE_API_URL, new AppRouter().routes);
  }

  private setupErrorHandlers() {
    this.app.use(notFoundHandler);
    this.app.use(globalErrorHandler);
  }
}
