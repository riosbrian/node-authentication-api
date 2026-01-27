import type { Email } from './value-objects/email.vo.js';
import type { Id } from '@shared/domain/value-objects/id.vo.js';

export interface UserProps {
  id: Id;
  username: string;
  email: Email;
  password: string;
  isVerified: boolean;
  createdDate: Date;
  updatedDate: Date;
}

export type RawUser = Omit<UserProps, 'id' | 'email'> & {
  id: string;
  email: string;
};

export class User {
  private constructor(private props: UserProps) {}

  static create(props: UserProps) {
    return new User(props);
  }

  toPrimitives(): RawUser {
    return {
      id: this.props.id.value,
      username: this.props.username,
      email: this.props.email.value,
      password: this.props.password,
      isVerified: this.props.isVerified,
      createdDate: this.props.createdDate,
      updatedDate: this.props.updatedDate,
    };
  }
}
