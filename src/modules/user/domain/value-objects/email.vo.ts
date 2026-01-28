export class Email {
  private readonly pattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private constructor(private readonly email: string) {
    this.ensureIsValid(email);
    this.email = email.toLowerCase();
  }

  get value() {
    return this.email;
  }

  static create(value: string) {
    return new Email(value);
  }

  private ensureIsValid(email: string) {
    const validation = this.pattern.test(email);
    if (!validation) throw new Error("Invalid Email");
  }
}
