import React from 'react';
import { X } from 'lucide-react';
import { ShopifyProduct } from '../../services/shopify/types';

interface QuickViewProps {
  product: ShopifyProduct;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <div className="inline-block w-full max-w-2xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <div className="relative pb-[56.25%] mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain bg-gray-50 rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1d1d1b] mb-2">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-[#1d1d1b]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    / {product.weight}
                  </span>
                </div>

                <div className="prose prose-sm max-w-none text-gray-600">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};