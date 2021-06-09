function Bank(custId,custName,custAcNo){
    this.custId= custId;
    this.custName= custName;
    this.custAcNo= custAcNo;

}

var hdfc = new Bank( 101, 'varun', 512346)
console.log(hdfc.custId,hdfc.custName,hdfc.custAcNo)