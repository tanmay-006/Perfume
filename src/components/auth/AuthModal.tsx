'use client';

import { useState } from 'react';
import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'register';
}

interface ExtendedAuthModalProps extends AuthModalProps {
  onSignIn?: (email: string) => void;
}

export default function AuthModal({ isOpen, onClose, initialMode = 'signin', onSignIn }: ExtendedAuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'register'>(initialMode);

  if (!isOpen) return null;

  const handleSignIn = (email: string) => {
    // Call the parent component's onSignIn if provided
    if (onSignIn) {
      onSignIn(email);
    } else {
      // Default implementation
      console.log('Signing in with:', email);
      onClose();
    }
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Implement registration logic
    console.log('Registering:', { name, email, password });
    // In a real app, you would call an API or Auth service
    onClose();
  };

  const switchToSignIn = () => setMode('signin');
  const switchToRegister = () => setMode('register');

  return (
    <>
      {mode === 'signin' && (
        <SignInModal
          onClose={onClose}
          onSignIn={handleSignIn}
          onSwitchToRegister={switchToRegister}
        />
      )}
      
      {mode === 'register' && (
        <RegisterModal
          onClose={onClose}
          onRegister={handleRegister}
          onSwitchToSignIn={switchToSignIn}
        />
      )}
    </>
  );
}
