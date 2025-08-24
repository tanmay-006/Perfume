'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';

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
  showQuickActions = false,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

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
      className={`bg-white dark:bg-[var(--navy-darkest)] rounded-xl shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] overflow-hidden hover:shadow-lg transition-all duration-300 group ${
        !isListView ? '' : 'flex gap-4 h-48'
      }`}
    >
      {/* Product Image */}
      <div className={`relative ${isListView ? 'w-48 h-full flex-shrink-0' : 'aspect-[3/4]'} overflow-hidden`}>
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
            <div className="bg-[var(--navy-dark)] text-[var(--gold-light)] px-2 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </div>
          )}
          {product.isNew && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </div>
          )}
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={`p-4 flex flex-col ${isListView ? 'flex-1' : ''}`}>
        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-[var(--navy-darkest)] dark:text-[var(--gold-lightest)] hover:text-[var(--navy-dark)] dark:hover:text-[var(--gold-light)] transition-colors duration-200 mb-1">
            {product.name}
          </h3>
        </Link>

        {/* Subtitle - Only show in list view */}
        {isListView && product.subtitle && (
          <p className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] mb-2">
            {product.subtitle}
          </p>
        )}

        {/* Description - Only show in list view */}
        {isListView && product.description && (
          <p className="text-sm text-[var(--navy-light)] dark:text-[var(--navy-light)] mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 dark:text-[var(--navy-medium)]'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)]">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Available Sizes - Only show in list view */}
        {isListView && product.sizes && product.sizes.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] mb-1">Available sizes:</p>
            <div className="flex gap-1 flex-wrap">
              {product.sizes.map((size, index) => (
                <span key={index} className="text-xs bg-gray-100 dark:bg-[var(--navy-medium)] text-[var(--navy-dark)] dark:text-[var(--gold-lightest)] px-2 py-1 rounded">
                  {size.size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && product.originalPrice > product.price ? (
            <>
              <span className="text-xl font-bold text-[var(--navy-dark)] dark:text-[var(--gold-light)]">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-[var(--navy-darkest)] dark:text-[var(--gold-lightest)]">
              ₹{product.price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto pt-2">
          {isListView ? (
            <>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <Link
                href={`/products/${product.id}`}
                className="flex-1 bg-white dark:bg-[var(--navy-dark)] border border-[var(--navy-dark)] dark:border-[var(--gold-medium)] text-[var(--navy-dark)] dark:text-[var(--gold-light)] hover:bg-[var(--navy-lightest)] dark:hover:bg-[var(--navy-medium)] px-4 py-2 rounded-lg transition-colors duration-200 text-center flex items-center justify-center"
              >
                View Details
              </Link>
            </>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
