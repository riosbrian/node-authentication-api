import { Router } from 'express';
import type { AuthController } from '../controllers/auth.controller.js';
import { validateRequest } from '../middlewares/request-validator.middleware.js';
import { registerUserSchema } from '@modules/auth/application/dto/register-user.dto.js';
import { loginUserSchema } from '@modules/auth/application/dto/login-user.dto.js';

export class AuthRouter {
  private readonly router: Router = Router();

  constructor(private readonly controller: AuthController) {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post(
      '/signup',
      validateRequest(registerUserSchema),
      this.controller.signup.bind(this.controller),
    );
    this.router.post(
      '/signin',
      validateRequest(loginUserSchema),
      this.controller.signin.bind(this.controller),
    );
    this.router.post('/logout', this.controller.logout.bind(this.controller));
    this.router.post('/refresh', this.controller.refresh.bind(this.controller));
  }

  get routes() {
    return this.router;
  }
}
