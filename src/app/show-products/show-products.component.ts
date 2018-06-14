import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  private products;
  flag = false;

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  delete(id) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  edit(product) {
    console.log(product);
    this.flag = true;
  }

}
