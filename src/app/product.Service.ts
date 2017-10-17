import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './MockProduct';

@Injectable()
export class ProductService {


  
  getProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS);
}
}