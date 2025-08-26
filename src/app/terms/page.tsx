import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-isabelline dark:bg-navy-darkest">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center pt-8">
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
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Acceptance of Terms
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms and Conditions govern your use of MF Fragrance website and services. By using our website, 
                you agree to comply with these terms.
              </p>
            </div>
          </div>

          {/* Use License */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Use License
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>Permission is granted to temporarily download one copy of the materials on MF Fragrance's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by MF Fragrance at any time.</p>
            </div>
          </div>

          {/* Products and Services */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Products and Services
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Product Information</h3>
                <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Pricing and Availability</h3>
                <p>All prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing, or suspected fraud.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Order Acceptance</h3>
                <p>Your receipt of an electronic or other form of order confirmation does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell.</p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Payment Terms
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>Payment must be received by us before we dispatch your order. We accept the following payment methods:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Credit Cards (Visa, Mastercard, American Express)</li>
                <li>Debit Cards</li>
                <li>Digital Wallets (PayPal, Apple Pay, Google Pay)</li>
                <li>Bank Transfer</li>
                <li>Cash on Delivery (where available)</li>
              </ul>
              <p>All payment information is encrypted and processed securely. We do not store your payment details on our servers.</p>
            </div>
          </div>

          {/* Shipping and Delivery */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Shipping and Delivery
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Delivery Times</h3>
                <p>We aim to dispatch orders within 1-2 business days. Delivery times vary by location:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Local delivery: 1-2 business days</li>
                  <li>Domestic shipping: 3-7 business days</li>
                  <li>International shipping: 7-21 business days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Shipping Costs</h3>
                <p>Shipping costs are calculated at checkout based on your location and order value. Free shipping is available for orders over ₹4,500.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Risk of Loss</h3>
                <p>All items purchased from MF Fragrance are made pursuant to a shipment contract. Risk of loss and title for items pass to you upon delivery to the carrier.</p>
              </div>
            </div>
          </div>

          {/* Returns and Refunds */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Returns and Refunds
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Return Policy</h3>
                <p>You may return unopened items within 30 days of delivery for a full refund. Due to health and safety regulations, opened fragrance products cannot be returned unless defective.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Return Process</h3>
                <p>To initiate a return:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Contact our customer service within 30 days</li>
                  <li>Provide your order number and reason for return</li>
                  <li>Receive return authorization and shipping label</li>
                  <li>Package items securely and ship back to us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Refund Processing</h3>
                <p>Refunds will be processed within 5-10 business days after we receive your returned items. Refunds will be issued to the original payment method.</p>
              </div>
            </div>
          </div>

          {/* User Accounts */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              User Accounts
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>When creating an account, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Maintaining the confidentiality of your password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information is current and accurate</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Prohibited Uses
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>You may not use our website for any of the following prohibited activities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting harmful, offensive, or inappropriate content</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the website's operation or security</li>
                <li>Impersonating others or providing false information</li>
                <li>Using automated systems to access our website</li>
                <li>Collecting user information without permission</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Intellectual Property Rights
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                The content, organization, graphics, design, and other matters related to the website are protected under 
                applicable copyrights and other proprietary laws. Copying, redistributing, or republishing any such content 
                is strictly prohibited without written permission.
              </p>
              <p>
                All trademarks, service marks, and trade names are proprietary to MF Fragrance or other respective owners 
                that have granted us the right and license to use such marks.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Disclaimer
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, 
                MF Fragrance excludes all representations, warranties, or conditions relating to our website and the use of this website.
              </p>
              <p>Nothing in this disclaimer will:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>limit or exclude our or your liability for death or personal injury</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Limitation of Liability
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                In no event shall MF Fragrance, its directors, employees, or agents be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of your use of the website or services.
              </p>
              <p>
                Our total liability to you for all damages shall not exceed the amount paid by you for the products or services.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Governing Law
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, India.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Changes to Terms
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                We reserve the right to update these Terms and Conditions at any time. When we do, we will post the 
                updated terms on this page and update the &quot;Last updated&quot; date. Your continued use of the website 
                after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-rose-quartz/30 dark:border-gold-medium/30 pt-8">
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Contact Information
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@mffragrance.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Fragrance Avenue, New York, NY 10001, United States</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
