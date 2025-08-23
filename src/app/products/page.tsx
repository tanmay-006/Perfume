'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';
import Newsletter from '@/components/ui/Newsletter';
import Footer from '@/components/layout/Footer';
import { Product, FilterState } from '@/types/product';
import { products, categories, sortOptions } from '@/data/products';
import '../perfume.css';

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 500],
    inStock: false,
    newArrivals: false,
    onSale: false,
    freeShipping: false
  });
  
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    
    // Price range filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    
    // In stock filter
    if (filters.inStock && !product.inStock) {
      return false;
    }
    
    // New arrivals filter
    if (filters.newArrivals && !product.isNew) {
      return false;
    }
    
    // On sale filter
    if (filters.onSale && !product.originalPrice) {
      return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew ? 1 : -1;
      case 'popular':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  // Event handlers
  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
    // Implement cart logic
  };

  const handleAddToWishlist = (productId: number) => {
    console.log('Add to wishlist:', productId);
    // Implement wishlist logic
  };

  const handleQuickView = (productId: number) => {
    console.log('Quick view:', productId);
    // Implement quick view modal
  };

  const handleNewsletterSubmit = async (email: string) => {
    console.log('Newsletter subscription:', email);
    // Implement newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      {/* Header */}
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Fragrance Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite range of luxury perfumes crafted with the finest ingredients
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <ProductFilter
            categories={categories}
            filters={filters}
            onFiltersChange={setFilters}
            isVisible={showFilters}
            onToggleVisibility={() => setShowFilters(!showFilters)}
          />

          {/* Product Grid */}
          <ProductGrid
            products={currentProducts}
            isGridView={isGridView}
            currentPage={currentPage}
            totalPages={totalPages}
            sortBy={sortBy}
            sortOptions={sortOptions}
            onViewToggle={setIsGridView}
            onSortChange={setSortBy}
            onPageChange={setCurrentPage}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onQuickView={handleQuickView}
          />
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter onSubmit={handleNewsletterSubmit} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
