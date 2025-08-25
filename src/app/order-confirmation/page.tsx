'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

function OrderConfirmationContent() {
  const orderNumber = `MF${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">Order Confirmed!</h1>
          <p className="text-xl text-[var(--navy-medium)] mb-2">Thank you for your purchase</p>
          <p className="text-[var(--navy-medium)]">Order #{orderNumber}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Order Details */}
          <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[var(--navy-medium)]">Order Number:</span>
                <span className="font-medium text-[var(--foreground)]">{orderNumber}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-[var(--navy-medium)]">Order Date:</span>
                <span className="font-medium text-[var(--foreground)]">{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-[var(--navy-medium)]">Estimated Delivery:</span>
                <span className="font-medium text-[var(--foreground)]">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-[var(--navy-medium)]">Payment Status:</span>
                <span className="font-medium text-green-600 dark:text-green-400">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[var(--navy-medium)]">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Delivery Information</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-[var(--navy-medium)] text-sm">Shipping Address:</p>
                <p className="font-medium text-[var(--foreground)]">
                  Your Address<br />
                  City, State - PIN Code
                </p>
              </div>
              
              <div>
                <p className="text-[var(--navy-medium)] text-sm">Shipping Method:</p>
                <p className="font-medium text-[var(--foreground)]">Standard Delivery (5-7 business days)</p>
              </div>
              
              <div>
                <p className="text-[var(--navy-medium)] text-sm">Tracking Number:</p>
                <p className="font-medium text-[var(--foreground)]">Will be provided via email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">What's Next?</h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-400">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Order confirmation email sent to your inbox
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Your order is being prepared for shipment
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You'll receive tracking information within 24 hours
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Estimated delivery in 5-7 business days
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-3 bg-[var(--navy-dark)] text-[var(--gold-light)] rounded-lg font-semibold hover:bg-[var(--navy-darkest)] transition-colors text-center"
          >
            Continue Shopping
          </Link>
          
          <Link
            href="/profile"
            className="px-8 py-3 border border-[var(--navy-dark)] text-[var(--navy-dark)] rounded-lg font-semibold hover:bg-[var(--navy-dark)] hover:text-[var(--gold-light)] transition-colors text-center"
          >
            Track Order
          </Link>
        </div>

        {/* Customer Support */}
        <div className="text-center mt-12 p-6 bg-gray-50 dark:bg-[var(--navy-medium)] rounded-xl">
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Need Help?</h3>
          <p className="text-[var(--navy-medium)] mb-4">
            Our customer support team is here to help with any questions about your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@mffragrance.com"
              className="text-[var(--navy-dark)] hover:text-[var(--navy-medium)] transition-colors"
            >
              📧 support@mffragrance.com
            </a>
            <a
              href="tel:+918000000000"
              className="text-[var(--navy-dark)] hover:text-[var(--navy-medium)] transition-colors"
            >
              📞 +91 8000000000
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <ThemeWrapper>
      <OrderConfirmationContent />
    </ThemeWrapper>
  );
}
