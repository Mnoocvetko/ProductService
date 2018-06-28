import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit(): void { }

  getBooks() {
    return this.productService.getBooks();
  }

  delete(title) {
    this.productService.deleteBook(title);

  }

}
