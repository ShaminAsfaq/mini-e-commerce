import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Shirt } from '../models/shirt.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  getShirts(): Observable<Shirt[]> {
    const shirtsCollection = collection(this.firestore, 'shirts') as CollectionReference<Shirt>;
    return collectionData(shirtsCollection, { idField: 'id' });
  }

  getProducts(): Observable<Product[]> {
    const productsCollection = collection(this.firestore, 'products');
    // Assuming your Firestore collection is named 'products' and contains documents that match the Product interface
    return collectionData(productsCollection) as Observable<Product[]>;
  }
} 