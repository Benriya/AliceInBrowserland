import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../service/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Browserland';
  logoArray;
  logo;
  gifArray = [];
  pieces = 7;
  arr = Array;

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.gifArray = this.productListService.getGifs();
    this.logoArray = this.productListService.getLogos();
    this.logoChange();
  }

  gifChange() {
    return this.gifArray[Math.floor(Math.random() * 11)];
  }
  logoChange() {
    this.logo = this.logoArray[Math.floor(Math.random() * 6)];
  }
}
