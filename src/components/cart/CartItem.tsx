import React from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addItem, removeItem, removeItemCompletely } = useCartStore();

  return (
    <div className="flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="font-medium text-[#1d1d1b]">{item.name}</h4>
        <div className="flex items-center mt-1">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => removeItem(item.id)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Minus className="h-4 w-4 text-[#1d1d1b]" />
            </button>
            <span className="w-6 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => addItem(item)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="h-4 w-4 text-[#1d1d1b]" />
            </button>
          </div>
          <span className="ml-4 text-sm text-gray-500">${item.price}</span>
        </div>
      </div>
      <button
        onClick={() => removeItemCompletely(item.id)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <X className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  );
};