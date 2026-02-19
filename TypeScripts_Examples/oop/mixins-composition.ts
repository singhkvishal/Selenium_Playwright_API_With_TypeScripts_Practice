/**
 * mixins-composition.ts — mixins and composition examples
 */
export {};

type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
    timestamp() { return this.createdAt.toISOString(); }
  };
}

class Item { constructor(public name: string) {} }
const TimestampedItem = Timestamped(Item);
const it = new TimestampedItem('note');
console.log(it.name, it.timestamp());
