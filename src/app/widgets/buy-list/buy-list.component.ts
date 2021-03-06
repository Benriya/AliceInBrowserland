import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../service/product-list.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss']
})
export class BuyListComponent implements OnInit {
  buyList = [];
  totalPrice = 0;
  buttonClassArray = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.buttonClassArray = this.productListService.getButtonClasses();
    this.productListService.getBuyList(this.buyList);
  }

  emptyCart() {
    this.productListService.onEmptyCart().subscribe(() => {
      this.buyList = [];
      window.location.reload();
    });
  }

  calculatePrice() {
    let calculate = 0;
    for (const item of this.buyList) {
      console.log(item.price);
      calculate += item.price;
    }
    this.totalPrice = calculate;
  }

  buttonClassCreate() {
    return this.buttonClassArray[Math.floor(Math.random() * 8)];
  }

  reload() {
    window.location.reload();
  }

}
