export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  
  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    console.log(this.name)
    return this.name
  }
  deposit = (deposit_value:number): void => {
      this.balance += deposit_value
      console.log('Você depositou')
  }

  withdraw = (withdrawRequest:number): void => {
    if(this.validateStatus()){
      if(this.balance >= withdrawRequest){
        this.balance -= withdrawRequest
        console.log('Você sacou')
      }else{
        throw new Error('Sem saldo suficiente')
      }
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      console.log('Conta válida')
      return this.status
    }

    throw new Error('Conta inválida')
  }
}