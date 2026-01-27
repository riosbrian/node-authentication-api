import { Router, type Request, type Response } from 'express';
import { AuthRouter } from './auth.routes.js';
import { authController } from '../di.js';

export class AppRouter {
  private router: Router = Router();

  constructor() {
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get('/health-check', (req: Request, res: Response) => {
      res.status(200).json({
        status: 'healthy',
      });
    });
    this.router.use('/auth', new AuthRouter(authController).routes);
  }

  get routes() {
    return this.router;
  }
}
