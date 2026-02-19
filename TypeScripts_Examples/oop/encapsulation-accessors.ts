/**
 * encapsulation-accessors.ts — private fields, getters/setters, validation
 */
export {};

class BankAccount {
  #balance = 0; // private field
  constructor(public owner: string) {}
  deposit(amount: number) { this.#balance += amount; }
  withdraw(amount: number) {
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
  }
  get balance() { return this.#balance; }
}

const acct = new BankAccount('Bob');
acct.deposit(100);
try { acct.withdraw(30); } catch (e) { console.error(e); }
console.log(acct.owner, acct.balance);
