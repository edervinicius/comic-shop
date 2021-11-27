"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("./styles");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Price_1 = require("../../components/Price");
var Cart = function () {
    var CartContent = function () {
        if (cartProd.length === 0) {
            return (react_1["default"].createElement(styles_1.EmptyCart, null,
                "Seu carrinho est\u00E1 vazio, ",
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "voltar para loja")));
        }
        else {
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(styles_1.CartWrapper, null, cartProd.map(function (item, index) { return (react_1["default"].createElement("tr", { key: item.id },
                    react_1["default"].createElement("td", null, index + 1),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement("div", { className: "thumbnail" },
                            react_1["default"].createElement("img", { src: item.image, alt: "" }))),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement("h3", null, item.title)),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement(Price_1["default"], { price: item.price })),
                    react_1["default"].createElement("td", { className: "quantity" },
                        react_1["default"].createElement("input", { type: "number", min: "1", defaultValue: item.quantity, onChange: function (e) {
                                return updateProdQty(index, parseInt(e.target.value));
                            } })),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement(Price_1["default"], { price: item.price * item.quantity })),
                    react_1["default"].createElement("td", null,
                        react_1["default"].createElement("button", { className: "btn btn-dark", onClick: function (e) { return removeProd(index); } },
                            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTrashAlt }),
                            react_1["default"].createElement("span", null, " Remover"))))); })),
                react_1["default"].createElement(styles_1.FinishBtns, null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Continuar comprando"),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/checkout", className: "btn btn-success btn-lg" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShoppingCart }),
                        react_1["default"].createElement("span", null, " Finalizar")))));
        }
    };
    var _a = react_1.useState(function () {
        return localStorage.getItem("cart") !== null
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }), cartProd = _a[0], setCart = _a[1];
    var updateProdQty = function (index, qty) {
        var newCart = __spreadArrays(cartProd);
        newCart[index].quantity = qty;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    var removeProd = function (index) {
        var newCart = __spreadArrays(cartProd);
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", { className: "page-title" }, "Carrinho"),
        react_1["default"].createElement(CartContent, null)));
};
exports["default"] = Cart;
