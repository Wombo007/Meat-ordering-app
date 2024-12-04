import React, { useState } from 'react';
import { ShoppingBag, ChevronUp } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { CartItem } from './CartItem';
import { shopifyClient } from '../../services/shopify/client';
import { useDeliveryStore } from '../../store/deliveryStore';

export const MobileCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, total } = useCartStore();
  const { deliveryInfo } = useDeliveryStore();

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      
      const lineItems = items.map(item => ({
        variantId: item.id,
        quantity: item.quantity,
        customAttributes: [
          {
            key: 'delivery_date',
            value: deliveryInfo?.date || ''
          },
          {
            key: 'delivery_time',
            value: deliveryInfo?.time || ''
          },
          {
            key: 'delivery_postcode',
            value: deliveryInfo?.postcode || ''
          }
        ]
      }));

      const checkoutUrl = await shopifyClient.createCheckout(lineItems);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your checkout. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'
        } transition-transform duration-300 ease-in-out bg-white rounded-t-xl shadow-lg z-50`}
      >
        <div
          className="h-16 flex items-center justify-between px-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-[#1d1d1b] mr-3" />
            <span className="font-semibold text-[#1d1d1b]">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">
              {items.length} items
            </span>
            <ChevronUp
              className={`h-5 w-5 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6 pt-0">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className={`w-full bg-[#e8b086] text-white py-3 rounded-lg transition-colors ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#d89b71]'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};