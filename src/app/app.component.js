"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 0] = "New";
    Condition[Condition["Used"] = 1] = "Used";
    Condition[Condition["Discontinued"] = 2] = "Discontinued";
})(Condition = exports.Condition || (exports.Condition = {}));
;
var PRODUCTS = [
    { id: 11, name: 'Apple iphone 4', description: 'Iphone 4 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 12, name: 'Apple  iphone 4 +', description: 'Iphone4+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 13, name: 'Apple  iphone 5', description: 'Iphone5 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 14, name: 'Apple  iphone 5c', description: 'Iphone5c from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 15, name: 'Apple  iphone 5s', description: 'Iphone5s from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 16, name: 'Apple  iphone 6', description: 'Iphone6 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 17, name: 'Apple  iphone 6S', description: 'Iphone6S from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 18, name: 'Apple  iphone 6s+', description: 'Iphone6S+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 19, name: 'Apple  iphone 7', description: 'Iphone7 from Apple ', price: 100, condition: Condition.New, category: 'Phones' },
    { id: 20, name: 'Apple  iphone 7 +', description: 'Iphone7+ from Apple ', price: 100, condition: Condition.New, category: 'Phones' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of products';
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .products {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .products li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .products li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .products li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .products .text {\n    position: relative;\n    top: -3px;\n  }\n  .products .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
        template: "\n\t{{title}}\n\t<ul class=\"products\">\n\t<li *ngFor=\"let product of products\" [class.selected]=\"product === selectedProduct\" (click)=\"onSelect(product)\">\n\t<span class=\"badge\">{{product.id}}</span> {{product.name}}\n\t</li>\n\t</ul>\n\t\n\t<product-detail [product]=\"selectedProduct\"></product-detail>\n\t"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map