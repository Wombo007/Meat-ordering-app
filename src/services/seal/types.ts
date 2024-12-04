export interface SealAddress {
  first_name: string;
  last_name: string;
  address1: string;
  address2?: string;
  phone: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  company?: string;
  country_code: string;
  province_code: string;
}

export interface SealSubscriptionItem {
  product_id: string;
  variant_id: string;
  title: string;
  price: string;
  sku: string | null;
  total_discount: number;
  taxable: number;
  requires_shipping: number;
  subsc_discount_percent: number;
  quantity: number;
  properties: Array<{
    key: string;
    value: string;
  }>;
  one_time: number;
}

export interface CreateSubscriptionPayload {
  action: 'create_subscription';
  subscription: {
    next_billing_date: string;
    billing_min_cycles: number;
    billing_max_cycles: number;
    interval_type: 'day' | 'week' | 'month';
    interval_number: number;
    billing_interval_type: 'day' | 'week' | 'month';
    billing_interval_number: number;
    email: string;
    currency: string;
    delivery_method_type: 'SubscriptionDeliveryMethodShipping' | 'SubscriptionDeliveryMethodLocalDelivery' | 'SubscriptionDeliveryMethodPickup';
    shipping: SealAddress;
    billing: SealAddress;
    items: SealSubscriptionItem[];
    subscription_type: 'auto-charging' | 'recurring-invoices';
    delivery_price: string;
    delivery_method_title: string;
    delivery_method_presentment_title: string;
    delivery_method_code: string;
    delivery_method_description: string;
    customer_id: string;
    payment_method_id: string;
    note?: string;
    note_attributes?: Array<{
      name: string;
      value: string;
    }>;
  };
}

export interface SealApiResponse {
  success: boolean;
  message?: string;
  subscription_id?: string;
  errors?: string[];
}