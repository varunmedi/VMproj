let customer = 
{
    custName: 'varun',
    custCity: 'vizag',
    getNoOfMobile(){
        return 2
    }
}
let {custName,custCity,getNoOfMobile} = customer

console.log(custName, custCity, getNoOfMobile())