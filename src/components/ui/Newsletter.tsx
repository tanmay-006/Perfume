'use client';

import { useState } from 'react';

interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
}

export default function Newsletter({
  title = "Stay Updated with New Arrivals",
  description = "Be the first to discover our latest fragrances and exclusive offers",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  onSubmit
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-navy-medium to-navy-darkest">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8">
            <svg 
              className="w-16 h-16 mx-auto mb-4 text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-gold-lightest">
              Thank you for subscribing!
            </h3>
            <p className="text-lg text-gold-lightest">
              You'll be the first to know about our new arrivals and exclusive offers.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-navy-medium to-navy-darkest">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gold-lightest">
          {title}
        </h2>
        <p className="mb-8 text-lg text-gold-lightest">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-gold-medium bg-gold-lightest text-navy-darkest placeholder-navy-medium"
                disabled={isSubmitting}
              />
              {error && (
                <p className="text-red-300 text-sm mt-2 text-left">{error}</p>
              )}
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 rounded-full font-semibold bg-gold-medium text-navy-darkest hover:bg-gold-light hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Subscribing...
                </>
              ) : (
                buttonText
              )}
            </button>
          </div>
        </form>

        <p className="text-sm mt-4 text-gold-light">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
