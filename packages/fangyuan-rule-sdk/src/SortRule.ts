import { Rule } from "./Rule";

export class SortRule<T, R = Record<string, any>> implements Rule<T> {
  rule: Rule<T> | null = null;
  constructor(
    private readonly ctx: R,
    private readonly rules: ((ctx: R) => Rule<T>)[],
    private readonly attributes: Record<string, string> = {}
  ) {}

  evaluate(): boolean {
    for (let ruleCtor of this.rules) {
      const rule = ruleCtor(this.ctx);
      if (rule.evaluate()) {
        this.rule = rule;
        return true;
      }
    }

    return false;
  }

  execute(): T {
    if (!this.rule) {
      throw new Error("请确保规则执行成功再调用");
    }
    return this.rule.execute();
  }

  toString() {
    this.attributes.name;
  }
}
