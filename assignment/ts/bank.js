"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(AccNo) {
        this.AccNo = AccNo;
    }
    Bank.prototype.getBankInfo = function () {
        console.log("your acc no is " + this.AccNo);
    };
    return Bank;
}());
exports.Bank = Bank;
