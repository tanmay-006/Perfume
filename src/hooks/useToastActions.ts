'use client';

import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/contexts/ToastContext';
import { Product } from '@/types/product';

export function useCartWithToast() {
  const cart = useCart();
  const { showToast } = useToast();

  const addToCartWithToast = (product: Product, size: string, quantity: number) => {
    const wasInCart = cart.items.some(item => item.product.id === product.id && item.size === size);
    cart.addToCart(product, size, quantity);
    
    if (wasInCart) {
      showToast({
        type: 'success',
        title: 'Updated Cart',
        message: `${product.name} (${size}) quantity updated`,
      });
    } else {
      showToast({
        type: 'success',
        title: 'Added to Cart!',
        message: `${product.name} (${size}) added to your cart`,
      });
    }
  };

  return {
    ...cart,
    addToCart: addToCartWithToast,
  };
}

export function useWishlistWithToast() {
  const wishlist = useWishlist();
  const { showToast } = useToast();

  const addToWishlistWithToast = (product: Product) => {
    if (!wishlist.wishlistItems.some(item => item.id === product.id)) {
      wishlist.addToWishlist(product);
      showToast({
        type: 'success',
        title: 'Added to Wishlist!',
        message: `${product.name} added to your wishlist`,
      });
    }
  };

  const removeFromWishlistWithToast = (productId: number) => {
    const product = wishlist.wishlistItems.find(item => item.id === productId);
    wishlist.removeFromWishlist(productId);
    if (product) {
      showToast({
        type: 'info',
        title: 'Removed from Wishlist',
        message: `${product.name} removed from your wishlist`,
      });
    }
  };

  return {
    ...wishlist,
    addToWishlist: addToWishlistWithToast,
    removeFromWishlist: removeFromWishlistWithToast,
  };
}
