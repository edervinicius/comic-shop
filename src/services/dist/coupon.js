"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var base_url = "https://619f92021ac52a0017ba4916.mockapi.io/";
var coupon = axios_1["default"].create({
    baseURL: "" + base_url
});
exports["default"] = coupon;
