import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownSelectComponent } from './widgets/drop-down-select/drop-down-select.component';
import { LoginComponent } from './widgets/login/login.component';
import { ProductListComponent } from './widgets/product-list/product-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BuyListComponent } from './widgets/buy-list/buy-list.component';
import { ProductDetailsComponent } from './widgets/product-details/product-details.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { DetailsComponent } from './main/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownSelectComponent,
    LoginComponent,
    ProductListComponent,
    BuyListComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    DetailsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
