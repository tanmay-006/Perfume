'use client';

import { useState } from 'react';

interface SignInModalProps {
  onClose: () => void;
  onSignIn: (email: string) => void;
}

export default function SignInModal({ onClose, onSignIn }: SignInModalProps) {
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    // Basic email validation
    if (email.includes('@')) {
      onSignIn(email);
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl text-gray-800 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <p className="mb-6">Enter your email to sign in or create an account.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gold-medium"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 rounded-md bg-gold-dark text-white hover:bg-gold-medium transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
