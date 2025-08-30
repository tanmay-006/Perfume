'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SignInModalProps {
  onClose: () => void;
  onSignIn: (email: string) => void;
  onSwitchToRegister: () => void;
}

export default function SignInModal({ onClose, onSignIn, onSwitchToRegister }: SignInModalProps) {
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
      <div className="bg-[#f2e9e4] rounded-lg shadow-2xl text-gold-lightest max-w-md w-full m-4">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Image 
                src="/logo.png" 
                alt="MF Fragrance Logo" 
                width={40} 
                height={40}
                className="object-contain opacity-70"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1b25] mb-1">Sign In</h2>
            <p className="text-[#3a3b45] text-sm mb-4">Enter your email to access your account.</p>
          </div>
          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3a3b45] mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#f2e9e4] border border-[#dbd3cd] text-[#3a3b45] focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-row justify-between mt-6 gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-lg bg-[#f2e9e4] text-[#3a3b45] border border-[#dbd3cd] hover:bg-[#e8e0db] w-1/2 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-[#1a1b25] font-semibold shadow-md w-1/2"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-[#3a3b45] mt-4">
            <p>
              Don&apos;t have an account?{' '}
              <button 
                onClick={onSwitchToRegister}
                className="font-semibold text-[#1a1b25] hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}