import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-isabelline dark:bg-navy-darkest">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/70">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
          <p className="text-sm text-white/60 mt-4">Last updated: August 25, 2025</p>
        </div>
      </section>
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Privacy Policy Content */}
        <div className="bg-white dark:bg-navy-dark rounded-lg border border-rose-quartz/20 dark:border-gold-light/20 p-8 space-y-8">
              
          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 text-ultra-violet dark:text-pale-dogwood">
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Personal Information</h3>
                <p>When you create an account, place an order, or contact us, we may collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Payment and billing information</li>
                  <li>Order history and preferences</li>
                  <li>Customer service interactions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              How We Use Your Information
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Improve our products and services</li>
                <li>Personalize your shopping experience</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and ensure website security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Information Sharing and Disclosure
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-4">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Service Providers</h3>
                <p>We work with trusted third-party service providers who help us operate our business, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Payment processors</li>
                  <li>Shipping and logistics partners</li>
                  <li>Email marketing services</li>
                  <li>Analytics providers</li>
                  <li>Customer service platforms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Legal Requirements</h3>
                <p>We may disclose your information when required by law or to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Comply with legal processes</li>
                  <li>Respond to government requests</li>
                  <li>Protect our rights and property</li>
                  <li>Ensure user safety</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Data Security
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>PCI DSS compliance for payment processing</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. 
                We cannot guarantee absolute security but are committed to protecting your data.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Cookies and Tracking Technologies
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-4">
              <p>We use cookies and similar technologies to enhance your browsing experience:</p>
              
              <div>
                <h3 className="text-lg font-semibold text-space-cadet dark:text-isabelline mb-2">Types of Cookies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>

              <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Your Rights and Choices
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@mffragrance.com or use our contact form.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Data Retention
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide our services and support</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our products and services</li>
              </ul>
              <p className="mt-4">
                When we no longer need your information, we securely delete or anonymize it.
              </p>
            </div>
          </div>

          {/* International Transfers */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              International Data Transfers
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during international transfers, 
                including standard contractual clauses and adequacy decisions.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Children&apos;s Privacy
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected such 
                information, we will take steps to delete it promptly.
              </p>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div>
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Changes to This Privacy Policy
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website and updating the &quot;Last updated&quot; date. We encourage you 
                to review this policy periodically.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-rose-quartz/30 dark:border-gold-medium/30 pt-8">
            <h2 className="text-2xl font-bold text-space-cadet dark:text-isabelline mb-4">
              Contact Us
            </h2>
            <div className="text-ultra-violet dark:text-pale-dogwood space-y-3">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@mffragrance.com</p>
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
