'use client';

import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
}

const defaultSections: FooterSection[] = [
  {
    title: "Products",
    links: [
      { href: "/products?category=women", label: "Women's Fragrances" },
      { href: "/products?category=men", label: "Men's Fragrances" },
      { href: "/products?category=unisex", label: "Unisex Collection" },
      { href: "/products?category=gift-sets", label: "Gift Sets" }
    ]
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/shipping", label: "Shipping & Returns" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About Us" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/shipping", label: "Shipping Policy" },
      { href: "/wishlist", label: "My Wishlist" }
    ]
  }
];

export default function Footer({ sections = defaultSections }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-16 bg-space-cadet dark:bg-navy-darkest text-gray-900 dark:text-gold-lightest">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer group">
                <Image 
                  src="/logo.png" 
                  alt="MF Fragrance Logo" 
                  width={40} 
                  height={40}
                  className="object-contain group-hover:opacity-80 transition-opacity"
                />
                <h3 className="text-2xl font-bold group-hover:opacity-80 transition-opacity text-gray-900 dark:text-gold-medium">
                  MF Fragrance
                </h3>
              </div>
            </Link>
            <p className="leading-relaxed text-gray-800 dark:text-gold-lightest">
              Premium fragrances crafted with passion and precision for the discerning individual.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-medium hover:bg-navy-light rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 text-gold-light hover:text-gold-lightest" 
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-medium hover:bg-navy-light rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 text-gold-light hover:text-gold-lightest" 
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-medium hover:bg-navy-light rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 text-gold-light hover:text-gold-lightest" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-gold-light">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-700 dark:text-gold-lightest transition-all duration-300 hover:text-gray-900 dark:hover:text-gold-medium hover:translate-x-1 block" 
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-600 dark:border-navy-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-700 dark:text-gold-lightest">
              &copy; {currentYear} MF fragrance. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-gray-700 dark:text-gold-lightest transition-colors hover:text-gray-900 dark:hover:text-gold-medium" 
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-700 dark:text-gold-lightest transition-colors hover:text-gray-900 dark:hover:text-gold-medium" 
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-700 dark:text-gold-lightest transition-colors hover:text-gray-900 dark:hover:text-gold-medium" 
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
