"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var address_1 = require("./address");
var bank_1 = require("./bank");
var Employer = /** @class */ (function () {
    function Employer(Name) {
        this.Name = Name;
    }
    Employer.prototype.getEmployerInfo = function () {
        console.log("hello " + this.Name + " ");
    };
    Employer.prototype.getBankAddress = function () {
        var add = new address_1.Address('hyderabad');
        var bank = new bank_1.Bank(154628);
        add.getAdressInfo();
        bank.getBankInfo();
    };
    return Employer;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(Name, salary) {
        var _this = _super.call(this, Name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        console.log("Your salary is " + this.salary);
    };
    return Employee;
}(Employer));
var emp1 = new Employee('varun', 20000);
emp1.getBankAddress();
emp1.getEmployerInfo();
emp1.getEmployeeInfo();
