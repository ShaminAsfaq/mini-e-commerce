import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../services/product.service'; // Adjust path as needed
import {Product} from '../../models/product.model'; // Adjust path as needed
import {RouterLink} from '@angular/router';
import {Subscription} from 'rxjs'; // Import Subscription
import {NgZone} from '@angular/core'; // Import NgZone

// Import QueryDocumentSnapshot for pagination
import { QueryDocumentSnapshot } from '@angular/fire/firestore';

// Import PaginationComponent
import { PaginationComponent } from '../dashboard/pagination/pagination.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    standalone: true,
    imports: [CommonModule, RouterLink, PaginationComponent, FormsModule],
    styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
    products: Product[] = []; // This might be removed or repurposed later
    filteredProducts: Product[] = []; // Re-add filteredProducts array
    isLoading = true;
    errorMessage: string | null = null;
    private productsSubscription: Subscription | undefined; // Property to hold the subscription

    // Pagination properties
    pageSize = 5; // Number of items per page
    currentPage = 1; // Current page number
    totalPages = 1; // Total number of pages
    // Map to store the last visible document for each page
    // private lastVisibleDocs: Map<number, QueryDocumentSnapshot<Product> | null> = new Map(); // Remove
    // loading = false; // Remove
    // hasMore = true; // Remove

    searchTerm: string = ''; // Re-add searchTerm property

    // Add property to store all fetched products
    allProducts: Product[] = [];

    // Add property to store the total count of filtered products
    totalFilteredProductsCount: number = 0;

    constructor(private productService: ProductService, private ngZone: NgZone) {
        // Remove redundant logic
        // this.products$ = this.productService.getShirts().pipe(
        //   catchError(error => {
        //     console.error('Error fetching products:', error);
        //     this.errorMessage = 'Failed to load products.';
        //     this.isLoading = false;
        //     return EMPTY; // Return EMPTY to complete the observable and prevent errors
        //   })
        // );
    }

    ngOnInit(): void {
       // this.loadPage(this.currentPage); // Remove old loading logic
       this.isLoading = true;
       this.productsSubscription = this.productService.getShirts().subscribe({
         next: (products) => {
           this.allProducts = products;
           this.isLoading = false;
           this.updateProductList(); // Update list after fetching
         },
         error: (err) => {
           console.error('Error fetching products:', err);
           this.errorMessage = 'Failed to load products.';
           this.isLoading = false;
         }
       });
    }

    ngOnDestroy(): void {
        if (this.productsSubscription) {
            this.productsSubscription.unsubscribe();
        }
    }

    // Method to load products for a specific page // Remove
    // async loadPage(page: number): Promise<void> {
    //   if (this.loading) {
    //     return; // Prevent loading if already loading
    //   }

    //   this.loading = true;
    //   this.isLoading = true; // Show full page loader while loading any page

    //   const lastVisible = this.lastVisibleDocs.has(page - 1) ? this.lastVisibleDocs.get(page - 1)! : undefined; // Get last doc of previous page

    //   try {
    //     const result = await this.productService.getProductsPage(this.pageSize, lastVisible);
    //     this.ngZone.run(() => {
    //       this.products = result.products;
    //       // Apply filter after loading products for the page
    //       this.applyFilter(); // Apply filter here

    //       this.currentPage = page;
    //       this.lastVisibleDocs.set(page, result.lastVisible); // Store last doc of current page

    //       // Adjust totalPages based on whether the current page is full
    //       if (result.products.length < this.pageSize) {
    //         this.totalPages = this.currentPage; // This is the last page
    //       } else {
    //          // If the current page is full, there might be more pages
    //          // Increment totalPages if current page equals current total pages (means we discovered a new page)
    //          if (this.currentPage === this.totalPages) {
    //              this.totalPages++;
    //          }
    //       }

    //       this.isLoading = false;
    //       this.loading = false;
    //        // console.log('Loaded page:', this.currentPage, 'Total pages:', this.totalPages);
    //     });
    //   } catch (error) {
    //     this.ngZone.run(() => {
    //       console.error('Error fetching products for page', page, ':', error);
    //       this.errorMessage = 'Failed to load products for page '+ page + '.';
    //       this.isLoading = false;
    //       this.loading = false;
    //     });
    //   }
    // }

    // Method to update the product list based on filters and pagination
    updateProductList(): void {
      let productsToPaginate = this.allProducts;

      if (this.searchTerm) {
        productsToPaginate = productsToPaginate.filter(product =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      this.totalFilteredProductsCount = productsToPaginate.length; // Update the count of filtered products

      this.totalPages = Math.max(1, Math.ceil(productsToPaginate.length / this.pageSize));

      // Ensure current page is within the valid range
      if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
      } else if (this.currentPage < 1) {
          this.currentPage = 1;
      }


      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.filteredProducts = productsToPaginate.slice(start, end);

      // console.log('Updated product list. Total products:', productsToPaginate.length, 'Filtered for page:', this.filteredProducts.length);
    }

    // Method to apply filtering based on searchTerm (client-side)
    applyFilter(): void {
      // if (!this.searchTerm) { // Old logic - remove
      //   this.filteredProducts = [...this.products]; // If no search term, show all products for the current page
      // } else {
      //   this.filteredProducts = this.products.filter(product =>
      //     product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      //     product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      //   );
      // }
       // console.log('Filtered products:', this.filteredProducts.length);
       this.currentPage = 1; // Reset to first page on filter change
       this.updateProductList();
    }

    // Handle page change event from pagination component
    onPageChange(page: number): void {
        // console.log('Page change requested to page:', page);
        // Only navigate to a page if it's within the current total pages range
        // if (page > 0 && page <= this.totalPages) { // Old logic - remove
        //     this.loadPage(page); // Call loadPage without searchTerm
        // } else if (page > this.totalPages && this.products.length === this.pageSize) {
        //     // This case might happen if the user clicks next on the last seemingly full page
        //     // Attempt to load the next page to see if it exists
        //      this.loadPage(this.totalPages + 1); // Call loadPage without searchTerm
        // }
        if (page > 0 && page <= this.totalPages) {
            this.currentPage = page;
            this.updateProductList();
        } else {
            // Optional: handle invalid page number
            console.warn('Attempted to navigate to invalid page:', page);
        }
    }

    getProductImage(product: any): string {
        if (product.imageList && product.imageList.length > 0) {
            return product.imageList[0];
        } else if (product.imageDownloadLink && product.imageDownloadLink.length > 0) {
            return product.imageDownloadLink[0];
        } else {
            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-image'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3ccircle cx='8.5' cy='8.5' r='1.5'%3e%3c/circle%3e%3cpolyline points='21 15 16 10 5 21'%3e%3cpolyline%3e%3c/svg%3e";
        }
    }

    // Placeholder methods for future functionality
    addProduct(): void {
        console.log('Add product button clicked');
        // Implement add product logic (e.g., open a modal)
    }

    editProduct(product: Product): void {
        console.log('Edit product clicked:', product);
        // Implement edit product logic (e.g., navigate to edit page or open modal)
    }

    deleteProduct(product: Product): void {
        console.log('Delete product clicked:', product);
        // Implement delete product logic (e.g., show confirmation dialog and call service)
    }
}
