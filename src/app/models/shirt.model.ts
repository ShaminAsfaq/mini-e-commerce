import { VendorEnum } from '../enums/vendor.enum';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { SleeveEnum } from '../enums/sleeve.enum';
import { SizeEnum } from '../enums/size.enum';
import { FabricEnum } from '../enums/fabric.enum';
import { Product } from './product.model';

export interface SizeInventory {
  size: number; // Should be one of SizeEnum
  count: number;
}

export interface Shirt extends Product {
  vendor: VendorEnum;
  productType: ProductTypeEnum;
  sleeveType?: SleeveEnum;
  sizeList: typeof SizeEnum;
  sizeInventory: SizeInventory[];
  fabricType: FabricEnum;
  keywords: string[];
  batchCode?: string;
  totalInboundedStock: number;
} 
