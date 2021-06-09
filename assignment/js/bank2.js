var customer  ={
    custId: 101,
    custName:'varun',
    custAcNo: 514236,

    getSavingsDeposit(){
        console.log(`Hello ${this.custName} Accno ${this.custAcNo} Rate of interest is ${7}%`)

    },
    getRecurringDeposit(){
        console.log(`Hello ${this.custName} Accno ${this.custAcNo} Rate of interest is ${8}%`)
    },
    getFixedDeposit(){
        console.log(`hello  ${this.custName} Accno ${this.custAcNo} Rate of interest is ${11}%`)
    },

}
customer.getSavingsDeposit()
customer.getRecurringDeposit()
customer.getFixedDeposit()
