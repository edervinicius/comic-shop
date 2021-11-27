"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var Comic = function (_a) {
    var img = _a.img, title = _a.title, price = _a.price, rare = _a.rare;
    return (react_1["default"].createElement(styles_1.ComicContainer, null,
        react_1["default"].createElement("div", { className: rare ? "raro" : "" },
            react_1["default"].createElement("div", { className: "cover" },
                react_1["default"].createElement("img", { src: img, alt: "" })),
            react_1["default"].createElement("div", { className: "title" },
                react_1["default"].createElement("h2", null, title)),
            react_1["default"].createElement("p", { className: "price" },
                "$",
                price))));
};
exports["default"] = Comic;
