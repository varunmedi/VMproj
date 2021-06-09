var Bank = /** @class */ (function () {
    function Bank(id, name, acc) {
        this.custId = id;
        this.custName = name;
        this.custAcNumber = acc;
    }
    Bank.prototype.getSavingDeposit = function () {
        return "EmployeeName:" + this.custName + " and AccNo:" + this.custAcNumber + " Rate of Interest : 7%";
    };
    Bank.prototype.getRecurringDeposit = function () {
        return "EmployeeName:" + this.custName + " and AccNo:" + this.custAcNumber + " Rate of Interest : 9%";
    };
    Bank.prototype.getFixedDeposit = function () {
        return "EmployeeName:" + this.custName + " and AccNo:" + this.custAcNumber + " Rate of Interest : 11%";
    };
    return Bank;
}());
var hdfc = new Bank(101, 'kumar', 251514); //1st line
var icic = new Bank(102, 'Swetha', 251416);
console.log(hdfc.custId, hdfc.custName, hdfc.custAcNumber);
console.log(icic.custId, icic.custName, icic.custAcNumber);
console.log(hdfc.getSavingDeposit());
console.log(icic.getFixedDeposit());
// customerId:number =101;
// customerName:string = 'Varun';
// customerAccno:number = 54682791;
