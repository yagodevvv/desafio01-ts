import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";

const peopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount.getName());
companyAccount.deposit(500);
companyAccount.getLoan(1000);
companyAccount.withdraw(300);
companyAccount.getBalance();

const specialAccount = new SpecialAccount("Cliente Especial", 30);
console.log(specialAccount.getName());
specialAccount.deposit(100);
specialAccount.getBalance();

