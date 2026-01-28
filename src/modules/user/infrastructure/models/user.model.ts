import mongoose, { type Model } from 'mongoose';

export interface UserMongoDocument extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserMongoDocument>({
  _id: String,
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UserModel: Model<UserMongoDocument> =
  mongoose.model<UserMongoDocument>('User', userSchema);
