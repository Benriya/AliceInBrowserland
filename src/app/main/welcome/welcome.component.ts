import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'Browserland';
  productName = [];
  productPrice = [];
  totalPrice = 0;

  /*onSelectedName(name: string) {
    this.productName.push(name);
  }*/
  onSelected(chosen) {
    this.productName.push(chosen.name);
    this.productPrice.push(chosen.price);
    this.totalPrice += chosen.price;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
