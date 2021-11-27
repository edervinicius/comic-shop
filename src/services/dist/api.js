"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var base_url = "https://gateway.marvel.com/v1/public/"; //developer.marvel.com
var api = axios_1["default"].create({
    baseURL: "" + base_url
});
exports["default"] = api;
