import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent {
  @Input() selectedCategory: string = '';
  @Input() categories: any[] = [];
  @Output() selectedCategoryChange = new EventEmitter<string>();

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.selectedCategoryChange.emit(category);
  }
}
