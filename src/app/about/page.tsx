'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import '../perfume.css';

function AboutPageContent() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
  
  const testimonials = [
    {
      name: "Anika Patel",
      title: "Loyal Customer",
      quote: "MF Fragrance has completely transformed my perfume experience. The scents are sophisticated yet uniquely personal, and the customer service is beyond exceptional.",
      avatar: "/images/user-placeholder.jpg"
    },
    {
      name: "Raj Malhotra",
      title: "Fashion Blogger",
      quote: "As someone who reviews luxury products daily, I can confidently say that MF Fragrance delivers premium quality that rivals established brands at a fraction of the price.",
      avatar: "/images/user-placeholder.jpg"
    },
    {
      name: "Meera Shah",
      title: "Beauty Influencer",
      quote: "The attention to detail in every bottle is remarkable. These fragrances have staying power that lasts all day while evolving beautifully on the skin.",
      avatar: "/images/user-placeholder.jpg"
    }
  ];
  
  const milestones = [
    {
      year: "2024",
      title: "The Beginning",
      description: "MF Fragrance was founded with a vision to make luxury perfumes accessible to everyone."
    },
    {
      year: "2025",
      title: "First Collection Launch",
      description: "Successfully launched our inaugural collection of signature scents to critical acclaim."
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Opened our first flagship store and expanded our online presence globally."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-[85vh] flex items-center justify-center pt-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image
            src="/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg"
            alt="MF Fragrance Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{
            opacity: 1 - scrollY * 0.002,
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
          }}
        >
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-isabelline">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-isabelline/90 mb-8">
              A fresh startup dedicated to making luxury fragrances accessible, innovative, and personal for everyone.
            </p>
            <div className="inline-block animate-bounce">
              <svg className="w-8 h-8 text-isabelline/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideInLeft">
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-[var(--navy-medium)] leading-relaxed mb-6">
                At MF Fragrance, we&apos;re a passionate startup dedicated to revolutionizing the fragrance industry. We believe that luxury should be accessible, and that every individual deserves to express their unique personality through exceptional scents.
              </p>
              <p className="text-lg text-[var(--navy-medium)] leading-relaxed mb-8">
                Our mission is to create extraordinary fragrances using premium ingredients and innovative techniques, while building genuine relationships with our customers and making luxury accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold transform transition-transform hover:scale-105">
                  Fresh & Innovative
                </div>
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold transform transition-transform hover:scale-105">
                  Customer-Focused
                </div>
                <div className="bg-[var(--gold-light)] text-[var(--navy-darkest)] px-6 py-2 rounded-full font-semibold transform transition-transform hover:scale-105">
                  Accessible Luxury
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/miska-sage-GnF5Xpu-764-unsplash.jpg"
                    alt="Perfume crafting process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--gold-medium)] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                  <div className="text-center text-[var(--navy-darkest)]">
                    <div className="text-3xl font-bold">2025</div>
                    <div className="text-sm font-semibold">Founded</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Brand Journey Timeline */}
      <section className="py-20 px-4 bg-[url('/images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg')] bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-isabelline mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-isabelline/90 max-w-2xl mx-auto">
              The story of our brand&apos;s evolution
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--gold-medium)]"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div 
                key={`milestone-${index}`}
                className={`flex mb-16 last:mb-0 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <div className="relative flex items-center justify-center w-8 h-8 mx-4">
                  <div className="absolute w-6 h-6 bg-[var(--gold-medium)] rounded-full"></div>
                  <div className="absolute w-10 h-10 bg-[var(--gold-light)] rounded-full animate-ping opacity-50"></div>
                </div>
                <div 
                  className={`w-1/2 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl transform transition-all hover:scale-105 ${index % 2 === 0 ? 'text-right' : ''}`}
                >
                  <div className="inline-block px-4 py-1 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-full font-bold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-isabelline mb-2">{milestone.title}</h3>
                  <p className="text-isabelline/90">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
                Why Choose MF Fragrance
              </h2>
              <p className="text-lg text-[var(--navy-medium)] max-w-2xl mx-auto">
                Discover what sets us apart in the world of luxury fragrances
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <AnimatedSection animation="slideInLeft" delay={100}>
                <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6 animate-float">
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
              </AnimatedSection>

              <AnimatedSection animation="slideInLeft" delay={300}>
                <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6 animate-float">
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
              </AnimatedSection>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <AnimatedSection animation="slideInRight" delay={200}>
                <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6 animate-float">
                    <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                    Competitive Pricing
                  </h3>
                  <p className="text-[var(--navy-medium)] leading-relaxed">
                    Premium quality doesn&apos;t have to mean premium prices. We offer luxury fragrances at accessible prices without compromising on quality.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideInRight" delay={400}>
                <div className="bg-white dark:bg-[var(--navy-darkest)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[var(--gold-light)] rounded-2xl flex items-center justify-center mb-6 animate-float">
                    <svg className="w-8 h-8 text-[var(--navy-darkest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                    Modern Approach
                  </h3>
                  <p className="text-[var(--navy-medium)] leading-relaxed">
                    We leverage the latest technology and contemporary design philosophies to create fragrances that resonate with today&apos;s discerning customers.
                  </p>
                </div>
              </AnimatedSection>
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
              <div key={`value-${index}`} className="text-center group">
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
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--navy-darker)] to-[var(--navy-darkest)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-isabelline mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-isabelline/80 max-w-2xl mx-auto">
              Discover why people love MF Fragrance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${index}`}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <svg className="w-12 h-12 text-[var(--gold-medium)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-isabelline/80 text-lg italic mb-6 text-center">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-isabelline">{testimonial.name}</h4>
                    <p className="text-[var(--gold-light)] text-sm">{testimonial.title}</p>
                  </div>
                </div>
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
              <div key={`team-${index}`} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/images/user-placeholder.jpg"
                    alt={member.name}
                    fill
                    className="object-cover"
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
      
      {/* Perfume Creation Process */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              The Art of Perfume Creation
            </h2>
            <p className="text-lg text-[var(--navy-medium)] max-w-2xl mx-auto">
              A glimpse into our meticulous fragrance creation process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Process Steps - Each represented by an image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/jeroen-van-roij-sLQt9PjsCcs-unsplash.jpg"
                  alt="Ingredient Selection" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Ingredient Selection</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Our perfumers carefully select the finest natural ingredients from around the world.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/karly-jones-4i9ef6xU738-unsplash.jpg"
                  alt="Formulation" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Formulation</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Precise measurements and artful combinations create the foundation of our unique scents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/kelvin-lutan-5f4yovjJw4c-unsplash.jpg"
                  alt="Maceration" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. Maceration</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    The fragrance matures over time, allowing the notes to blend harmoniously.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/birgith-roosipuu-nka_sIQpKEU-unsplash.jpg"
                  alt="Quality Testing" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">4. Quality Testing</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Rigorous testing ensures each fragrance meets our exacting standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/ulysse-pointcheval--j6LLsAehUo-unsplash.jpg"
                  alt="Bottling" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">5. Bottling</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Our elegant bottles are carefully filled and sealed to preserve the fragrance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-square">
                <Image 
                  src="/images/william-bout-TY4QMCrS6P4-unsplash.jpg"
                  alt="Final Product" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">6. Final Product</h3>
                  <p className="text-white/80 transform transition-all translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    The finished perfume, ready to help you express your unique personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[url('/images/trung-nhan-tran-BfSTSfEVWfA-unsplash.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--gold-light)]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-isabelline">
            Experience the Art of <span className="text-[var(--gold-light)]">Fine Fragrance</span>
          </h2>
          <p className="text-xl text-isabelline/90 mb-10 leading-relaxed">
            Discover our collection of luxury fragrances and find your signature scent that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/products"
              className="group relative px-8 py-4 bg-[var(--gold-medium)] text-[var(--navy-darkest)] rounded-xl font-semibold text-lg overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-[var(--gold-light)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center justify-center">
                Explore Collection
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative px-8 py-4 border-2 border-[var(--gold-medium)] text-[var(--gold-medium)] rounded-xl font-semibold text-lg overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-[var(--gold-medium)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 group-hover:text-[var(--navy-darkest)] transition-colors">
                Contact Us
              </span>
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-full w-28 h-28 flex flex-col items-center justify-center transform transition-transform hover:scale-110">
              <div className="text-2xl font-bold text-[var(--gold-medium)]">100+</div>
              <div className="text-xs text-isabelline/80 font-medium">Fragrances</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-full w-28 h-28 flex flex-col items-center justify-center transform transition-transform hover:scale-110">
              <div className="text-2xl font-bold text-[var(--gold-medium)]">10k+</div>
              <div className="text-xs text-isabelline/80 font-medium">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-full w-28 h-28 flex flex-col items-center justify-center transform transition-transform hover:scale-110">
              <div className="text-2xl font-bold text-[var(--gold-medium)]">25+</div>
              <div className="text-xs text-isabelline/80 font-medium">Countries</div>
            </div>
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