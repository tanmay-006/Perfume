'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isListView?: boolean;
  showQuickActions?: boolean;
  onAddToCart?: (productId: number) => void;
  onAddToWishlist?: (productId: number) => void;
  onQuickView?: (productId: number) => void;
}

export default function ProductCard({
  product,
  isListView = false,
  showQuickActions = true,
  onAddToCart,
  onAddToWishlist,
  onQuickView
}: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart && product.inStock) {
      onAddToCart(product.id);
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToWishlist) {
      onAddToWishlist(product.id);
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onQuickView) {
      onQuickView(product.id);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group ${
        !isListView ? '' : 'flex gap-6'
      }`}
    >
      {/* Product Image */}
      <div className={`relative ${isListView ? 'w-64 h-64 flex-shrink-0' : 'aspect-[3/4]'} overflow-hidden`}>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
              isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.badge && (
            <div className="bg-navy-dark text-gold-light px-2 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </div>
          )}
          {product.isNew && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </div>
          )}
          {discountPercentage > 0 && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{discountPercentage}%
            </div>
          )}
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        
        {/* Quick Actions */}
        {showQuickActions && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col gap-2">
              <button 
                onClick={handleAddToWishlist}
                className="product-quick-action hover:shadow-xl transition-shadow"
                aria-label="Add to wishlist"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button 
                onClick={handleQuickView}
                className="product-quick-action hover:shadow-xl transition-shadow"
                aria-label="Quick view"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons - Appear on hover */}
        <div className="absolute bottom-4 right-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
              product.inStock
                ? 'bg-navy-dark text-gold-light hover:bg-navy-medium'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-lg hover:text-navy-dark transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-xl font-bold text-navy-dark">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
