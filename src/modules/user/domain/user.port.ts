import type { RawUser } from './user.entity.js';

export interface UserPort {
  findBy: (criteria: Partial<RawUser>) => Promise<RawUser | null>;
  save: (user: RawUser) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
}
