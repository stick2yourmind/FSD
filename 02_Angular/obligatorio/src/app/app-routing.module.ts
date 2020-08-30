import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProductDetailedComponent } from './Components/store-product-detailed/store-product-detailed.component'
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { StoreGalleryComponent } from './Components/store-gallery/store-gallery.component';

const routes: Routes = [
  {path:"", component: StoreGalleryComponent},
  {path:"home", component: StoreGalleryComponent},
  {path:"index", component: StoreGalleryComponent},
  {path:"detalle/:id", component: StoreProductDetailedComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

