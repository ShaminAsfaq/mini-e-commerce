import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO: Implement product service methods (e.g., getProducts, getProductById, etc.)
  getProducts(): Product[] {
    return [];
  }
} 