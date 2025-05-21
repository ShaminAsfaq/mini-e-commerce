export interface Product {
  id: string;
  name: string;
  description: string;
  imageList?: string[];
  imageDownloadLink?: string[];
  subcategory: string;
  buyingPrice: number;
  sellingPrice: number;
  // TODO: Add additional properties as needed
} 