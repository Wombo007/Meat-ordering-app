import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { ShopifyProduct } from '../../services/shopify/types';
import { QuickView } from './QuickView';

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addItem, removeItem, getItemQuantity } = useCartStore();
  const quantity = getItemQuantity(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      weight: product.weight,
      image: product.image,
      quantity: 1
    });
  };

  const handleRemoveFromCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeItem(product.id);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
        onClick={() => setIsQuickViewOpen(true)}
      >
        <div className="relative pb-[177.78%]">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain bg-gray-50"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-semibold text-[#1d1d1b] mb-1 sm:mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-sm sm:text-base font-bold text-[#1d1d1b]">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-500 sm:ml-2">
                / {product.weight}
              </span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              {quantity > 0 && (
                <>
                  <button
                    onClick={handleRemoveFromCart}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-[#1d1d1b]" />
                  </button>
                  <span className="w-6 sm:w-8 text-center text-sm sm:text-base font-medium">
                    {quantity}
                  </span>
                </>
              )}
              <button
                onClick={handleAddToCart}
                className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-[#1d1d1b]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuickView 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};