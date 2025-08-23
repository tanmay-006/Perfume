'use client';

import Image from "next/image";

interface BrandStoryProps {
  title: string;
  description: string;
  image: string;
  badges?: string[];
  stats?: Array<{ number: string; label: string }>;
}

export default function BrandStory({
  title = "MF Fragrance & Perfume",
  description = "Experience the finest collection of premium fragrances crafted with 100% natural ingredients. Our perfumes tell stories of elegance, sophistication, and timeless beauty.",
  image = "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
  badges = ["100% Natural Care Products", "MF Fragrance"],
  stats = [
    { number: "500+", label: "Products" },
    { number: "50K+", label: "Customers" },
    { number: "15+", label: "Years" }
  ]
}: BrandStoryProps) {
  return (
    <section className="px-4 py-16 section--gold-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-full flex items-center justify-center relative overflow-hidden">
              <Image
                src={image}
                alt="MF Fragrance Premium Perfume Collection"
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
                {title}
              </h2>
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {badges.map((badge, index) => (
                    <span key={index} className="badge badge--gold">{badge}</span>
                  ))}
                </div>
              )}
              <p className="text-lg leading-relaxed brand-description">
                {description}
              </p>
            </div>
            
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold brand-stat-number">{stat.number}</p>
                    <p className="text-sm brand-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
