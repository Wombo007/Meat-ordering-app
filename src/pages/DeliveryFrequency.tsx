import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { useOrderStore } from '../store/orderStore';
import { useDeliveryStore } from '../store/deliveryStore';

const frequencies = [
  { value: 'once', label: 'one time' },
  { value: 'week', label: 'every 1 week' },
  { value: '2-weeks', label: 'every 2 weeks' },
  { value: '4-weeks', label: 'every 4 weeks' },
  { value: '8-weeks', label: 'every 8 weeks' },
];

export const DeliveryFrequency = () => {
  const navigate = useNavigate();
  const { frequency, setFrequency } = useOrderStore();
  const { deliveryInfo } = useDeliveryStore();

  const formatDeliveryDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-AU', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Header />
      <ProgressBar currentStep={3} totalSteps={5} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1d1d1b] mb-2">
              Choose Your Delivery Frequency
            </h1>
            <p className="text-gray-600">Skip, pause or cancel anytime</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-600">
                We'll send you a box{' '}
                <select
                  value={frequency || ''}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="inline-block text-[#1d1d1b] font-semibold border-b-2 border-[#e8b086] focus:outline-none focus:border-[#d89b71] bg-transparent px-2 py-1"
                >
                  <option value="" disabled>Select frequency</option>
                  {frequencies.map((freq) => (
                    <option key={freq.value} value={freq.value}>
                      {freq.label}
                    </option>
                  ))}
                </select>
              </p>
            </div>

            {deliveryInfo && (
              <div className="text-center text-gray-600">
                Your delivery will be on <span className="font-bold">{formatDeliveryDate(deliveryInfo.date)}</span> at <span className="font-bold">{deliveryInfo.time}</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/your-box')}
              className="flex items-center text-gray-600 hover:text-[#1d1d1b] transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <button
              onClick={() => navigate('/your-items')}
              disabled={!frequency}
              className={`flex items-center px-8 py-3 rounded-lg transition-colors ${
                frequency
                  ? 'bg-[#e8b086] text-white hover:bg-[#d89b71]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};