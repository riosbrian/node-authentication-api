import type { Request, Response } from 'express';

export class AuthController {
  constructor() {}

  async signup(req: Request, res: Response) {
    res.status(201).json({ status: 'success' });
  }

  async signin(req: Request, res: Response) {
    res.status(200).json({ status: 'success' });
  }

  async logout(req: Request, res: Response) {
    res.status(204).json({ status: 'success' });
  }

  async refresh(req: Request, res: Response) {
    res.status(200).json({ status: 'success' });
  }
}
