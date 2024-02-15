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
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = "";
        this.lastName = "";
        this.designation = "";
    }
    Employee.prototype.print = function () {
        document.write("".concat(this.firstName, " ").concat(this.lastName, "  ").concat(this.designation));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Sanjay";
        _this.lastName = "kumar";
        _this.designation = "Developer";
        _this.role = "Developer Role : Build,Debug ,Test";
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.role);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Raj";
        _this.lastName = "kumar";
        _this.designation = "Admin";
        _this.role = "Admin Role :Authorization";
        return _this;
    }
    Admin.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.role);
    };
    return Admin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Pinsu";
        _this.lastName = "Singh";
        _this.designation = "Manager";
        _this.role = "Developer Role :Approvals";
        return _this;
    }
    Manager.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.role);
    };
    return Manager;
}(Employee));
var employees = new Array(new Developer(), new Admin(), new Manager());
