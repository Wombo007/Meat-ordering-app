export interface ShopifyLineItem {
  id: string;
  quantity: number;
  customAttributes?: {
    key: string;
    value: string;
  }[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  productType: string;
  collectionHandle: string;
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  lineItems: ShopifyLineItem[];
}