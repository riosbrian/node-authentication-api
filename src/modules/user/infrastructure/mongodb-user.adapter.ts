import type { RawUser } from '../domain/user.entity.js';
import type { UserPort } from '../domain/user.port.js';

export class MongoDbUserAdapter implements UserPort {
  async findBy(criteria: Partial<RawUser>): Promise<RawUser | null> {
    return null;
  }

  async save(user: RawUser): Promise<void> {}

  async deleteById(id: string): Promise<void> {}
}
