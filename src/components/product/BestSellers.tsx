'use client';

import Image from "next/image";
import { Product } from "@/types/product";

interface BestSellerProps {
  title?: string;
  description?: string;
  products: Product[];
}

export default function BestSellers({
  title = "Best Sellers",
  description = "Our most loved fragrances by customers",
  products
}: BestSellerProps) {
  return (
    <section className="px-4 py-16 best-sellers-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="section-title text-3xl lg:text-4xl font-bold mb-4" 
            style={{color: "var(--earth-darkest)"}}
          >
            {title}
          </h2>
          <p 
            className="section-description" 
            style={{color: "var(--earth-dark)"}}
          >
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <div className="relative mb-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={product.images?.[0] || "/images/placeholder.jpg"}
                    alt={product.name}
                    width={250}
                    height={333}
                    className="product-image w-full h-full object-cover"
                  />
                </div>
                {product.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold product-badge">
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold product-name-dark">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold product-price-gold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="line-through" style={{color: "var(--navy-medium)"}}>
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-navy-medium">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm" style={{color: "var(--navy-dark)"}}>({product.rating})</span>
                  </div>
                  <span className="text-sm" style={{color: "var(--navy-dark)"}}>{product.reviews} reviews</span>
                </div>
                <button className="w-full py-3 rounded-xl font-semibold transition-all hover:opacity-90 add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
