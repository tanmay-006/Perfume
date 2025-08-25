'use client';

import { useState } from 'react';
import { Category, FilterState } from '@/types/product';

interface ProductFilterProps {
  categories: Category[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isVisible?: boolean;
  onToggleVisibility?: () => void;
}

export default function ProductFilter({ 
  categories, 
  filters, 
  onFiltersChange,
  isVisible = true,
  onToggleVisibility 
}: ProductFilterProps) {
  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handlePriceRangeChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    newRange[index] = value;
    updateFilter('priceRange', newRange);
  };

  const resetFilters = () => {
    onFiltersChange({
      category: 'all',
      priceRange: [0, 22500],
      inStock: false,
      newArrivals: false,
      onSale: false,
      freeShipping: false
    });
  };

  return (
    <div className="lg:w-1/4">
      <div className="product-filter-sidebar p-6 sticky top-24">
        {/* Mobile Filter Toggle */}
        <button
          className="lg:hidden w-full flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-lg"
          onClick={onToggleVisibility}
        >
          <span className="font-semibold">Filters</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isVisible ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`space-y-6 ${isVisible ? 'block' : 'hidden lg:block'}`}>
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            <button
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Reset All
            </button>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => updateFilter('category', category.id)}
                  className={`filter-category-button ${
                    filters.category === category.id ? 'active' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{filters.priceRange[0].toLocaleString()}</span>
                <span>₹{filters.priceRange[1].toLocaleString()}</span>
              </div>
              <div className="px-3">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(0, parseInt(e.target.value) || 0)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-dark focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, parseInt(e.target.value) || 500)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-dark focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Quick Filters</h4>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.inStock}
                  onChange={(e) => updateFilter('inStock', e.target.checked)}
                  className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                />
                <span className="text-sm text-gray-600">In Stock Only</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.newArrivals}
                  onChange={(e) => updateFilter('newArrivals', e.target.checked)}
                  className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                />
                <span className="text-sm text-gray-600">New Arrivals</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.onSale}
                  onChange={(e) => updateFilter('onSale', e.target.checked)}
                  className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                />
                <span className="text-sm text-gray-600">On Sale</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.freeShipping}
                  onChange={(e) => updateFilter('freeShipping', e.target.checked)}
                  className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </label>
            </div>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Popular Brands</h4>
            <div className="space-y-2">
              {['Odora', 'Luxury Collection', 'Heritage Series', 'Signature'].map((brand) => (
                <label key={brand} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sizes</h4>
            <div className="space-y-2">
              {['30ml', '50ml', '100ml', '150ml'].map((size) => (
                <label key={size} className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-3 rounded border-gray-300 text-navy-dark focus:ring-navy-dark h-4 w-4" 
                  />
                  <span className="text-sm text-gray-600">{size}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
