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
var product_1 = require("./product");
var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
    }
    return ProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductDetailComponent.prototype, "product", void 0);
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        template: "\n    <div *ngIf=\"product\">\n\t\t  <h2>{{product.name}} details!</h2>\n\t\t  <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"product.name\" placeholder=\"name\">\n    </div>\n\t<div>\n      <label>description: </label>\n      <input [(ngModel)]=\"product.description\" placeholder=\"description\">\n    </div>\n\t<div>\n      <label>price: </label>\n      <input [(ngModel)]=\"product.price\" placeholder=\"price\">\n    </div>\n\t<div>\n      <label>condition: </label>\n      <input [(ngModel)]=\"product.condition\" placeholder=\"condition\">\n    </div>\n\t<div>\n      <label>category: </label>\n      <input [(ngModel)]=\"product.category\" placeholder=\"category\">\n    </div>\n\t</div>\n  "
    })
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map