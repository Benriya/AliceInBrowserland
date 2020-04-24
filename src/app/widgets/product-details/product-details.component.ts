import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductListService} from '../../service/product-list.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  providers: [ProductListService],
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() selectedProduct;
  gifArray = [];
  liked = false;
  pieces = 4;
  arr = Array;
  buttonClassArray = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.buttonClassArray = this.productListService.getButtonClasses();
    this.gifArray = this.productListService.getGifs();
    this.gifChange();
  }

  wishForSuccess(wish) {
    this.productListService.onBuyProduct(wish);
    this.gifChange();
  }

  starAppear() {
    this.liked = !this.liked;
    this.gifChange();
  }

  gifChange() {
    return this.gifArray[Math.floor(Math.random() * 11)];
  }

  buttonClassCreate() {
    return this.buttonClassArray[Math.floor(Math.random() * 8)];
  }

}
