"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var styled_components_1 = require("styled-components");
var styled_components_2 = require("styled-components");
exports["default"] = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    *{margin:0;padding:0;box-sizing:border-box;}\n    a{text-decoration:none;color:inherit;}\n    input,button{font:inherit;color:inherit;border:none;background:#fff;border-radius:5px;padding:14px 10px;font-size:1em;width:100%}\n    body{background:#f0f0f5;font-family:Arial, Helvetica, sans-serif;font-size: 14px;color: #333;}\n    .btn{cursor:pointer;border: none;padding: 10px 20px;border-radius: 5px;display: inline-block;font-size: 1em;width:auto}\n    .btn-primary{color: #fff;background: #244CCC;}\n    .btn-success{color: #fff;background: #38CC83;}\n    .btn-dark{color: #fff;background: #333;}\n    .btn-lg{font-size: 1.2em;padding: 15px 30px;}\n    .page-title{margin: 20px 0 20px 0;font-size: 30px;font-weight: bold;}\n"], ["\n    *{margin:0;padding:0;box-sizing:border-box;}\n    a{text-decoration:none;color:inherit;}\n    input,button{font:inherit;color:inherit;border:none;background:#fff;border-radius:5px;padding:14px 10px;font-size:1em;width:100%}\n    body{background:#f0f0f5;font-family:Arial, Helvetica, sans-serif;font-size: 14px;color: #333;}\n    .btn{cursor:pointer;border: none;padding: 10px 20px;border-radius: 5px;display: inline-block;font-size: 1em;width:auto}\n    .btn-primary{color: #fff;background: #244CCC;}\n    .btn-success{color: #fff;background: #38CC83;}\n    .btn-dark{color: #fff;background: #333;}\n    .btn-lg{font-size: 1.2em;padding: 15px 30px;}\n    .page-title{margin: 20px 0 20px 0;font-size: 30px;font-weight: bold;}\n"])));
exports.Container = styled_components_2["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 1200px;\n  min-height: 80vh;\n  margin: 0 auto;\n  position: relative;\n"], ["\n  max-width: 1200px;\n  min-height: 80vh;\n  margin: 0 auto;\n  position: relative;\n"])));
var templateObject_1, templateObject_2;
