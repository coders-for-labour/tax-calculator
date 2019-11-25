(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"push\" opened=\"false\">\n    <header class=\"sidenav-header\">\n      <mat-icon (click)=\"sidenav.toggle()\">close</mat-icon>\n      Info\n    </header>\n    <div class=\"sidenav-content\" cdk-focus-start>\n      <h3>Instructions</h3>\n      <p>\n        Use the slider on the left to adjust the annual salary, or tap on the salary at the top to enter your own.\n      </p>\n      <p>\n        You can change the comparison values to annual, monthly or weekly by using the time menu on the top right or by clicking/tapping\n        the area.\n      </p>\n      <h3>Notes about this tool:</h3>\n      <ul>\n        <li>It is for illustration purposes only.</li>\n        <li>Calculations are estimates.</li>\n        <li>It does not take into account additional deductions e.g. childcare vouchers, pensions, etc.</li>\n        <li>The \"take home\"\" amount includes National Insurance deductions which may be calculated slightly differently than\n          HMRC would.</li>\n        <li>It uses the England, Wales and Northern Ireland tax bands. Scotland's are devolved so difficult to compare.</li>\n      </ul>\n      Source code available on\n      <a href=\"https://github.com/coders-for-labour/tax-calculator\">GitHub</a>\n    </div>\n    <footer class=\"sidenav-footer\">\n      <a href=\"https://www.codersforlabour.com\" target=\"_blank\">Made by Volunteers</a>\n      <a href=\"https://www.codersforlabour.com\" target=\"_blank\" class=\"c4l\"></a>\n    </footer>\n  </mat-sidenav>\n  <main>\n    <header>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\">\n        <mat-icon>info_outline</mat-icon>\n      </button>\n      <h1>\n        Tax Calculator\n        <a href=\"https://www.codersforlabour.com\" target=\"_blank\">\n          <span class=\"c4l\"></span>\n          Made by Volunteers\n        </a>\n      </h1>\n      <button mat-icon-button [matMenuTriggerFor]=\"timeMenu\" class=\"time-button\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </header>\n    <mat-menu #timeMenu=\"matMenu\">\n      <button mat-menu-item (click)=\"setTimePeriod(0)\">\n        <mat-icon *ngIf=\"cyclerIndex == 0\">radio_button_checked</mat-icon>\n        <mat-icon *ngIf=\"cyclerIndex != 0\">radio_button_unchecked</mat-icon>\n        <span>Yearly</span>\n      </button>\n      <button mat-menu-item (click)=\"setTimePeriod(1)\">\n        <mat-icon *ngIf=\"cyclerIndex == 1\">radio_button_checked</mat-icon>\n        <mat-icon *ngIf=\"cyclerIndex != 1\">radio_button_unchecked</mat-icon>\n        <span>Monthly</span>\n      </button>\n      <button mat-menu-item (click)=\"setTimePeriod(2)\">\n        <mat-icon *ngIf=\"cyclerIndex == 2\">radio_button_checked</mat-icon>\n        <mat-icon *ngIf=\"cyclerIndex != 2\">radio_button_unchecked</mat-icon>\n        <span>Weekly</span>\n      </button>\n      <hr />\n      <button mat-menu-item (click)=\"advanced = !advanced\">\n        <mat-icon *ngIf=\"advanced\">check_box</mat-icon>\n        <mat-icon *ngIf=\"!advanced\">check_box_outline_blank</mat-icon>\n        <span>Advanced</span>\n      </button>\n    </mat-menu>\n    <div id=\"slider\" [ngClass]=\"{ 'open': !manualEntry }\">\n      <div class=\"markers\">\n        <div (click)=\"setSlider(47)\" class=\"avg\">\n          <label>UK Avg</label>\n        </div>\n        <div (click)=\"setSlider(47)\" class=\"k29\">\n          <label>£29k</label>\n        </div>\n        <div (click)=\"setSlider(97)\" class=\"k80\">\n          <label>£80k</label>\n        </div>\n        <div (click)=\"setSlider(126)\" class=\"k150\">\n          <label>£150k</label>\n        </div>\n        <div (click)=\"setSlider(97)\" class=\"top5\">\n          <label>Top 5%</label>\n        </div>\n      </div>\n      <mat-slider step=\"1\" min=\"1\" max=\"150\" vertical (input)=\"onInputChange($event)\" (change)=\"onInputChange($event)\" value=\"50\"\n        #slider></mat-slider>\n    </div>\n    <div id=\"content\" [ngClass]=\"{ 'slider': !manualEntry }\">\n      <div class=\"results\" *ngIf=\"current && proposed\">\n        <h5 (click)=\"manualEntry = true\">Annual Salary\n          <span *ngIf=\"!manualEntry\">(Tap to edit)</span>\n        </h5>\n        <div class=\"salary-display\" (click)=\"manualEntry = true\" *ngIf=\"!manualEntry\">\n          {{ salary | currency:'GBP':'symbol':'1.0-0' }}\n        </div>\n        <div class=\"manual-input\" *ngIf=\"manualEntry\">\n          <input type=\"number\" [(ngModel)]=\"salary\" max=\"9\" pattern=\"[0-9]\" autofocus />\n          <mat-icon (click)=\"manualEntry = false\">close</mat-icon>\n        </div>\n        <div class=\"comparison\">\n          <cycler [auto]=\"false\" #comparisonCycler>\n            <cycler-item>\n              <div class=\"left\">\n                <h4>Current</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ current.tax | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/yr</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ current.net - ni | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/yr</span>\n                </div>\n              </div>\n              <div class=\"right\">\n                <h4>Labour</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ proposed.tax | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/yr</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ proposed.net - ni | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/yr</span>\n                </div>\n              </div>\n            </cycler-item>\n            <cycler-item>\n              <div class=\"left\">\n                <h4>Current</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ current.tax / 12 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/mth</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ (current.net - ni) / 12 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/mth</span>\n                </div>\n              </div>\n              <div class=\"right\">\n                <h4>Labour</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ proposed.tax / 12 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/mth</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ (proposed.net - ni) / 12 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/mth</span>\n                </div>\n              </div>\n            </cycler-item>\n            <cycler-item>\n              <div class=\"left\">\n                <h4>Current</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ current.tax / 52 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/wk</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ (current.net - ni) / 52 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/wk</span>\n                </div>\n              </div>\n              <div class=\"right\">\n                <h4>Labour</h4>\n                <h5>Tax</h5>\n                <div class=\"amount\">{{ proposed.tax / 52 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/wk</span>\n                </div>\n                <h5>Take Home</h5>\n                <div class=\"amount\">{{ (proposed.net - ni) / 52 | currency:'GBP':'symbol':'1.2-2' }}\n                  <span>/wk</span>\n                </div>\n              </div>\n            </cycler-item>\n          </cycler>\n        </div>\n        <div class=\"change\">\n          <h5>\n            Tax Change\n          </h5>\n          <div *ngIf=\"proposed.tax - current.tax != 0\">\n            <div class=\"amount l\">{{ proposed.tax - current.tax > 0 ? '+' : '' }}{{ proposed.tax - current.tax | currency:'GBP':'symbol':'1.2-2' }}\n              <span>/yr</span>\n            </div>\n            <div class=\"amount l\">{{ proposed.tax - current.tax > 0 ? '+' : '' }}{{ (proposed.tax - current.tax) / 12 | currency:'GBP':'symbol':'1.2-2'\n              }}\n              <span>/mth</span>\n            </div>\n            <div class=\"amount l\">{{ proposed.tax - current.tax > 0 ? '+' : '' }}{{ (proposed.tax - current.tax) / 52 | currency:'GBP':'symbol':'1.2-2'\n              }}\n              <span>/wk</span>\n            </div>\n          </div>\n          <div class=\"amount xxl\" *ngIf=\"proposed.tax - current.tax == 0\">NONE</div>\n        </div>\n      </div>\n      <ng-template [ngIf]=\"current && proposed && !advanced\">\n        <div class=\"benefit\" *ngIf=\"proposed.tax - current.tax > 0\">\n          It looks like you'd be paying more tax under Labour. This means that you would be investing in a better society for you and\n          your family with a fully-funded NHS, better education and improved security.\n        </div>\n        <div class=\"benefit\" *ngIf=\"proposed.tax - current.tax == 0\">\n          You won't be paying any more tax. Even so, you and your family still get access to great things like a fully funded NHS and\n          no tuition fees.\n        </div>\n      </ng-template>\n      <div class=\"breakdown\" *ngIf=\"advanced\">\n        <h3>Current</h3>\n        Allowance: {{ current.allowance | currency:'GBP':'symbol':'1.2-2' }}\n        <br/> Taxable: {{ current.taxable | currency:'GBP':'symbol':'1.2-2' }}\n        <br/> Breakdown:\n        <ul>\n          <li *ngFor=\"let band of current.bands | mapValues\">\n            {{ band.key }} ({{band.value.rate}}%): {{ band.value.tax | currency:'GBP':'symbol':'1.2-2' }}\n          </li>\n        </ul>\n        <h3>Labour</h3>\n        Allowance: {{ proposed.allowance | currency:'GBP':'symbol':'1.2-2' }}\n        <br/> Taxable: {{ current.taxable | currency:'GBP':'symbol':'1.2-2' }}\n        <br/> Breakdown:\n        <ul>\n          <li *ngFor=\"let band of proposed.bands | mapValues\">\n            {{ band.key }} ({{band.value.rate}}%): {{ band.value.tax | currency:'GBP':'symbol':'1.2-2' }}\n          </li>\n        </ul>\n        National Insurance: {{ ni | currency:'GBP':'symbol':'1.2-2' }}\n      </div>\n    </div>\n  </main>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cycler/cycler.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cycler/cycler.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-dialog/welcome-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-dialog/welcome-dialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <h2>Welcome!</h2>\n  <p>\n    <b>Now updated for the 2019 General Election!</b>\n  </p>\n  <p>\n    This is a simple income tax calculator to estimate the difference in tax would be under a Labour government.\n  </p>\n  <p>\n    Use the slider on the left to adjust the annual salary, or tap on the salary at the top to enter your own.\n  </p>\n  <div class=\"buttons\">\n    <button mat-mini-fab (click)=\"close()\"><mat-icon>check</mat-icon></button>\n  </div>\n  <div class=\"footer\">\n    <a href=\"https://www.codersforlabour.com\" target=\"_blank\" class=\"c4l\"></a>\n    <a href=\"https://www.codersforlabour.com\" target=\"_blank\">Made by Volunteers</a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _current_tax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-tax.service */ "./src/app/current-tax.service.ts");
/* harmony import */ var _proposed_tax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposed-tax.service */ "./src/app/proposed-tax.service.ts");
/* harmony import */ var _national_insurance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./national-insurance.service */ "./src/app/national-insurance.service.ts");
/* harmony import */ var _wcipf_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wcipf.service */ "./src/app/wcipf.service.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _cycler_cycler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cycler/cycler.component */ "./src/app/cycler/cycler.component.ts");











let AppComponent = class AppComponent {
    constructor(currentTax, proposedTax, nationalInsurance, wcipf, dialog) {
        this.currentTax = currentTax;
        this.proposedTax = proposedTax;
        this.nationalInsurance = nationalInsurance;
        this.wcipf = wcipf;
        this.dialog = dialog;
        this._salary = 0;
        this._manualEntry = false;
        this.ni = 0;
        this.advanced = false;
    }
    get manualEntry() {
        return this._manualEntry;
    }
    set manualEntry(value) {
        this._manualEntry = value;
        if (!value)
            this.sliderUpdate(this.slider.value);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value > 99999999999)
            value = 99999999999;
        this._salary = value;
        this.calculate();
    }
    get cyclerIndex() {
        if (!this.comparisonCyclier)
            return 0;
        return this.comparisonCyclier.index;
    }
    ngOnInit() {
        setTimeout(() => this.sliderUpdate(this.slider.value), 10);
    }
    ngAfterViewInit() {
        setTimeout(() => this.dialog.open(_welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeDialogComponent"], {}), 10);
    }
    onInputChange(event) {
        this.sliderUpdate(event.value);
    }
    setSlider(value) {
        this.slider.value = value;
        this.sliderUpdate(value);
    }
    setTimePeriod(index) {
        this.comparisonCyclier.setIndex(index);
    }
    sliderUpdate(input) {
        if (input == 1) {
            this.salary = 10000;
            return;
        }
        var minp = 0;
        var maxp = 150;
        var minv = Math.log(10000);
        var maxv = Math.log(250000);
        var scale = (maxv - minv) / (maxp - minp);
        var value = Math.exp(minv + scale * (input - minp));
        if (value < 100000)
            value = Math.round(value / 500) * 500;
        else if (value < 130000)
            value = Math.round(value / 1000) * 1000;
        else
            value = Math.round(value / 5000) * 5000;
        this.salary = value;
    }
    calculate() {
        this.current = this.currentTax.calculate(this._salary);
        this.proposed = this.proposedTax.calculate(this._salary);
        this.ni = this.nationalInsurance.calculate(this._salary, _configuration__WEBPACK_IMPORTED_MODULE_8__["NATIONAL_INSURANCE"]);
        this.wcipfResults = this.wcipf.get(this.proposed.tax - this.current.tax);
    }
};
AppComponent.ctorParameters = () => [
    { type: _current_tax_service__WEBPACK_IMPORTED_MODULE_4__["CurrentTaxService"] },
    { type: _proposed_tax_service__WEBPACK_IMPORTED_MODULE_5__["ProposedTaxService"] },
    { type: _national_insurance_service__WEBPACK_IMPORTED_MODULE_6__["NationalInsuranceService"] },
    { type: _wcipf_service__WEBPACK_IMPORTED_MODULE_7__["WcipfService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slider", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderChange"])
], AppComponent.prototype, "slider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("comparisonCycler", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cycler_cycler_component__WEBPACK_IMPORTED_MODULE_10__["CyclerComponent"])
], AppComponent.prototype, "comparisonCyclier", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_current_tax_service__WEBPACK_IMPORTED_MODULE_4__["CurrentTaxService"],
        _proposed_tax_service__WEBPACK_IMPORTED_MODULE_5__["ProposedTaxService"],
        _national_insurance_service__WEBPACK_IMPORTED_MODULE_6__["NationalInsuranceService"],
        _wcipf_service__WEBPACK_IMPORTED_MODULE_7__["WcipfService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _current_tax_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./current-tax.service */ "./src/app/current-tax.service.ts");
/* harmony import */ var _proposed_tax_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./proposed-tax.service */ "./src/app/proposed-tax.service.ts");
/* harmony import */ var _national_insurance_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./national-insurance.service */ "./src/app/national-insurance.service.ts");
/* harmony import */ var _wcipf_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wcipf.service */ "./src/app/wcipf.service.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _cycler_cycler_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cycler/cycler.component */ "./src/app/cycler/cycler.component.ts");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./autofocus.directive */ "./src/app/autofocus.directive.ts");
/* harmony import */ var _map_values_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./map-values.pipe */ "./src/app/map-values.pipe.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeDialogComponent"],
            _cycler_cycler_component__WEBPACK_IMPORTED_MODULE_20__["CyclerComponent"],
            _cycler_cycler_component__WEBPACK_IMPORTED_MODULE_20__["CyclerItemComponent"],
            _autofocus_directive__WEBPACK_IMPORTED_MODULE_21__["AutofocusDirective"],
            _map_values_pipe__WEBPACK_IMPORTED_MODULE_22__["MapValuesPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"]
        ],
        exports: [
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ],
        providers: [_current_tax_service__WEBPACK_IMPORTED_MODULE_15__["CurrentTaxService"], _proposed_tax_service__WEBPACK_IMPORTED_MODULE_16__["ProposedTaxService"], _national_insurance_service__WEBPACK_IMPORTED_MODULE_17__["NationalInsuranceService"], _wcipf_service__WEBPACK_IMPORTED_MODULE_18__["WcipfService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
        entryComponents: [_welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/autofocus.directive.ts":
/*!****************************************!*\
  !*** ./src/app/autofocus.directive.ts ***!
  \****************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutofocusDirective = class AutofocusDirective {
    constructor(el) {
        this.el = el;
        this.lastVisible = false;
        this.initialised = false;
    }
    ngAfterViewInit() {
        this.initialised = true;
        this.ngDoCheck();
    }
    ngDoCheck() {
        if (!this.initialised)
            return;
        const visible = !!this.el.nativeElement.offsetParent;
        if (visible && !this.lastVisible)
            setTimeout(() => { this.el.nativeElement.focus(); }, 1);
        this.lastVisible = visible;
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[autofocus]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AutofocusDirective);



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: NATIONAL_INSURANCE, CURRENT_TAX, PROPOSED_TAX, WCIPF_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIONAL_INSURANCE", function() { return NATIONAL_INSURANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_TAX", function() { return CURRENT_TAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPOSED_TAX", function() { return PROPOSED_TAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WCIPF_DATA", function() { return WCIPF_DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const NATIONAL_INSURANCE = {
    primary: {
        rate: 12,
        start: 166,
        end: 962
    },
    upper: {
        rate: 2,
        start: 962
    }
};
const CURRENT_TAX = {
    allowance: 12500,
    taperedAllowanceThreshold: 100000,
    bands: {
        basic: { start: 12500, end: 50000, rate: 20 },
        higher: { start: 50000, end: 100000, rate: 40 },
        tapered: { start: 100000, end: 125000, rate: 40 },
        zeroAllowance: { start: 125000, end: 150000, rate: 40 },
        additional: { start: 150000, rate: 45 }
    }
};
const PROPOSED_TAX = {
    allowance: 12500,
    taperedAllowanceThreshold: 100000,
    bands: {
        basic: { start: 12500, end: 50000, rate: 20 },
        higher: { start: 50000, end: 80000, rate: 40 },
        additional: { start: 80000, end: 100000, rate: 45 },
        tapered: { start: 100000, end: 125000, rate: 45 },
        top: { start: 125000, rate: 50 }
    }
};
const WCIPF_DATA = [
    {
        name: 'Junior Doctor',
        plural: 'Junior Doctors',
        cost: 30000
    },
    {
        name: 'School Meal',
        plural: 'School Meals',
        cost: 3.0
    }
];


/***/ }),

/***/ "./src/app/current-tax.service.ts":
/*!****************************************!*\
  !*** ./src/app/current-tax.service.ts ***!
  \****************************************/
/*! exports provided: CurrentTaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTaxService", function() { return CurrentTaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
/* harmony import */ var _tax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax.service */ "./src/app/tax.service.ts");




let CurrentTaxService = class CurrentTaxService extends _tax_service__WEBPACK_IMPORTED_MODULE_3__["TaxService"] {
    get config() {
        return _configuration__WEBPACK_IMPORTED_MODULE_2__["CURRENT_TAX"];
    }
    calculateTax(income) {
        var basicBand = this.config.bands.basic;
        var freeBand = {
            start: 0,
            end: basicBand.start,
            rate: 0
        };
        var freeResult = {
            rate: 0,
            taxable: Math.max(Math.min(income, freeBand.end) - freeBand.start, 0),
            tax: 0
        };
        var basicTaxable = Math.max(Math.min(income, basicBand.end) - basicBand.start, 0);
        var basicTax = basicTaxable * (basicBand.rate / 100);
        var basicResult = {
            rate: basicBand.rate,
            taxable: basicTaxable,
            tax: basicTax
        };
        var higherBand = this.config.bands.higher;
        var higherTaxable = Math.max(Math.min(income, higherBand.end) - higherBand.start, 0);
        var higherTax = higherTaxable * (higherBand.rate / 100);
        var higherResult = {
            rate: higherBand.rate,
            taxable: higherTaxable,
            tax: higherTax
        };
        var taperedBand = this.config.bands.tapered;
        var taperedTaxable = Math.max(Math.min(income, taperedBand.end) - taperedBand.start, 0);
        var taperedTax = taperedTaxable * 1.5 * (taperedBand.rate / 100);
        var taperedResult = {
            rate: taperedBand.rate,
            taxable: taperedTaxable,
            tax: taperedTax
        };
        var zeroAllowanceBand = this.config.bands.zeroAllowance;
        var zeroAllowanceTaxable = Math.max(Math.min(income, zeroAllowanceBand.end) - zeroAllowanceBand.start, 0);
        var zeroAllowanceTax = zeroAllowanceTaxable * (zeroAllowanceBand.rate / 100);
        var zeroAllowanceResult = {
            rate: zeroAllowanceBand.rate,
            taxable: zeroAllowanceTaxable,
            tax: zeroAllowanceTax
        };
        higherResult.tax += taperedTax + zeroAllowanceTax;
        higherResult.taxable += taperedTaxable + zeroAllowanceTaxable;
        var additionalBand = this.config.bands.additional;
        var additionalTaxable = Math.max(income - additionalBand.start, 0);
        var additionalTax = additionalTaxable * (additionalBand.rate / 100);
        var additionalResult = {
            rate: additionalBand.rate,
            taxable: additionalTaxable,
            tax: additionalTax
        };
        var total = basicTax + higherTax + taperedTax + zeroAllowanceTax + additionalTax;
        return {
            bands: {
                basic: basicResult,
                higher: higherResult,
                additional: additionalResult
            },
            total: total
        };
    }
};
CurrentTaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CurrentTaxService);



/***/ }),

/***/ "./src/app/cycler/cycler.component.scss":
/*!**********************************************!*\
  !*** ./src/app/cycler/cycler.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N5Y2xlci9jeWNsZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cycler/cycler.component.ts":
/*!********************************************!*\
  !*** ./src/app/cycler/cycler.component.ts ***!
  \********************************************/
/*! exports provided: CyclerItemComponent, CyclerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclerItemComponent", function() { return CyclerItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclerComponent", function() { return CyclerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CyclerItemComponent = class CyclerItemComponent {
    constructor() {
        this.visible = true;
    }
};
CyclerItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "cycler-item",
        template: `<ng-content *ngIf="visible"></ng-content>`
    })
], CyclerItemComponent);

let CyclerComponent = class CyclerComponent {
    constructor() {
        this._index = -1;
        this.interval = 5000;
        this.auto = true;
    }
    get index() {
        return this._index;
    }
    onClick() {
        this.next();
        this.startTimer();
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.children.changes.subscribe(() => this.onItemsUpdate());
        this.onItemsUpdate();
    }
    onItemsUpdate() {
        this.stopTimer();
        this._index = -1;
        if (this.children.length == 0)
            return;
        if (this.children.length == 1) {
            this.children.first.visible = true;
            return;
        }
        this.startTimer();
        this.next();
    }
    setIndex(index) {
        if (index >= this.children.length)
            index = this.children.length - 1;
        this.children.forEach((item, i, arr) => {
            item.visible = i == index;
        });
        this._index = index;
    }
    next() {
        let nextIndex = this._index + 1;
        if (nextIndex >= this.children.length)
            nextIndex = 0;
        this.setIndex(nextIndex);
    }
    startTimer() {
        if (!this.auto)
            return;
        this.stopTimer();
        this.timer = setInterval(() => this.next(), this.interval);
    }
    stopTimer() {
        clearInterval(this.timer);
    }
    ngOnDestroy() {
        if (this.childrenSub)
            this.childrenSub.unsubscribe();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CyclerComponent.prototype, "interval", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CyclerComponent.prototype, "auto", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CyclerItemComponent),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], CyclerComponent.prototype, "children", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CyclerComponent.prototype, "onClick", null);
CyclerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cycler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cycler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cycler/cycler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cycler.component.scss */ "./src/app/cycler/cycler.component.scss")).default]
    })
], CyclerComponent);



/***/ }),

/***/ "./src/app/map-values.pipe.ts":
/*!************************************!*\
  !*** ./src/app/map-values.pipe.ts ***!
  \************************************/
/*! exports provided: MapValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapValuesPipe", function() { return MapValuesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapValuesPipe = class MapValuesPipe {
    transform(value, args = null) {
        return Object.keys(value).map(key => ({
            key: key,
            value: value[key]
        }));
    }
};
MapValuesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mapValues'
    })
], MapValuesPipe);



/***/ }),

/***/ "./src/app/national-insurance.service.ts":
/*!***********************************************!*\
  !*** ./src/app/national-insurance.service.ts ***!
  \***********************************************/
/*! exports provided: NationalInsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalInsuranceService", function() { return NationalInsuranceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NationalInsuranceService = class NationalInsuranceService {
    calculate(income, bands) {
        let weeklyIncome = income / 52;
        let weeklyTotal = 0;
        for (let name in bands) {
            let band = bands[name];
            let deductableAmount = 0;
            if (weeklyIncome > band.start) {
                if (band.end)
                    deductableAmount = Math.max(Math.min(weeklyIncome, band.end) - band.start, 0);
                else
                    deductableAmount = Math.max(weeklyIncome - band.start, 0);
            }
            weeklyTotal += (deductableAmount / 100) * band.rate;
        }
        let annual = weeklyTotal * 52;
        return Math.round(annual * 100) / 100;
    }
};
NationalInsuranceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NationalInsuranceService);



/***/ }),

/***/ "./src/app/proposed-tax.service.ts":
/*!*****************************************!*\
  !*** ./src/app/proposed-tax.service.ts ***!
  \*****************************************/
/*! exports provided: ProposedTaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposedTaxService", function() { return ProposedTaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
/* harmony import */ var _tax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax.service */ "./src/app/tax.service.ts");




let ProposedTaxService = class ProposedTaxService extends _tax_service__WEBPACK_IMPORTED_MODULE_3__["TaxService"] {
    get config() {
        return _configuration__WEBPACK_IMPORTED_MODULE_2__["PROPOSED_TAX"];
    }
    calculateTax(income) {
        var basicBand = this.config.bands.basic;
        var freeBand = {
            start: 0,
            end: basicBand.start,
            rate: 0
        };
        var freeResult = {
            rate: 0,
            taxable: Math.max(Math.min(income, freeBand.end) - freeBand.start, 0),
            tax: 0
        };
        var basicTaxable = Math.max(Math.min(income, basicBand.end) - basicBand.start, 0);
        var basicTax = basicTaxable * (basicBand.rate / 100);
        var basicResult = {
            rate: basicBand.rate,
            taxable: basicTaxable,
            tax: basicTax
        };
        var higherBand = this.config.bands.higher;
        var higherTaxable = Math.max(Math.min(income, higherBand.end) - higherBand.start, 0);
        var higherTax = higherTaxable * (higherBand.rate / 100);
        var higherResult = {
            rate: higherBand.rate,
            taxable: higherTaxable,
            tax: higherTax
        };
        var additionalBand = this.config.bands.additional;
        var additionalTaxable = Math.max(Math.min(income, additionalBand.end) - additionalBand.start, 0);
        var additionalTax = additionalTaxable * (additionalBand.rate / 100);
        var additionalResult = {
            rate: additionalBand.rate,
            taxable: additionalTaxable,
            tax: additionalTax
        };
        var taperedBand = this.config.bands.tapered;
        var taperedTaxable = Math.max(Math.min(income, taperedBand.end) - taperedBand.start, 0);
        var taperedTax = taperedTaxable * 1.5 * (taperedBand.rate / 100);
        var taperedResult = {
            rate: taperedBand.rate,
            taxable: taperedTaxable,
            tax: taperedTax
        };
        additionalResult.tax += taperedTax;
        additionalResult.taxable += taperedTaxable;
        var topBand = this.config.bands.top;
        var topTaxable = Math.max(income - topBand.start, 0);
        var topTax = topTaxable * (topBand.rate / 100);
        var topResult = {
            rate: topBand.rate,
            taxable: topTaxable,
            tax: topTax
        };
        var total = basicTax + higherTax + taperedTax + additionalTax + topTax;
        return {
            bands: {
                basic: basicResult,
                higher: higherResult,
                additional: additionalResult,
                top: topResult
            },
            total: total
        };
    }
};
ProposedTaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProposedTaxService);



/***/ }),

/***/ "./src/app/tax.service.ts":
/*!********************************!*\
  !*** ./src/app/tax.service.ts ***!
  \********************************/
/*! exports provided: TaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxService", function() { return TaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TaxService {
    calculate(income) {
        let allowance = this.getAllowance(income);
        let taxable = this.getTaxable(income, allowance);
        let tax = this.calculateTax(income);
        let net = income - tax.total;
        return {
            allowance: allowance,
            taxable: taxable,
            bands: tax.bands,
            tax: tax.total,
            net: net
        };
    }
    getAllowance(income) {
        var taperedAllowanceDeduction = Math.max((income - this.config.taperedAllowanceThreshold) / 2, 0);
        return Math.max(this.config.allowance - taperedAllowanceDeduction, 0);
    }
    getTaxable(income, allowance) {
        return Math.max(income - allowance, 0);
    }
}


/***/ }),

/***/ "./src/app/wcipf.service.ts":
/*!**********************************!*\
  !*** ./src/app/wcipf.service.ts ***!
  \**********************************/
/*! exports provided: WcipfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WcipfService", function() { return WcipfService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");



let WcipfService = class WcipfService {
    get(funds) {
        return _configuration__WEBPACK_IMPORTED_MODULE_2__["WCIPF_DATA"].filter(item => Math.floor(funds / item.cost) > 0).map(item => ({
            name: item.name,
            plural: item.plural,
            cost: item.cost,
            icon: item.icon,
            total: Math.floor(funds / item.cost)
        }));
    }
};
WcipfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WcipfService);



/***/ }),

/***/ "./src/app/welcome-dialog/welcome-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/welcome-dialog/welcome-dialog.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  max-width: 500px; }\n\n.buttons {\n  text-align: center; }\n\nh2 {\n  margin: -24px -24px 0 -24px;\n  padding: 15px 24px;\n  background-color: #E4003B;\n  color: #fff;\n  text-transform: uppercase; }\n\n.footer {\n  text-align: center;\n  line-height: 40px;\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 10px;\n  padding-top: 5px;\n  border-top: 1px solid #ccc; }\n\n.footer a {\n    color: #666;\n    text-decoration: none; }\n\n.footer .c4l {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 5px;\n    background-image: url(https://www.codersforlabour.com/assets/logo-full2.png);\n    width: 25px;\n    height: 30px;\n    background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc2tpdGNoL1JlcG9zL3RheC1jYWxjdWxhdG9yL3NyYy9hcHAvd2VsY29tZS1kaWFsb2cvd2VsY29tZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvY2hyaXNraXRjaC9SZXBvcy90YXgtY2FsY3VsYXRvci9zcmMvX2NvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix5QkNiYTtFRGNiLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwQkFBMEIsRUFBQTs7QUFQOUI7SUFVUSxXQUFXO0lBQ1gscUJBQXFCLEVBQUE7O0FBWDdCO0lBZVEscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNEVBQTRFO0lBQzVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAtMjRweCAtMjRweCAwIC0yNHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jNGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5jb2RlcnNmb3JsYWJvdXIuY29tL2Fzc2V0cy9sb2dvLWZ1bGwyLnBuZyk7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeTogI0U0MDAzQjtcclxuJHNlY29uZGFyeTogI0M1MDAzNztcclxuJHRlcnRpYXJ5OiAjNmYwMDE1O1xyXG4kcHJpbWFyeS1mb250OiAnT3BlbiBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsiXX0= */");

/***/ }),

/***/ "./src/app/welcome-dialog/welcome-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/welcome-dialog/welcome-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: WelcomeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDialogComponent", function() { return WelcomeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let WelcomeDialogComponent = class WelcomeDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
WelcomeDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
WelcomeDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-dialog/welcome-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome-dialog.component.scss */ "./src/app/welcome-dialog/welcome-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], WelcomeDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chriskitch/Repos/tax-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map