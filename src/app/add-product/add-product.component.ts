import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    // this.productService.fetchBooks().subscribe(data => this.books = data);
  }

  add(title, author, price) {

    const book = {
      'title': title,
      'author': author,
      'price': price
    };
    this.productService.addBook(book);

  }

}
