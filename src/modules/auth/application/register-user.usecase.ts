import type { UserPort } from '@modules/user/domain/user.port.js';
import type { RegisterUserDTO } from './dto/register-user.dto.js';
import { User } from '@modules/user/domain/user.entity.js';
import { Id } from '@shared/domain/value-objects/id.vo.js';
import { Email } from '@modules/user/domain/value-objects/email.vo.js';
import type { PasswordHasherPort } from '../domain/password-hasher.port.js';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserPort,
    private readonly passwordRepository: PasswordHasherPort,
  ) {}

  async execute(input: RegisterUserDTO) {
    await this.ensureUserDoesNotExist(input.email);

    const user = User.create({
      id: Id.create(),
      username: input.username,
      email: Email.create(input.email),
      password: await this.passwordRepository.hash(input.password),
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.userRepository.save(user.toPrimitives());
    console.log(this);
  }

  private async ensureUserDoesNotExist(email: string) {
    const user = await this.userRepository.findBy({ email });
    if (user) throw new Error();
  }
}
