'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignInModal from '../auth/SignInModal';

interface HeaderProps {
  isScrolled?: boolean;
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
}

export default function Header({ theme = 'dark', onThemeToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push(`/profile?email=${userEmail}`);
    } else {
      setShowSignInModal(true);
    }
  };

  const handleSignIn = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowSignInModal(false);
    router.push(`/profile?email=${email}`);
  };

  return (
    <>
      <header className={`nav-bar px-4 py-4 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <h1 className="nav-logo text-3xl font-bold tracking-tight cursor-pointer">
                  MF fragrance
                </h1>
              </Link>
            </div>

            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link font-medium hover:text-gold-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="nav-link font-medium hover:text-gold-medium transition-colors">
                Shop
              </Link>
              <Link href="/collections" className="nav-link font-medium hover:text-gold-medium transition-colors">
                Collections
              </Link>
              <Link href="/about" className="nav-link font-medium hover:text-gold-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="nav-link font-medium hover:text-gold-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              {onThemeToggle && (
                <button 
                  onClick={onThemeToggle} 
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  aria-label="Toggle theme"
                >
                  <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
              )}

              {/* Search */}
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors" aria-label="Search">
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User Account */}
              <button 
                onClick={handleProfileClick}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors" 
                aria-label="Account"
              >
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Shopping Cart */}
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors relative" aria-label="Shopping cart">
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6-7h.01M19 11h.01" />
                </svg>
                <span className="nav-badge absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/" 
                  className="nav-link font-medium py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="nav-link font-medium py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link 
                  href="/collections" 
                  className="nav-link font-medium py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link 
                  href="/about" 
                  className="nav-link font-medium py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="nav-link font-medium py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
      {showSignInModal && (
        <SignInModal 
          onClose={() => setShowSignInModal(false)} 
          onSignIn={handleSignIn} 
        />
      )}
    </>
  );
}