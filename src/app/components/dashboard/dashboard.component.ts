import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryMenuComponent} from './category-menu/category-menu.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {FilterDropdownComponent} from './filter-dropdown/filter-dropdown.component';
import {PaginationComponent} from './pagination/pagination.component';
import {FooterComponent} from './footer/footer.component';
import {NgForOf, NgIf} from '@angular/common';
import {Firestore} from '@angular/fire/firestore';
import { SeedFirestoreComponent } from '../seed-firestore/seed-firestore.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        FormsModule,
        ProductListComponent,
        CategoryMenuComponent,
        ProductCardComponent,
        FilterDropdownComponent,
        PaginationComponent,
        FooterComponent,
        NgForOf,
        NgIf,
        SeedFirestoreComponent,
        RouterLink
    ],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    searchTerm: string = '';
    selectedCategory: string = '';
    selectedSubCategory: string = '';
    sortOption: string = '';
    currentPage: number = 1;
    totalPages: number = 10;
    currentYear: number = new Date().getFullYear();
    isMenuOpen: boolean = false;

    products = [
        {
            name: 'Classic White Top',
            price: 24.99,
            description: 'A versatile white top for any occasion.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Tops'
        },
        {
            name: 'Striped Summer Top',
            price: 19.99,
            description: 'Lightweight and perfect for summer.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Tops'
        },
        {
            name: 'Sleeveless Blouse',
            price: 22.99,
            description: 'Elegant sleeveless blouse for work or play.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Tops'
        },
        {
            name: 'Casual Crop Top',
            price: 17.99,
            description: 'Trendy crop top for casual outings.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Tops'
        },
        {
            name: 'Long Sleeve Top',
            price: 27.99,
            description: 'Stay warm and stylish with this long sleeve top.',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
            category: 'Tops'
        },
        {
            name: 'Floral Summer Dress',
            price: 39.99,
            description: 'Beautiful floral print for sunny days.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Dresses'
        },
        {
            name: 'Evening Gown',
            price: 89.99,
            description: 'Elegant gown for special occasions.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Dresses'
        },
        {
            name: 'Casual Day Dress',
            price: 34.99,
            description: 'Comfortable and chic for everyday wear.',
            image: 'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80',
            category: 'Dresses'
        },
        {
            name: 'Maxi Dress',
            price: 44.99,
            description: 'Flowy maxi dress for a relaxed look.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Dresses'
        },
        {
            name: 'Little Black Dress',
            price: 49.99,
            description: 'A must-have classic for every wardrobe.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Dresses'
        },
        {
            name: 'Slim Fit Jeans',
            price: 39.99,
            description: 'Modern slim fit for a sharp look.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Pants'
        },
        {
            name: 'Chino Pants',
            price: 29.99,
            description: 'Comfortable chinos for work or play.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Pants'
        },
        {
            name: 'Jogger Pants',
            price: 27.99,
            description: 'Stay active and stylish.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Pants'
        },
        {
            name: 'Wide Leg Trousers',
            price: 32.99,
            description: 'Trendy wide leg for a bold statement.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Pants'
        },
        {
            name: 'Cargo Pants',
            price: 34.99,
            description: 'Functional and fashionable.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Pants'
        },
        {
            name: 'Classic Blue Jeans',
            price: 44.99,
            description: 'Timeless blue denim.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Denim'
        },
        {
            name: 'Denim Jacket',
            price: 59.99,
            description: 'Stylish and durable denim jacket.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Denim'
        },
        {
            name: 'Denim Skirt',
            price: 29.99,
            description: 'Cute skirt for a casual look.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Denim'
        },
        {
            name: 'Ripped Jeans',
            price: 39.99,
            description: 'Edgy ripped style.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Denim'
        },
        {
            name: 'Denim Shorts',
            price: 24.99,
            description: 'Perfect for summer.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Denim'
        },
        {
            name: 'Chunky Knit Sweater',
            price: 34.99,
            description: 'Stay cozy in style.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Sweaters'
        },
        {
            name: 'V-Neck Sweater',
            price: 29.99,
            description: 'Classic v-neck for layering.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Sweaters'
        },
        {
            name: 'Turtleneck Sweater',
            price: 32.99,
            description: 'Warm and elegant.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Sweaters'
        },
        {
            name: 'Cardigan',
            price: 27.99,
            description: 'Perfect for layering.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Sweaters'
        },
        {
            name: 'Cable Knit Sweater',
            price: 36.99,
            description: 'Classic cable knit design.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Sweaters'
        },
        {
            name: 'Graphic Tee',
            price: 19.99,
            description: 'Trendy graphic print.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'T-Shirts'
        },
        {
            name: 'Basic Black Tee',
            price: 14.99,
            description: 'A wardrobe essential.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'T-Shirts'
        },
        {
            name: 'Striped Tee',
            price: 16.99,
            description: 'Fun stripes for a casual look.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'T-Shirts'
        },
        {
            name: 'Longline Tee',
            price: 18.99,
            description: 'Modern longline fit.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'T-Shirts'
        },
        {
            name: 'Pocket Tee',
            price: 15.99,
            description: 'Classic tee with a pocket.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'T-Shirts'
        },
        {
            name: 'Bomber Jacket',
            price: 54.99,
            description: 'Trendy bomber style.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Jackets'
        },
        {
            name: 'Leather Jacket',
            price: 89.99,
            description: 'Classic leather for a bold look.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Jackets'
        },
        {
            name: 'Denim Jacket',
            price: 59.99,
            description: 'Casual denim jacket.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Jackets'
        },
        {
            name: 'Puffer Jacket',
            price: 69.99,
            description: 'Stay warm in style.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Jackets'
        },
        {
            name: 'Trench Coat',
            price: 79.99,
            description: 'Elegant and timeless.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Jackets'
        },
        {
            name: 'Yoga Pants',
            price: 29.99,
            description: 'Stretchy and comfortable.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Activewear'
        },
        {
            name: 'Sports Bra',
            price: 19.99,
            description: 'Supportive and stylish.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Activewear'
        },
        {
            name: 'Running Shorts',
            price: 17.99,
            description: 'Lightweight for running.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Activewear'
        },
        {
            name: 'Track Jacket',
            price: 34.99,
            description: 'Classic track style.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Activewear'
        },
        {
            name: 'Gym Tank',
            price: 15.99,
            description: 'Stay cool during workouts.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Activewear'
        },
        {
            name: 'Classic Watch',
            price: 99.99,
            description: 'Timeless design for any outfit.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Watches'
        },
        {
            name: 'Sport Watch',
            price: 59.99,
            description: 'Durable and water-resistant.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Watches'
        },
        {
            name: 'Smart Watch',
            price: 129.99,
            description: 'Stay connected on the go.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Watches'
        },
        {
            name: 'Luxury Watch',
            price: 299.99,
            description: 'Premium materials and craftsmanship.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Watches'
        },
        {
            name: 'Minimalist Watch',
            price: 79.99,
            description: 'Sleek and simple design.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Watches'
        },
        {
            name: 'Leather Wallet',
            price: 24.99,
            description: 'Premium leather wallet.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Wallets'
        },
        {
            name: 'Slim Card Holder',
            price: 14.99,
            description: 'Minimalist card holder.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Wallets'
        },
        {
            name: 'Travel Wallet',
            price: 29.99,
            description: 'Keep your essentials organized.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Wallets'
        },
        {
            name: 'RFID Wallet',
            price: 19.99,
            description: 'Protect your cards from skimming.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Wallets'
        },
        {
            name: 'Coin Purse',
            price: 9.99,
            description: 'Handy for loose change.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Wallets'
        },
        {
            name: 'Tote Bag',
            price: 19.99,
            description: 'Spacious and stylish tote.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Bags'
        },
        {
            name: 'Backpack',
            price: 34.99,
            description: 'Perfect for school or travel.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Bags'
        },
        {
            name: 'Messenger Bag',
            price: 29.99,
            description: 'Urban style messenger.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Bags'
        },
        {
            name: 'Duffel Bag',
            price: 39.99,
            description: 'Great for the gym.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Bags'
        },
        {
            name: 'Crossbody Bag',
            price: 24.99,
            description: 'Hands-free convenience.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Bags'
        },
        {
            name: 'Aviator Sunglasses',
            price: 29.99,
            description: 'Classic aviator style.',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            category: 'Sunglasses'
        },
        {
            name: 'Round Sunglasses',
            price: 24.99,
            description: 'Retro round frames.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Sunglasses'
        },
        {
            name: 'Wayfarer Sunglasses',
            price: 27.99,
            description: 'Timeless wayfarer design.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Sunglasses'
        },
        {
            name: 'Sport Sunglasses',
            price: 34.99,
            description: 'Perfect for outdoor activities.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Sunglasses'
        },
        {
            name: 'Cat Eye Sunglasses',
            price: 32.99,
            description: 'Chic cat eye frames.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Sunglasses'
        },
        {
            name: 'Baseball Cap',
            price: 14.99,
            description: 'Classic baseball cap.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Hats'
        },
        {
            name: 'Beanie',
            price: 12.99,
            description: 'Stay warm in style.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Hats'
        },
        {
            name: 'Fedora',
            price: 19.99,
            description: 'Stylish fedora hat.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Hats'
        },
        {
            name: 'Bucket Hat',
            price: 16.99,
            description: 'Trendy bucket hat.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Hats'
        },
        {
            name: 'Sun Hat',
            price: 22.99,
            description: 'Perfect for sunny days.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Hats'
        },
        {
            name: 'Leather Belt',
            price: 19.99,
            description: 'Classic leather belt.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Belts'
        },
        {
            name: 'Canvas Belt',
            price: 12.99,
            description: 'Durable canvas material.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Belts'
        },
        {
            name: 'Braided Belt',
            price: 16.99,
            description: 'Trendy braided design.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Belts'
        },
        {
            name: 'Studded Belt',
            price: 22.99,
            description: 'Edgy studded style.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Belts'
        },
        {
            name: 'Reversible Belt',
            price: 24.99,
            description: 'Two looks in one.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Belts'
        },
        {
            name: 'Full Nelson Tee',
            price: 34.99,
            description: 'Signature tee from Full Nelson.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Full Nelson'
        },
        {
            name: 'Full Nelson Hoodie',
            price: 49.99,
            description: 'Cozy hoodie for cool days.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Full Nelson'
        },
        {
            name: 'Full Nelson Cap',
            price: 19.99,
            description: 'Trendy cap with logo.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Full Nelson'
        },
        {
            name: 'Full Nelson Jacket',
            price: 69.99,
            description: 'Stylish outerwear.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Full Nelson'
        },
        {
            name: 'Full Nelson Bag',
            price: 29.99,
            description: 'Carry your essentials in style.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Full Nelson'
        },
        {
            name: 'My Way Tee',
            price: 32.99,
            description: 'Express yourself with My Way.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'My Way'
        },
        {
            name: 'My Way Hoodie',
            price: 47.99,
            description: 'Comfortable and stylish.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'My Way'
        },
        {
            name: 'My Way Cap',
            price: 18.99,
            description: 'Cap with attitude.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'My Way'
        },
        {
            name: 'My Way Jacket',
            price: 64.99,
            description: 'Bold and unique.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'My Way'
        },
        {
            name: 'My Way Bag',
            price: 27.99,
            description: 'Carry your style.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'My Way'
        },
        {
            name: 'Re-Arranged Tee',
            price: 33.99,
            description: 'A new take on a classic.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Re-Arranged'
        },
        {
            name: 'Re-Arranged Hoodie',
            price: 48.99,
            description: 'Stay warm, stay unique.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Re-Arranged'
        },
        {
            name: 'Re-Arranged Cap',
            price: 20.99,
            description: 'Cap with a twist.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Re-Arranged'
        },
        {
            name: 'Re-Arranged Jacket',
            price: 68.99,
            description: 'Reinvent your outerwear.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Re-Arranged'
        },
        {
            name: 'Re-Arranged Bag',
            price: 28.99,
            description: 'A bag for every occasion.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Re-Arranged'
        },
        {
            name: 'Counterfeit Tee',
            price: 31.99,
            description: 'Bold and daring.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Counterfeit'
        },
        {
            name: 'Counterfeit Hoodie',
            price: 46.99,
            description: 'Make a statement.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Counterfeit'
        },
        {
            name: 'Counterfeit Cap',
            price: 17.99,
            description: 'Cap with edge.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Counterfeit'
        },
        {
            name: 'Counterfeit Jacket',
            price: 63.99,
            description: 'Outerwear with attitude.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Counterfeit'
        },
        {
            name: 'Counterfeit Bag',
            price: 26.99,
            description: 'Carry your confidence.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Counterfeit'
        },
        {
            name: 'Significant Other Tee',
            price: 35.99,
            description: 'Share your style.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Significant Other'
        },
        {
            name: 'Significant Other Hoodie',
            price: 50.99,
            description: 'Cozy up together.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Significant Other'
        },
        {
            name: 'Significant Other Cap',
            price: 21.99,
            description: 'Cap for two.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Significant Other'
        },
        {
            name: 'Significant Other Jacket',
            price: 70.99,
            description: 'Matching jackets.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Significant Other'
        },
        {
            name: 'Significant Other Bag',
            price: 30.99,
            description: 'A bag for both.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Significant Other'
        },
        {
            name: 'Browse All Tee',
            price: 29.99,
            description: 'Discover all our styles.',
            image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
            category: 'Browse All'
        },
        {
            name: 'Browse All Hoodie',
            price: 44.99,
            description: 'All-in-one comfort.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
            category: 'Browse All'
        },
        {
            name: 'Browse All Cap',
            price: 16.99,
            description: 'Cap for every style.',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            category: 'Browse All'
        },
        {
            name: 'Browse All Jacket',
            price: 59.99,
            description: 'Jacket for all seasons.',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            category: 'Browse All'
        },
        {
            name: 'Browse All Bag',
            price: 25.99,
            description: 'Bag for every need.',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
            category: 'Browse All'
        }
    ];

    categories = [
        {
            name: 'Clothing',
            subcategories: ['Tops', 'Dresses', 'Pants', 'Denim', 'Sweaters', 'T-Shirts', 'Jackets', 'Activewear']
        },
        {
            name: 'Accessories',
            subcategories: ['Watches', 'Wallets', 'Bags', 'Sunglasses', 'Hats', 'Belts']
        },
        {
            name: 'Brands',
            subcategories: ['Full Nelson', 'My Way', 'Re-Arranged', 'Counterfeit', 'Significant Other']
        },
        {
            name: 'Other',
            subcategories: ['Browse All']
        }
    ];

    paginatedProducts: any[] = [];
    pageSize: number = 12;

    ngOnInit() {
        this.updateProductList();
    }

    constructor(private firestore: Firestore) {
        console.log('Firestore initialized: ', this.firestore);
    }

    updateProductList(): void {
        let filtered = this.products;
        if (this.searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
        if (this.selectedCategory) {
            // Find subcategories for the selected main category
            const group = this.categories.find(cat => cat.name === this.selectedCategory);
            if (group) {
                filtered = filtered.filter(product => group.subcategories.includes(product.category));
            }
        }

        if (this.selectedSubCategory) {
            filtered = filtered.filter(product => product.category === this.selectedSubCategory);
        }
        if (this.sortOption) {
            if (this.sortOption === 'price-asc') {
                filtered = filtered.slice().sort((a, b) => a.price - b.price);
            } else if (this.sortOption === 'price-desc') {
                filtered = filtered.slice().sort((a, b) => b.price - a.price);
            } else if (this.sortOption === 'name-asc') {
                filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
            } else if (this.sortOption === 'name-desc') {
                filtered = filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
            }
        }
        this.totalPages = Math.max(1, Math.ceil(filtered.length / this.pageSize));
        if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        }
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.paginatedProducts = filtered.slice(start, end);
    }

    onSearchTermChange(): void {
        this.currentPage = 1;
        this.updateProductList();
    }

    onCategoryChange(category: string): void {
        this.selectedCategory = category;
        this.selectedSubCategory = ''; // Reset subcategory when main category changes
        this.currentPage = 1;
        this.updateProductList();
    }

    onSubCategoryChange(subCategory: string): void {
        this.selectedSubCategory = subCategory;
        this.currentPage = 1;
        this.updateProductList();
    }

    onSortOptionChange(): void {
        this.currentPage = 1;
        this.updateProductList();
    }

    fetchPage(page: number): void {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.updateProductList();
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    clearCategory() {
        this.selectedCategory = '';
        this.selectedSubCategory = '';
        this.currentPage = 1;
        this.updateProductList();
    }

    clearSubCategory() {
        this.selectedSubCategory = '';
        this.currentPage = 1;
        this.updateProductList();
    }
}
