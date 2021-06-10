
import{Address} from './address'
import{Bank} from './bank'

class Customer{

    Name:string
    constructor(Name){
        this.Name= Name
    }
    getBankAdress(){
        let add =new Address('vizag')
        let bank= new Bank(251463)
        add.getAdressInfo()
        bank.getBankInfo()

    }
    getCustomerInfo(){
        console.log(`Hi ${this.Name}  `)
    }

}

let cust1 = new Customer('varun')
cust1.getBankAdress()
cust1.getCustomerInfo()