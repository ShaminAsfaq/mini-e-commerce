import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  templateUrl: './category-menu.component.html',
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  @Input() categories: any[] = [];
  @Output() subCategorySelect = new EventEmitter<string>();

  selectSubCategory(category: string) {
    this.subCategorySelect.emit(category);
  }
}
