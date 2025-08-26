'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/components/providers/ThemeWrapper';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { products } from '@/data/products';
import '../perfume.css';

function WishlistContent() {
  const { addToCart } = useCart();
  const { wishlistItems, removeFromWishlist, clearWishlist, addToWishlist } = useWishlist();

  // Add to cart and optionally remove from wishlist
  const handleAddToCart = (item: { id: number; name: string; price: number; image: string; brand: string }, removeFromWishlistAfter = true) => {
    // Ensure item has required properties
    if (!item || !item.id) {
      console.error('Invalid item provided to handleAddToCart');
      return;
    }
    
    const product = products.find(p => p.id === item.id);
    if (product && product.inStock && product.sizes.length > 0) {
      const defaultSize = product.sizes.find(size => size.size === '50ml') || product.sizes[0];
      addToCart(product, defaultSize.size, 1);
      if (removeFromWishlistAfter) {
        removeFromWishlist(item.id);
      }
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Recently';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-[var(--navy-darkest)] to-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4">My Wishlist</h1>
          <p className="text-xl text-white/70">Your saved fragrances</p>
          <p className="text-white/60 mt-2">Keep track of your favorite scents</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 opacity-50">
              <svg className="w-full h-full text-[var(--navy-medium)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Your wishlist is empty</h2>
            <p className="text-[var(--navy-medium)] mb-8 max-w-md mx-auto">
              Discover our collection of premium fragrances and add your favorites to your wishlist.
            </p>
            <Link 
              href="/products"
              className="inline-block bg-[var(--gold-dark)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--gold-medium)] transition-colors"
            >
              Explore Fragrances
            </Link>
          </div>
        ) : (
          <>
            {/* Wishlist Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">Saved Items ({wishlistItems.length})</h2>
                <p className="text-[var(--navy-medium)]">Items you&apos;ve added to your wishlist</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={clearWishlist}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  Clear All
                </button>
                <Link
                  href="/products"
                  className="px-4 py-2 bg-[var(--gold-dark)] text-white rounded-lg hover:bg-[var(--gold-medium)] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Wishlist Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {wishlistItems.filter(item => item && item.id && item.name).map((item) => (
                <div key={item.id} className="bg-white dark:bg-[var(--navy-darkest)] rounded-xl shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] overflow-hidden group">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.image || '/images/placeholder.jpg'}
                        alt={item.name || 'Product'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      title="Remove from wishlist"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--navy-dark)] dark:hover:text-[var(--gold-light)] transition-colors mb-1">
                        {item.name || 'Unknown Product'}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-[var(--navy-medium)] mb-2">{item.brand || 'MF Fragrance'}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-[var(--navy-dark)] dark:text-[var(--gold-light)]">
                        ₹{item.price ? item.price.toLocaleString() : '0'}
                      </span>
                      <span className="text-xs text-[var(--navy-medium)]">
                        Added {item.addedDate ? formatDate(item.addedDate) : 'Recently'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(item, true)}
                        className="flex-1 bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6-7h.01M19 11h.01" />
                        </svg>
                        Add to Cart
                      </button>
                      <Link
                        href={`/products/${item.id}`}
                        className="px-4 py-2 border border-[var(--navy-dark)] dark:border-[var(--gold-medium)] text-[var(--navy-dark)] dark:text-[var(--gold-light)] hover:bg-[var(--navy-lightest)] dark:hover:bg-[var(--navy-medium)] rounded-lg transition-colors duration-200 flex items-center justify-center"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bulk Actions */}
            <div className="bg-[var(--gold-light)]/10 rounded-lg p-6 border border-[var(--gold-light)]/20 mb-12">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Actions</h3>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => {
                    wishlistItems.forEach(item => handleAddToCart(item, false));
                  }}
                  className="px-6 py-2 bg-[var(--navy-dark)] text-[var(--gold-light)] rounded-lg hover:bg-[var(--navy-darkest)] transition-colors"
                >
                  Add All to Cart
                </button>
                <button
                  onClick={() => {
                    wishlistItems.forEach(item => handleAddToCart(item, false));
                    clearWishlist();
                  }}
                  className="px-6 py-2 bg-[var(--gold-dark)] text-white rounded-lg hover:bg-[var(--gold-medium)] transition-colors"
                >
                  Move All to Cart
                </button>
              </div>
            </div>
          </>
        )}

        {/* Recommended Products */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 text-center">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).filter(product => !wishlistItems.some(item => item.id === product.id)).map((product) => (
              <div key={product.id} className="bg-white dark:bg-[var(--navy-darkest)] rounded-xl shadow-sm border border-gray-200 dark:border-[var(--navy-medium)] overflow-hidden group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Add to Wishlist Button */}
                  <button
                    onClick={() => addToWishlist(product)}
                    className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    title="Add to wishlist"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--navy-dark)] dark:hover:text-[var(--gold-light)] transition-colors mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-[var(--navy-medium)] mb-2">{product.details?.brand || 'MF Fragrance'}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-[var(--navy-dark)] dark:text-[var(--gold-light)]">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="block w-full text-center bg-[var(--navy-dark)] hover:bg-[var(--navy-darkest)] text-[var(--gold-light)] px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function WishlistPage() {
  return (
    <ThemeWrapper>
      <WishlistContent />
    </ThemeWrapper>
  );
}
