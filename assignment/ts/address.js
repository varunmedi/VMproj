"use strict";
exports.__esModule = true;
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(city) {
        this.city = city;
    }
    Address.prototype.getAdressInfo = function () {
        console.log("Your current locations is " + this.city);
    };
    return Address;
}());
exports.Address = Address;
// let add1= new Address('vizag')
// console.log(add1.city)
