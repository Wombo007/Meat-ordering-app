import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { CartItem } from './CartItem';
import { shopifyClient } from '../../services/shopify/client';
import { useDeliveryStore } from '../../store/deliveryStore';

export const Cart = () => {
  const { items, total } = useCartStore();
  const { deliveryInfo } = useDeliveryStore();
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      
      const lineItems = items.map(item => ({
        id: item.id,
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
      setError(error instanceof Error ? error.message : 'There was an error processing your checkout. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ShoppingBag className="h-6 w-6 text-[#1d1d1b] mr-3" />
          <h2 className="text-xl font-semibold text-[#1d1d1b]">Your Cart</h2>
        </div>
        <span className="text-sm text-gray-500">{items.length} items</span>
      </div>

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
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}
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
  );
};