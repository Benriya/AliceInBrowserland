import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products: Array<object> = [
    { name: 'Lamp', price: 10, imgSrc: '../../assets/productPics/lamp.jpg', description: 'este azért láss is' },
    { name: 'Mouse', price: 8, imgSrc: '../../assets/productPics/mouse.jpg', description: 'számítógépezni meg képzelettel akarsz, mi?' },
    { name: 'Mug', price: 70, imgSrc: '../../assets/productPics/mug.jpg', description: 'legyen miből innod'  },
    { name: 'Collar', price: 130, imgSrc: '../../assets/productPics/collar.jpg', description: 'háziállatnak tökéletes' },
    { name: 'PlayStation', price: 10, imgSrc: '../../assets/productPics/playstation.jpg', description: 'karantén kibíró eszköz, DELUXE' },
    { name: 'House', price: 93000, imgSrc: '../../assets/productPics/house.jpg', description: 'ház lélegzetelállító kilátással' },
    { name: 'Fence', price: 1000, imgSrc: '../../assets/productPics/fence.jpg', description: 'Nagy Miyagi karate tanonc kerítés' },
  ];

  constructor() { }

  getProducts() {
    return of(this.products);
  }
}
