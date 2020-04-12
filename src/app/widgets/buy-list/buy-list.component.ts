import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss']
})
export class BuyListComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
  @Input() totalPrice;

  constructor() { }

  ngOnInit(): void {  }

}
