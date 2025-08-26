'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

function ShippingReturnsContent() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shipping & Returns</h1>
          <p className="text-xl text-[var(--gold-light)]">Fast delivery and easy returns</p>
          <p className="text-[var(--gold-lightest)] mt-2">Your satisfaction is our priority</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Quick Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[var(--gold-light)]/10 rounded-lg border border-[var(--gold-light)]/20">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Fast Shipping</h3>
              <p className="text-[var(--navy-medium)]">2-4 days in metro cities</p>
            </div>
            
            <div className="text-center p-6 bg-[var(--gold-light)]/10 rounded-lg border border-[var(--gold-light)]/20">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Secure Packaging</h3>
              <p className="text-[var(--navy-medium)]">Fragrance-safe packaging</p>
            </div>
            
            <div className="text-center p-6 bg-[var(--gold-light)]/10 rounded-lg border border-[var(--gold-light)]/20">
              <div className="text-4xl mb-4">↩️</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Easy Returns</h3>
              <p className="text-[var(--navy-medium)]">7-day return policy</p>
            </div>
          </div>
        </section>

        <div className="prose prose-lg max-w-none">
          
          {/* SHIPPING INFORMATION */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">📦 Shipping Information</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Shipping Areas</h3>
              <p className="text-[var(--navy-medium)] mb-6">
                We currently ship to all locations within India. International shipping will be available soon.
              </p>
              
              <div className="bg-[var(--gold-light)]/10 rounded-lg p-6 border border-[var(--gold-light)]/20 mb-8">
                <h4 className="text-xl font-semibold text-[var(--foreground)] mb-4">Delivery Timeframes</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--navy-medium)]">Metro Cities (Mumbai, Delhi, Bangalore, etc.)</span>
                    <span className="font-semibold text-[var(--foreground)]">2-4 business days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--navy-medium)]">Tier 1 Cities (Pune, Ahmedabad, Kolkata, etc.)</span>
                    <span className="font-semibold text-[var(--foreground)]">3-5 business days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--navy-medium)]">Tier 2 & 3 Cities</span>
                    <span className="font-semibold text-[var(--foreground)]">4-7 business days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--navy-medium)]">Remote Areas & Islands</span>
                    <span className="font-semibold text-[var(--foreground)]">7-10 business days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Shipping Costs</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--gold-light)]/20 rounded-lg">
                  <thead>
                    <tr className="bg-[var(--gold-light)]/10">
                      <th className="border border-[var(--gold-light)]/20 p-4 text-left text-[var(--foreground)]">Order Value</th>
                      <th className="border border-[var(--gold-light)]/20 p-4 text-left text-[var(--foreground)]">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Above ₹2,000</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--foreground)] font-semibold">FREE</td>
                    </tr>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">₹1,000 - ₹1,999</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">₹99</td>
                    </tr>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Below ₹1,000</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">₹149</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Shipping Partners</h3>
              <p className="text-[var(--navy-medium)] mb-4">We work with trusted shipping partners to ensure your orders reach you safely:</p>
              <ul className="list-disc list-inside text-[var(--navy-medium)] mb-6 space-y-2">
                <li>Blue Dart Express</li>
                <li>Delhivery</li>
                <li>Ekart (Flipkart Logistics)</li>
                <li>DTDC Express</li>
                <li>India Post (for remote areas)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Special Packaging</h3>
              <p className="text-[var(--navy-medium)] mb-6">
                Our fragrances are packaged with special care to prevent damage during transit. Each item is wrapped in protective material and placed in a sturdy box with fragrance-safe cushioning.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> All fragrance shipments comply with IATA regulations for the safe transport of perfumes and cosmetics.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Order Tracking</h3>
              <p className="text-[var(--navy-medium)] mb-6">
                Once your order is shipped, you&apos;ll receive a tracking number via email and SMS. You can track your package using:
              </p>
              <ul className="list-disc list-inside text-[var(--navy-medium)] mb-6 space-y-2">
                <li>Your MF Fragrance account dashboard</li>
                <li>Direct tracking on courier partner websites</li>
                <li>WhatsApp updates (if opted in)</li>
                <li>Email and SMS notifications</li>
              </ul>
            </div>
          </section>

          {/* RETURNS & EXCHANGES */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">↩️ Returns & Exchanges</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Return Policy Overview</h3>
              <p className="text-[var(--navy-medium)] mb-6">
                Due to the personal nature of fragrances and hygiene considerations, we have a specific return policy to ensure customer satisfaction while maintaining product quality.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 mb-8">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">✅ Returnable Items</h4>
                <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-2">
                  <li>Damaged or defective products</li>
                  <li>Wrong item delivered</li>
                  <li>Products not matching description</li>
                  <li>Expired products (rare but possible)</li>
                  <li>Leaking or broken bottles</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">❌ Non-Returnable Items</h4>
                <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-2">
                  <li>Used or opened fragrance bottles</li>
                  <li>Products with broken or missing seals</li>
                  <li>Items damaged due to misuse</li>
                  <li>Products purchased on clearance sale</li>
                  <li>Gift sets with missing items</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Return Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--gold-light)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">Contact Us</h4>
                    <p className="text-[var(--navy-medium)]">Email us at returns@mffragrance.com or call +91 98765 43210 within 7 days of delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--gold-light)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">Provide Details</h4>
                    <p className="text-[var(--navy-medium)]">Share your order number, reason for return, and photos if the product is damaged.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--gold-light)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">Return Authorization</h4>
                    <p className="text-[var(--navy-medium)]">We&apos;ll review your request and provide a Return Authorization Number (RAN) if approved.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--gold-light)] text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">Ship the Item</h4>
                    <p className="text-[var(--navy-medium)]">Pack the item securely with the RAN and ship it to our returns center. We&apos;ll provide a prepaid shipping label for eligible returns.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--gold-light)] text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">Processing & Refund</h4>
                    <p className="text-[var(--navy-medium)]">Once we receive and inspect the item, we&apos;ll process your refund within 5-7 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Refund Methods</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--gold-light)]/20 rounded-lg">
                  <thead>
                    <tr className="bg-[var(--gold-light)]/10">
                      <th className="border border-[var(--gold-light)]/20 p-4 text-left text-[var(--foreground)]">Original Payment Method</th>
                      <th className="border border-[var(--gold-light)]/20 p-4 text-left text-[var(--foreground)]">Refund Method</th>
                      <th className="border border-[var(--gold-light)]/20 p-4 text-left text-[var(--foreground)]">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Credit/Debit Card</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Original Card</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">5-7 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">UPI/Wallet</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Bank Transfer</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">3-5 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Cash on Delivery</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Bank Transfer</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">5-7 business days</td>
                    </tr>
                    <tr>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Net Banking</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">Original Account</td>
                      <td className="border border-[var(--gold-light)]/20 p-4 text-[var(--navy-medium)]">3-5 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Exchanges</h3>
              <p className="text-[var(--navy-medium)] mb-6">
                We offer exchanges for damaged or defective products only. If you&apos;d like a different fragrance, please return the original item and place a new order.
              </p>
              
              <div className="bg-[var(--gold-light)]/10 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h4 className="text-lg font-semibold text-[var(--foreground)] mb-3">Exchange Process:</h4>
                <ol className="list-decimal list-inside text-[var(--navy-medium)] space-y-2">
                  <li>Follow the return process above</li>
                  <li>Specify that you want an exchange</li>
                  <li>We&apos;ll send a replacement once we receive the returned item</li>
                  <li>No additional shipping charges for defective items</li>
                </ol>
              </div>
            </div>
          </section>

          {/* CUSTOMER SUPPORT */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">🎧 Customer Support</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--gold-light)]/10 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">📞 Contact Information</h3>
                <div className="space-y-3 text-[var(--navy-medium)]">
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> support@mffragrance.com</p>
                  <p><strong>Returns:</strong> returns@mffragrance.com</p>
                  <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                </div>
              </div>
              
              <div className="bg-[var(--gold-light)]/10 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">🕒 Support Hours</h3>
                <div className="space-y-3 text-[var(--navy-medium)]">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> 11:00 AM - 5:00 PM</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ QUICK LINKS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">❓ Common Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Can I cancel my order after placing it?</h3>
                <p className="text-[var(--navy-medium)]">Yes, you can cancel your order within 1 hour of placing it by calling our customer service. After that, the order enters our fulfillment process and cannot be cancelled.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">What if my package is lost during shipping?</h3>
                <p className="text-[var(--navy-medium)]">If your package is lost during shipping, we&apos;ll work with our courier partner to trace it. If it cannot be located, we&apos;ll send a replacement or provide a full refund.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[var(--gold-light)]/20">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Do you offer same-day delivery?</h3>
                <p className="text-[var(--navy-medium)]">Currently, we offer same-day delivery in select areas of Mumbai and Delhi for orders placed before 12:00 PM. This service is available for an additional charge of ₹299.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ShippingReturnsPage() {
  return (
    <ThemeWrapper>
      <ShippingReturnsContent />
    </ThemeWrapper>
  );
}
