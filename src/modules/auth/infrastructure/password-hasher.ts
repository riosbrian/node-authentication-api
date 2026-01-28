import bcrypt from 'bcryptjs';
import type { PasswordHasherPort } from '@modules/auth/domain/password-hasher.port.js';

export class BcryptAdapter implements PasswordHasherPort {
  private readonly salt: string;

  constructor(private readonly saltRounds: number) {
    this.salt = bcrypt.genSaltSync(this.saltRounds);
  }

  async hash(password: string) {
    return await bcrypt.hash(password, this.salt);
  }

  async compare(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
