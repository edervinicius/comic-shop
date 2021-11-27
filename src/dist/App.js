"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var global_1 = require("./styles/global");
var Header_1 = require("./components/Header");
var Footer_1 = require("./components/Footer");
var Home_1 = require("./pages/Home");
var Product_1 = require("./pages/Product");
var Cart_1 = require("./pages/Cart");
var Checkout_1 = require("./pages/Checkout");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(global_1["default"], null),
            react_1["default"].createElement(Header_1["default"], null),
            react_1["default"].createElement(global_1.Container, null,
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/produto/:id", element: react_1["default"].createElement(Product_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/cart", element: react_1["default"].createElement(Cart_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: "/checkout", element: react_1["default"].createElement(Checkout_1["default"], null) }))),
            react_1["default"].createElement(Footer_1["default"], null))));
}
exports["default"] = App;
