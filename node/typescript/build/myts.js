"use strict";
let x = 10;
function sum(x, y) {
    return x + y;
}
let car = {
    wheels: 10,
    color: 'red'
};
var Statuses;
(function (Statuses) {
    Statuses["active"] = "ACTIVE";
    Statuses["not_active"] = "NOT ACTIVE";
    Statuses["deleted"] = "DELETED";
})(Statuses || (Statuses = {}));
let myStatus = Statuses.not_active;
console.log(myStatus);
// tuple
let a = ['abc'];
let a1 = ['a', true, 10];
let carType = 'Audi';
// generic
function sum1(x, y) {
    console.log('result: ' + (x + y));
    return [x, y];
}
console.log(sum1(10, 15));
