'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RegisterModalProps {
  onClose: () => void;
  onRegister: (name: string, email: string, password: string) => void;
  onSwitchToSignIn: () => void;
}

export default function RegisterModal({ onClose, onRegister, onSwitchToSignIn }: RegisterModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    onRegister(name, email, password);
  };

  return (
    <div className="fixed inset-0 bg-navy-darkest/80 backdrop-blur-sm z-50 flex justify-center items-center fade-in">
      <div className="bg-[#f2e9e4] rounded-lg shadow-2xl max-w-md w-full m-4">
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
            <h2 className="text-4xl font-bold text-[var(--navy-darkest)]">Register</h2>
            <p className="text-[var(--navy-dark)] mt-2">Create your account to access exclusive features</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ritisha Bale"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ritisha.bale@example.com"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                required
              />
            </div>
            
            <div className="flex flex-col sm:flex-row-reverse gap-4 pt-2">
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-[var(--navy-darkest)] text-[var(--gold-lightest)] font-semibold hover:bg-[var(--navy-dark)] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full px-6 py-3 rounded-lg text-[var(--navy-dark)] border border-[var(--navy-dark)]/30 hover:bg-[var(--navy-darkest)]/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
          
          <div className="text-center text-sm text-[var(--navy-dark)]">
            <p>
              Already have an account?{' '}
              <button 
                onClick={onSwitchToSignIn}
                className="font-semibold text-[var(--navy-darkest)] hover:underline transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
          
          <div className="text-center text-xs text-[var(--navy-dark)]/70 pt-4">
            <p>By registering, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
