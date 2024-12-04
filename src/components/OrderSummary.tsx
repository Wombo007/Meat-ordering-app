import React from 'react';
import { useDeliveryStore } from '../store/deliveryStore';
import { useOrderStore } from '../store/orderStore';

export const OrderSummary: React.FC = () => {
  const { deliveryInfo } = useDeliveryStore();
  const { boxType } = useOrderStore();

  if (!deliveryInfo || !boxType) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#1d1d1b] mb-4">Order Summary</h3>
      <div className="space-y-4">
        <div className="border-b border-gray-100 pb-4">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Box Type</h4>
          <p className="text-[#1d1d1b] font-medium">{boxType.name}</p>
        </div>
        <div className="border-b border-gray-100 pb-4">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Delivery Details</h4>
          <p className="text-[#1d1d1b]">Postcode: {deliveryInfo.postcode}</p>
          <p className="text-[#1d1d1b]">
            {new Date(deliveryInfo.date).toLocaleDateString('en-AU', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}
          </p>
          <p className="text-[#1d1d1b]">{deliveryInfo.time}</p>
        </div>
      </div>
    </div>
  );
};