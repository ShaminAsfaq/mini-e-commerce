import { Product } from '../models/product.model';
import { Shirt } from '../models/shirt.model';

export function isShirt(product: Product): product is Shirt {
  return 'fabricType' in product;
} 