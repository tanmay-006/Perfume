'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-[var(--gold-light)]">We&apos;d love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold-light)]/20 rounded-xl flex items-center justify-center text-[var(--gold-medium)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Visit Our Store</h3>
                  <p className="text-[var(--navy-medium)]">
                    123 Fragrance Street, Bandra West<br />
                    Mumbai, Maharashtra 400050<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold-light)]/20 rounded-xl flex items-center justify-center text-[var(--gold-medium)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Call Us</h3>
                  <p className="text-[var(--navy-medium)]">
                    +91 98765 43210<br />
                    +91 98765 43211<br />
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold-light)]/20 rounded-xl flex items-center justify-center text-[var(--gold-medium)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Email Us</h3>
                  <p className="text-[var(--navy-medium)]">
                    info@mffragrance.com<br />
                    support@mffragrance.com<br />
                    orders@mffragrance.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold-light)]/20 rounded-xl flex items-center justify-center text-[var(--gold-medium)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Business Hours</h3>
                  <p className="text-[var(--navy-medium)]">
                    Monday - Friday: 9:00 AM - 9:00 PM<br />
                    Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[var(--navy-dark)] rounded-2xl p-8 shadow-xl border border-[var(--gold-light)]/20">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Message Sent!</h3>
                <p className="text-[var(--navy-medium)] mb-6">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-lg font-semibold hover:bg-[var(--gold-light)] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--gold-light)]/30 rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--gold-light)]/30 rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[var(--gold-light)]/30 rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--gold-light)]/30 rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="product">Product Question</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-[var(--gold-light)]/30 rounded-lg bg-white dark:bg-[var(--navy-darkest)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-medium)] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-[var(--gold-medium)] text-[var(--navy-darkest)] hover:bg-[var(--gold-light)]'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[var(--foreground)] text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-[var(--gold-light)]/20">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">How long does shipping take?</h3>
              <p className="text-[var(--navy-medium)]">We offer free shipping on orders above ₹4,500. Standard delivery takes 3-5 business days, while express delivery takes 1-2 business days.</p>
            </div>
            
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-[var(--gold-light)]/20">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">What is your return policy?</h3>
              <p className="text-[var(--navy-medium)]">We offer a 30-day return policy for unopened products. Items must be in original condition with all packaging materials.</p>
            </div>
            
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-[var(--gold-light)]/20">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">Do you offer gift wrapping?</h3>
              <p className="text-[var(--navy-medium)]">Yes! We offer complimentary luxury gift wrapping for all orders. You can add a personalized message during checkout.</p>
            </div>
            
            <div className="bg-white dark:bg-[var(--navy-dark)] rounded-xl p-6 shadow-sm border border-[var(--gold-light)]/20">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">Are your fragrances authentic?</h3>
              <p className="text-[var(--navy-medium)]">Absolutely. All our fragrances are 100% authentic and sourced directly from authorized distributors and perfume houses.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <ThemeWrapper>
      <ContactPageContent />
    </ThemeWrapper>
  );
}
