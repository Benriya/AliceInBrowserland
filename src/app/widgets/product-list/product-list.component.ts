import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductListService } from '../../service/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() product = new EventEmitter();
  //@Output() productPrice = new EventEmitter<number>();
  products: Array<object>;

  constructor(private fightersService: ProductListService) {  }

  ngOnInit() {
    this.fightersService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  onClick(wish: any) {
    this.product.emit(wish);
    //this.productPrice.emit(price);
    console.log(wish);
  }

}
