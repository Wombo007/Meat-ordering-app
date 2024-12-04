import React from 'react';
import { Truck, Clock, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { DeliveryCheck } from '../components/DeliveryCheck';

export const GetStarted = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Header />
      <ProgressBar currentStep={1} totalSteps={5} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1d1d1b] mb-6">
            Fresh Meat Delivery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium quality meat delivered to your door. Select your delivery 
            preferences to get started.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto mb-16">
          <div className="flex items-center bg-white rounded-xl shadow-sm p-6 w-full md:w-auto">
            <div className="flex-shrink-0">
              <div className="bg-[#e8b086] p-3 rounded-full">
                <Package className="h-6 w-6 text-[#1d1d1b]" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[#1d1d1b]">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Hand-selected premium cuts</p>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-xl shadow-sm p-6 w-full md:w-auto">
            <div className="flex-shrink-0">
              <div className="bg-[#e8b086] p-3 rounded-full">
                <Truck className="h-6 w-6 text-[#1d1d1b]" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[#1d1d1b]">Free Delivery</h3>
              <p className="text-gray-600 text-sm">Straight to your door</p>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-xl shadow-sm p-6 w-full md:w-auto">
            <div className="flex-shrink-0">
              <div className="bg-[#e8b086] p-3 rounded-full">
                <Clock className="h-6 w-6 text-[#1d1d1b]" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-[#1d1d1b]">Flexible Schedule</h3>
              <p className="text-gray-600 text-sm">Choose your delivery date</p>
            </div>
          </div>
        </div>

        <DeliveryCheck />
      </main>
    </div>
  );
};