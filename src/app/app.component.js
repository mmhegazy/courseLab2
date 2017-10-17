"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_Service_1 = require("./product.Service");
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 0] = "New";
    Condition[Condition["Used"] = 1] = "Used";
    Condition[Condition["Discontinued"] = 2] = "Discontinued";
})(Condition = exports.Condition || (exports.Condition = {}));
;
var AppComponent = (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.title = 'Tour of products';
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        providers: [product_Service_1.ProductService],
        selector: 'my-app',
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .products {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .products li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .products li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .products li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .products .text {\n    position: relative;\n    top: -3px;\n  }\n  .products .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
        template: "\n\t{{title}}\n\t<ul class=\"products\">\n\t<li *ngFor=\"let product of products\" [class.selected]=\"product === selectedProduct\" (click)=\"onSelect(product)\">\n\t<span class=\"badge\">{{product.id}}</span> {{product.name}}\n\t</li>\n\t</ul>\n\t\n\t<product-detail [product]=\"selectedProduct\"></product-detail>\n\t"
    }),
    __metadata("design:paramtypes", [product_Service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map