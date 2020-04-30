import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductListService } from '../../service/product-list.service';
import { Router } from '@angular/router';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  providers: [ProductListService],
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  page;
  eighteen = false;
  searchOption: string;
  filteredPostsList;
  pages = ['1', '2', '3', '4', '5'];
  buttonClassArray = [];
  buyList = [];

  constructor(private productListService: ProductListService) {  }

  ngOnInit() {
    this.buttonClassArray = this.productListService.getButtonClasses();
    this.productListService.getProducts(this.products);
    this.productListService.getBuyList(this.buyList);
    this.filteredPostsList = this.products;
    this.page = 1;
  }

  older() {
    this.eighteen = !this.eighteen;
  }

  switchPage(pageNumber: string) {
    this.page = pageNumber;
  }

  nextPage() {
    this.page += 1;
  }

  prevPage() {
    this.page -= 1;
  }

  buyProduct(wish) {
    this.productListService.onBuyProduct(wish);
  }

  filteredListOptions() {
    this.filteredPostsList = [];
    for (const post of this.products) {
        if (post.name.toLowerCase().includes(this.searchOption.toLowerCase())) {
          this.filteredPostsList.push(post);
        }
    }
    return this.filteredPostsList;
  }

  resetSearch() {
    this.filteredPostsList = this.products;
    this.searchOption = '';
  }

  buttonClassCreate() {
    return this.buttonClassArray[Math.floor(Math.random() * 8)];
  }

  rainbow() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
