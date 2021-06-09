class Bank{
    custId:number;
    custName:string;
    custAcNumber:number;
    constructor(id:number, name:string, acc:number){
        this.custId = id;
        this.custName = name;
        this.custAcNumber = acc;
    }
    getSavingDeposit(){
        return `EmployeeName:${this.custName} AccNo:${this.custAcNumber} Rate of Interest : 7%`
    }
    getRecurringDeposit(){
        return `EmployeeName:${this.custName}  AccNo:${this.custAcNumber} Rate of Interest : 9%`
    }
    getFixedDeposit(){
        return `EmployeeName:${this.custName}  AccNo:${this.custAcNumber} Rate of Interest : 11%`
    }
}
let hdfc = new Bank(101,'kumar', 251514) //1st line
let icic = new Bank(102,'Swetha', 251416) 

console.log(hdfc.custId, hdfc.custName,hdfc.custAcNumber)
console.log(icic.custId, icic.custName,icic.custAcNumber)
console.log(hdfc.getSavingDeposit())
console.log(icic.getFixedDeposit())


// customerId:number =101;
// customerName:string = 'Varun';
// customerAccno:number = 54682791;