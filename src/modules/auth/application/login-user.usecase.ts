import type { UserPort } from '@modules/user/domain/user.port.js';
import type { LoginUserDTO } from './dto/login-user.dto.js';
import type { PasswordHasherPort } from '../domain/password-hasher.port.js';

export class LoginUserUseCase {
  constructor(
    private readonly userRepository: UserPort,
    private readonly passwordRepository: PasswordHasherPort,
  ) {}

  async execute(input: LoginUserDTO) {
    // 1 buscar si el usuario existe
    const user = await this.ensureUserDoesExist(input.email);
    // 2 validar password
    await this.validatePassword(input.password, user.password);
    // 3 crear session
    return true;
    // 4 firmar token
    // 5 retornar token
  }

  private async ensureUserDoesExist(email: string) {
    const user = await this.userRepository.findBy({ email });
    if (!user) throw new Error('user not found');
    return user;
  }

  private async validatePassword(password: string, hashedPassword: string) {
    const isValid = await this.passwordRepository.compare(
      password,
      hashedPassword,
    );
    if (!isValid) throw new Error();
  }
}
