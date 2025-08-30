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
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    
    // In a real app, you would validate credentials with an API
    // For now, we'll just check if both fields are filled
    onSignIn(email);
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
            <p className="text-[#3a3b45] text-sm mb-4">Enter your credentials to access your account.</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
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
                className="w-full px-4 py-3 rounded-lg bg-[#f2e9e4] border border-[#dbd3cd] text-[#3a3b45] focus:outline-none focus:ring-2 focus:ring-[#1a1b25] focus:border-[#1a1b25] transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#3a3b45] mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-[#f2e9e4] border border-[#dbd3cd] text-[#3a3b45] focus:outline-none focus:ring-2 focus:ring-[#1a1b25] focus:border-[#1a1b25] transition-all"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#1a1b25] focus:ring-[#1a1b25] border-[#dbd3cd] rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#3a3b45]">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-[#1a1b25] hover:underline"
                  onClick={() => setError('Password reset functionality coming soon!')}
                >
                  Forgot password?
                </button>
              </div>
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