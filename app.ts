import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const premiumAccount: PremiumAccount = new PremiumAccount('Eliel',30)

// <-- Depositos -->
peopleAccount.deposit(100)
companyAccount.deposit(100)
premiumAccount.deposit(100)
// <-- Depositos -->

// <-- Saques -->
peopleAccount.withdraw(100)
companyAccount.withdraw(100)
premiumAccount.withdraw(100)
// <-- Saques -->

// <-- Checar saldo -->
peopleAccount.getBalance()
companyAccount.getBalance()
premiumAccount.getBalance()
// <-- Checar saldo -->

// <-- Checar nome -->
peopleAccount.getName()
companyAccount.getName()
premiumAccount.getName()
// <-- Checar nome -->

// <-- Validar status -->
peopleAccount.validateStatus()
companyAccount.validateStatus()
premiumAccount.validateStatus()
// <-- Validar status -->