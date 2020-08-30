import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { modelStoreProduct } from '../../models/storeProduct/storeProduct'

@Component({
  selector: 'app-store-gallery',
  templateUrl: './store-gallery.component.html',
  styleUrls: ['./store-gallery.component.css'],
  providers: [FirestoreService]
})
export class StoreGalleryComponent implements OnInit {
  public StoreProducts: modelStoreProduct[];
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getAllStoreProduct().subscribe((StoreProductsSnapshot) => {
      this.StoreProducts = [];
      StoreProductsSnapshot.forEach((StoreProductData: any) => {
        console.log("StoreProductData.payload.doc.data(): ", StoreProductData.payload.doc.data());
        this.StoreProducts.push({
          item_available: StoreProductData.payload.doc.data().item_available,
          item_img: StoreProductData.payload.doc.data().item_img,
          item_mark: StoreProductData.payload.doc.data().item_mark,
          item_model: StoreProductData.payload.doc.data().item_model,
          item_price: StoreProductData.payload.doc.data().item_price,
          item_sku: StoreProductData.payload.doc.data().item_sku,
        });
      });
    });
    
  }

}
