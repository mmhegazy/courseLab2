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
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of products';
        this.product = {
            id: 1,
            name: 'cover',
            description: ' Car cover ',
            price: 122,
            condition: Condition.New,
            category: 'Cars',
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>{{product.name}} Product details </h2>\n\t<div><label style=\"color:blue;\">id</label>{{product.id}}</div>\n    <h2><label>description</label>{{product.description}} </h2>\n    <h2><label>price</label>{{product.price}} </h2>\n    <h2><label>condition</label>{{product.condition}} </h2>\n    <h2><label>category</label>{{product.category}} </h2>\n    \n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"product.name\" placeholder=\"name\">\n    </div>\n\t<div>\n      <label>description: </label>\n      <input [(ngModel)]=\"product.description\" placeholder=\"description\">\n    </div>\n\t<div>\n      <label>price: </label>\n      <input [(ngModel)]=\"product.price\" placeholder=\"price\">\n    </div>\n\t<div>\n      <label>condition: </label>\n      <input [(ngModel)]=\"product.condition\" placeholder=\"condition\">\n    </div>\n\t<div>\n      <label>category: </label>\n      <input [(ngModel)]=\"product.category\" placeholder=\"category\">\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map