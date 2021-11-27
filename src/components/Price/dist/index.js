"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var Price = function (props) {
    return (react_1["default"].createElement(styles_1.PriceContainer, null,
        "R$",
        props.price.toFixed(2).replace(".", ",")));
};
exports["default"] = Price;
