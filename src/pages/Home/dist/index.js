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
var api_1 = require("../../services/api");
var md5_1 = require("md5");
var Comic_1 = require("../../components/Comic");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    var _a = process.env, REACT_APP_PUBLIC_KEY = _a.REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY = _a.REACT_APP_PRIVATE_KEY;
    //console.log(REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY);
    var navigate = react_router_dom_1.useNavigate();
    var _b = react_1.useState([]), comics = _b[0], setComics = _b[1];
    var _c = react_1.useState(0), rares = _c[0], setRares = _c[1];
    var _d = react_1.useState(""), searchQuery = _d[0], setSearchQuery = _d[1];
    var _e = react_1.useState(30), searchLimit = _e[0], setSearchLimit = _e[1];
    var clearSearch = function () {
        setSearchQuery("");
        searchComics();
    };
    var searchComics = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ts, hash, url;
        return __generator(this, function (_a) {
            ts = new Date().getTime();
            hash = REACT_APP_PRIVATE_KEY
                ? md5_1["default"](ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY)
                : "";
            url = searchQuery === ""
                ? "comics?ts=" + ts + "&apikey=" + REACT_APP_PUBLIC_KEY + "&hash=" + hash + "&limit=" + searchLimit + "&format=comic&formatType=comic&orderBy=title"
                : "comics?ts=" + ts + "&apikey=" + REACT_APP_PUBLIC_KEY + "&hash=" + hash + "&limit=" + searchLimit + "&format=comic&formatType=comic&orderBy=title&titleStartsWith=" + searchQuery;
            api_1["default"]
                .get(url)
                .then(function (response) {
                if (response.data.data.results.length > 0) {
                    localStorage.setItem("rare", "");
                    var rare = (response.data.data.results.length * 10) / 100;
                    setRares(rare);
                    setComics(response.data.data.results);
                }
                else {
                    setComics([]);
                }
            })["catch"](function (err) {
                console.error("ops! ocorreu um erro" + err);
            });
            return [2 /*return*/];
        });
    }); };
    var handleFormSubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(e.currentTarget);
        setSearchQuery(formData.get("sq"));
        searchComics();
    };
    var viewProduct = function (id, rare) {
        if (rare)
            localStorage.setItem("rare", id.toString());
        navigate("/produto/" + id);
        //`/produto/${comic.id}`
    };
    react_1.useEffect(function () {
        searchComics();
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(styles_1.SearchWrapper, null,
            react_1["default"].createElement("h3", null, "Encontre sua HQ"),
            react_1["default"].createElement(styles_1.SearchField, null,
                react_1["default"].createElement("form", { onSubmit: handleFormSubmit },
                    react_1["default"].createElement("div", { className: "inputs" },
                        react_1["default"].createElement("input", { type: "search", placeholder: "Buscar pelo t\u00EDtulo", name: "sq", defaultValue: searchQuery }),
                        react_1["default"].createElement("input", { type: "number", min: "1", max: "100", name: "limit", onChange: function (e) { return setSearchLimit(Number(e.target.value)); }, defaultValue: searchLimit })),
                    react_1["default"].createElement("div", { className: "buttons" },
                        react_1["default"].createElement("button", { className: "btn btn-primary" }, "Buscar"),
                        react_1["default"].createElement("button", { onClick: function (e) { return clearSearch(); }, className: "btn btn-dark" }, "Limpar"))))),
        react_1["default"].createElement(styles_1.ComicsGrid, null, comics === null || comics === void 0 ? void 0 : comics.map(function (comic, index) { return (react_1["default"].createElement("div", { key: comic.id, onClick: function (e) { return viewProduct(comic.id, index < rares); } },
            react_1["default"].createElement(Comic_1["default"], { rare: index < rares, title: comic.title, img: comic.thumbnail.path
                    ? comic.thumbnail.path + "." + comic.thumbnail.extension
                    : "", price: comic.prices[0].price }))); }))));
};
exports["default"] = Home;
