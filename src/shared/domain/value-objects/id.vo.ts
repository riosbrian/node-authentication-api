export class Id {
  private readonly pattern: RegExp =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  private constructor(private readonly id: string) {
    this.ensureIsValid(id);
  }

  get value() {
    return this.id;
  }

  static create(value: string) {
    return new Id(value);
  }

  private ensureIsValid(id: string) {
    const validation = this.pattern.test(id);
    if (!validation) throw new Error("Invalid Uuid");
  }
}
