import { MongoDbUserAdapter } from '@modules/user/infrastructure/mongodb-user.adapter.js';
import { AuthController } from './controllers/auth.controller.js';
import { BcryptAdapter } from '@modules/auth/infrastructure/password-hasher.js';

export const userRepository = new MongoDbUserAdapter();
export const bcryptRepository = new BcryptAdapter(10);
export const authController = new AuthController(
  userRepository,
  bcryptRepository,
);
