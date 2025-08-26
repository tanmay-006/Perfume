'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultSlides: HeroSlide[] = [
  {
    subtitle: "LUXURY PERFUME EXPERT",
    title: "Indulge In Exclusive Scents At Unbeatable Prices",
    description: "20% Off on Premium Fragrances",
    image: "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
    buttonText: "EXPLORE",
    buttonLink: "/products"
  },
  {
    subtitle: "NEW COLLECTION",
    title: "Discover The Art Of Sophisticated Fragrances",
    description: "Unleash your unique essence with our premium collection",
    image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg",
    buttonText: "SHOP NOW",
    buttonLink: "/products"
  },
  {
    subtitle: "SIGNATURE SCENTS",
    title: "Experience Luxury In Every Drop",
    description: "Handcrafted perfumes for the discerning individual",
    image: "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg",
    buttonText: "DISCOVER",
    buttonLink: "/products"
  }
];

export default function Hero({ 
  slides = defaultSlides, 
  autoPlay = true, 
  interval = 5000 
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentSlide, slides.length, autoPlay, interval]);

  const nextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlideFunc = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  const getSlideClass = (index: number) => {
    if (index === currentSlide) {
      return 'active';
    }
    if (index === prevSlide) {
      return 'prev';
    }
    return '';
  };

  return (
    <section className="hero-section">
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${getSlideClass(index)}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content-container">
              <div className="hero-content">
                <div className="hero-text-content">
                  <div className="space-y-6">
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <h1 className="hero-title-primary text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="hero-description text-xl">
                      {slide.description}
                    </p>
                    <Link 
                      href={slide.buttonLink}
                      className="hero-cta-button inline-block px-8 py-4 rounded-full font-semibold"
                    >
                      {slide.buttonText} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <button 
        className="slider-nav slider-nav-prev" 
        onClick={prevSlideFunc}
        aria-label="Previous slide"
      >
        <svg className="slider-nav-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="slider-nav slider-nav-next" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
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
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
