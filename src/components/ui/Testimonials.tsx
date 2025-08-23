'use client';

interface ReviewCardProps {
  name: string;
  avatar?: string | null;
  rating: number;
  review: string;
}

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  brands?: string[];
  reviews: ReviewCardProps[];
}

export default function Testimonials({
  title = "Crafting Scents With Passion And Precision",
  subtitle = "Every fragrance is meticulously crafted to create unforgettable experiences",
  brands = ['Chanel', 'Dior', 'Gucci', 'Versace', 'Prada'],
  reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely love the Velvet Orchid! The scent lasts all day and receives so many compliments.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "Premium quality fragrances at reasonable prices. My go-to store for all perfume needs.",
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      rating: 5,
      review: "The customer service is exceptional and the packaging is beautiful. Highly recommended!",
      avatar: "ED"
    }
  ]
}: TestimonialsProps) {
  return (
    <section className="px-4 py-16 section--navy-darker-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 customer-section-title">
            {title.split('<br />').map((part, i) => (
              <span key={i}>
                {part}
                {i < title.split('<br />').length - 1 && <br />}
              </span>
            ))}
          </h2>
          {subtitle && (
            <p className="max-w-2xl mx-auto customer-section-description">
              {subtitle}
            </p>
          )}
        </div>

        {/* Brand Logos */}
        {brands && brands.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-16 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="brand-logo font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        )}

        {/* Customer Reviews */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all review-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="review-avatar-circle">
                  <span className="font-semibold">{review.avatar}</span>
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
  );
}
