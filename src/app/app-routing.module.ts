import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './widgets/product-details/product-details.component';
import { DetailsComponent } from './main/details/details.component';
import { WelcomeComponent } from './main/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'product-details', component: DetailsComponent },
  { path: 'home', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
