'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import SignInModal from '../auth/SignInModal';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled: initialScrolled }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(initialScrolled || false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const { wishlistCount } = useWishlist();

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
      <header className={`nav-bar px-4 py-4 ${isScrolled ? 'scrolled' : ''} ${theme === 'light' ? 'nav-bar-light' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Image 
                    src="/logo.png" 
                    alt="MF Fragrance Logo" 
                    width={50} 
                    height={50}
                    className="object-contain"
                  />
                  <h1 className="nav-logo text-xl font-bold lg:text-2xl tracking-tight" style={{color: 'var(--isabelline) !important'}}>
                    MF Fragrance
                  </h1>
                </div>
              </Link>
            </div>

            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-4">
              <Link 
                href="/" 
                className={`nav-link text-lg transition-all duration-300 hover:opacity-80 ${
                  pathname === '/' ? 'border-b-2' : ''
                }`} 
                style={{
                  color: 'var(--isabelline) !important',
                  borderColor: pathname === '/' ? 'var(--isabelline)' : 'transparent'
                }}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`nav-link text-lg transition-all duration-300 hover:opacity-80 ${
                  pathname === '/products' ? 'border-b-2' : ''
                }`} 
                style={{
                  color: 'var(--isabelline) !important',
                  borderColor: pathname === '/products' ? 'var(--isabelline)' : 'transparent'
                }}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className={`nav-link text-lg transition-all duration-300 hover:opacity-80 ${
                  pathname === '/about' ? 'border-b-2' : ''
                }`} 
                style={{
                  color: 'var(--isabelline) !important',
                  borderColor: pathname === '/about' ? 'var(--isabelline)' : 'transparent'
                }}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link text-lg transition-all duration-300 hover:opacity-80 ${
                  pathname === '/contact' ? 'border-b-2' : ''
                }`} 
                style={{
                  color: 'var(--isabelline) !important',
                  borderColor: pathname === '/contact' ? 'var(--isabelline)' : 'transparent'
                }}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Search */}
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User Account */}
              <button 
                onClick={handleProfileClick}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors" 
                aria-label="Account"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Wishlist */}
              <Link href="/wishlist">
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors relative" aria-label="Wishlist">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {wishlistCount > 0 && (
                    <span className="nav-badge absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </Link>

              {/* Shopping Cart */}
              <Link href="/cart">
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors relative" aria-label="Shopping cart">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6-7h.01M19 11h.01" />
                  </svg>
                  {getTotalItems() > 0 && (
                    <span className="nav-badge absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--isabelline) !important'}}>
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
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  Home  
                </Link>
                <Link 
                  href="/products" 
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/products' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  Shop
                </Link>
                <Link 
                  href="/about" 
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/about' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/contact' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  Contact
                </Link>
                <Link 
                  href="/wishlist" 
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/wishlist' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  Wishlist
                </Link>
                <Link 
                  href="/faq" 
                  className={`nav-link text-lg py-2 px-4 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${
                    pathname === '/faq' ? 'bg-white bg-opacity-10' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: 'var(--isabelline) !important'}}
                >
                  FAQ
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