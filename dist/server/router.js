"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express_1 = require("express");
var csrf_1 = require("./middlewares/csrf");
var test_1 = require("./controllers/test");
var router = express_1.Router();
var appFile = function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(path.join(__dirname, '../client/index.html'));
};
// API routes
router.use('/api/test', test_1.TestController);
// All other routes go to app file
router.get('*', csrf_1.CsrfMiddleware, appFile);
exports.AppRouter = router;
//# sourceMappingURL=router.js.map