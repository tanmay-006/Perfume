'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import '../perfume.css';

function CartPageContent() {
  const { items: cartItems, updateQuantity, removeItem } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    const validCodes = {
      'WELCOME10': 10,
      'FRAGRANCE20': 20,
      'NEWUSER15': 15
    };

    if (validCodes[promoCode as keyof typeof validCodes]) {
      setAppliedPromo(promoCode);
      setDiscount(validCodes[promoCode as keyof typeof validCodes]);
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setDiscount(0);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (discount / 100);
  const shipping = subtotal > 4500 ? 0 : 200; // Free shipping over ₹4500
  const tax = (subtotal - discountAmount) * 0.18; // 18% GST
  const total = subtotal - discountAmount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--background)]">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
          <div className="max-w-4xl mx-auto text-center pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-white/70">Discover our luxury fragrances and add them to your cart.</p>
          </div>
        </section>
        
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
              </svg>
            </div>
            <p className="text-ultra-violet dark:text-pale-dogwood mb-8">Discover our luxury fragrances and add them to your cart.</p>
            <Link 
              href="/products"
              className="inline-block bg-ultra-violet dark:bg-navy-dark text-isabelline dark:text-gold-light px-8 py-3 rounded-lg font-semibold hover:bg-space-cadet dark:hover:bg-navy-darkest transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4">Shopping Cart</h1>
          <p className="text-xl text-white/70">Review your items and proceed to checkout.</p>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-ultra-violet dark:text-pale-dogwood">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-space-cadet dark:text-isabelline">
                          <Link href={`/products/${item.product.id}`} className="hover:text-ultra-violet dark:hover:text-pale-dogwood transition-colors">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-ultra-violet dark:text-pale-dogwood">{item.product.subtitle}</p>
                        <p className="text-sm text-rose-quartz dark:text-navy-light">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-[var(--navy-medium)] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[var(--navy-medium)] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center font-medium text-space-cadet dark:text-isabelline">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-[var(--navy-medium)] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[var(--navy-medium)] transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-space-cadet dark:text-isabelline">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-sm text-ultra-violet dark:text-pale-dogwood">
                            ₹{item.price.toLocaleString()} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] sticky top-24">
              <h2 className="text-xl font-bold text-space-cadet dark:text-isabelline mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-space-cadet dark:text-isabelline mb-2">
                  Promo Code
                </label>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div>
                      <span className="text-green-800 dark:text-green-400 font-medium">{appliedPromo}</span>
                      <span className="text-green-600 dark:text-green-300 text-sm ml-2">({discount}% off)</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Enter promo code"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-space-cadet dark:text-isabelline focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-[var(--navy-dark)] text-[var(--gold-light)] rounded-lg hover:bg-[var(--navy-darkest)] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-space-cadet dark:text-isabelline">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount ({discount}%)</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-space-cadet dark:text-isabelline">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                </div>
                
                <div className="flex justify-between text-space-cadet dark:text-isabelline">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                
                <hr className="border-gray-200 dark:border-[var(--navy-medium)]" />
                
                <div className="flex justify-between text-lg font-bold text-space-cadet dark:text-isabelline">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {shipping > 0 && (
                <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    Add ₹{(4500 - subtotal).toLocaleString()} more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-ultra-violet dark:bg-navy-dark text-isabelline dark:text-gold-light py-4 rounded-xl font-semibold text-lg hover:bg-space-cadet dark:hover:bg-navy-darkest transition-colors mb-4">
                  Proceed to Checkout
                </button>
              </Link>

              {/* Continue Shopping */}
              <Link 
                href="/products"
                className="block w-full text-center border border-ultra-violet dark:border-navy-dark text-ultra-violet dark:text-navy-dark py-3 rounded-xl font-semibold hover:bg-ultra-violet dark:hover:bg-navy-dark hover:text-isabelline dark:hover:text-gold-light transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Security Notice */}
              <div className="mt-6 flex items-center gap-2 text-sm text-ultra-violet dark:text-pale-dogwood">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-8">You might also like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-space-cadet dark:text-isabelline mb-1">{product.name}</h3>
                    <p className="text-sm text-ultra-violet dark:text-pale-dogwood mb-2">{product.subtitle}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-space-cadet dark:text-isabelline">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CartPage() {
  return (
    <ThemeWrapper>
      <CartPageContent />
    </ThemeWrapper>
  );
}
