import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Input() editProductData;
  private productName;
  private productPrice;

  constructor() { }

  ngOnInit() {
    console.log(this.editProductData);
    this.productName = this.editProductData.name;
    this.productPrice = this.editProductData.price;
  }

  editProduct() {
      }
}
