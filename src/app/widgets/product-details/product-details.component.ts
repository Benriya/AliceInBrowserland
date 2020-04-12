import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Output() buy = new EventEmitter<any>();
  @Input() selectedProduct;

  constructor() { }

  ngOnInit(): void {}

  onBuy(wish) {
    console.log(wish);
    this.buy.emit(wish);
  }

}
