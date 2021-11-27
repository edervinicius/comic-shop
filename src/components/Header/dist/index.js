"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var logo_png_1 = require("../../assets/images/logo.png");
var react_router_dom_1 = require("react-router-dom");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Header = function () {
    return (react_1["default"].createElement(styles_1.HeaderContainer, null,
        react_1["default"].createElement("h1", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                react_1["default"].createElement("img", { src: logo_png_1["default"], alt: "Agenzia Comics" }),
                " Comics")),
        react_1["default"].createElement("div", { className: "cart-header" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/cart" },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShoppingCart }),
                react_1["default"].createElement("span", null, " Carrinho")))));
};
exports["default"] = Header;
