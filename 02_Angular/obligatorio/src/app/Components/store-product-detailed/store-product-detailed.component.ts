import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { modelStoreProduct } from '../../models/storeProduct/storeProduct'

@Component({
  selector: 'app-store-product-detailed',
  templateUrl: './store-product-detailed.component.html',
  styleUrls: ['./store-product-detailed.component.css']
})
export class StoreProductDetailedComponent implements OnInit {
  public buttonMSG: string;
  public StoreProduct: modelStoreProduct;
  private _id: string;
  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    // Getting id document from HTTP
    this.route.params.subscribe(parametroHTTP => {
      this._id = parametroHTTP.id;
      console.log("[StoreProductDetailedComponent] _id: ", this._id );
    });
    // Getting data product from an id

    /*
    this.firestoreService.getStoreProduct(this._id).subscribe((StoreProductsSnapshot) => {
        console.log("[StoreProductDetailedComponent] StoreProductsSnapshot: ", StoreProductsSnapshot);
        this.StoreProduct = {
          item_document_id : StoreProductsSnapshot.payload.id,
          item_available : StoreProductsSnapshot.payload.data()['item_available'],
          item_img : StoreProductsSnapshot.payload.data()['item_img'],
          item_mark : StoreProductsSnapshot.payload.data()['item_mark'],
          item_model : StoreProductsSnapshot.payload.data()['item_model'],
          item_price : StoreProductsSnapshot.payload.data()['item_price'],
          item_sku : StoreProductsSnapshot.payload.data()['item_sku']
        };
        console.log("[StoreProductDetailedComponent] StoreProduct: ", this.StoreProduct);
    });
    */
   this.firestoreService.getStoreProduct(this._id).subscribe((StoreProductsSnapshot) => {
    console.log("[StoreProductDetailedComponent] StoreProductsSnapshot: ", StoreProductsSnapshot);
    this.StoreProduct = {
      item_document_id : StoreProductsSnapshot.id,
      item_available : StoreProductsSnapshot.data().item_available,
      item_img : StoreProductsSnapshot.data().item_img,
      item_mark : StoreProductsSnapshot.data().item_mark,
      item_model : StoreProductsSnapshot.data().item_model,
      item_price : StoreProductsSnapshot.data().item_price,
      item_sku : StoreProductsSnapshot.data().item_sku
    };
    console.log("[StoreProductDetailedComponent] StoreProduct: ", this.StoreProduct);
  });
}

  clickCompra(): void {
    this.buttonMSG = "Muchas gracias por su compra!!"
    console.log("[StoreProductDetailedComponent] buttonMSG",  this.buttonMSG);  
  }
}
