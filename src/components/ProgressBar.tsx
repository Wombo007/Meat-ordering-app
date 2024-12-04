import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Package, Calendar, ShoppingCart, CreditCard } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { 
    name: 'Delivery',
    icon: MapPin,
    route: '/'
  },
  {
    name: 'Box Type',
    icon: Package,
    route: '/your-box'
  },
  {
    name: 'Frequency',
    icon: Calendar,
    route: '/delivery-frequency'
  },
  {
    name: 'Items',
    icon: ShoppingCart,
    route: '/your-items'
  },
  {
    name: 'Checkout',
    icon: CreditCard,
    route: '/checkout'
  }
];

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const navigate = useNavigate();

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      navigate(steps[step - 1].route);
    }
  };

  return (
    <div className="w-full bg-white border-t border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="relative">
          <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-100">
            <div
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#3f2c1d] transition-all duration-500"
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index + 1 <= currentStep;
              const isClickable = index + 1 < currentStep;

              return (
                <button
                  key={index}
                  onClick={() => handleStepClick(index + 1)}
                  className={`flex flex-col items-center transition-colors ${
                    isClickable
                      ? 'cursor-pointer hover:text-[#3f2c1d]'
                      : !isActive
                      ? 'cursor-not-allowed text-gray-400'
                      : 'cursor-default'
                  } ${isActive ? 'text-[#3f2c1d]' : ''}`}
                  disabled={!isClickable && !isActive}
                >
                  <Icon className={`h-5 w-5 mb-1 ${isActive ? 'text-[#3f2c1d]' : 'text-gray-400'}`} />
                  <span className={`text-xs font-medium ${isActive ? 'text-[#3f2c1d]' : 'text-gray-400'}`}>
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};