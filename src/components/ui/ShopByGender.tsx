'use client';

import Link from 'next/link';
import Image from 'next/image';

interface GenderCategory {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface ShopByGenderProps {
  title?: string;
  categories?: GenderCategory[];
}

export default function ShopByGender({ 
  title = "SHOP BY GENDER",
  categories = [
    {
      id: 'him',
      title: 'FOR HIM',
      image: '/images/gender/men-banner.jpg',
      link: '/products?category=men'
    },
    {
      id: 'her',
      title: 'FOR HER',
      image: '/images/gender/picture-bottle-perfume-with-words-touch-front_1031622-539.jpg',
      link: '/products?category=women'
    },
    {
      id: 'unisex',
      title: 'UNISEX',
      image: '/images/gender/unisex-hero.jpg',
      link: '/products?category=unisex'
    }
  ]
}: ShopByGenderProps) {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gold-lightest mb-4">
            {title}
          </h2>
        </div>

        {/* Gender Categories Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white dark:bg-navy-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Category Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8">
                  <div className="text-center">
                    <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                      {category.title}
                    </h3>
                    
                    {/* Arrow Icon */}
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transform transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-medium transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
