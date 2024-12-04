import React from 'react';
import { ChevronDown, Search, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export const Navigation = () => {
  const { items, total } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-[#3f2c1d] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-ranchwater text-center">
            <span className="block text-4xl leading-none">CALUGA</span>
            <span className="block text-[1.7rem] leading-tight">FARM</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white flex items-center space-x-1">
                <span>SHOP BEEF</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-white flex items-center space-x-1">
                <span>ABOUT US</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="text-white">FAQ</button>
            <button className="text-white">CONTACT US</button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <div className="text-white flex items-center">
              <span>Australia | AUD $</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            <button className="text-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white flex items-center">
              <ShoppingBag className="w-5 h-5" />
              <span className="ml-1 text-sm">
                {totalItems > 0 && `${totalItems}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};