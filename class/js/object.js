// var customer = {
//     name:'chiru',
//     age:35,
//     isMarried:true,
//     getCustomerInfo:function(){
//         console.log('Mr '+this.name+'Your Age is--->'+this.age+'Are you married---->'+this.isMarried)
//     },
//     address:{
//         street:'kphb',
//         city:'hyderabad',
//         postalcode:500072
//     },
//     mobiles:[1234567890,08765431678]
// }
// console.log(customer)
// console.log(customer.name)
// console.log(customer.address['city'])


function customer(custId, custName){  //custId=101, custName='chiru'
    this.custId = custId  //customer1.custId = 101
    this.custName = custName; //custoemr1.custName = 'chiru'
}
  
  var customer1 = new customer(101, 'chiru'); //1st line of object
  var customer2 = new customer(102, 'suresh');

  console.log(customer1.custId, customer1.custName)//101 chiru
  console.log(customer2.custId, customer2.custName)//102 suresh

//   //Note: this keyword acts as a current object reference variable


var ar1 = Array(3)
ar1[0]='uday1'
ar1[1]='chiru1'
ar1[2]='suresh1'

var ar2 = Array('uday2','chiru2','suresh2')

var ar3 = ['uday3','chiru3','suresh3']

var ar4 = []
ar4[0] = 'uday4'
ar4[1] = 'chiru4'
ar4[2] = 'suresh4'

var ar5 = ['chiru5',30,true]

function displayArray(dynArray){
  var len = dynArray.length
  for(var i=0; i<len; i++){
    console.log(i, dynArray[i])
  }
}

displayArray(ar1)
displayArray(ar2)
displayArray(ar3)
// displayArray(ar4)
// displayArray(ar5)


// var str1 = "chiru";
// var str2 = new String('chiru')
// console.log(typeof(str1), typeof(str2))
// console.log(str1 == str2) //true
// console.log(str1 === str2) //false
