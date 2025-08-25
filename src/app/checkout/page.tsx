'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import { useCart } from '@/contexts/CartContext';
import '../perfume.css';

function CheckoutPageContent() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    // Billing Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Payment Method
    paymentMethod: 'card',
    
    // Special Instructions
    instructions: ''
  });

  // Check if cart is empty and redirect if needed
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
      return;
    }
    setIsLoading(false);
  }, [items.length, router]);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 4500 ? 0 : 200;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      router.push('/order-confirmation');
    }, 2000);
  };

  // Show loading state while checking cart
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--gold-medium)] mx-auto mb-4"></div>
          <p className="text-[var(--foreground)]">Loading checkout...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if cart is empty (will redirect)
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Checkout</h1>
          <p className="text-[var(--navy-medium)]">Complete your order</p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Billing Information */}
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Billing Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Shipping Address</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="flex items-center p-4 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[var(--navy-medium)]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-[var(--foreground)]">Credit/Debit Card</div>
                      <div className="text-sm text-[var(--navy-medium)]">Visa, Mastercard, RuPay</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[var(--navy-medium)]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-[var(--foreground)]">UPI</div>
                      <div className="text-sm text-[var(--navy-medium)]">Pay using UPI</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[var(--navy-medium)]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-[var(--foreground)]">Cash on Delivery</div>
                      <div className="text-sm text-[var(--navy-medium)]">Pay when you receive</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Special Instructions</h2>
              
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                placeholder="Any special delivery instructions..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-[var(--navy-medium)] rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)]"
              />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] sticky top-24">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-[var(--foreground)] text-sm">{item.product.name}</h3>
                      <p className="text-xs text-[var(--navy-medium)]">{item.size}</p>
                      <p className="text-xs text-[var(--navy-medium)]">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-[var(--foreground)]">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 border-t border-gray-200 dark:border-[var(--navy-medium)] pt-4">
                <div className="flex justify-between text-[var(--foreground)]">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-[var(--foreground)]">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                </div>
                
                <div className="flex justify-between text-[var(--foreground)]">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                
                <hr className="border-gray-200 dark:border-[var(--navy-medium)]" />
                
                <div className="flex justify-between text-lg font-bold text-[var(--foreground)]">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                  isProcessing
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-[var(--navy-dark)] text-[var(--gold-light)] hover:bg-[var(--navy-darkest)]'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>

              {/* Security Notice */}
              <div className="mt-4 flex items-center gap-2 text-sm text-[var(--navy-medium)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <ThemeWrapper>
      <CheckoutPageContent />
    </ThemeWrapper>
  );
}
