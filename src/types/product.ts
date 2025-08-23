export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: 'women' | 'men' | 'unisex' | 'gift-sets' | 'new-arrivals';
  badge?: string;
  isNew: boolean;
  image: string;
  images?: string[];
  description: string;
  longDescription?: string;
  sizes: ProductSize[];
  inStock: boolean;
  stockCount?: number;
  notes?: FragranceNotes;
  details?: ProductDetails;
  ingredients?: string;
}

export interface ProductSize {
  size: string;
  price: number;
  originalPrice?: number;
}

export interface FragranceNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export interface ProductDetails {
  concentration: string;
  longevity: string;
  sillage: string;
  season: string;
  occasion: string;
  gender: string;
  brand: string;
  country: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface SortOption {
  id: string;
  name: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  inStock: boolean;
  newArrivals: boolean;
  onSale: boolean;
  freeShipping: boolean;
}
