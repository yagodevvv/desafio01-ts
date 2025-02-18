export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName(): string {
    return this.name;
  }

  deposit(value: number): void {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Depósito de R$${value} realizado! Saldo atual: R$${this.balance}`);
    }
  }

  withdraw(value: number): void {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Saque de R$${value} realizado! Saldo atual: R$${this.balance}`);
    } else {
      console.log("Saldo insuficiente ou conta inativa.");
    }
  }

  getBalance(): void {
    console.log(`Saldo atual: R$${this.balance}`);
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return true;
    }
    throw new Error("Conta inválida");
  }
}
