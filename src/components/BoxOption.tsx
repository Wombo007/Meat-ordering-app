import React from 'react';
import { Check } from 'lucide-react';

interface BoxOptionProps {
  title: string;
  description: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export const BoxOption: React.FC<BoxOptionProps> = ({
  title,
  description,
  image,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-xl shadow-sm cursor-pointer transform transition-all duration-300 
        ${isSelected 
          ? 'ring-4 ring-[#e8b086] scale-[1.02] shadow-lg' 
          : 'hover:scale-[1.01] hover:shadow-md border border-gray-100'
        }`}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-[#e8b086] rounded-full p-3 shadow-md border-2 border-white z-10">
          <Check className="h-6 w-6 text-white" />
        </div>
      )}
      <div className={`p-6 ${isSelected ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          {isSelected && (
            <div className="absolute inset-0 rounded-lg ring-4 ring-[#e8b086] ring-opacity-50"></div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-[#1d1d1b] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};