import React from 'react';
import { Check } from 'lucide-react';

interface FrequencyOptionProps {
  value: string;
  label: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FrequencyOption: React.FC<FrequencyOptionProps> = ({
  value,
  label,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-300
        ${
          isSelected
            ? 'ring-4 ring-[#e8b086] scale-[1.02] shadow-lg'
            : 'hover:scale-[1.01] hover:shadow-md border border-gray-100'
        }`}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-[#e8b086] rounded-full p-3 shadow-md border-2 border-white z-10">
          <Check className="h-6 w-6 text-white" />
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[#1d1d1b]">{label}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};