import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}


  public addStoreProduct(data: object) {
    return this.firestore.collection('StoreProduct').add(data);
  }


  public getStoreProduct(documentId: string) {
    /*return this.firestore.collection('StoreProduct').doc(documentId).snapshotChanges();*/
    return this.firestore.collection('StoreProduct').doc(documentId).get();
  }

  public getAllStoreProduct() {
    return this.firestore.collection('StoreProduct').snapshotChanges();
  }


  public updateStoreProduct(documentId: string, data: object) {
    return this.firestore.collection('StoreProduct').doc(documentId).set(data);
  }


  public deleteStoreProduct(documentId: string) {
    return this.firestore.collection('StoreProduct').doc(documentId).delete();
  }
}
