export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  categoryId: string;
  image: string;
  collectionHandle: string;
}

export interface CartItemType extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface BoxType {
  id: string;
  name: string;
  description: string;
  image: string;
  collectionHandle: string;
}

export interface BoxSize {
  id: string;
  name: string;
  price: number;
  weight: string;
  servings: number;
}

export interface OrderState {
  boxType: BoxType | null;
  boxSize: BoxSize | null;
  selectedItems: Product[];
  addons: Product[];
  frequency: string | null;
}

export interface DeliverySummary {
  postcode: string;
  date: string;
  time: string;
}