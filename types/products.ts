export interface ImageItem {
  src: string;
  thumbnail?: string;
  _type?: string;
  main?: boolean;
  _id?: string;
}

export interface Category {
  _id: string;
  name: string;
  attributeIds: string[];
  type: string;
  order: number;
  level: string;
  parent?: string;
  route: string[];
  createdAt?: string; // ISO date string
  updatedAt?: string; // ISO date string
  __v?: number;
}

export interface FreeCondition {
  purchasesPrice?: number;
  [key: string]: any;
}

export interface DeliveryOption {
  deliveryType: string;
  price: number;
  estimatedTime?: string;
  freeCondition?: FreeCondition;
  active: boolean;
  _id?: string;
}

export interface Shipment {
  type: string; // e.g. insideShopCity, insideShopState, otherStates
  delivery: DeliveryOption[];
  active: boolean;
  _id?: string;
}

export interface Variant {
  _id?: string;
  attributes: Record<string, any>;
  stock: number;
  labelPrice?: string | number;
  minPriceForResell?: number;
  maxPriceForResell?: number;
  price: number;
  priceForResell?: number;
  isReseller?: boolean;
  resellCreatedAt?: string;
  resellUpdatedAt?: string;
  resellStatus?: string;
  resellerProfit?: number;
  sellerDiscount?: number;
  type?: string;
}

export interface Item {
  id: string; // some endpoints use `id`
  _id?: string; // sometimes _id exists
  title: string;
  description?: string;
  mainImage?: string;
  images?: ImageItem[];
  isReseller?: boolean;
  attributes?: any[]; // expand if you have schema
  brands?: any[]; // expand if needed
  categories?: Category[];
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  type?: string;
  resellStatus?: string;
  shipmentsReferenceId?: string;
  shipmentsReferenceState?: string;
  shipmentsReferenceCity?: string;
  shipments?: Shipment[];
  variants?: Variant[];
  [key: string]: any;
}

export interface ProductsResponse {
  total: number;
  skip: number;
  limit: number;
  items: Item[];
}
