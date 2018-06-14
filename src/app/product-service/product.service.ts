import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: any[] = [ {
    'id': 1,
    'name': 'Orange',
    'price': 2.55
  },
  {
    'id': 2,
    'name': 'Pear',
    'price': 3.25
  },
  {
    'id': 3,
    'name': 'Apple',
    'price': 1.75
  } ];

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  deleteProduct(id) {
    this.products = this.products.filter(obj => obj.id !== id);
  }

  editProduct(id) {
      }

}
