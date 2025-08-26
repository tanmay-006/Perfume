'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

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
  onAddToCart,
}: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock && product.sizes.length > 0) {
      // Add the default size (usually 50ml) to cart
      const defaultSize = product.sizes.find(size => size.size === '50ml') || product.sizes[0];
      addToCart(product, defaultSize.size, 1);
    }
    if (onAddToCart && product.inStock) {
      onAddToCart(product.id);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className={`bg-white dark:bg-[var(--navy-darkest)] rounded-xl shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] overflow-hidden hover:shadow-lg transition-all duration-300 group ${
        !isListView ? '' : 'flex gap-4 h-auto'
      }`}
    >
      {/* Product Image */}
      <div className={`relative ${isListView ? 'w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-76 flex-shrink-0' : 'aspect-[3/4]'} overflow-hidden`}>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
            onLoad={() => setIsImageLoading(false)}
          />
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          {/* Gradient overlay that appears on hover to ensure text visibility */}
          {!isListView && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3">
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-all duration-300 ${
              isInWishlist(product.id)
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
            } backdrop-blur-sm shadow-sm hover:shadow-md`}
            aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart 
              className={`w-4 h-4 transition-all duration-300 ${
                isInWishlist(product.id) ? 'fill-current' : ''
              }`} 
            />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={` ${isListView ? 'flex-1 flex flex-col p-4' : 'relative overflow-visible'}`}>
        {/* Grid Mode - All Content (Moves up on hover to reveal button) */}
        {!isListView && (
          <div className="bg-white dark:bg-[var(--navy-darkest)] group-hover:bg-white/95 dark:group-hover:bg-[var(--navy-darkest)]/95 p-4 rounded-b-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-12 relative z-10">
            {/* Product Name */}
            <Link href={`/products/${product.id}`}>
              <h3 className="text-lg font-semibold text-[var(--navy-darkest)] dark:text-[var(--gold-lightest)] group-hover:text-white dark:group-hover:text-[var(--gold-lightest)] hover:text-[var(--navy-dark)] dark:hover:text-[var(--gold-light)] transition-colors duration-200 mb-1">
                {product.name}
              </h3>
            </Link>

            {/* Subtitle */}
            {product.subtitle && (
              <p className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] group-hover:text-gray-200 dark:group-hover:text-[var(--navy-light)] mb-2 line-clamp-2">
                {product.subtitle}
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
                        : 'text-gray-300 dark:text-[var(--navy-medium)] group-hover:text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] group-hover:text-gray-200 dark:group-hover:text-[var(--navy-light)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              {product.originalPrice && product.originalPrice > product.price ? (
                <>
                  <span className="text-xl font-bold text-[var(--navy-dark)] dark:text-[var(--gold-light)] group-hover:text-white dark:group-hover:text-[var(--gold-light)]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] group-hover:text-gray-300 dark:group-hover:text-[var(--navy-light)] line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400 group-hover:text-green-300">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-[var(--navy-darkest)] dark:text-[var(--gold-lightest)] group-hover:text-white dark:group-hover:text-[var(--gold-lightest)]">
                  ₹{product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Add to Cart Button - Positioned absolutely, only visible on hover */}
        {!isListView && (
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 z-20">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        )}

        {/* List Mode - Full Layout */}
        {isListView && (
          <>
            {/* Top Section - Name, Rating, Subtitle */}
            <div className="flex-1">
              {/* Product Name */}
              <Link href={`/products/${product.id}`}>
                <h3 className="text-lg font-semibold text-[var(--navy-darkest)] dark:text-[var(--gold-lightest)] hover:text-[var(--navy-dark)] dark:hover:text-[var(--gold-light)] transition-colors duration-200 mb-1">
                  {product.name}
                </h3>
              </Link>

              {/* Subtitle - Only show in list view */}
              {product.subtitle && (
                <p className="text-sm text-[var(--navy-medium)] dark:text-[var(--navy-light)] mb-2">
                  {product.subtitle}
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

              {/* Description - Only show in list view on desktop */}
              {product.description && (
                <p className="hidden md:block text-sm text-[var(--navy-light)] dark:text-[var(--navy-light)] mb-3 line-clamp-3">
                  {product.description}
                </p>
              )}

              {/* Available Sizes - Only show in list view on desktop */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="hidden md:block mb-3">
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
            </div>

            {/* Bottom Section - Price and Buttons */}
            <div className="mt-auto pt-3">
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
              <div className="flex gap-2 flex-row">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-2 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed text-xs sm:text-sm"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  <span className="sm:hidden">{product.inStock ? 'Add' : 'N/A'}</span>
                </button>
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 bg-white dark:bg-[var(--navy-dark)] border border-[var(--navy-dark)] dark:border-[var(--gold-medium)] text-[var(--navy-dark)] dark:text-[var(--gold-light)] hover:bg-[var(--navy-lightest)] dark:hover:bg-[var(--navy-medium)] px-2 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors duration-200 text-center flex items-center justify-center text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">View Details</span>
                  <span className="sm:hidden">View</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
