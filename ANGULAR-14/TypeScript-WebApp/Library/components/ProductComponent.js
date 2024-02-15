"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComponent = void 0;
var ProductTemplates_1 = require("../templates/ProductTemplates");
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Samsung TV";
        _this.price = 34300.33;
        _this.qty = 2;
        _this.categoryName = "Electronics";
        return _this;
    }
    ProductComponent.prototype.total = function () {
        return this.qty * this.price;
    };
    ProductComponent.prototype.print = function () {
        console.log("Name=".concat((this, this.name), "\nPrice=").concat(this.price, "\nqty=").concat(this.qty, "\nCatName=").concat(this.categoryName, "\nTotal=").concat(this.total()));
    };
    return ProductComponent;
}(ProductTemplates_1.ProductTemplate));
exports.ProductComponent = ProductComponent;
