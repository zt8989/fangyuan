export interface Rule<T> {
  evaluate(): boolean;
  execute(): T;
}
