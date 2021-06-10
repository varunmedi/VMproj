import{Address} from './address'
import{Bank} from './bank'

class Employer{
    Name: string
    constructor(Name){
        this.Name =Name
    }
    getEmployerInfo(){
        console.log(`hello ${this.Name} `)

    }
    getBankAddress(){
        let add = new Address('hyderabad')
        let bank = new Bank(154628)
        add.getAdressInfo()
        bank.getBankInfo()
    }
}
class Employee extends Employer{
    salary:number
    constructor(Name,salary){
        super(Name)
        this.salary =salary

    }
    getEmployeeInfo(){
        console.log(`Your salary is ${this.salary}`)
    }

}
let emp1 =new Employee('varun',20000)
emp1.getBankAddress()
emp1.getEmployerInfo()
emp1.getEmployeeInfo()
