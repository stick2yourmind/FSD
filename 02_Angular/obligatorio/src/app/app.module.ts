import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './Components/main-header/main-header.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { StoreGalleryComponent } from './Components/store-gallery/store-gallery.component';
import { StoreProductComponent } from './Components/store-product/store-product.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { StoreProductDetailedComponent } from './Components/store-product-detailed/store-product-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    LoginComponent,
    RegisterComponent,
    StoreGalleryComponent,
    StoreProductComponent,
    StoreProductDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
