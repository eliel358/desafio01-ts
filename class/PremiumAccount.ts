import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }

    deposit = (deposit_value:number): void => {
        this.balance += deposit_value + 10
        console.log('Você depositou')
    }
}