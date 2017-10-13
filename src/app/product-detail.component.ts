import { Component, Input  } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'product-detail',
   template: `
    <div *ngIf="product">
		  <h2>{{product.name}} details!</h2>
		  <div>
      <label>name: </label>
      <input [(ngModel)]="product.name" placeholder="name">
    </div>
	<div>
      <label>description: </label>
      <input [(ngModel)]="product.description" placeholder="description">
    </div>
	<div>
      <label>price: </label>
      <input [(ngModel)]="product.price" placeholder="price">
    </div>
	<div>
      <label>condition: </label>
      <input [(ngModel)]="product.condition" placeholder="condition">
    </div>
	<div>
      <label>category: </label>
      <input [(ngModel)]="product.category" placeholder="category">
    </div>
	</div>
  `
})
export class ProductDetailComponent {
	@Input()  product: Product;
}