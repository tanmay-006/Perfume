'use client';

import Image from "next/image";
import Link from "next/link";
import Header from '@/components/layout/Header';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import '../../perfume.css';
import { products } from '@/data/products';
import { Product } from '@/types/product';

function ProductDetailPageContent() {
    const params = useParams();
    const { addToCart } = useCart();
    const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
    const [selectedSize, setSelectedSize] = useState('50ml');
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [activeTab, setActiveTab] = useState('description');
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState(false);

    // Fetch product data based on ID
    useEffect(() => {
        if (!params?.id) return;
        
        const productId = parseInt(params.id as string);
        const foundProduct = products.find(p => p.id === productId);
        
        if (foundProduct) {
            // Ensure the product has all required fields
            const completeProduct: Product = {
                ...foundProduct,
                longDescription: foundProduct.longDescription || foundProduct.description,
                details: foundProduct.details || {
                    concentration: 'Eau de Parfum',
                    longevity: '6-8 hours',
                    sillage: 'Moderate',
                    season: 'All Seasons',
                    occasion: 'Daily Wear',
                    gender: foundProduct.category === 'men' ? 'Men' : foundProduct.category === 'women' ? 'Women' : 'Unisex',
                    brand: 'Odora',
                    country: 'France'
                },
                images: foundProduct.images || [foundProduct.image],
                notes: foundProduct.notes || {
                    top: ['Bergamot', 'Lemon'],
                    middle: ['Rose', 'Jasmine'],
                    base: ['Sandalwood', 'Musk']
                }
            };
            setProduct(completeProduct);
        }
        setIsLoading(false);
    }, [params?.id]);

    const relatedProducts = products.filter(p => 
        p.id !== product?.id && 
        p.category === product?.category
    ).slice(0, 4);

    const currentSizeData = product?.sizes?.find(s => s.size === selectedSize) || product?.sizes?.[0] || {
        size: '50ml',
        price: product?.price || 0,
        originalPrice: product?.originalPrice
    };

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            date: "2025-01-15",
            title: "Absolutely stunning fragrance!",
            comment: "This perfume is everything I hoped for and more. The scent is sophisticated, long-lasting, and receives compliments everywhere I go. Worth every penny!",
            verified: true,
            helpful: 24
        },
        {
            id: 2,
            name: "Emily Davis",
            rating: 5,
            date: "2025-01-10",
            title: "My new signature scent",
            comment: "I've been searching for the perfect everyday luxury fragrance, and this is it! The jasmine and sandalwood blend beautifully. Highly recommend!",
            verified: true,
            helpful: 18
        },
        {
            id: 3,
            name: "Michael Chen",
            rating: 4,
            date: "2025-01-05",
            title: "Great quality, excellent packaging",
            comment: "Bought this as a gift for my wife and she absolutely loves it. The presentation is luxurious and the scent is divine. Fast shipping too!",
            verified: true,
            helpful: 12
        }
    ];

    // Show loading state while product is loading
    if (isLoading) {
        return <LoadingSpinner />;
    }

    // Show not found if product doesn't exist
    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link 
                        href="/products" 
                        className="bg-navy-dark text-gold-light px-6 py-3 rounded-lg font-semibold hover:bg-navy-medium transition-colors"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            {/* Breadcrumb */}
            {/*       <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div> */}
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200">
                            {product.images && product.images.length > 0 && (
                                <Image
                                    src={product.images[activeImageIndex]}
                                    alt={product.name}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === index
                                                ? 'border-navy-dark'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} view ${index + 1}`}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-navy-dark text-gold-light px-3 py-1 rounded-full text-sm font-semibold">
                                    {product.badge}
                                </span>
                                {product.isNew && (
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        NEW
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-lg">{product.subtitle}</p>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-semibold">{product.rating}</span>
                            </div>
                            <span className="text-gray-600">({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold text-navy-dark">₹{currentSizeData.price.toLocaleString()}</span>
                                {currentSizeData.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">₹{currentSizeData.originalPrice.toLocaleString()}</span>
                                )}
                            </div>
                            {currentSizeData.originalPrice && (
                                <div className="flex items-center gap-2">
                                    <span className="text-green-600 font-semibold">
                                        You save ₹{(currentSizeData.originalPrice - currentSizeData.price).toLocaleString()}
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                        {Math.round(((currentSizeData.originalPrice - currentSizeData.price) / currentSizeData.originalPrice) * 100)}% OFF
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {product.sizes.map((sizeOption) => (
                                    <button
                                        key={sizeOption.size}
                                        onClick={() => setSelectedSize(sizeOption.size)}
                                        className={`p-4 border-2 rounded-lg text-center transition-all ${selectedSize === sizeOption.size
                                                ? 'border-navy-dark bg-navy-dark text-gold-light'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <div className="font-semibold">{sizeOption.size}</div>
                                        <div className="text-sm opacity-75">₹{sizeOption.price.toLocaleString()}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <span className="px-4 py-3 font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-gray-600">
                                    {product.stockCount} items remaining
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <button 
                                onClick={() => {
                                    if (product && product.inStock) {
                                        addToCart(product, selectedSize, quantity);
                                        setAddedToCart(true);
                                        setTimeout(() => setAddedToCart(false), 2000);
                                    }
                                }}
                                disabled={!product?.inStock}
                                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                                    addedToCart 
                                        ? 'bg-green-600 text-white' 
                                        : product?.inStock 
                                            ? 'bg-navy-dark text-gold-light hover:bg-navy-medium' 
                                            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                }`}
                            >
                                {addedToCart 
                                    ? 'Added to Cart! ✓' 
                                    : product?.inStock 
                                        ? `Add to Cart - ₹${(currentSizeData.price * quantity).toLocaleString()}`
                                        : 'Out of Stock'
                                }
                            </button>
                            <div className="grid grid-cols-2 gap-4">
                                <button 
                                    onClick={() => {
                                        if (product) {
                                            const isInWishlist = wishlistItems.some(item => item.id === product.id);
                                            isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
                                        }
                                    }}
                                    className={`border py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                                        wishlistItems.some(item => item?.id === product?.id) 
                                        ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100" 
                                        : "border-gray-300 hover:border-gray-400"
                                    }`}
                                >
                                    <svg className="w-5 h-5" fill={wishlistItems.some(item => item?.id === product?.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={wishlistItems.some(item => item?.id === product?.id) ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {wishlistItems.some(item => item?.id === product?.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                                </button>
                                <button className="border border-gray-300 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors">
                                    Quick Buy
                                </button>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-xl">
                            <div className="text-center">
                                <div className="font-semibold text-gray-900">Free Shipping</div>
                                <div className="text-sm text-gray-600">On orders over ₹4,500</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold text-gray-900">30-Day Returns</div>
                                <div className="text-sm text-gray-600">Easy returns policy</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold text-gray-900">Authentic</div>
                                <div className="text-sm text-gray-600">100% genuine products</div>
                            </div>
                            <div className="text-center">
                                <div className="font-semibold text-gray-900">Gift Wrapping</div>
                                <div className="text-sm text-gray-600">Luxury packaging available</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mt-16">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8">
                            {[
                                { id: 'description', name: 'Description' },
                                { id: 'details', name: 'Details' },
                                { id: 'notes', name: 'Fragrance Notes' },
                                { id: 'reviews', name: `Reviews (${product.reviews})` }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                            ? 'border-navy-dark text-navy-dark'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="py-8">
                        {activeTab === 'description' && (
                            <div className="max-w-4xl">
                                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                                {showFullDescription && (
                                    <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
                                )}
                                <button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="text-navy-dark font-semibold mt-4 hover:text-navy-medium transition-colors"
                                >
                                    {showFullDescription ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        )}

                        {activeTab === 'details' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
                                    <dl className="space-y-3">
                                        {product.details && Object.entries(product.details).map(([key, value]) => (
                                            <div key={key} className="flex justify-between">
                                                <dt className="text-gray-600 capitalize">{key.replace('_', ' ')}:</dt>
                                                <dd className="font-medium text-gray-900">{String(value)}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Ingredients</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {product.longDescription || "Premium fragrance ingredients carefully selected for the finest quality."}
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notes' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {product.notes && Object.entries(product.notes).map(([category, notes]) => (
                                    <div key={category} className="text-center">
                                        <h3 className="font-semibold text-gray-900 mb-4 capitalize">{category} Notes</h3>
                                        <div className="space-y-2">
                                            {Array.isArray(notes) && notes.map((note: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mx-1 mb-1"
                                                >
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-8">
                                {/* Review Summary */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-3xl font-bold">{product.rating}</span>
                                            <div>
                                                <div className="flex text-yellow-400 mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-gray-600">Based on {product.reviews} reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-navy-dark text-gold-light px-6 py-3 rounded-lg font-semibold hover:bg-navy-medium transition-colors">
                                            Write a Review
                                        </button>
                                    </div>
                                </div>

                                {/* Individual Reviews */}
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review.id} className="border-b border-gray-200 pb-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-semibold">{review.name}</span>
                                                        {review.verified && (
                                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                                                Verified Purchase
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex text-yellow-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-gray-300'}`}
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <span className="text-gray-500 text-sm">{review.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="font-semibold mb-2">{review.title}</h4>
                                            <p className="text-gray-700 mb-3">{review.comment}</p>
                                            <div className="flex items-center gap-4 text-sm">
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    Helpful ({review.helpful})
                                                </button>
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    Report
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.id}
                                href={`/products/${relatedProduct.id}`}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    <Image
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-bold text-navy-dark">₹{relatedProduct.price.toLocaleString()}</span>
                                        {relatedProduct.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">₹{relatedProduct.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-3 h-3 ${i < Math.floor(relatedProduct.rating) ? 'fill-current' : 'fill-gray-300'}`}
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-600">({relatedProduct.rating})</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductDetailPage() {
    return (
        <ThemeWrapper>
            <ProductDetailPageContent />
        </ThemeWrapper>
    );
}
