import { Rule } from "./Rule";

export class ConcurrentRule<T, R = Record<string, any>> implements Rule<T[]> {
  validRules: Rule<T>[] = [];
  constructor(
    private readonly ctx: R,
    private readonly rules: ((ctx: R) => Rule<T>)[]
  ) {}

  evaluate(): boolean {
    this.validRules = this.rules
      .map((ruleCotr) => ruleCotr(this.ctx))
      .filter((rule) => rule.evaluate());

    return this.validRules.length > 0;
  }

  execute(): T[] {
    if (this.validRules.length === 0) {
      throw new Error("请确保规则执行成功再调用");
    }
    return this.validRules.map((rule) => rule.execute());
  }
}
