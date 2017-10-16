"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var db_1 = require("../helpers/db");
function createAll(body, transaction) {
    return Observable_1.Observable.create(function (observer) {
        db_1.Db.query(body[0], [], transaction).subscribe(function (data) {
            observer.next(data.rows);
            observer.complete();
        }, function (err) {
            observer.error(err);
            observer.complete();
        });
    });
}
exports.createAll = createAll;
function getUser(transaction) {
    return Observable_1.Observable.create(function (observer) {
        db_1.Db.query('SELECT * FROM users', [], transaction).subscribe(function (data) {
            observer.next(data.rows);
            observer.complete();
        }, function (err) {
            observer.error(err);
            observer.complete();
        });
    });
}
exports.getUser = getUser;
function getOrderItems(transaction) {
    return Observable_1.Observable.create(function (observer) {
        db_1.Db.query('SELECT * FROM order_items', [], transaction).subscribe(function (data) {
            observer.next(data.rows);
            observer.complete();
        }, function (err) {
            observer.error(err);
            observer.complete();
        });
    });
}
exports.getOrderItems = getOrderItems;
function getOrders(transaction) {
    return Observable_1.Observable.create(function (observer) {
        db_1.Db.query('SELECT * FROM orders', [], transaction).subscribe(function (data) {
            observer.next(data.rows);
            observer.complete();
        }, function (err) {
            observer.error(err);
            observer.complete();
        });
    });
}
exports.getOrders = getOrders;
function getCustomers(transaction) {
    return Observable_1.Observable.create(function (observer) {
        db_1.Db.query('SELECT * FROM customers', [], transaction).subscribe(function (data) {
            observer.next(data.rows);
            observer.complete();
        }, function (err) {
            observer.error(err);
            observer.complete();
        });
    });
}
exports.getCustomers = getCustomers;
//# sourceMappingURL=test.js.map