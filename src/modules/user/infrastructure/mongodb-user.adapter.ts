import type { Model } from 'mongoose';
import type { RawUser } from '../domain/user.entity.js';
import type { UserPort } from '../domain/user.port.js';
import { UserModel, type UserMongoDocument } from './models/user.model.js';

export class MongoDbUserAdapter implements UserPort {
  private readonly model: Model<UserMongoDocument> = UserModel;

  async findBy(criteria: Partial<RawUser>): Promise<RawUser | null> {
    const doc = await this.model.findOne(criteria).lean();
    return doc ? { ...doc, id: doc._id.toString() } : null;
  }

  async save(user: RawUser): Promise<void> {
    await this.model.create({ ...user, _id: user.id });
  }

  async deleteById(id: string): Promise<void> {}
}
