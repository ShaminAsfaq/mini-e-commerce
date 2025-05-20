import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  // TODO: Implement product list logic
}
