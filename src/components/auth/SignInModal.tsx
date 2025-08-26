'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SignInModalProps {
  onClose: () => void;
  onSignIn: (email: string) => void;
}

export default function SignInModal({ onClose, onSignIn }: SignInModalProps) {
  const [email, setEmail] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (email.includes('@')) {
      onSignIn(email);
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <div className="fixed inset-0 bg-navy-darkest/80 backdrop-blur-sm z-50 flex justify-center items-center fade-in">
      <div className="bg-navy-dark border border-gold-light/10 rounded-2xl shadow-2xl text-gold-lightest max-w-md w-full m-4">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/logo.png" 
                alt="MF Fragrance Logo" 
                width={60} 
                height={60}
                className="object-contain opacity-90"
              />
            </div>
            <h2 className="text-4xl font-bold text-gold-lightest">Sign In</h2>
            <p className="text-gold-light/70 mt-2">Enter your email to access your account.</p>
          </div>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gold-light/80 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-navy-darkest/50 border border-gold-light/20 rounded-lg text-gold-lightest focus:outline-none focus:ring-2 focus:ring-gold-medium focus:border-gold-medium transition-all"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row-reverse gap-4">
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gold-medium text-navy-darkest font-semibold hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full px-6 py-3 rounded-lg text-gold-light/80 hover:bg-navy-light/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gold-light/60">
            <p>
              Don&apos;t have an account?{' '}
              <button className="font-semibold text-gold-light/80 hover:text-gold-light transition-colors">
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
