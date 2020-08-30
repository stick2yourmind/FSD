import { Component, OnInit, Input } from '@angular/core';
import { modelStoreProduct } from '../../models/storeProduct/storeProduct'
import { Router } from '@angular/router';


@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {
  @Input() StoreProduct: modelStoreProduct;
  public buttonMSG: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clickCompra(): void {
    this.buttonMSG = "Muchas gracias por su compra!!"
    console.log("[StoreProductComponent] buttonMSG",  this.buttonMSG);  
  }

  clickDetalle(item_document_id): void {
    this.buttonMSG = "Ver mas detalles!!"
    console.log("[StoreProductComponent] item_document_id: ", item_document_id);      
    this.router.navigateByUrl("/detalle/" + item_document_id);
  }
}
