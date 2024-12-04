import { create } from 'zustand';
import { Product, CartItemType } from '../types';

interface CartStore {
  items: CartItemType[];
  total: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  removeItemCompletely: (productId: string) => void;
  getItemQuantity: (productId: string) => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      const newItems = existingItem
        ? state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...product, quantity: 1 }];

      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    });
  },
  removeItem: (productId) => {
    set((state) => {
      const newItems = state.items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    });
  },
  removeItemCompletely: (productId) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== productId);
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    });
  },
  getItemQuantity: (productId) => {
    const item = get().items.find((item) => item.id === productId);
    return item?.quantity || 0;
  },
  clearCart: () => set({ items: [], total: 0 }),
}));