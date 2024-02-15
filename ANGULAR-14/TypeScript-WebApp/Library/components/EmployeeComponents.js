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
var EmployeeTemplate_1 = require("../templates/EmployeeTemplate");
var EmployeeComponent = /** @class */ (function (_super) {
    __extends(EmployeeComponent, _super);
    function EmployeeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Raj";
        _this.lastName = "Kumar";
        _this.desg = "manager";
        return _this;
    }
    EmployeeComponent.prototype.print = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.desg));
    };
    return EmployeeComponent;
}(EmployeeTemplate_1.EmployeeTemplate));
exports.default = EmployeeComponent;
