"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SearchField = exports.SearchWrapper = exports.ComicsGrid = void 0;
var styled_components_1 = require("styled-components");
exports.ComicsGrid = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row wrap;\n"], ["\n  display: flex;\n  flex-flow: row wrap;\n"])));
exports.SearchWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n  h3 {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n  }\n"], ["\n  padding: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n  h3 {\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n  }\n"])));
exports.SearchField = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  form {\n    display: grid;\n    grid-template-columns: 60% 20% 20%;\n    gap: 5px;\n  }\n"], ["\n  form {\n    display: grid;\n    grid-template-columns: 60% 20% 20%;\n    gap: 5px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
