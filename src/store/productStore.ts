import { create } from 'zustand';
import { Product, Category } from '../types';
import { shopifyClient } from '../services/shopify/client';
import { useOrderStore } from './orderStore';

interface ProductStore {
  products: Product[];
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  getFilteredProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  categories: [
    { id: 'beef', name: 'Premium Beef' },
    { id: 'pork', name: 'Free Range Pork' },
    { id: 'lamb', name: 'Grass-fed Lamb' },
    { id: 'chicken', name: 'Free Range Chicken' }
  ],
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    try {
      const { boxType } = useOrderStore.getState();

      if (!boxType?.collectionHandle) {
        set({ products: [], isLoading: false });
        return;
      }

      set({ isLoading: true, error: null });
      
      const products = await shopifyClient.getProductsByCollection(boxType.collectionHandle);
      console.log('Fetched products:', products); // Debug log

      set({
        products: products.map(product => ({
          id: product.id,
          name: product.title,
          description: product.description,
          price: product.price,
          weight: product.weight,
          categoryId: product.productType.toLowerCase(),
          image: product.image,
          collectionHandle: product.collectionHandle
        })),
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.error('Error in fetchProducts:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch products',
        isLoading: false,
        products: []
      });
    }
  },
  getFilteredProducts: () => {
    return get().products;
  }
}));