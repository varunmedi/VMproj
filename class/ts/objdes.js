var customer = {
    custName: 'varun',
    custCity: 'vizag',
    getNoOfMobile: function () {
        return 2;
    }
};
var custName = customer.custName, custCity = customer.custCity, getNoOfMobile = customer.getNoOfMobile;
console.log(custName, custCity, getNoOfMobile());
