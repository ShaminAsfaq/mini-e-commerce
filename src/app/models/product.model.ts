export interface Product {
  id: string;
  name: string;
  description: string;
  imageList?: string[];
  imageDownloadLink?: string[];
  subcategory: string;
  // TODO: Add additional properties as needed
} 