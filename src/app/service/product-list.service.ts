import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  gifArray = [
    '../../assets/gifs/rainbow1.gif',
    '../../assets/gifs/rainbow2.gif',
    '../../assets/gifs/rainbow3.gif',
    '../../assets/gifs/rainbow4.gif',
    '../../assets/gifs/rainbow5.gif',
    '../../assets/gifs/rainbow6.gif',
    '../../assets/gifs/rainbow7.gif',
    '../../assets/gifs/rainbow8.gif',
    '../../assets/gifs/rainbow9.gif',
    '../../assets/gifs/rainbow10.gif',
    '../../assets/gifs/rainbow11.gif',
  ];

  logoArray = [
    '../../../assets/logoPics/logo1.png',
    '../../../assets/logoPics/logo2.jpg',
    '../../../assets/logoPics/logo3.jpg',
    '../../../assets/logoPics/logo4.jpg',
    '../../../assets/logoPics/logo5.png',
    '../../../assets/logoPics/logo6.jpg'
  ];

  buttonClass = [
    'btn btn-primary',
    'btn btn-secondary',
    'btn btn-warning',
    'btn btn-success',
    'btn btn-danger',
    'btn btn-info',
    'btn btn-light',
    'btn btn-dark',
    'btn btn-link'
  ];

  constructor(private httpClient: HttpClient) { }

  getGifs() {
    return this.gifArray;
  }

  getLogos() {
    return this.logoArray;
  }

  getButtonClasses() {
    return this.buttonClass;
  }

  onBuyProduct(postData: {name: string, price: number}) {
    this.httpClient.post('https://aliceinbrowserland.firebaseio.com/buylist.json', postData).subscribe(data => {
      console.log(data);
    });
  }

  getBuyList(array: Array<Product>) {
    this.httpClient.get('https://aliceinbrowserland.firebaseio.com/buylist.json').pipe(map(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          array.push(data[key]);
        }
      }
      return array;
    })).subscribe();
  }

  onEmptyCart() {
    return this.httpClient.delete('https://aliceinbrowserland.firebaseio.com/buylist.json');
  }

  getProducts(array: Array<Product>) {
    this.httpClient.get('https://aliceinbrowserland.firebaseio.com/productList.json').pipe(map(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          array.push(data[key]);
        }
      }
      return array;
    })).subscribe();
  }
}
