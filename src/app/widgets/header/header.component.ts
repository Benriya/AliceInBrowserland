import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductListService } from '../../service/product-list.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import {Router} from '@angular/router';
import {AuthData} from '../../Models/auth-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthService],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Browserland';
  logoArray;
  logo;
  gifArray = [];
  pieces = 6;
  arr = Array;
  isAuth;

  constructor(private productListService: ProductListService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    window.location.href.includes('/home') ? this.isAuth = true : this.isAuth = false;
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

  logout() {
    this.authService.logout();
  }
}
