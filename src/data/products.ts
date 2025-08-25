import { Product, Category, SortOption } from '@/types/product';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', count: 24 },
  { id: 'women', name: "Women's Fragrances", count: 12 },
  { id: 'men', name: "Men's Fragrances", count: 8 },
  { id: 'unisex', name: 'Unisex Collection', count: 4 },
/*   { id: 'gift-sets', name: 'Gift Sets', count: 6 },
  { id: 'new-arrivals', name: 'New Arrivals', count: 3 } */
];

export const sortOptions: SortOption[] = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest First' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'popular', name: 'Most Popular' }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Essence Premium",
    subtitle: "Luxury Collection",
    price: 12850,
    originalPrice: 14400,
    rating: 4.9,
    reviews: 156,
    category: 'women',
    badge: 'Best Seller',
    isNew: false,
    image: "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
    images: [
      "/images/laura-chouette-4sKdeIMiFEI-unsplash.jpg",
      "/images/miska-sage-GnF5Xpu-764-unsplash.jpg",
      "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg"
    ],
    description: "A sophisticated blend of jasmine and sandalwood",
    longDescription: "Crafted with meticulous attention to detail, Royal Essence Premium represents the pinnacle of perfumery artistry. Each bottle contains a harmonious blend of carefully selected ingredients sourced from the world's most prestigious fragrance houses.",
    sizes: [
      { size: '30ml', price: 8350, originalPrice: 9450 },
      { size: '50ml', price: 12850, originalPrice: 14400 },
      { size: '100ml', price: 20250, originalPrice: 23400 }
    ],
    inStock: true,
    stockCount: 12,
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Mandarin'],
      middle: ['Jasmine', 'Rose', 'Lily of Valley'],
      base: ['Sandalwood', 'Musk', 'Amber']
    },
    details: {
      concentration: 'Eau de Parfum',
      longevity: '8-12 hours',
      sillage: 'Moderate to Strong',
      season: 'All Seasons',
      occasion: 'Evening, Special Events',
      gender: 'Women',
      brand: 'Odora',
      country: 'France'
    }
  },
  {
    id: 2,
    name: "Diamond Orchid Luxury",
    subtitle: "Signature Series",
    price: 11025,
    originalPrice: 12600,
    rating: 4.8,
    reviews: 98,
    category: 'women',
    badge: 'Premium',
    isNew: true,
    image: "/images/miska-sage-GnF5Xpu-764-unsplash.jpg",
    description: "Exotic orchid with hints of vanilla and cedar",
    sizes: [
      { size: '30ml', price: 7425, originalPrice: 8550 },
      { size: '50ml', price: 11025, originalPrice: 12600 },
      { size: '100ml', price: 17325, originalPrice: 19800 }
    ],
    inStock: true,
    stockCount: 8,
    notes: {
      top: ['Lemon', 'Black Currant', 'Apple'],
      middle: ['Orchid', 'Freesia', 'Peony'],
      base: ['Vanilla', 'Cedar', 'Tonka Bean']
    }
  },
  {
    id: 3,
    name: "Golden Amber Elite",
    subtitle: "Heritage Collection",
    price: 8775,
    originalPrice: 10350,
    rating: 4.7,
    reviews: 203,
    category: 'unisex',
    badge: 'Popular',
    isNew: false,
    image: "/images/delfina-iacub-nrkgRRskOBo-unsplash.jpg",
    description: "Warm amber with spicy undertones",
    sizes: [
      { size: '30ml', price: 6075, originalPrice: 6975 },
      { size: '50ml', price: 8775, originalPrice: 10350 },
      { size: '100ml', price: 13275, originalPrice: 15300 }
    ],
    inStock: true,
    stockCount: 15,
    notes: {
      top: ['Cinnamon', 'Orange', 'Cardamom'],
      middle: ['Amber', 'Honey', 'Geranium'],
      base: ['Patchouli', 'Vetiver', 'Leather']
    }
  },
  {
    id: 4,
    name: "Midnight Noir Intense",
    subtitle: "Men's Collection",
    price: 10125,
    originalPrice: 11700,
    rating: 4.9,
    reviews: 134,
    category: 'men',
    badge: 'Exclusive',
    isNew: false,
    image: "/images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg",
    description: "Bold and masculine with woody base notes",
    sizes: [
      { size: '30ml', price: 6975, originalPrice: 8100 },
      { size: '50ml', price: 10125, originalPrice: 11700 },
      { size: '100ml', price: 15525, originalPrice: 17775 }
    ],
    inStock: true,
    stockCount: 6,
    notes: {
      top: ['Black Pepper', 'Grapefruit', 'Elemi'],
      middle: ['Lavender', 'Geranium', 'Coriander'],
      base: ['Vetiver', 'Patchouli', 'Amberwood']
    }
  },
  {
    id: 5,
    name: "Ocean Breeze Premium",
    subtitle: "Fresh Collection",
    price: 7425,
    originalPrice: 8775,
    rating: 4.6,
    reviews: 78,
    category: 'unisex',
    badge: 'Fresh',
    isNew: true,
    image: "/images/william-bout-TY4QMCrS6P4-unsplash.jpg",
    description: "Refreshing marine scent with citrus top notes",
    sizes: [
      { size: '30ml', price: 5175, originalPrice: 6075 },
      { size: '50ml', price: 7425, originalPrice: 8775 },
      { size: '100ml', price: 11025, originalPrice: 12825 }
    ],
    inStock: true,
    stockCount: 20,
    notes: {
      top: ['Sea Salt', 'Lemon', 'Mint'],
      middle: ['Marine Accord', 'Sage', 'Rosemary'],
      base: ['Driftwood', 'Ambergris', 'White Musk']
    }
  },
  {
    id: 6,
    name: "Rose Petal Paradise",
    subtitle: "Garden Collection",
    price: 6075,
    originalPrice: 7200,
    rating: 4.5,
    reviews: 67,
    category: 'women',
    badge: 'Natural',
    isNew: false,
    image: "/images/yixian-zhao-q7iZCOXGOWY-unsplash.jpg",
    description: "Pure rose essence with delicate floral harmony",
    sizes: [
      { size: '30ml', price: 4275, originalPrice: 5175 },
      { size: '50ml', price: 6075, originalPrice: 7200 },
      { size: '100ml', price: 9225, originalPrice: 10800 }
    ],
    inStock: false,
    stockCount: 0,
    notes: {
      top: ['Rose Petals', 'Peach', 'Bergamot'],
      middle: ['Damask Rose', 'Peony', 'Magnolia'],
      base: ['Sandalwood', 'White Musk', 'Soft Amber']
    }
  },
  {
    id: 7,
    name: "Velvet Oud Royale",
    subtitle: "Luxury Oud Collection",
    price: 17325,
    originalPrice: 20250,
    rating: 4.9,
    reviews: 89,
    category: 'unisex',
    badge: 'Limited Edition',
    isNew: true,
    image: "/images/jeroen-van-roij-sLQt9PjsCcs-unsplash.jpg",
    description: "Exquisite oud with royal saffron accents",
    sizes: [
      { size: '30ml', price: 12825, originalPrice: 14850 },
      { size: '50ml', price: 17325, originalPrice: 20250 }
    ],
    inStock: true,
    stockCount: 3,
    notes: {
      top: ['Saffron', 'Rose', 'Thyme'],
      middle: ['Agarwood', 'Jasmine', 'Iris'],
      base: ['Oud', 'Amber', 'Sandalwood']
    }
  },
  {
    id: 8,
    name: "Crystal Rain Fresh",
    subtitle: "Aqua Collection",
    price: 6525,
    originalPrice: 7650,
    rating: 4.4,
    reviews: 92,
    category: 'women',
    badge: 'Refreshing',
    isNew: false,
    image: "/images/kelvin-lutan-5f4yovjJw4c-unsplash.jpg",
    description: "Light and airy with aquatic florals",
    sizes: [
      { size: '30ml', price: 4725, originalPrice: 5625 },
      { size: '50ml', price: 6525, originalPrice: 7650 },
      { size: '100ml', price: 9675, originalPrice: 11250 }
    ],
    inStock: true,
    stockCount: 11,
    notes: {
      top: ['Water Lily', 'Cucumber', 'Green Leaves'],
      middle: ['Lotus', 'Cyclamen', 'Freesia'],
      base: ['Soft Musk', 'Blonde Woods', 'Sheer Amber']
    }
  }
];
