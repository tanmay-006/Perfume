'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Hero from '@/components/ui/Hero';
import ProductFilter from '@/components/product/ProductFilter';
import ProductGrid from '@/components/product/ProductGrid';
import Newsletter from '@/components/ui/Newsletter';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import { Product, FilterState } from '@/types/product';
import { products, categories, sortOptions } from '@/data/products';
import '../perfume.css';

function ProductsPageContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    
    const [filters, setFilters] = useState<FilterState>({
        category: categoryParam || 'all',
        priceRange: [0, 500],
        inStock: false,
        newArrivals: false,
        onSale: false,
        freeShipping: false
    });

    const [sortBy, setSortBy] = useState('featured');
    const [currentPage, setCurrentPage] = useState(1);
    const [isGridView, setIsGridView] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    // Update filters when URL category changes
    useEffect(() => {
        if (categoryParam) {
            setFilters(prev => ({
                ...prev,
                category: categoryParam
            }));
        }
    }, [categoryParam]);

    // Get gender-specific hero content
    const getHeroContent = () => {
        const currentCategory = filters.category;
        
        switch (currentCategory) {
            case 'men':
                return [{
                    subtitle: "FOR HIM",
                    title: "Sophisticated Masculine Fragrances",
                    description: "Discover bold and refined scents crafted for the modern gentleman",
                    image: "/images/gender/men-hero.jpg",
                    buttonText: "SHOP MEN'S COLLECTION",
                    buttonLink: "#products-section"
                }];
            case 'women':
                return [{
                    subtitle: "FOR HER",
                    title: "Elegant Feminine Fragrances",
                    description: "Luxurious scents that celebrate the essence of femininity",
                    image: "/images/gender/women-hero.jpg",
                    buttonText: "SHOP WOMEN'S COLLECTION",
                    buttonLink: "#products-section"
                }];
            case 'unisex':
                return [{
                    subtitle: "UNISEX COLLECTION",
                    title: "Fragrances for Everyone",
                    description: "Versatile scents that transcend gender boundaries",
                    image: "/images/gender/unisex-hero.jpg",
                    buttonText: "SHOP UNISEX COLLECTION",
                    buttonLink: "#products-section"
                }];
            default:
                return [
                    {
                        subtitle: "PREMIUM COLLECTION",
                        title: "Discover Our Exclusive Fragrances",
                        description: "Luxury scents crafted with the finest ingredients",
                        image: "/images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg",
                        buttonText: "SHOP NOW",
                        buttonLink: "#products-section"
                    },
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
                    }
                ];
        }
    };

    const getPageTitle = () => {
        const currentCategory = filters.category;
        switch (currentCategory) {
            case 'men':
                return "Men's Fragrances";
            case 'women':
                return "Women's Fragrances";
            case 'unisex':
                return "Unisex Fragrances";
            default:
                return "All Products";
        }
    };

    const getPageDescription = () => {
        const currentCategory = filters.category;
        switch (currentCategory) {
            case 'men':
                return "Discover our sophisticated collection of men's fragrances";
            case 'women':
                return "Explore our elegant collection of women's fragrances";
            case 'unisex':
                return "Browse our versatile unisex fragrance collection";
            default:
                return "Discover our complete collection of premium fragrances";
        }
    };

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
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Header />

            {/* Hero Banner */}
            <Hero slides={getHeroContent()} />

            {/* Category Header */}
            {filters.category !== 'all' && (
                <div className="bg-background border-b border-gray-200 dark:border-navy-medium">
                    <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gold-lightest mb-4">
                            {getPageTitle()}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gold-light max-w-2xl mx-auto">
                            {getPageDescription()}
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gold-medium">
                                <span>{filteredProducts.length} products available</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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

export default function ProductsPage() {
    return (
        <ThemeWrapper>
            <ProductsPageContent />
        </ThemeWrapper>
    );
}
