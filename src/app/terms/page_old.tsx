import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-isabelline dark:bg-navy-darkest">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/70">Please read these terms and conditions carefully before using our services.</p>
          <p className="text-sm text-white/60 mt-4">Last updated: August 25, 2025</p>
        </div>
      </section>
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Terms Content */}
        <div className="bg-white dark:bg-navy-dark rounded-lg border border-rose-quartz/20 dark:border-gold-light/20 p-8 space-y-8">
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    By accessing and using the MF Fragrance website and services, you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, please do 
                    not use this service.
                  </p>
                  <p>
                    These Terms & Conditions apply to all visitors, users, and others who access or use our services.
                  </p>
                </div>
              </div>

              {/* Use License */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  2. Use License
                </h2>
                <div className="text-gold-lightest space-y-4">
                  <p>
                    Permission is granted to temporarily download one copy of the materials on MF Fragrance&apos;s website 
                    for personal, non-commercial transitory viewing only.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">This license shall not permit you to:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>
                  
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be 
                    terminated by MF Fragrance at any time.
                  </p>
                </div>
              </div>

              {/* Account Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  3. Account Terms
                </h2>
                <div className="text-gold-lightest space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Account Creation</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>You must be 18 years or older to create an account</li>
                      <li>You must provide accurate and complete information</li>
                      <li>You are responsible for maintaining account security</li>
                      <li>You are responsible for all activities under your account</li>
                      <li>One person or legal entity may not maintain more than one account</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Account Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Keep your password secure and confidential</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Update your information to keep it accurate</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Products and Orders */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  4. Products and Orders
                </h2>
                <div className="text-gold-lightest space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Product Information</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>We strive for accuracy in product descriptions and pricing</li>
                      <li>Colors and images may vary from actual products</li>
                      <li>We reserve the right to correct errors and update information</li>
                      <li>Product availability is subject to change without notice</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Order Processing</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Orders are subject to acceptance and availability</li>
                      <li>We reserve the right to refuse any order</li>
                      <li>Payment must be received before order processing</li>
                      <li>Order confirmation does not guarantee product availability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Pricing</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>All prices are listed in USD unless otherwise stated</li>
                      <li>Prices are subject to change without notice</li>
                      <li>Shipping costs and taxes are additional</li>
                      <li>We reserve the right to correct pricing errors</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  5. Payment Terms
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Payment is due at the time of order placement</li>
                    <li>We accept major credit cards and approved payment methods</li>
                    <li>All transactions are processed securely</li>
                    <li>You authorize us to charge your payment method for all fees</li>
                    <li>You are responsible for any bank fees or charges</li>
                    <li>Failed payments may result in order cancellation</li>
                  </ul>
                </div>
              </div>

              {/* Shipping and Delivery */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  6. Shipping and Delivery
                </h2>
                <div className="text-gold-lightest space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Shipping Policy</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Shipping times are estimates and not guaranteed</li>
                      <li>Risk of loss passes to you upon delivery to carrier</li>
                      <li>We are not responsible for shipping delays beyond our control</li>
                      <li>Additional fees may apply for expedited shipping</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Delivery Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Someone must be available to receive the package</li>
                      <li>You must provide accurate shipping information</li>
                      <li>Delivery attempts are limited</li>
                      <li>Additional charges may apply for redelivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Returns and Refunds */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  7. Returns and Refunds
                </h2>
                <div className="text-gold-lightest space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Return Policy</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Items must be returned within 30 days of purchase</li>
                      <li>Items must be unopened and in original condition</li>
                      <li>Original packaging and tags must be included</li>
                      <li>Return shipping costs are customer&apos;s responsibility</li>
                      <li>Some items may not be eligible for return</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gold-light mb-2">Refund Process</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Refunds are processed to the original payment method</li>
                      <li>Processing time is 5-10 business days after receipt</li>
                      <li>Shipping charges are non-refundable</li>
                      <li>Partial refunds may apply for damaged items</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  8. Intellectual Property Rights
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    The service and its original content, features, and functionality are and will remain the exclusive 
                    property of MF Fragrance and its licensors. The service is protected by copyright, trademark, and 
                    other laws.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All trademarks, logos, and brand names are our property</li>
                    <li>You may not use our intellectual property without permission</li>
                    <li>User content remains your property but you grant us usage rights</li>
                    <li>We respect intellectual property rights of others</li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  9. Prohibited Uses
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>You may not use our service:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations or laws</li>
                    <li>To infringe upon or violate our intellectual property rights or others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To collect or track personal information of others</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  10. Disclaimer
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted 
                    by law, this Company:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Excludes all representations and warranties relating to this website and its contents</li>
                    <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                    <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                    <li>Makes no warranties about the availability or functionality of the service</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  11. Limitation of Liability
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    In no event shall MF Fragrance, nor its directors, employees, partners, agents, suppliers, or 
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                    resulting from your use of the service.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  12. Governing Law
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of New York, without regard 
                    to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                    will not be considered a waiver of those rights.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  13. Changes to Terms
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will try to provide at least 30 days notice prior to any new terms 
                    taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our service after those revisions become effective, you agree to 
                    be bound by the revised terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gold-medium border-opacity-30 pt-8">
                <h2 className="text-2xl font-bold text-gold-light mb-4">
                  Contact Information
                </h2>
                <div className="text-gold-lightest space-y-3">
                  <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@mffragrance.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Fragrance Avenue, New York, NY 10001, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
