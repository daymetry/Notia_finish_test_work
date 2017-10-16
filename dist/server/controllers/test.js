"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var csrf_1 = require("../middlewares/csrf");
var tools_1 = require("../helpers/tools");
var Test = require("../models/test");
require("rxjs/add/operator/mergeMap");
var router = express_1.Router();
// define '/api/test/*' routes here
router.get('/users', csrf_1.CsrfMiddleware, _getUsers);
router.get('/orderItems', csrf_1.CsrfMiddleware, _getOrderItems);
router.get('/orders', csrf_1.CsrfMiddleware, _getOrders);
router.get('/customers', csrf_1.CsrfMiddleware, _getCustomers);
router.post('/create', csrf_1.CsrfMiddleware, _create);
// define route-handlers here
function _create(req, res) {
    Test.createAll(res.req.body).subscribe(function (data) {
        tools_1.Tools.sendJSON(res, true, data);
    }, function (err) {
        tools_1.Tools.sendJSON(res, false, err);
    });
}
function _getUsers(req, res) {
    Test.getUser().subscribe(function (data) {
        tools_1.Tools.sendJSON(res, true, data);
    }, function (err) {
        tools_1.Tools.sendJSON(res, false, err);
    });
}
function _getOrderItems(req, res) {
    Test.getOrderItems().subscribe(function (data) {
        tools_1.Tools.sendJSON(res, true, data);
    }, function (err) {
        tools_1.Tools.sendJSON(res, false, err);
    });
}
function _getOrders(req, res) {
    Test.getOrders().subscribe(function (data) {
        tools_1.Tools.sendJSON(res, true, data);
    }, function (err) {
        tools_1.Tools.sendJSON(res, false, err);
    });
}
function _getCustomers(req, res) {
    Test.getCustomers().subscribe(function (data) {
        tools_1.Tools.sendJSON(res, true, data);
    }, function (err) {
        tools_1.Tools.sendJSON(res, false, err);
    });
}
// export router
exports.TestController = router;
//# sourceMappingURL=test.js.map