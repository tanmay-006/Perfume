'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import '../perfume.css';

function AboutPageContent() {
  const values = [
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'We pursue perfection in every bottle, using only the finest ingredients and meticulous craftsmanship.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to environmental responsibility through sustainable sourcing and eco-friendly practices.'
    },
    {
      icon: '💎',
      title: 'Luxury',
      description: 'Creating premium experiences that embody sophistication and timeless elegance.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships with customers through authenticity and exceptional service.'
    }
  ];

  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & Master Perfumer',
      image: '/images/team/ceo.jpg',
      description: 'With over 20 years of experience in luxury fragrances, Arjun brings passion and expertise to every creation.'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: '/images/team/creative-director.jpg',
      description: 'Leading our design and brand experience, Priya ensures every touchpoint reflects our luxury heritage.'
    },
    {
      name: 'Vikram Singh',
      role: 'Quality Assurance Head',
      image: '/images/team/qa-head.jpg',
      description: 'Maintaining the highest standards of quality and ensuring every product meets our excellence criteria.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
            alt="MF Fragrance Story"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            A fresh startup dedicated to making luxury fragrances accessible, innovative, and personal for everyone.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-[var(--navy-medium)] leading-relaxed mb-6">
                At MF Fragrance, we're a passionate startup dedicated to revolutionizing the fragrance industry. We believe that luxury should be accessible, and that every individual deserves to express their unique personality through exceptional scents.
              </p>
              <p className="text-lg text-[var(--navy-medium)] leading-relaxed mb-8">
                Our mission is to create extraordinary fragrances using premium ingredients and innovative techniques, while building genuine relationships with our customers and making luxury accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold">
                  Fresh & Innovative
                </div>
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold">
                  Customer-Focused
                </div>
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold">
                  Accessible Luxury
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/miska-sage-GnF5Xpu-764-unsplash.jpg"
                  alt="Perfume crafting process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--gold-medium)] rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-[var(--navy-darkest)]">
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-sm font-semibold">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Choose MF Fragrance
            </h2>
            <p className="text-lg text-[var(--navy-medium)] max-w-2xl mx-auto">
              Discover what sets us apart in the world of luxury fragrances
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Fresh Innovation
                </h3>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  As a new brand, we bring fresh perspectives and innovative approaches to fragrance creation, unburdened by outdated traditions.
                </p>
              </div>

              <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Personal Touch
                </h3>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  Every customer matters to us. We provide personalized service and attention that larger, established brands often cannot match.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Competitive Pricing
                </h3>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  Premium quality doesn't have to mean premium prices. We offer luxury fragrances at accessible prices without compromising on quality.
                </p>
              </div>

              <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Modern Approach
                </h3>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  We leverage the latest technology and contemporary design philosophies to create fragrances that resonate with today's discerning customers.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-medium)] mb-2">100+</div>
              <div className="text-[var(--navy-medium)] font-semibold">Unique Scents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-medium)] mb-2">24/7</div>
              <div className="text-[var(--navy-medium)] font-semibold">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-medium)] mb-2">48hr</div>
              <div className="text-[var(--navy-medium)] font-semibold">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-medium)] mb-2">100%</div>
              <div className="text-[var(--navy-medium)] font-semibold">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[var(--navy-medium)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[var(--navy-medium)] max-w-2xl mx-auto">
              The passionate individuals behind our extraordinary fragrances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/team-placeholder.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.currentTarget.src = "/images/user-placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  {member.name}
                </h3>
                <p className="text-[var(--gold-medium)] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-[var(--navy-medium)] leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Craftsmanship */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-8">
                Quality & Craftsmanship
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      Premium Ingredients
                    </h3>
                    <p className="text-[var(--navy-medium)]">
                      We source the finest natural ingredients from renowned fragrance houses worldwide, ensuring authenticity and quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      Expert Blending
                    </h3>
                    <p className="text-[var(--navy-medium)]">
                      Our master perfumers craft each fragrance with precision, balancing top, middle, and base notes for perfect harmony.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      Rigorous Testing
                    </h3>
                    <p className="text-[var(--navy-medium)]">
                      Every batch undergoes extensive quality control testing to ensure consistency, longevity, and safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg"
                    alt="Quality craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--navy-dark)] rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-[var(--gold-lightest)]">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm font-semibold">Natural</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[var(--navy-darkest)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Art of Fine Fragrance
          </h2>
          <p className="text-xl text-[var(--gold-lightest)] mb-8 leading-relaxed">
            Discover our collection of luxury fragrances and find your signature scent that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-xl font-semibold text-lg hover:bg-[var(--gold-light)] transition-colors"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[var(--gold-medium)] text-[var(--gold-medium)] rounded-xl font-semibold text-lg hover:bg-[var(--gold-medium)] hover:text-[var(--navy-darkest)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <ThemeWrapper>
      <AboutPageContent />
    </ThemeWrapper>
  );
}
