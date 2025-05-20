import { Shirt } from '../app/models/shirt.model';
import { VendorEnum } from '../app/enums/vendor.enum';
import { ProductTypeEnum } from '../app/enums/product-type.enum';
import { SleeveEnum } from '../app/enums/sleeve.enum';
import { FabricEnum } from '../app/enums/fabric.enum';

export const SHIRT_MOCKS: Shirt[] = [
  {
    id: 'shirt-1',
    name: "Classic White Shirt",
    description: "A classic white shirt for formal and office wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 400,
    sellingPrice: 750,
    sizeList: [38, 40, 42, 44],
    sizeInventory: [
      { size: 38, count: 2 },
      { size: 40, count: 3 },
      { size: 42, count: 1 },
      { size: 44, count: 2 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["white", "formal", "office"],
    batchCode: "RFH1",
    imageList: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 8
  },
  {
    id: 'shirt-2',
    name: "Slim Fit Blue Shirt",
    description: "A slim fit blue shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 420,
    sellingPrice: 800,
    sizeList: [40, 42, 44],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 2 },
      { size: 44, count: 1 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["blue", "slim", "casual"],
    batchCode: "MC2",
    imageList: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-3',
    name: "Checked Casual Shirt",
    description: "A checked casual shirt with half sleeves.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 350,
    sellingPrice: 650,
    sizeList: [42, 44, 46],
    sizeInventory: [
      { size: 42, count: 1 },
      { size: 44, count: 2 },
      { size: 46, count: 1 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["checked", "casual", "half sleeve"],
    batchCode: "RFH2",
    imageList: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 4
  },
  {
    id: 'shirt-4',
    name: "Linen Summer Shirt",
    description: "A lightweight linen shirt for summer.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 390,
    sellingPrice: 700,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 1 },
      { size: 40, count: 2 },
      { size: 42, count: 1 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["linen", "summer", "lightweight"],
    batchCode: "MC3",
    imageList: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 4
  },
  {
    id: 'shirt-5',
    name: "Black Formal Shirt",
    description: "A black formal shirt with full sleeves.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 450,
    sellingPrice: 900,
    sizeList: [40, 42, 44, 46],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 2 },
      { size: 44, count: 1 },
      { size: 46, count: 1 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["black", "formal", "full sleeve"],
    batchCode: "RFH3",
    imageList: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 6
  },
  {
    id: 'shirt-6',
    name: "Striped Office Shirt",
    description: "A striped shirt for office wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 410,
    sellingPrice: 780,
    sizeList: [38, 40, 42, 44],
    sizeInventory: [
      { size: 38, count: 1 },
      { size: 40, count: 2 },
      { size: 42, count: 2 },
      { size: 44, count: 1 }
    ],
    fabricType: FabricEnum.MIXED,
    keywords: ["striped", "office", "formal"],
    batchCode: "MC4",
    imageList: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 6
  },
  {
    id: 'shirt-7',
    name: "Green Polo Shirt",
    description: "A green polo shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.POLO_SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 370,
    sellingPrice: 700,
    sizeList: [40, 42, 44],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 1 },
      { size: 44, count: 2 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["green", "polo", "casual"],
    batchCode: "RFH4",
    imageList: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-8',
    name: "Red T-Shirt",
    description: "A red t-shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.TSHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 300,
    sellingPrice: 600,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 2 },
      { size: 40, count: 2 },
      { size: 42, count: 1 }
    ],
    fabricType: FabricEnum.MIXED,
    keywords: ["red", "t-shirt", "casual"],
    batchCode: "MC5",
    imageList: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-9',
    name: "Sky Blue Shirt",
    description: "A sky blue linen shirt for formal wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 410,
    sellingPrice: 780,
    sizeList: [40, 42, 44, 46],
    sizeInventory: [
      { size: 40, count: 1 },
      { size: 42, count: 2 },
      { size: 44, count: 2 },
      { size: 46, count: 1 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["sky blue", "formal", "linen"],
    batchCode: "RFH5",
    imageList: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 6
  },
  {
    id: 'shirt-10',
    name: "Yellow Summer Shirt",
    description: "A lightweight yellow linen shirt for summer.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 380,
    sellingPrice: 720,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 1 },
      { size: 40, count: 2 },
      { size: 42, count: 2 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["yellow", "summer", "lightweight"],
    batchCode: "MC6",
    imageList: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1515378791036-0119d1270073?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-11',
    name: "Grey Office Shirt",
    description: "A grey cotton shirt for office wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 430,
    sellingPrice: 850,
    sizeList: [40, 42, 44, 46],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 2 },
      { size: 44, count: 1 },
      { size: 46, count: 1 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["grey", "office", "formal"],
    batchCode: "RFH6",
    imageList: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 6
  },
  {
    id: 'shirt-12',
    name: "Pink Casual Shirt",
    description: "A pink mixed fabric casual shirt with half sleeves.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 360,
    sellingPrice: 690,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 1 },
      { size: 40, count: 2 },
      { size: 42, count: 2 }
    ],
    fabricType: FabricEnum.MIXED,
    keywords: ["pink", "casual", "half sleeve"],
    batchCode: "MC7",
    imageList: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-13',
    name: "Olive Green Shirt",
    description: "An olive green linen shirt for formal wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 420,
    sellingPrice: 800,
    sizeList: [40, 42, 44],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 2 },
      { size: 44, count: 1 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["olive", "green", "formal"],
    batchCode: "RFH7",
    imageList: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-14',
    name: "Navy Blue Polo",
    description: "A navy blue cotton polo shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.POLO_SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 390,
    sellingPrice: 720,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 1 },
      { size: 40, count: 2 },
      { size: 42, count: 2 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["navy", "polo", "casual"],
    batchCode: "MC8",
    imageList: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-15',
    name: "Beige Linen Shirt",
    description: "A beige linen shirt for formal wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.SHIRT,
    sleeveType: SleeveEnum.FULL,
    buyingPrice: 410,
    sellingPrice: 790,
    sizeList: [40, 42, 44, 46],
    sizeInventory: [
      { size: 40, count: 1 },
      { size: 42, count: 2 },
      { size: 44, count: 2 },
      { size: 46, count: 1 }
    ],
    fabricType: FabricEnum.LINEN,
    keywords: ["beige", "linen", "formal"],
    batchCode: "RFH8",
    imageList: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 6
  },
  {
    id: 'shirt-16',
    name: "Purple T-Shirt",
    description: "A purple mixed fabric t-shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.TSHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 320,
    sellingPrice: 620,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 2 },
      { size: 40, count: 2 },
      { size: 42, count: 1 }
    ],
    fabricType: FabricEnum.MIXED,
    keywords: ["purple", "t-shirt", "casual"],
    batchCode: "MC9",
    imageList: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-17',
    name: "Grey Polo Shirt",
    description: "A grey cotton polo shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.ROYAL_FASHION_HOUSE,
    productType: ProductTypeEnum.POLO_SHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 370,
    sellingPrice: 700,
    sizeList: [40, 42, 44],
    sizeInventory: [
      { size: 40, count: 2 },
      { size: 42, count: 1 },
      { size: 44, count: 2 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["grey", "polo", "casual"],
    batchCode: "RFH9",
    imageList: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  },
  {
    id: 'shirt-18',
    name: "White T-Shirt",
    description: "A white cotton t-shirt for casual wear.",
    subcategory: "Shirt",
    vendor: VendorEnum.MEHRIN_CLOTHING,
    productType: ProductTypeEnum.TSHIRT,
    sleeveType: SleeveEnum.HALF,
    buyingPrice: 300,
    sellingPrice: 600,
    sizeList: [38, 40, 42],
    sizeInventory: [
      { size: 38, count: 2 },
      { size: 40, count: 2 },
      { size: 42, count: 1 }
    ],
    fabricType: FabricEnum.COTTON,
    keywords: ["white", "t-shirt", "casual"],
    batchCode: "MC10",
    imageList: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    imageDownloadLink: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    totalInboundedStock: 5
  }
];