export enum Condition {New, Used, Discontinued};
export class Product {
  id: number;
  name: string; 
  description: string; 
  price: number; 
  condition: Condition;
  category : string; 
}