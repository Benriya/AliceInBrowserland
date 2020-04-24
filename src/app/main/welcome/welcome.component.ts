import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../service/product-list.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
  }

  /*superwise() {
    this.productListService.selectAll();
  }*/

}
