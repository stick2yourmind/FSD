import { Component, OnInit, Input } from '@angular/core';
import { modelStoreProduct } from '../../models/storeProduct/storeProduct'

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {
  @Input() StoreProduct: modelStoreProduct;
  public buttonMSG: string;
  constructor() { }

  ngOnInit(): void {
  }

  clickCompra(): void {
    this.buttonMSG = "Muchas gracias por su compra!!"
    console.log("buttonMSG",  this.buttonMSG);  
  }

  clickDetalle(): void {
    this.buttonMSG = "Ver mas detalles!!"
  }
}
