import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference, query, orderBy, limit, startAfter, DocumentSnapshot, getDocs, QueryDocumentSnapshot, where } from '@angular/fire/firestore';
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

  // Method for pagination using getDocs (reverted to no search term)
  async getProductsPage(
    pageSize: number,
    lastVisibleDoc?: QueryDocumentSnapshot<Product>,
    searchTerm?: string
  ): Promise<{
    products: Product[];
    lastVisible: QueryDocumentSnapshot<Product> | null;
  }> {
    const productsCollectionRef = collection(this.firestore, 'shirts') as CollectionReference<Product>;

    let productsQuery = query(
      productsCollectionRef,
      orderBy('name'), // Order by a consistent field for pagination
      limit(pageSize)
    );

    if (lastVisibleDoc) {
      productsQuery = query(productsQuery, startAfter(lastVisibleDoc));
    }

    const querySnapshot = await getDocs(productsQuery);

    const products = querySnapshot.docs.map(doc => {
      const data = doc.data() as Product; // Explicitly cast doc.data() to Product
      const id = doc.id;
       // Ensure id is explicitly added
      const product: Product = { ...data, id }; // Use spread for other properties
      return product;
    });

    const lastVisible = querySnapshot.docs.length > 0
      ? querySnapshot.docs[querySnapshot.docs.length - 1] as QueryDocumentSnapshot<Product> // Explicitly cast the last document snapshot
      : null;

    return { products, lastVisible };
  }
} 