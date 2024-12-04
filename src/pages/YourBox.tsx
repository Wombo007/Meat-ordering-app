import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { BoxOption } from '../components/BoxOption';
import { useOrderStore } from '../store/orderStore';

const boxTypes = [
  {
    id: 'curated',
    name: 'Curated Box',
    description: 'Let our expert butchers select the perfect mix of premium cuts for you. Each box is carefully curated to provide a balanced variety of meats.',
    image: 'https://images.unsplash.com/photo-1551198297-094dd136d3e9?w=800&h=600&fit=crop'
  },
  {
    id: 'custom',
    name: 'Custom Box',
    description: 'Build your own box by selecting from our range of premium cuts. Choose exactly what you want and create your perfect combination.',
    image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=800&h=600&fit=crop'
  }
];

export const YourBox = () => {
  const navigate = useNavigate();
  const { boxType, setBoxType } = useOrderStore();

  const handleBoxSelect = (selectedBox: typeof boxTypes[0]) => {
    setBoxType(selectedBox);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Header />
      <ProgressBar currentStep={2} totalSteps={5} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1d1d1b] mb-4">
            Choose Your Box Type
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our curated boxes or build your own custom box
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {boxTypes.map((box) => (
            <BoxOption
              key={box.id}
              title={box.name}
              description={box.description}
              image={box.image}
              isSelected={boxType?.id === box.id}
              onClick={() => handleBoxSelect(box)}
            />
          ))}
        </div>

        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-[#1d1d1b] transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <button
            onClick={() => navigate('/delivery-frequency')}
            disabled={!boxType}
            className={`flex items-center px-8 py-3 rounded-lg transition-colors ${
              boxType
                ? 'bg-[#e8b086] text-white hover:bg-[#d89b71]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </main>
    </div>
  );
};