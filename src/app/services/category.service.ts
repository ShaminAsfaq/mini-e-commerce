import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // TODO: Implement category service methods (e.g., getCategories, getCategoryById, etc.)
  getCategories(): Category[] {
    return [];
  }
} 