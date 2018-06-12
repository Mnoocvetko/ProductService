import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  private products;


  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  delete(id) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}
