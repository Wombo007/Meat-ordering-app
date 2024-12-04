import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  "Bovaer Free! No methane reducing additives of any kind.",
  "FREE Shipping on all orders over $250. Shipping orders weekly, Australia wide!"
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="relative bg-[#e1d6c7] text-[#3f2c1d] py-2">
      <div className="flex items-center justify-center">
        <button 
          onClick={handlePrevious}
          className="absolute left-4 p-1 hover:bg-[#d4c5b1] rounded-full transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <p className="text-sm font-ranchwater tracking-wide px-12 text-center transition-opacity duration-300">
          {announcements[currentIndex]}
        </p>
        <button 
          onClick={handleNext}
          className="absolute right-4 p-1 hover:bg-[#d4c5b1] rounded-full transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};