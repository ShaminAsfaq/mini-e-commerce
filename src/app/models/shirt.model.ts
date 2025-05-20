import { VendorEnum } from '../enums/vendor.enum';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { SleeveEnum } from '../enums/sleeve.enum';
import { SizeEnum } from '../enums/size.enum';
import { FabricEnum } from '../enums/fabric.enum';

export interface SizeInventory {
  size: number; // Should be one of SizeEnum
  count: number;
}

export interface Shirt {
  name: string;
  vendor: VendorEnum;
  productType: ProductTypeEnum;
  sleeveType?: SleeveEnum;
  buyingPrice: number;
  sellingPrice: number;
  sizeList: typeof SizeEnum;
  sizeInventory: SizeInventory[];
  fabricType: FabricEnum;
  keywords: string[];
  batchCode?: string;
  imageList?: string[];
  imageDownloadLink?: string[];
  totalInboundedStock: number;
} 