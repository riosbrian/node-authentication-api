import { LoginUserUseCase } from '@modules/auth/application/login-user.usecase.js';
import { RegisterUserUseCase } from '@modules/auth/application/register-user.usecase.js';
import type { PasswordHasherPort } from '@modules/auth/domain/password-hasher.port.js';
import type { UserPort } from '@modules/user/domain/user.port.js';
import type { Request, Response } from 'express';

export class AuthController {
  constructor(
    private readonly userRepository: UserPort,
    private readonly passwordRepository: PasswordHasherPort,
  ) {}

  async signup(req: Request, res: Response) {
    const usecase = new RegisterUserUseCase(
      this.userRepository,
      this.passwordRepository,
    );
    await usecase.execute(req.body);
    res.status(201).json({ status: 'success' });
  }

  async signin(req: Request, res: Response) {
    const usecase = new LoginUserUseCase(
      this.userRepository,
      this.passwordRepository,
    );
    const result = await usecase.execute(req.body);
    res.status(200).json({ status: 'success', data: result });
  }

  async logout(req: Request, res: Response) {
    res.status(204).json({ status: 'success' });
  }

  async refresh(req: Request, res: Response) {
    res.status(200).json({ status: 'success' });
  }
}
