'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

function FAQContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "🛒 Orders & Payment",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "Simply browse our collection, add items to your cart, and proceed to checkout. You'll need to provide shipping information and choose a payment method. We accept UPI, cards, net banking, and cash on delivery."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept UPI (PhonePe, Google Pay, Paytm), Credit/Debit Cards (Visa, MasterCard, Rupay), Net Banking, and Cash on Delivery (COD). All payments are processed securely."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can cancel your order within 1 hour of placing it by calling our customer service at +91 98765 43210. After that, the order enters our fulfillment process and cannot be modified or cancelled."
        },
        {
          question: "Why was my payment declined?",
          answer: "Payment declines can happen due to insufficient funds, card limits, or bank security measures. Please check with your bank or try a different payment method. Our customer service can help resolve payment issues."
        },
        {
          question: "Do you offer EMI options?",
          answer: "Yes, we offer No Cost EMI on orders above ₹3,000 for select credit cards. EMI options are available for 3, 6, and 12 months. Check available EMI options during checkout."
        }
      ]
    },
    {
      title: "🚚 Shipping & Delivery",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Delivery times vary by location: Metro cities (2-4 days), Tier 1 cities (3-5 days), Tier 2 & 3 cities (4-7 days), and remote areas (7-10 days). You'll receive tracking information once your order ships."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free shipping on orders above ₹2,000. For orders between ₹1,000-₹1,999, shipping costs ₹99. Orders below ₹1,000 have a shipping charge of ₹149."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once shipped, you'll receive a tracking number via email and SMS. You can track your package through your account dashboard or directly on the courier partner's website."
        },
        {
          question: "What if I'm not home during delivery?",
          answer: "Our delivery partners will attempt delivery 2-3 times. If unsuccessful, the package will be held at the local delivery center for 7 days. You'll receive notifications with pickup details."
        },
        {
          question: "Do you offer same-day delivery?",
          answer: "Yes, we offer same-day delivery in select areas of Mumbai and Delhi for orders placed before 12:00 PM. This premium service costs an additional ₹299."
        },
        {
          question: "Can I change my delivery address?",
          answer: "You can change your delivery address within 2 hours of placing the order by contacting customer service. After that, address changes may not be possible if the order has already been dispatched."
        }
      ]
    },
    {
      title: "💳 Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "Due to hygiene considerations, we accept returns only for damaged, defective, or wrong products delivered. Returns must be initiated within 7 days of delivery. Unopened products with intact seals are eligible for return."
        },
        {
          question: "How do I return a product?",
          answer: "Email returns@mffragrance.com with your order number and reason for return. We'll provide a Return Authorization Number (RAN) and prepaid shipping label for eligible returns."
        },
        {
          question: "How long do refunds take?",
          answer: "Once we receive and inspect the returned item, refunds are processed within 5-7 business days. The time for the amount to reflect in your account depends on your bank/payment method."
        },
        {
          question: "Can I exchange a product?",
          answer: "We offer exchanges only for damaged or defective products. If you want a different fragrance, please return the original item and place a new order. We'll process the return and you can order your preferred product."
        },
        {
          question: "What if I received a damaged product?",
          answer: "If you receive a damaged product, contact us immediately with photos of the damage. We'll arrange for a replacement or full refund at no additional cost to you."
        }
      ]
    },
    {
      title: "🌸 Products & Fragrances",
      faqs: [
        {
          question: "Are your perfumes authentic?",
          answer: "Yes, all our perfumes are 100% authentic and sourced directly from authorized distributors and brands. We guarantee the authenticity of every product we sell."
        },
        {
          question: "How should I store my perfumes?",
          answer: "Store perfumes in a cool, dry place away from direct sunlight and heat. Keep them in their original boxes when possible. Avoid storing in bathrooms due to humidity and temperature fluctuations."
        },
        {
          question: "What's the shelf life of perfumes?",
          answer: "Most perfumes have a shelf life of 3-5 years when stored properly. Each product page shows the manufacturing date and recommended usage period. Unopened perfumes last longer than opened ones."
        },
        {
          question: "Can I try before buying?",
          answer: "Currently, we don't offer physical samples, but we provide detailed fragrance notes and customer reviews to help you choose. We're working on introducing a sample program soon."
        },
        {
          question: "Do you have gift wrapping?",
          answer: "Yes, we offer complimentary gift wrapping for orders above ₹1,500. You can select this option during checkout. We use elegant packaging perfect for special occasions."
        },
        {
          question: "Are your products cruelty-free?",
          answer: "We prioritize cruelty-free brands and clearly mention this information on product pages. Many of our featured brands do not test on animals and follow ethical practices."
        }
      ]
    },
    {
      title: "👤 Account & Profile",
      faqs: [
        {
          question: "Do I need an account to place an order?",
          answer: "While you can checkout as a guest, creating an account allows you to track orders, save addresses, view order history, and receive personalized recommendations."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. Check your spam folder if you don't see the email."
        },
        {
          question: "Can I save multiple addresses?",
          answer: "Yes, you can save multiple shipping addresses in your account profile. This makes it convenient to ship to different locations like home, office, or as gifts to friends and family."
        },
        {
          question: "How do I update my profile information?",
          answer: "Log into your account and go to the Profile section. You can update your name, email, phone number, and addresses. Changes are saved automatically."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can request account deletion by emailing privacy@mffragrance.com. We'll process your request within 7-10 business days in accordance with our privacy policy."
        }
      ]
    },
    {
      title: "🎯 Promotions & Offers",
      faqs: [
        {
          question: "How do I use promo codes?",
          answer: "Enter your promo code in the 'Promo Code' field during checkout and click 'Apply'. The discount will be reflected in your order total. Promo codes cannot be combined unless specified."
        },
        {
          question: "Can I use multiple discount codes?",
          answer: "Generally, only one promo code can be used per order. However, some special promotions allow stacking. The terms and conditions of each offer will specify if stacking is allowed."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "We're launching our loyalty program soon! Members will earn points on purchases, get exclusive discounts, early access to sales, and special birthday offers. Stay tuned for updates."
        },
        {
          question: "How do I stay updated on sales and offers?",
          answer: "Subscribe to our newsletter, follow us on social media, or enable push notifications on our website. We regularly send updates about sales, new arrivals, and exclusive offers."
        },
        {
          question: "Do you offer student discounts?",
          answer: "Yes, we offer a 10% student discount on verification through StudentBeans or UNiDAYS. The discount applies to most products except sale items and cannot be combined with other offers."
        }
      ]
    },
    {
      title: "📞 Customer Support",
      faqs: [
        {
          question: "How can I contact customer support?",
          answer: "You can reach us via phone (+91 98765 43210), email (support@mffragrance.com), WhatsApp (+91 98765 43210), or live chat on our website. We're here to help Monday-Friday 9 AM-7 PM, Saturday 10 AM-6 PM, and Sunday 11 AM-5 PM."
        },
        {
          question: "What information should I have when contacting support?",
          answer: "Please have your order number, email address, and a clear description of your issue. For returns or exchanges, include photos if the product is damaged. This helps us assist you faster."
        },
        {
          question: "How quickly do you respond to inquiries?",
          answer: "We aim to respond to all inquiries within 24 hours during business days. Urgent issues are typically addressed within 4-6 hours. Response times may be longer during peak seasons or holidays."
        },
        {
          question: "Do you have a physical store?",
          answer: "Currently, we operate online only, but we're planning to open physical stores in major cities soon. This allows us to offer competitive prices and a wider selection of products."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-[var(--gold-light)]">Find answers to common questions</p>
          <p className="text-[var(--gold-lightest)] mt-2">Need more help? Contact our support team</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Search Box */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 pl-12 border border-[var(--gold-light)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold-light)] bg-[var(--background)] text-[var(--foreground)]"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--navy-medium)]">
              🔍
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--gold-light)]/20">
              <div className="p-6 border-b border-[var(--gold-light)]/20">
                <h2 className="text-2xl font-bold text-[var(--foreground)]">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-[var(--gold-light)]/20">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 1000 + faqIndex; // Unique index for each FAQ
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left flex items-center justify-between focus:outline-none"
                      >
                        <h3 className="text-lg font-semibold text-[var(--foreground)] pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 text-[var(--gold-light)] text-xl font-bold">
                          {openFAQ === globalIndex ? '−' : '+'}
                        </div>
                      </button>
                      
                      {openFAQ === globalIndex && (
                        <div className="mt-4 text-[var(--navy-medium)] leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <section className="mt-16 bg-[var(--gold-light)]/10 rounded-lg p-8 border border-[var(--gold-light)]/20 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Still have questions?</h2>
          <p className="text-[var(--navy-medium)] mb-6">
            Can&apos;t find what you&apos;re looking for? Our customer support team is here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Phone Support</h3>
              <p className="text-[var(--navy-medium)] text-sm">+91 98765 43210</p>
              <p className="text-[var(--navy-medium)] text-sm">Mon-Fri: 9 AM - 7 PM</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Email Support</h3>
              <p className="text-[var(--navy-medium)] text-sm">support@mffragrance.com</p>
              <p className="text-[var(--navy-medium)] text-sm">Response within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-1">WhatsApp</h3>
              <p className="text-[var(--navy-medium)] text-sm">+91 98765 43210</p>
              <p className="text-[var(--navy-medium)] text-sm">Quick responses</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--gold-dark)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--gold-medium)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 text-center">Popular Help Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/shipping" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-[var(--gold-light)]/20 hover:border-[var(--gold-light)] transition-colors text-center">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold text-[var(--foreground)] text-sm">Shipping Info</h3>
            </a>
            
            <a href="/terms" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-[var(--gold-light)]/20 hover:border-[var(--gold-light)] transition-colors text-center">
              <div className="text-2xl mb-2">📜</div>
              <h3 className="font-semibold text-[var(--foreground)] text-sm">Terms & Conditions</h3>
            </a>
            
            <a href="/privacy-policy" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-[var(--gold-light)]/20 hover:border-[var(--gold-light)] transition-colors text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-[var(--foreground)] text-sm">Privacy Policy</h3>
            </a>
            
            <a href="/contact" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-[var(--gold-light)]/20 hover:border-[var(--gold-light)] transition-colors text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold text-[var(--foreground)] text-sm">Contact Us</h3>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default function FAQPage() {
  return (
    <ThemeWrapper>
      <FAQContent />
    </ThemeWrapper>
  );
}
