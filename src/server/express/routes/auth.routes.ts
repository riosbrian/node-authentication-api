import { Router, type Request, type Response } from 'express';
import type { AuthController } from '../controllers/auth.controller.js';

export class AuthRouter {
  private readonly router: Router = Router();

  constructor(private readonly controller: AuthController) {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post('/signup', this.controller.signup.bind(this.controller));
    this.router.post('/signin', this.controller.signin.bind(this.controller));
    this.router.post('/logout', this.controller.logout.bind(this.controller));
    this.router.post('/refresh', this.controller.refresh.bind(this.controller));
  }

  get routes() {
    return this.router;
  }
}
