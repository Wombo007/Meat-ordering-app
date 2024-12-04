import { create } from 'zustand';
import { OrderState, BoxType, BoxSize, Product } from '../types';

interface OrderStore extends OrderState {
  setBoxType: (boxType: BoxType) => void;
  setBoxSize: (boxSize: BoxSize) => void;
  setFrequency: (frequency: string) => void;
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
  addAddon: (addon: Product) => void;
  removeAddon: (addonId: string) => void;
  reset: () => void;
}

const initialState: OrderState = {
  boxType: null,
  boxSize: null,
  selectedItems: [],
  addons: [],
  frequency: null,
};

export const useOrderStore = create<OrderStore>((set) => ({
  ...initialState,
  setBoxType: (boxType) => set({ boxType }),
  setBoxSize: (boxSize) => set({ boxSize }),
  setFrequency: (frequency) => set({ frequency }),
  addItem: (item) =>
    set((state) => ({ selectedItems: [...state.selectedItems, item] })),
  removeItem: (itemId) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((item) => item.id !== itemId),
    })),
  addAddon: (addon) => set((state) => ({ addons: [...state.addons, addon] })),
  removeAddon: (addonId) =>
    set((state) => ({
      addons: state.addons.filter((addon) => addon.id !== addonId),
    })),
  reset: () => set(initialState),
}));