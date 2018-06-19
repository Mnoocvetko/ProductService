import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../books';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private books: any[];
  // tslint:disable-next-line:max-line-length
  booksURL = 'https://raw.githubusercontent.com/ProgressBG-WWW-Courses/BKA-Angular-Code/RequestsAndObsevables/RequestsAndObsevables/src/assets/data/books.json';
  constructor(private http: HttpClient) {
    this.fetchBooks().subscribe(data => this.books = data);
  }

  getBooks() {
    console.log(this.books);
    return this.books.sort(this.sortBooks);
  }

  fetchBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksURL);
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(title) {
    this.books = this.books.filter(obj => obj.title !== title);
  }

  editProduct(id) {
  }

  sortBooks(x, y) {
    if (x.price > y.price) {
      return 1;
    } else if (x.price < y.price) {
      return -1;
    } else {
      return 0;
    }
  }
}
