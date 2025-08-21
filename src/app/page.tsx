'use client';

import Image from "next/image";
import './perfume.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevSlide, setPrevSlide] = useState(0);

  const slides = [
    {
      subtitle: "LUXURY PERFUME EXPERT",
      title: "Indulge In Exclusive Scents At Unbeatable Prices",
      description: "20% Off on Premium Fragrances",
      image: "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
      buttonText: "EXPLORE"
    },
    {
      subtitle: "NEW COLLECTION",
      title: "Discover The Art Of Sophisticated Fragrances",
      description: "Unleash your unique essence with our premium collection",
      image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg",
      buttonText: "SHOP NOW"
    },
    {
      subtitle: "SIGNATURE SCENTS",
      title: "Experience Luxury In Every Drop",
      description: "Handcrafted perfumes for the discerning individual",
      image: "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg",
      buttonText: "DISCOVER"
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlideFunc = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  const getSlideClass = (index) => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    
    if (index === currentSlide) {
      return 'active';
    } else if (index === prevSlide) {
      return 'prev';
    } else if (index === nextSlideIndex) {
      return 'next';
    }
    return ''; // Hidden slides
  };

  return (
    <div className="min-h-screen">
      {/* Transparent Header */}
      <header className={`nav-bar px-4 py-4 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="nav-logo text-3xl font-bold tracking-tight">odora</h1>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="nav-link font-medium">Home</a>
              <a href="#" className="nav-link font-medium">Shop</a>
              <a href="#" className="nav-link font-medium">Collections</a>
              <a href="#" className="nav-link font-medium">About</a>
              <a href="#" className="nav-link font-medium">Contact</a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors relative">
                <svg className="w-5 h-5 nav-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6-7h.01M19 11h.01" />
                </svg>
                <span className="nav-badge absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Slider */}
      <section className="hero-section">
        <div className="hero-slider-container">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`hero-slide ${getSlideClass(index)}`}
            >
              <div className="hero-content-container">
                <div className="hero-content">
                  {/* Text Content */}
                  <div className="hero-text-content">
                    <div className="space-y-6">
                      <p className="hero-subtitle">{slide.subtitle}</p>
                      <h1 className="hero-title-primary text-4xl lg:text-6xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="hero-description text-xl">
                        {slide.description}
                      </p>
                      <button className="hero-cta-button inline-block px-8 py-4 rounded-full font-semibold">
                        {slide.buttonText} →
                      </button>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="hero-image-content">
                    <div className="hero-image-square">
                      <Image
                        src={slide.image}
                        alt="Perfume"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                      {/* Decorative elements */}
                      <div className="hero-decorative-1 absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-60"></div>
                      <div className="hero-decorative-2 absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <button className="slider-nav slider-nav-prev" onClick={prevSlideFunc}>
          <svg className="slider-nav-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="slider-nav slider-nav-next" onClick={nextSlide}>
          <svg className="slider-nav-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Pagination */}
        <div className="slider-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Product Set Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Product Set</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium fragrances
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                name: "Velvet Orchid", 
                price: "$185", 
                originalPrice: "$220",
                rating: "4.8",
                reviews: "143",
                badge: "Intense",
                image: "/images/karly-jones-4i9ef6xU738-unsplash.jpg"
              },
              { 
                name: "Sweet Royal Essence", 
                price: "$165", 
                originalPrice: "$195",
                rating: "4.7",
                reviews: "89",
                badge: "Premium",
                image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg"
              },
              { 
                name: "Sweet Royal Obsession", 
                price: "$145", 
                originalPrice: "$175",
                rating: "4.6",
                reviews: "67",
                badge: "Luxury",
                image: "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg"
              },
              { 
                name: "Tom Ford Arabella", 
                price: "$225", 
                originalPrice: "$260",
                rating: "4.9",
                reviews: "201",
                badge: "Exclusive",
                image: "/images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg"
              },
              { 
                name: "Jet Black Luxe", 
                price: "$195", 
                originalPrice: "$230",
                rating: "4.8",
                reviews: "156",
                badge: "Elite",
                image: "/images/trung-nhan-tran-BfSTSfEVWfA-unsplash.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="product-card bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative mb-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={266}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-earth-dark text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="product-name font-semibold text-sm">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="product-price font-bold">{product.price}</span>
                    <span className="product-original-price text-sm line-through">{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="product-rating-text text-xs">({product.rating})</span>
                    </div>
                    <span className="product-rating-text text-xs">{product.reviews}</span>
                  </div>
                  <button className="add-to-cart-button w-full py-2 rounded-lg font-semibold text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Sections */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* The New Elegance */}
            <div className="promo-card promo-card--cream">
              <div className="relative z-10">
                <h3 className="promo-card-title promo-card-title.cream">The new<br />elegance</h3>
                <button className="promo-card-btn promo-card-btn dark-text">
                  Shop Now
                </button>
              </div>
              <div className="promo-card-circle right-large bg-gold-medium"></div>
            </div>

            {/* Let Your Skin Experience */}
            <div className="promo-card promo-card--goldgreen">
              <div className="relative z-10">
                <h3 className="promo-card-title light">Let your skin<br />experience</h3>
                <p className="promo-card-text light">Premium ingredients for luxurious care</p>
                <button className="promo-card-btn promo-card-btn dark-text">
                  Discover
                </button>
              </div>
              <div className="promo-card-circle right-small bg-gold-light"></div>
            </div>

            {/* Discover More */}
            <div className="promo-card promo-card--navy">
              <div className="relative z-10">
                <h3 className="promo-card-title light">Discover<br />more</h3>
                <p className="promo-card-text light">Explore our exclusive collections</p>
                <button className="promo-card-btn promo-card-btn dark-text">
                  View All
                </button>
              </div>
              <div className="promo-card-circle left-medium bg-gold-medium"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Product Grid */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 product-set-title">Product Set</h2>
          </div>

          {/* 2x4 Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Cleopatra Rose Scent", 
                price: "$158", 
                originalPrice: "$185", 
                rating: "4.9",
                reviews: "124",
                badge: "Popular",
                image: "/images/jeroen-van-roij-sLQt9PjsCcs-unsplash.jpg"
              },
              { 
                name: "Jasmine Flower Essence", 
                price: "$145", 
                originalPrice: "$170", 
                rating: "4.8",
                reviews: "89",
                badge: "Fresh",
                image: "/images/kelvin-lutan-5f4yovjJw4c-unsplash.jpg"
              },
              { 
                name: "Golden Amber Luxury", 
                price: "$175", 
                originalPrice: "$205", 
                rating: "4.7",
                reviews: "156",
                badge: "Luxury",
                image: "/images/ulysse-pointcheval--j6LLsAehUo-unsplash.jpg"
              },
              { 
                name: "Ocean Breeze Premium", 
                price: "$165", 
                originalPrice: "$195", 
                rating: "4.6",
                reviews: "78",
                badge: "New",
                image: "/images/william-bout-TY4QMCrS6P4-unsplash.jpg"
              },
              { 
                name: "Rose Petal Paradise", 
                price: "$135", 
                originalPrice: "$160", 
                rating: "4.6",
                reviews: "67",
                badge: "Natural",
                image: "/images/yixian-zhao-q7iZCOXGOWY-unsplash.jpg"
              },
              { 
                name: "Magnolia Dream Scent", 
                price: "$165", 
                originalPrice: "$190", 
                rating: "4.8",
                reviews: "143",
                badge: "Premium",
                image: "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
              },
              { 
                name: "Royal Lily Essence", 
                price: "$185", 
                originalPrice: "$215", 
                rating: "4.7",
                reviews: "95",
                badge: "Elite",
                image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg"
              },
              { 
                name: "Purple Majesty Luxury", 
                price: "$205", 
                originalPrice: "$240", 
                rating: "4.9",
                reviews: "201",
                badge: "Limited",
                image: "/images/birgith-roosipuu-nka_sIQpKEU-unsplash.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="product-card bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative mb-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={266}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-earth-dark text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="product-name font-semibold text-sm">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="product-price font-bold">{product.price}</span>
                    <span className="product-original-price text-sm line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="product-rating-text text-xs">({product.rating})</span>
                    </div>
                    <span className="product-rating-text text-xs">{product.reviews}</span>
                  </div>
                  <button className="add-to-cart-button w-full py-2 rounded-lg font-semibold text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
  <section className="px-4 py-16 section--gold-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <div className="w-full h-96 lg:h-[500px] rounded-full flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
                  alt="Odora Premium Perfume Collection"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="brand-image-overlay brand-image-overlay--soft"></div>
              </div>
              {/* Navigation Arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
                <svg className="brand-story-arrow w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
                <svg className="brand-story-arrow w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="brand-story-title text-4xl lg:text-5xl font-bold mb-6">
                  Odora Perfume & Fragrance
                </h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="badge badge--gold">100% Natural Care Products</span>
                  <span className="badge badge--gold-light">Odor</span>
                </div>
                <p className="text-lg leading-relaxed brand-description">
                  Experience the finest collection of premium fragrances crafted with 
                  100% natural ingredients. Our perfumes tell stories of elegance, 
                  sophistication, and timeless beauty.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold brand-stat-number">500+</p>
                  <p className="text-sm brand-stat-label">Products</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold brand-stat-number">50K+</p>
                  <p className="text-sm brand-stat-label">Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold brand-stat-number">15+</p>
                  <p className="text-sm brand-stat-label">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
  <section className="px-4 py-16 section--navy-darker-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 customer-section-title">
              Crafting Scents With<br />Passion And Precision
            </h2>
            <p className="max-w-2xl mx-auto customer-section-description">
              Every fragrance is meticulously crafted to create unforgettable experiences
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
            {['Chanel', 'Dior', 'Gucci', 'Versace', 'Prada'].map((brand, index) => (
              <div key={index} className="brand-logo font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>

          {/* Customer Reviews */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Absolutely love the Velvet Orchid! The scent lasts all day and receives so many compliments.",
                image: "SJ"
              },
              {
                name: "Michael Chen",
                rating: 5,
                review: "Premium quality fragrances at reasonable prices. My go-to store for all perfume needs.",
                image: "MC"
              },
              {
                name: "Emily Davis",
                rating: 5,
                review: "The customer service is exceptional and the packaging is beautiful. Highly recommended!",
                image: "ED"
              }
            ].map((review, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all review-card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="review-avatar-circle">
                    <span className="font-semibold">{review.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold review-name">{review.name}</h4>
                    <div className="flex text-gold-lightest">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
  <section className="px-4 py-16 best-sellers-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl lg:text-4xl font-bold mb-4" style={{color: "var(--earth-darkest)"}}>Best Sellers</h2>
            <p className="section-description" style={{color: "var(--earth-dark)"}}>Our most loved fragrances by customers</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Royal Essence Premium",
                price: "$285",
                originalPrice: "$320",
                rating: "4.9",
                reviews: "156",
                badge: "Best Seller",
                image: "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
              },
              {
                name: "Diamond Orchid Luxury",
                price: "$245",
                originalPrice: "$280",
                rating: "4.8",
                reviews: "98",
                badge: "Premium",
                image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg"
              },
              {
                name: "Golden Amber Elite",
                price: "$195",
                originalPrice: "$230",
                rating: "4.7",
                reviews: "203",
                badge: "Popular",
                image: "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="product-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative mb-6">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={333}
                      className="product-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold product-badge">
                    {product.badge}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold product-name-dark">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold product-price-gold">{product.price}</span>
                    <span className="line-through" style={{color: "var(--navy-medium)"}}>{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-navy-medium">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm" style={{color: "var(--navy-dark)"}}>({product.rating})</span>
                    </div>
                    <span className="text-sm" style={{color: "var(--navy-dark)"}}>{product.reviews} reviews</span>
                  </div>
                  <button className="w-full py-3 rounded-xl font-semibold transition-all hover:opacity-90 add-to-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-16" style={{background: "linear-gradient(135deg, #52796f 0%, #2f3e46 100%)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: "#cad2c5"}}>
            Subscribe now and receive 10%<br />off your first order
          </h2>
          <p className="mb-8 text-lg" style={{color: "#cad2c5"}}>
            Be the first to know about new arrivals, exclusive offers, and beauty tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2"
              style={{backgroundColor: "#cad2c5", color: "#2f3e46"}}
            />
            <button className="px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow" style={{backgroundColor: "#cad2c5", color: "#52796f"}}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16" style={{backgroundColor: "#2f3e46", color: "#cad2c5"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{color: "#84a98c"}}>odora</h3>
              <p className="leading-relaxed" style={{color: "#cad2c5"}}>
                Premium fragrances crafted with passion and precision for the discerning individual.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-earth-dark" style={{backgroundColor: "#354f52"}}>
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-earth-dark" style={{backgroundColor: "#354f52"}}>
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-earth-dark" style={{backgroundColor: "#354f52"}}>
                  <span className="text-sm">i</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2" style={{color: "#cad2c5"}}>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Women&apos;s Fragrances</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Men&apos;s Fragrances</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Unisex Collection</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Gift Sets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2" style={{color: "#cad2c5"}}>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Contact Us</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Shipping Info</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Returns & Exchanges</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Size Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2" style={{color: "#cad2c5"}}>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>About Us</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Our Story</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Careers</a></li>
                <li><a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Press</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8" style={{borderTop: "1px solid #354f52"}}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm" style={{color: "#cad2c5"}}>
                &copy; 2025 Odora Perfumes. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm mt-4 md:mt-0" style={{color: "#cad2c5"}}>
                <a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Privacy Policy</a>
                <a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Terms of Service</a>
                <a href="#" className="transition-colors hover:text-earth-medium" style={{color: "#cad2c5"}}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
