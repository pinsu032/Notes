"use strict";
/// <reference path="../contracts/ProductContracts.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectA = void 0;
var ProjectA;
(function (ProjectA) {
    var Template;
    (function (Template) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
                this.name = "";
                this.price = 0;
                this.qty = 0;
            }
            return ProductTemplate;
        }());
        Template.ProductTemplate = ProductTemplate;
    })(Template = ProjectA.Template || (ProjectA.Template = {}));
})(ProjectA || (exports.ProjectA = ProjectA = {}));
