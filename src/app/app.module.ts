import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './widgets/product-list/product-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BuyListComponent } from './widgets/buy-list/buy-list.component';
import { ProductDetailsComponent } from './widgets/product-details/product-details.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { DetailsComponent } from './main/details/details.component';
import { HeaderComponent } from './widgets/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BuyListComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    DetailsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
