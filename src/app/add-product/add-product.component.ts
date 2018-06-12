import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private products: any[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  add(name, price) {
    console.log('name: ' + name);
    console.log('price: ' + price);
    const product = {
      'id': this.products.length + 1,
      'name': name,
      'price': price
    };
    this.productService.addProduct(product);
  }

}
