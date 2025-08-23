'use client';

import './perfume.css';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/ui/Hero';
import FeaturedProducts from '@/components/product/FeaturedProducts';
import PromoSection from '@/components/ui/PromoSection';
import BrandStory from '@/components/ui/BrandStory';
import Testimonials from '@/components/ui/Testimonials';
import BestSellers from '@/components/product/BestSellers';
import Newsletter from '@/components/ui/Newsletter';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';

const MFFragranceLoader = () => {
  const brandLetters = ['M', 'F', ' ', 'F', 'R', 'A', 'G', 'R', 'A', 'N', 'C', 'E'];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, var(--navy-darkest), var(--navy-dark), var(--navy-medium))',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999
    }}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .brand-name .letter {
            display: inline-block;
            opacity: 0;
            transform: translateY(50px);
            color: var(--gold-medium);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            animation: letterReveal 0.8s ease-out forwards;
            background: linear-gradient(45deg, var(--gold-dark), var(--gold-medium), var(--gold-light), var(--gold-medium));
            background-size: 300% 300%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            animation: letterReveal 0.8s ease-out forwards, colorShift 3s ease-in-out infinite;
          }

          .brand-name .letter:nth-child(1) { animation-delay: 0s; }
          .brand-name .letter:nth-child(2) { animation-delay: 0.1s; }
          .brand-name .letter:nth-child(3) { animation-delay: 0.2s; }
          .brand-name .letter:nth-child(4) { animation-delay: 0.3s; }
          .brand-name .letter:nth-child(5) { animation-delay: 0.4s; }
          .brand-name .letter:nth-child(6) { animation-delay: 0.5s; }
          .brand-name .letter:nth-child(7) { animation-delay: 0.6s; }
          .brand-name .letter:nth-child(8) { animation-delay: 0.7s; }
          .brand-name .letter:nth-child(9) { animation-delay: 0.8s; }
          .brand-name .letter:nth-child(10) { animation-delay: 0.9s; }
          .brand-name .letter:nth-child(11) { animation-delay: 1s; }
          .brand-name .letter:nth-child(12) { animation-delay: 1.1s; }

          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--gold-light);
            border-radius: 50%;
            opacity: 0;
            animation: floatParticle 4s ease-in-out infinite;
          }

          .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
          .particle:nth-child(2) { left: 20%; animation-delay: 0.5s; }
          .particle:nth-child(3) { left: 30%; animation-delay: 1s; }
          .particle:nth-child(4) { left: 40%; animation-delay: 1.5s; }
          .particle:nth-child(5) { left: 50%; animation-delay: 2s; }
          .particle:nth-child(6) { left: 60%; animation-delay: 2.5s; }
          .particle:nth-child(7) { left: 70%; animation-delay: 3s; }
          .particle:nth-child(8) { left: 80%; animation-delay: 3.5s; }
          .particle:nth-child(9) { left: 90%; animation-delay: 4s; }

          @keyframes letterReveal {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes colorShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          @keyframes floatParticle {
            0%, 100% {
              opacity: 0;
              transform: translateY(100vh) scale(0);
            }
            10%, 90% {
              opacity: 1;
            }
            50% {
              opacity: 1;
              transform: translateY(-20px) scale(1);
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div style={{
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="brand-name" style={{
          fontSize: typeof window !== 'undefined' ? 
            window.innerWidth <= 480 ? '2.5rem' : 
            window.innerWidth <= 768 ? '3.5rem' : '5rem' : '5rem',
          fontWeight: 'bold',
          letterSpacing: '0.3em',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          {brandLetters.map((letter, index) => (
            <span key={index} className="letter">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid rgba(212, 180, 133, 0.2)',
          borderTop: '4px solid var(--gold-medium)',
          borderRadius: '50%',
          margin: '2rem auto',
          animation: 'spin 1s linear infinite, fadeIn 1s ease-out 2.5s forwards',
          opacity: 0
        }}></div>
      </div>
    </div>
  );
};

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Set theme on mount and when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle loader and content visibility
  useEffect(() => {
    // Show loader immediately
    setLoading(true);
    setContentVisible(false);
    
    const loaderTimer = setTimeout(() => {
      setLoading(false);
      // Add a small delay before showing content
      const contentTimer = setTimeout(() => {
        setContentVisible(true);
      }, 100);
      return () => clearTimeout(contentTimer);
    }, 3000);

    return () => clearTimeout(loaderTimer);
  }, []);

  // Get featured products
  const featuredProducts = products.slice(0, 5).map(p => ({
    ...p,
    images: p.images || (p.image ? [p.image] : [])
  }));
  const secondaryProducts = products.slice(2, 8).map(p => ({
    ...p,
    images: p.images || (p.image ? [p.image] : [])
  }));
  const bestSellersProducts = products.slice(0, 3).map(p => ({
    ...p,
    images: p.images || (p.image ? [p.image] : [])
  }));

  const promoCards = [
    {
      title: "The new<br />elegance",
      buttonText: "Shop Now",
      buttonLink: "/products",
      variant: "cream" as const,
      circlePosition: "right-large" as const
    },
    {
      title: "Let your skin<br />experience",
      subtitle: "Premium ingredients for luxurious care",
      buttonText: "Discover",
      buttonLink: "/products",
      variant: "goldgreen" as const,
      circlePosition: "right-small" as const
    },
    {
      title: "Discover<br />more",
      subtitle: "Explore our exclusive collections",
      buttonText: "View All",
      buttonLink: "/products",
      variant: "navy" as const,
      circlePosition: "left-medium" as const
    }
  ];

  return (
    <>
      {loading && <MFFragranceLoader />}
      <div className={`min-h-screen transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
           style={{ display: loading ? 'none' : 'block' }}>
        <Header theme={theme} onThemeToggle={toggleTheme} />
        
        <Hero />
        
        <FeaturedProducts 
          title="Product Set" 
          description="Discover our carefully curated collection of premium fragrances"
          products={featuredProducts}
        />

        <PromoSection cards={promoCards} />

        <FeaturedProducts 
          title="Product Set"
          products={secondaryProducts}
          columns={4}
          viewAllLink="/products"
        />

        <BrandStory />

        <Testimonials title="Crafting Scents With<br />Passion And Precision" />

        <BestSellers products={bestSellersProducts} />

        <Newsletter />
        
        <Footer />
      </div>
    </>
  );
}
