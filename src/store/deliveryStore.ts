import { create } from 'zustand';

interface DeliveryInfo {
  postcode: string;
  date: string;
  time: string;
}

interface DeliveryStore {
  deliveryInfo: DeliveryInfo | null;
  setDeliveryInfo: (info: DeliveryInfo) => void;
  reset: () => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveryInfo: null,
  setDeliveryInfo: (info) => set({ deliveryInfo: info }),
  reset: () => set({ deliveryInfo: null }),
}));