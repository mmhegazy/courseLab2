import { Component } from '@angular/core';
export enum Condition {New, Used, Discontinued};
export class Product {
  id: number;
  name: string; 
  description: string; 
  price: number; 
  condition: Condition;
  category : string; 
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{product.name}} Product details </h2>
	<div><label style="color:blue;">id</label>{{product.id}}</div>
    <h2><label>description</label>{{product.description}} </h2>
    <h2><label>price</label>{{product.price}} </h2>
    <h2><label>condition</label>{{product.condition}} </h2>
    <h2><label>category</label>{{product.category}} </h2>
    
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
    `
})
export class AppComponent {
  title = 'Tour of products';
  product: Product = {
    id: 1,
    name: 'cover',
	 description: ' Car cover ', 
	price: 122, 
	condition: Condition.New,
	category : 'Cars', 
  };
}
