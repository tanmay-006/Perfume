'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  // Add subtle perfume background particles
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }[]>([]);

  useEffect(() => {
    // Create animated background particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setParticles(newParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y - p.speed > 0 ? p.y - p.speed : 100,
        x: p.x + (Math.random() * 0.4 - 0.2)
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Validate first step
      if (!form.firstName.trim() || !form.lastName.trim()) {
        setError('Please enter your first and last name');
        return;
      }
      
      if (!form.email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }
      
      if (form.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      
      setError('');
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // In a real app, you would call an API to register the user
      // For now, we'll just simulate a successful registration
      console.log('Registering user:', form);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Animation to show completion
      setFormComplete(true);
      
      setTimeout(() => {
        // Redirect to profile page or dashboard
        router.push('/profile?registered=true&email=' + encodeURIComponent(form.email));
      }, 2000);
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const PageContent = () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-[url('/images/yixian-zhao-q7iZCOXGOWY-unsplash.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-navy-darkest/40 backdrop-blur-sm"></div>
        
        {/* Background particles */}
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-gold-light/20 blur-sm"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transition: 'top 1s ease-out, left 2s ease-in-out'
            }}
          />
        ))}
        
        <div className="max-w-4xl w-full relative z-10">
          <div className="bg-[var(--pale-dogwood)] bg-opacity-20 backdrop-blur-md border border-gold-light/30 rounded-2xl shadow-2xl">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="MF Fragrance Logo" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h1 className="text-4xl font-bold text-[var(--navy-darkest)]">Create Account</h1>
                <p className="text-[var(--navy-dark)] mt-2">Join our community of fragrance enthusiasts</p>
              </div>
              
              <AnimatePresence mode="wait">
                {formComplete ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full border-2 border-[var(--navy-darkest)]/30 flex items-center justify-center mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                    >
                      <svg className="w-10 h-10 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        />
                      </svg>
                    </motion.div>
                    <motion.h2 
                      className="text-2xl font-bold text-[var(--navy-darkest)] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      Registration Complete!
                    </motion.h2>
                    <motion.p 
                      className="text-[var(--navy-dark)] text-center max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      Welcome to MF Fragrance. Your account has been created successfully.
                    </motion.p>
                    <motion.div 
                      className="h-1 w-24 bg-gradient-to-r from-transparent via-[var(--navy-darkest)] to-transparent mt-8"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <span className="block sm:inline">{error}</span>
                      </div>
                    )}
                    
                    {/* Step indicator */}
                    <div className="flex justify-between items-center mb-8 px-4">
                      <motion.div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          currentStep === 1 ? 'bg-[var(--navy-darkest)] text-white' : 'border border-[var(--navy-darkest)]/20 text-[var(--navy-dark)]'
                        }`}
                        animate={{
                          scale: currentStep === 1 ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ 
                          duration: 0.5,
                          times: [0, 0.5, 1],
                          repeat: currentStep === 1 ? 0 : 0
                        }}
                      >
                        1
                      </motion.div>
                      <motion.div 
                        className="flex-1 h-0.5 mx-2"
                        initial={{ backgroundColor: "rgba(34, 34, 59, 0.2)" }}
                        animate={{ 
                          backgroundColor: currentStep === 1 ? "rgba(34, 34, 59, 0.2)" : "rgba(34, 34, 59, 0.6)" 
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          currentStep === 2 ? 'bg-[var(--navy-darkest)] text-white' : 'border border-[var(--navy-darkest)]/20 text-[var(--navy-dark)]'
                        }`}
                        animate={{
                          scale: currentStep === 2 ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ 
                          duration: 0.5,
                          times: [0, 0.5, 1],
                          repeat: currentStep === 2 ? 0 : 0
                        }}
                      >
                        2
                      </motion.div>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {currentStep === 1 ? (
                          <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
                            key="step1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="relative">
                              <label htmlFor="firstName" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                First Name*
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                                required
                              />
                            </div>
                            
                            <div className="relative">
                              <label htmlFor="lastName" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Last Name*
                              </label>
                              <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                                required
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label htmlFor="email" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Email Address*
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                                required
                              />
                            </div>
                            
                            <div className="relative">
                              <label htmlFor="phone" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Phone (optional)
                              </label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>
                            
                            <div className="hidden md:block"></div> {/* Empty spacer for grid alignment */}
                            
                            <div className="relative">
                              <label htmlFor="password" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Password*
                              </label>
                              <input
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                                required
                              />
                              <p className="mt-1 text-xs text-[var(--navy-dark)]/70">Must be at least 6 characters</p>
                            </div>
                            
                            <div className="relative">
                              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Confirm Password*
                              </label>
                              <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                                required
                              />
                            </div>

                            <div className="md:col-span-2 flex justify-end mt-6">
                              <button 
                                type="button" 
                                onClick={nextStep}
                                className="group relative px-8 py-3 bg-[var(--navy-darkest)] text-[var(--gold-lightest)] font-semibold hover:bg-[var(--navy-dark)] transition-all duration-300 transform hover:scale-105 shadow-lg rounded-lg overflow-hidden"
                              >
                                <span className="relative z-10 flex items-center">
                                  Next 
                                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                                <span className="absolute inset-0 w-full h-full bg-[var(--navy-dark)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
                            key="step2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="md:col-span-2">
                              <label htmlFor="address" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Address (optional)
                              </label>
                              <input
                                id="address"
                                name="address"
                                type="text"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>

                            <div className="relative">
                              <label htmlFor="city" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                City (optional)
                              </label>
                              <input
                                id="city"
                                name="city"
                                type="text"
                                value={form.city}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>

                            <div className="relative">
                              <label htmlFor="state" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                State/Province (optional)
                              </label>
                              <input
                                id="state"
                                name="state"
                                type="text"
                                value={form.state}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>

                            <div className="relative">
                              <label htmlFor="zip" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                ZIP/Postal Code (optional)
                              </label>
                              <input
                                id="zip"
                                name="zip"
                                type="text"
                                value={form.zip}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>

                            <div className="relative">
                              <label htmlFor="country" className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
                                Country (optional)
                              </label>
                              <input
                                id="country"
                                name="country"
                                type="text"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gold-light/30 rounded-lg text-[var(--navy-darkest)] focus:outline-none focus:ring-2 focus:ring-[var(--navy-dark)] focus:border-[var(--navy-dark)] transition-all placeholder:text-[var(--navy-dark)]/50"
                              />
                            </div>
                            
                            <div className="md:col-span-2 mt-2">
                              <div className="flex items-center">
                                <input 
                                  id="subscribe" 
                                  type="checkbox" 
                                  className="w-5 h-5 text-[var(--navy-darkest)] border-[var(--navy-dark)]/30 rounded focus:ring-[var(--navy-darkest)] bg-white/20" 
                                />
                                <label htmlFor="subscribe" className="ml-3 text-[var(--navy-dark)]">
                                  Subscribe to newsletter for exclusive offers
                                </label>
                              </div>
                            </div>

                            <div className="md:col-span-2 flex justify-between mt-6">
                              <button 
                                type="button" 
                                onClick={prevStep}
                                className="px-6 py-3 rounded-lg text-[var(--navy-dark)] border border-[var(--navy-dark)]/30 hover:bg-[var(--navy-darkest)]/10 transition-colors"
                              >
                                <span className="flex items-center">
                                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                  Back
                                </span>
                              </button>
                              
                              <button 
                                type="submit"
                                disabled={isLoading}
                                className={`group relative px-8 py-3 bg-[var(--navy-darkest)] text-[var(--gold-lightest)] font-semibold hover:bg-[var(--navy-dark)] transition-all duration-300 transform hover:scale-105 shadow-lg rounded-lg overflow-hidden ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                              >
                                <span className="relative z-10 flex items-center">
                                  {isLoading ? (
                                    <>
                                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Creating Account...
                                    </>
                                  ) : (
                                    <>
                                      Create Account
                                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                      </svg>
                                    </>
                                  )}
                                </span>
                                <span className="absolute inset-0 w-full h-full bg-[var(--navy-dark)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!formComplete && (
                <div className="text-center mt-6 pt-6 border-t border-[var(--navy-dark)]/10">
                  <p className="text-[var(--navy-dark)]">
                    Already have an account?{' '}
                    <button 
                      onClick={() => router.push('/')}
                      className="font-semibold text-[var(--navy-darkest)] hover:underline transition-colors"
                    >
                      Sign In
                    </button>
                  </p>
                  <p className="text-xs text-[var(--navy-dark)]/70 mt-4">
                    By creating an account, you agree to our{' '}
                    <Link href="/terms" className="underline hover:text-[var(--navy-darkest)]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="underline hover:text-[var(--navy-darkest)]">Privacy Policy</Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );

  return (
    <ThemeWrapper>
      <PageContent />
    </ThemeWrapper>
  );
}