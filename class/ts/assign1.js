"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var bank_1 = require("./bank");
var Customer = /** @class */ (function () {
    function Customer(Name) {
        this.Name = Name;
    }
    Customer.prototype.getBankAdress = function () {
        var add = new address_1.Address('vizag');
        var bank = new bank_1.Bank(251463);
        add.getAdressInfo();
        bank.getBankInfo();
    };
    Customer.prototype.getCustomerInfo = function () {
        console.log("Hi " + this.Name + "  ");
    };
    return Customer;
}());
var cust1 = new Customer('varun');
cust1.getBankAdress();
cust1.getCustomerInfo();
