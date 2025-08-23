'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/ui/Hero';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';
import Newsletter from '@/components/ui/Newsletter';
import Footer from '@/components/layout/Footer';
import { Product, FilterState } from '@/types/product';
import { products, categories, sortOptions } from '@/data/products';
import '../perfume.css';

export default function ProductsPage() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [filters, setFilters] = useState<FilterState>({
        category: 'all',
        priceRange: [0, 500],
        inStock: false,
        newArrivals: false,
        onSale: false,
        freeShipping: false
    });

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Set theme on mount and when it changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const [sortBy, setSortBy] = useState('featured');
    const [currentPage, setCurrentPage] = useState(1);
    const [isGridView, setIsGridView] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    // Filter products based on current filters
    const filteredProducts = products.filter(product => {
        // Category filter
        if (filters.category !== 'all' && product.category !== filters.category) {
            return false;
        }

        // Price range filter
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
            return false;
        }

        // In stock filter
        if (filters.inStock && !product.inStock) {
            return false;
        }

        // New arrivals filter
        if (filters.newArrivals && !product.isNew) {
            return false;
        }

        // On sale filter
        if (filters.onSale && !product.originalPrice) {
            return false;
        }

        return true;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.isNew ? 1 : -1;
            case 'popular':
                return b.reviews - a.reviews;
            default:
                return 0;
        }
    });

    // Pagination
    const itemsPerPage = 12;
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy]);

    // Event handlers
    const handleAddToCart = (productId: number) => {
        console.log('Add to cart:', productId);
        // Implement cart logic
    };

    const handleAddToWishlist = (productId: number) => {
        console.log('Add to wishlist:', productId);
        // Implement wishlist logic
    };

    const handleQuickView = (productId: number) => {
        console.log('Quick view:', productId);
        // Implement quick view modal
    };

    const handleNewsletterSubmit = async (email: string) => {
        console.log('Newsletter subscription:', email);
        // Implement newsletter subscription
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header theme={theme} onThemeToggle={toggleTheme} />

            {/* Hero Banner */}
            <Hero slides={[
                {
                    subtitle: "PREMIUM COLLECTION",
                    title: "Discover Our Exclusive Fragrances",
                    description: "Luxury scents crafted with the finest ingredients",
                    image: "/images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg",
                    buttonText: "SHOP NOW",
                    buttonLink: "#products-section"
                }, {
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
                }
            ]} />

            {/* Main Content */}
            <div id="products-section" className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters */}
                    <ProductFilter
                        categories={categories}
                        filters={filters}
                        onFiltersChange={setFilters}
                        isVisible={showFilters}
                        onToggleVisibility={() => setShowFilters(!showFilters)}
                    />

                    {/* Product Grid */}
                    <ProductGrid
                        products={currentProducts}
                        isGridView={isGridView}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        sortBy={sortBy}
                        sortOptions={sortOptions}
                        onViewToggle={setIsGridView}
                        onSortChange={setSortBy}
                        onPageChange={setCurrentPage}
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                        onQuickView={handleQuickView}
                    />
                </div>
            </div>

            {/* Newsletter */}
            <Newsletter onSubmit={handleNewsletterSubmit} />

            {/* Footer */}
            <Footer />
        </div>
    );
}
