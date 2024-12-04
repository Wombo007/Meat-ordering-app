import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { ProductGrid } from '../components/products/ProductGrid';
import { Cart } from '../components/cart/Cart';
import { MobileCart } from '../components/cart/MobileCart';
import { useOrderStore } from '../store/orderStore';
import { shopifyConfig } from '../services/shopify/config';

export const YourItems = () => {
  const navigate = useNavigate();
  const { boxType } = useOrderStore();

  useEffect(() => {
    if (!boxType) {
      navigate('/your-box');
    }
  }, [boxType, navigate]);

  const collectionId = boxType?.id === 'custom' 
    ? shopifyConfig.collections.customBox.id
    : shopifyConfig.collections.curatedBox.id;

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Header />
      <ProgressBar currentStep={4} totalSteps={5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#1d1d1b] mb-8">
              {boxType?.id === 'custom' ? 'Select Your Cuts' : 'Curated Box Contents'}
            </h1>
            <ProductGrid collectionId={collectionId} />
          </div>

          <div className="hidden lg:block w-96">
            <Cart />
          </div>

          <div className="lg:hidden">
            <MobileCart />
          </div>
        </div>
      </div>
    </div>
  );
};