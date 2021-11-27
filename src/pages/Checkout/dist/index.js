"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var coupon_1 = require("../../services/coupon");
var sweetalert2_1 = require("sweetalert2");
var react_router_dom_1 = require("react-router-dom");
var sweetalert2_react_content_1 = require("sweetalert2-react-content");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Price_1 = require("../../components/Price");
var Checkout = function () {
    var MySwal = sweetalert2_react_content_1["default"](sweetalert2_1["default"]);
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(0), discount = _a[0], setDiscount = _a[1];
    var _b = react_1.useState(""), discountType = _b[0], setDiscountType = _b[1];
    var _c = react_1.useState(0), discountPercentage = _c[0], setDiscountPercentage = _c[1];
    var _d = react_1.useState(0), total = _d[0], setTotal = _d[1];
    var _e = react_1.useState(0), subtotal = _e[0], setSubTotal = _e[1];
    var _f = react_1.useState(function () {
        return localStorage.getItem("cart") !== null
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
    }), cartProd = _f[0], setCart = _f[1];
    var calcTotal = function () {
        var commonsum = 0;
        var raresum = 0;
        cartProd.forEach(function (item) {
            console.log(item.rare);
            commonsum += !item.rare ? item.price * item.quantity : 0;
            raresum += item.rare ? item.price * item.quantity : 0;
        });
        var sumtotal = commonsum + raresum;
        console.log("discountType", discountType);
        if (discountType === "common") {
            var discValue = (commonsum * discountPercentage) / 100;
            setSubTotal(sumtotal);
            setDiscount(discValue);
            setTotal(sumtotal - discount);
        }
        else {
            var discValue = (sumtotal * discountPercentage) / 100;
            setSubTotal(sumtotal);
            setDiscount(discValue);
            setTotal(sumtotal - discount);
        }
    };
    var handleCoupon = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, couponCode;
        return __generator(this, function (_a) {
            e.preventDefault();
            formData = new FormData(e.currentTarget);
            couponCode = formData.get("coupon");
            coupon_1["default"]
                .get("/" + couponCode)
                .then(function (response) {
                if (response) {
                    setDiscountPercentage(response.data.discount);
                    setDiscountType(response.data.type);
                    calcTotal();
                    var israre = response.data.type === "rare" ? "Raro" : "Comum";
                    MySwal.fire({
                        icon: "success",
                        title: "Cupom aplicado",
                        text: "Você ativou um cumpo " + israre
                    }).then(function () { });
                }
            })["catch"](function (err) {
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Esse código não existe!"
                }).then(function () { });
            });
            return [2 /*return*/];
        });
    }); };
    var finish = function () {
        MySwal.fire({
            icon: "success",
            title: "Compra finalizada",
            text: "Parabens pela compra"
        }).then(function () {
            localStorage.removeItem("rare");
            localStorage.removeItem("cart");
            navigate("/");
        });
    };
    react_1.useEffect(function () {
        calcTotal();
    }, [discount, discountPercentage, discountType]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", { className: "page-title" }, "Finalizar Compra"),
        react_1["default"].createElement(styles_1.CheckoutWrapper, null,
            react_1["default"].createElement("form", { onSubmit: handleCoupon },
                react_1["default"].createElement("input", { type: "text", name: "coupon", placeholder: "Cupom de desconto" }),
                react_1["default"].createElement("button", { className: "btn btn-primary" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTags }),
                    react_1["default"].createElement("span", null, " Usar cupom"))),
            react_1["default"].createElement("div", { className: "recipt" },
                react_1["default"].createElement("table", null,
                    react_1["default"].createElement("tbody", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement("b", null, "Subtotal")),
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement(Price_1["default"], { price: subtotal }))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement("b", null, "Desconto")),
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement(Price_1["default"], { price: discount }))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement("b", null, "Total")),
                            react_1["default"].createElement("td", null,
                                react_1["default"].createElement(Price_1["default"], { price: total }))))),
                react_1["default"].createElement("button", { className: "btn btn-success", onClick: function (e) { return finish(); } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCreditCard }),
                    react_1["default"].createElement("span", null, " Pagamento"))))));
};
exports["default"] = Checkout;
