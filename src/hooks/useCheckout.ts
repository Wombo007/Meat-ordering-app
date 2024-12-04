import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { useDeliveryStore } from '../store/deliveryStore';
import { useOrderStore } from '../store/orderStore';
import { shopifyClient } from '../services/shopify/client';
import { sealClient } from '../services/seal/client';
import { CreateSubscriptionPayload } from '../services/seal/types';

export const useCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { items, clearCart } = useCartStore();
  const { deliveryInfo } = useDeliveryStore();
  const { frequency } = useOrderStore();

  const processCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      // Convert cart items to Shopify line items
      const lineItems = items.map(item => ({
        variantId: item.id,
        quantity: item.quantity,
        customAttributes: [
          {
            key: 'delivery_date',
            value: deliveryInfo?.date || '',
          },
          {
            key: 'delivery_time',
            value: deliveryInfo?.time || '',
          },
          {
            key: 'delivery_frequency',
            value: frequency || 'once',
          },
          // Add subscription flag if this is a subscription order
          ...(frequency && frequency !== 'once' ? [{
            key: 'is_subscription',
            value: 'true'
          }] : [])
        ],
      }));

      // Create Shopify checkout
      const checkoutUrl = await shopifyClient.createCheckout(lineItems);

      // If this is a subscription order, store the subscription details
      if (frequency && frequency !== 'once') {
        const subscriptionData = {
          items,
          frequency,
          deliveryInfo,
          checkoutUrl
        };
        
        // Store subscription data in localStorage to be processed after successful checkout
        localStorage.setItem('pendingSubscription', JSON.stringify(subscriptionData));
        
        // Listen for successful checkout completion
        window.addEventListener('message', async (event) => {
          if (event.data.type === 'checkout:completed') {
            const checkoutData = event.data.checkout;
            
            try {
              const interval = sealClient.getIntervalFromFrequency(frequency);
              
              const subscriptionPayload: CreateSubscriptionPayload = {
                action: 'create_subscription',
                subscription: {
                  next_billing_date: new Date(deliveryInfo?.date || '').toISOString(),
                  billing_min_cycles: 0,
                  billing_max_cycles: 0,
                  interval_type: interval.type,
                  interval_number: interval.number,
                  billing_interval_type: interval.type,
                  billing_interval_number: interval.number,
                  email: checkoutData.email,
                  currency: 'AUD',
                  delivery_method_type: 'SubscriptionDeliveryMethodShipping',
                  shipping: {
                    first_name: checkoutData.shipping_address.first_name,
                    last_name: checkoutData.shipping_address.last_name,
                    address1: checkoutData.shipping_address.address1,
                    address2: checkoutData.shipping_address.address2 || '',
                    phone: checkoutData.shipping_address.phone,
                    city: checkoutData.shipping_address.city,
                    zip: deliveryInfo?.postcode || '',
                    province: checkoutData.shipping_address.province,
                    country: 'Australia',
                    country_code: 'AU',
                    province_code: checkoutData.shipping_address.province_code
                  },
                  billing: {
                    first_name: checkoutData.billing_address.first_name,
                    last_name: checkoutData.billing_address.last_name,
                    address1: checkoutData.billing_address.address1,
                    address2: checkoutData.billing_address.address2 || '',
                    phone: checkoutData.billing_address.phone,
                    city: checkoutData.billing_address.city,
                    zip: checkoutData.billing_address.zip,
                    province: checkoutData.billing_address.province,
                    country: 'Australia',
                    country_code: 'AU',
                    province_code: checkoutData.billing_address.province_code
                  },
                  items: items.map(item => ({
                    product_id: item.id,
                    variant_id: item.id,
                    title: item.name,
                    price: item.price.toString(),
                    sku: null,
                    total_discount: 0,
                    taxable: 0,
                    requires_shipping: 1,
                    subsc_discount_percent: 0,
                    quantity: item.quantity,
                    properties: [],
                    one_time: 0
                  })),
                  subscription_type: 'auto-charging',
                  delivery_price: '0.00',
                  delivery_method_title: 'Standard Shipping',
                  delivery_method_presentment_title: 'Standard Shipping',
                  delivery_method_code: 'standard',
                  delivery_method_description: '',
                  customer_id: checkoutData.customer_id,
                  payment_method_id: checkoutData.payment_method_id
                }
              };

              await sealClient.createSubscription(subscriptionPayload);
              localStorage.removeItem('pendingSubscription');
            } catch (error) {
              console.error('Failed to create subscription:', error);
            }
          }
        });
      }

      // Clear the cart
      clearCart();

      // Redirect to Shopify checkout
      window.location.href = checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process checkout');
      setLoading(false);
    }
  };

  return {
    processCheckout,
    loading,
    error,
  };
};