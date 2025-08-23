'use client';

import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

interface FeaturedProductsProps {
  title: string;
  description?: string;
  products: Product[];
  columns?: 2 | 3 | 4 | 5;
  viewAllLink?: string;
}

export default function FeaturedProducts({
  title,
  description,
  products,
  columns = 5,
  viewAllLink
}: FeaturedProductsProps) {
  // Define the grid column classes based on the columns prop
  const gridColsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 lg:grid-cols-5"
  }[columns];

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridColsClass} gap-6`}>
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <Link href={`/products/${product.id}`}>
                <div className="relative mb-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src={product.images?.[0] || product.image}
                      alt={product.name}
                      width={200}
                      height={266}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-earth-dark text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="space-y-2">
                <h3 className="product-name font-semibold text-sm">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="product-price font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="product-original-price text-sm line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="product-rating-text text-xs">({product.rating})</span>
                  </div>
                  <span className="product-rating-text text-xs">{product.reviews} reviews</span>
                </div>
                <button className="add-to-cart-button w-full py-2 rounded-lg font-semibold text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {viewAllLink && (
          <div className="text-center mt-12">
            <Link href={viewAllLink} className="inline-block px-6 py-3 rounded-full border border-earth-dark text-earth-dark hover:bg-earth-dark hover:text-white transition-colors font-medium">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
